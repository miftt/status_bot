
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
// import { FiPo } from "react-icons/fi";


const NavbarPage = () => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const {data:session, status}: {data: any, status:string;} = useSession();
    const handleLogout = async () => {
        setIsLoading(true);
        toast.success("Log out Success");
        await new Promise((r) => setTimeout(r, 1000));
        signOut();
    }
    
    return ( 
        <>
            <div className="flex flex-col justify-between bg-clip-border rounded-xl bg-white text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div>
                    <div className="mb-2 p-4">
                        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
                            {session?.user?.username} Dashboard
                        </h5>
                    </div>
                    <nav className="flex flex-col gap-1 min-w-[240px] p-2  font-sans text-base font-normal text-gray-700">
                        {session?.user?.role === "Admin" && (   
                        <Link
                            href="/dashboard"
                            className={`flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 ${pathname === "/dashboard" ? "bg-blue-50 bg-opacity-80 text-blue-900" : ""} hover:text-blue-900 focus:text-blue-900 outline-none` }
                        >
                            <div className="grid place-items-center mr-4">
                                <FiBox/>
                            </div>
                            Admin Dashboard
                        </Link>
                        )}
                        <Link
                            href="/"
                            className={`flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 ${pathname === "/" ? "bg-blue-50 bg-opacity-80 text-blue-900" : ""} hover:text-blue-900 focus:text-blue-900 outline-none` }
                        >
                            <div className="grid place-items-center mr-4">
                                <FiHome/>
                            </div>
                            Home
                        </Link>
                        <Link
                            href="/itemlist"
                            className={`flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 ${pathname === "/itemlist" ? "bg-blue-50 bg-opacity-80 text-blue-900" : ""} hover:text-blue-900 focus:text-blue-900 outline-none` }
                        >
                            <div className="grid place-items-center mr-4">
                                <FiBox/>
                            </div>
                            Item List
                        </Link>
                    </nav>
                </div>
                <button
                    onClick={() => handleLogout()}
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none "
                >
                    <div className="grid place-items-center mr-4">
                        <FiLogOut/>
                    </div>
                    {isLoading ? "Logging Out..." : "Log out"}
                </button>
            </div>
        </>
    );
}
 
export default NavbarPage;
