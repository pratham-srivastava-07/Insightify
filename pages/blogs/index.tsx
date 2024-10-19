import React from 'react'
import {  PlusIcon } from 'lucide-react'
import Link from "next/link"
import BlogsTable from '@/app/(blogs)/blog/components/BlogsTable'
import { Button } from '@/components/ui/button'

export default function Blogs() {
  return (
    <div className='space-y-5'>
      <div className='flex justify-between'>
       <h1 className='text-2xl font-bold'>Blogs</h1>
      <Link href='/blog/create'>
        <Button variant="outline" className='flex items-center gap-2'>
          Create <PlusIcon/>
        </Button>
      </Link>
      </div>
      <BlogsTable/>
    </div>
  )
}
