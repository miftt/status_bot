import { PrismaClient } from "@prisma/client";
import AddUser from "./addUser";
import AddToken from "./addToken";
import DeleteUser from "./deleteUser";
import UpdateUser from "./updateUser";
import ChangeToken from "./changeToken";
import { Toaster } from "sonner";
const prisma = new PrismaClient();

const getData = async () => {
  const res = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      status: true,
      role: true,
      token: {
        select: {
          id: true,
          token: true,
        },
      },
    },
  });
  return res;
};

// Contoh perubahan di fungsi getToken
const allusers = async () => {
  const allUsers = await prisma.user.findMany();
  // console.log(allUsers);
  return allUsers;
};
const getToken = async () => {
  const res = await prisma.token.findMany({
    select: {
      id: true,
      token: true,
    },
  });
  return res;
};

const DashboardPage = async () => {
  const [users, tokens, all] = await Promise.all([
    getData(),
    getToken(),
    allusers(),
  ]);
  return (
    <div>
      <Toaster position="top-center" richColors />
      <div className="flex flex-row gap-4 mb-4">
        <AddUser tokens={tokens} />
        <AddToken tokens={all} />
        <ChangeToken tokens={all} />
      </div>
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Username</th>
            <th>Status</th>
            <th>Role</th>
            <th>Token</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="text-center">
              <th>{index + 1}</th>
              <td>{user.username}</td>
              <td>{user.status}</td>
              <td>{user.role}</td>
              <td>{user.token[0]?.token || "No Token"}</td>
              <td className="flex flex-row items-center justify-center ">
                <UpdateUser user={user} tokens={tokens} />{" "}
                <DeleteUser user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
