"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import UserAuth from './UserAuth'
import  Link  from 'next/link'


export default function() {

  const {data: session} = useSession()

  const pathName = usePathname()


  return (
   <>
       {!session ? <div className='flex items-cemter space-x-4'>

        <Link href='/api/auth/signin'>
              <Button variant={"outline"}
                className='flex items-center gap-2'
                >
                Sign In
              </Button>
            </Link>
    </div>: <UserAuth />}
   </>
  )
}
