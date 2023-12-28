import { PrismaClient } from "@prisma/client";
import AddUser from "./addUser";
import AddToken from "./addToken";
import DeleteUser from "./deleteUser";
import UpdateUser from "./updateUser";
const prisma = new PrismaClient()

const getData = async () => {
    const res = await prisma.users.findMany({
        select:{
            id: true,
            username: true,
            status: true,
            role: true,
        }
    })
    return res;
}

const getToken = async () => {
    const res = await prisma.tokens.findMany()
    return res;
}

const DashboardPage = async () => {
    const [users, tokens] = await Promise.all([
        getData(),
        getToken(),
    ])
    return (  
        <div>
            <div className="flex flex-row gap-4 mb-4">
                <AddUser tokens={tokens}/>
                <AddToken tokens={tokens}/>

            </div>
            <table className="table w-full"> 
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Token</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="text-center">
                            <th>{index + 1}</th>
                            <td>{user.username}</td>
                            <td>{user.status}</td>
                            <td>{user.role}</td>
                            <td>SOON</td>
                            <td><UpdateUser user={user} tokens={tokens} /> <DeleteUser user={user} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default DashboardPage;