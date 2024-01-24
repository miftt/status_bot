'use client'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

import Sidebar from './sidebar'
import { usePathname } from 'next/navigation'
import { Toaster } from 'sonner'

// export const metadata: Metadata = {
//   title: 'Table Bot Mifuzi',
//   description: 'Generated by create next app',
// }

// function shouldDisableNavbar(pathname: string) {
//   // Daftar rute yang harus menonaktifkan navbar
//   const disableNavbarRoutes = ['/login', '/register'];

//   // Cek apakah pathname adalah salah satu dari disableNavbarRoutes
//   if (disableNavbarRoutes.includes(pathname)) {
//     return true;
//   }

//   // Cek apakah pathname di bawah /api
//   if (pathname.startsWith('/api')) {
//     return true;
//   }

//   // Jika tidak ada yang cocok, jangan nonaktifkan navbar
//   return false;
// }
const disableNavbarRoutes = ['/login', '/register'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <div className='flex h-screen flex-row justify-start'>
            {!disableNavbarRoutes.includes(pathname) && (
              <div className='w-[15%] m-6'>
                <Sidebar/>
              </div>
            )}
            <div className='flex-1 p-4'>
              <Toaster position="top-center" richColors />
              {children}
            </div>
          </div>
        </body>
      </SessionProvider>
    </html>
  )
}
