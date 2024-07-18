'use client'

import Image from "next/image";
import { FiClipboard } from "react-icons/fi";
import { useSession } from "next-auth/react";
import ChangePassword from "./changePassword";
import swr from "swr";
import { toast } from "sonner";

const fetcher  = (url: string) => fetch(url).then((res) => res.json());

const ProfilePage = () => {
    const { data: session } = useSession();
    console.log(session)
    const { data } = swr(`${process.env.NEXT_PUBLIC_API_URL}/api/tokens/${session?.user?.id}`, fetcher);
    const copyToClipboard = async (token: string) => {
        try {
          await navigator.clipboard.writeText(token);
          toast.success('Token copied to clipboard');
        } catch (err) {
          toast.error('Failed to copy token');
        }
      }
    return ( 
        <main className="w-full flex justify-center items-center md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="text-2xl text-center  font-bold sm:text-xl">{session?.user?.username} Profile</h2>
                <div className="grid max-w-2xl mx-auto mt-8">
                    <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0">
                        <Image 
                            className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                            src="/imageuser.webp" 
                            alt="profile" 
                            width={200} 
                            height={200}
                        />
                    </div>
                        <div className="items-center mt-8 sm:mt-14 text-[#202142] w-96">
                            <div
                                className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-indigo-900 ">Your
                                        username</label>
                                    <input type="text"
                                        className="cursor-not-allowed bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Your username" 
                                        value={session?.user?.username}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div
                                className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-indigo-900 ">Your
                                        Password</label>
                                    <input type="password"
                                        className="cursor-not-allowed bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                        placeholder="*****" disabled/>
                                </div>
                            </div>
                            <div
                                className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        className="block mb-2 text-sm font-medium text-indigo-900 ">Your
                                        Secret Token</label>
                                    <input type={!data?.data?.token ? "text" : "password"}
                                        className="cursor-not-allowed  bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                        placeholder={data?.data?.token|| 'Not set by admin | contact admin'} value={data?.data?.token || ''} disabled/>
                                </div>
                                        <button onClick={() => copyToClipboard(data?.data?.token)} className="flex justify-between items-center pt-7 text-indigo-500 hover:text-indigo-800">
                                            <FiClipboard size={22}/>
                                        </button>
                            </div>
                            <div className="mb-2 sm:mb-6">
                                <label
                                    className="block mb-2 text-sm font-medium text-indigo-900 ">Your
                                    email</label>
                                <input type="text"
                                    className="cursor-not-allowed bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="your.email@mail.com" disabled/>
                            </div>
                            <div className="mb-2 sm:mb-6">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 ">Your role</label>
                                <input type="text"
                                    className="cursor-not-allowed bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Role" value={session?.user.role} disabled />
                            </div>
                            <div className="flex justify-end">
                                <ChangePassword userId={session?.user?.id}/>
                                <button type="submit"
                                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </main>
     );
}
 
export default ProfilePage;