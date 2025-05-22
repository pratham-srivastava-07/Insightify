"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {links} from "@/constants/links"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/content/logo";
import { LogoIcon } from "@/components/content/logo-icon";
import { SidebarDemo } from "@/components/global/sidebar/SidebarDemo";

 export default function Dashboard() {
 
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[80vh]", // for your use case, use `h-screen` instead of `h-[60vh]`
        "w-full" 
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "User",
                href: "#",
                icon: (
                  <Image
                    src="/dashboard-snippet.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <SidebarDemo />
    </div>
  );
}
