import type { Metadata } from 'next'
import { Poppins } from 'next/font/google' 
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Container from '@/components/global/Container'
import Providers from './providers'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Vita',
  description: 'Using React, TypeScript, Tailwind, Shadcn, Supabase, Clerk and Stripe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          <Container className='py-20'>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
