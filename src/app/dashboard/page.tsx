import { PrismaClient } from "@prisma/client";
import AddUser from "./addUser";
import AddToken from "./addToken";
import DeleteUser from "./deleteUser";
import UpdateUser from "./updateUser";
import ChangeToken from "./changeToken";
import { Toaster } from "sonner";
import Revalidate from "@/components/core/revalidate";
const prisma = new PrismaClient();

async function getData() {
  const users = await prisma?.user?.findMany({
    select: {
      id: true,
      username: true,
      status: true,
      role: true,
      created_at: true,
      expireDate: true,
      token: {
        select: {
          id: true,
          token: true,
        },
      },
    },
  });
  return users;
};

export default async function DashboardPage() {
 const users = await getData();
  return (
    <div>
      <Toaster position="top-center" richColors />
      <div className="flex flex-row gap-4 mb-4">
        <AddUser users={users} />
        <AddToken tokens={users} />
        <ChangeToken tokens={users} />
      </div>
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Username</th>
            <th>Status</th>
            <th>Role</th>
            <th>Token</th>
            <th>Created at</th>
            <th>Expire Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.sort((i, j) => i.id - j.id).map((user) => (
            <tr key={user.id} className="text-center">
              <th>{user.id}</th>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td className={user.status === "Aktif" ? "text-success" : "text-error"}>{user.status}</td>
              <td>{user?.token?.token || "No Token"}</td>
              <td>{new Date(user.created_at).toLocaleDateString('id-ID')}</td>
              <td>{new Date(user.expireDate).toLocaleDateString('id-ID')}</td>
              <td className="flex flex-row items-center justify-center ">
                <UpdateUser user={user} />
                <DeleteUser user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Revalidate/>
    </div>
  );
};