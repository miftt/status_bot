import { getServerSession } from "next-auth/next"; // Import useSession
import { authOptions } from "@/lib/authOptions/authOptions"

const getUser = async() => {
    const user = await getServerSession(authOptions).then((data) => data?.user);
    return user.username;
}

export async function metadata()  {
    const user = await getUser();
    return {
        title: `${user} Profile`,
    }
}

interface RootLayoutProps {
    children: React.ReactNode
}

const ProfileLayout: React.FC<RootLayoutProps> = ({
    children
}) => {
    return ( 
        <div className="py-10 px-10">
            {children}
        </div>
     );
}
 
export default ProfileLayout;