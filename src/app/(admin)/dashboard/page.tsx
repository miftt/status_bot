import AddUser from "./addUser";
import AddToken from "./addToken";
import DeleteUser from "./deleteUser";
import UpdateUser from "./updateUser";
import ChangeToken from "./changeToken";
import Revalidate from "@/components/core/revalidate";
import DeleteToken from "./deleteToken";
import CopyToken from "./copyToken";
import { getAllUsers } from "@/lib/prisma/service";

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
 const users = await getAllUsers();
 console.log(users)
  return (
    <div>
      <div className="flex flex-row gap-4 mb-4">
        <AddUser users={users} />
        <AddToken tokens={users} />
        <ChangeToken tokens={users} />
      </div>
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Username</th>
            <th>Role</th>
            <th>Status</th>
            <th>Token</th>
            <th>Created at</th>
            <th>Expire Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.sort((i: any, j: any) => i.id - j.id).map((user: any) => (
            <tr key={user.id} className="text-center">
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td className={user.status === "Aktif" ? "text-success" : "text-error"}>{user.status}</td>
              <td className="flex text-center justify-center items-center ">
              {user?.token?.token || "No Token"}
              {user?.token?.token && (
                <>
                  <CopyToken 
                    token={user.token.token}
                  />
                  <DeleteToken 
                    id={user.token.id} 
                    userId={user.token.userId} 
                    username={user.username}
                  />
                </>
              )}
              </td>
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