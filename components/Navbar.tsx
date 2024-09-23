"use client"

import React from 'react'
import Link from 'next/link'
import LoginForm from './LoginForm';
import { useUser } from '@/lib/store/user';
import Profile from './Profile';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const user = useUser((state)=> state.user)
  const {data: session} =  useSession()
  return (
    <nav className='flex items-center justify-between'>
        <div className="group">
            <Link href="/" className='text-2xl font-bold'>Insightify</Link>
            <div className='h-1 w-0 group-hover:w-full transition-all bg-blue-500'></div>
        </div>
      {user?.id ? <Profile/> : <LoginForm/>}
      {/* {session?.user ? } */}
    </nav>
  )
}
