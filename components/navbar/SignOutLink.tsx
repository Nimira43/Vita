'use client'

import { useToast } from '@/hooks/use-toast'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

function SignOutLink() {
  const { toast } = useToast()
  const handleLogout = () => {
    toast({
      description: 'Logout successful.'
    })
  }

  return (
    <SignOutButton>
      <Link 
        className='uppercase'
        href='/'
      >
        Logout
      </Link>
    </SignOutButton>
  )
}

export default SignOutLink
