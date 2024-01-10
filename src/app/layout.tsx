'use client'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

import Sidebar from './sidebar'
import Footer from './footer'
import { usePathname } from 'next/navigation'

// export const metadata: Metadata = {
//   title: 'Table Bot Mifuzi',
//   description: 'Generated by create next app',
// }

const disableNavbar = ['/login', '/register', '/dashboard']

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
          {!disableNavbar.includes(pathname) && <Sidebar/>}
            {children}
          {/* <Footer/> */}
        </body>
      </SessionProvider>
    </html>
  )
}
