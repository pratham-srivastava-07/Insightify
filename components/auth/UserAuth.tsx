"use client"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image"
import Link from "next/link";
import { Button } from "../ui/button";
import { DashboardIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import { signOut, useSession } from "next-auth/react";
export default function UserAuth() {
   const {data: session} =  useSession()
    return <div>
        <Popover>
            <PopoverTrigger>
                <Image 
                src = {session?.user?.image || '/user.png'}
                alt = {session?.user?.name || 'john-doe'}
                height={50}
                width={50}
                className="rounded-full ring-2 ring-blue-500" />
            </PopoverTrigger>
            <PopoverContent className="p-2 space-y-3 divide-y">
                <div className="text-sm px-4">
                    <p>{session?.user?.name}</p>
                    <p className="text-gray-400">{session?.user?.email}</p>
                </div>
                <Link href={"/dashboard"}>
                    <Button variant={"ghost"} className="w-full flex items-center justify-between">
                        DashBoard 
                        <DashboardIcon />
                    </Button>
                </Link>
                <Link href={"/api/auth/signout"}>
                    <Button variant={"ghost"} onClick={()=> signOut({callbackUrl: "/"})} className="w-full flex items-center justify-between">
                        Logout
                        <LockOpen1Icon />
                    </Button>
                </Link>
            </PopoverContent>
        </Popover>
    </div>
}