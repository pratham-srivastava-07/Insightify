"use client"

import React from 'react'
import Link from 'next/link'
// import LoginForm from './LoginForm';
import { useUser } from '@/lib/store/user';

import { useSession } from 'next-auth/react';

import LoginForm from '../auth/LoginForm';
import Menu from './Menu';
import GlassSheet from '../global/glass-sheet';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';
import Profile from '../auth/Profile';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const user = useUser((state)=> state.user)
  const {data: session} =  useSession()
  const pathName = usePathname()
  return (
    <nav className='flex items-center justify-between'>
        <div className="group">
            <Link href="/" className='text-2xl font-bold md:text-left sm:text-left'>Insightify</Link>
            <div className='h-1 w-0 group-hover:w-full transition-all bg-blue-500'></div>
        </div>
        <div className="menu">
            <Menu orientation='desktop' />
        </div>
        <div className="auth">
          {user?.id ? <Profile /> : <LoginForm />}
        </div>
        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
            <Button variant="ghost" className="hover:bg-transparent">
              <MenuIcon size={30} />
            </Button>
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      {/* {session?.user ? } */}
    </nav>
  )
}
