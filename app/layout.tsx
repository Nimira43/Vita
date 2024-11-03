import Navbar from '@/components/navbar/Navbar'
import Container from '@/components/global/Container'
import { Poppins } from 'next/font/google' 
import type { Metadata } from "next"
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Vita",
  description: "Using React, TypeScript, Tailwind, Shadcn, Supabase, Clerk and Stripe",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Container className='py-20'>{children}</Container>
      </body>
    </html>
  )
}
