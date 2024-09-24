"use client"

import React from 'react'
import { Button } from './ui/button'
import { SiGithub } from 'react-icons/si'
import { createBrowserClient } from '@supabase/ssr'
import { usePathname } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import AuthenticProfile from './AuthenticProfile'

export default function() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const {data: session} = useSession()

  const pathName = usePathname()

  const handleAuth = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: localStorage.origin + "auth/callback?next=" + pathName
      }
    })
  }

  return (
   <>
       {!session ? <div className='flex items-cemter space-x-4'>
      <Button variant="outline"
       className='flex items-center gap-2'
       onClick={handleAuth}
      >
        <SiGithub/>
        Login
        
        </Button>

        <Button variant={"outline"}
        className='flex items-center gap-2'
        onClick={() => signIn()}
        >
        Sign up with other  options
        </Button>
    </div>: <AuthenticProfile />}
   </>
  )
}
