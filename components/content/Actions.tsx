"use client"
import { deleteBlog } from "@/lib/actions/form";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Eye, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { prismaClient } from "@/lib/db";
import axios from "axios";

export const Actions = ({blogId}: {blogId: string}) => {
    async function handleDeletion() {
         const res = await deleteBlog(blogId)
         toast({
             title: "Delete",
             description: "Blog deleted.",
           });
     }
     return (
        
         <div className="flex justify-center gap-2">
            <Link href={`/blog/${blogId}`}>
            <Button className="flex items-center gap-2" variant="outline">
                 <Eye />
                 View
             </Button>
             </Link>
             <Button className="flex items-center gap-2" variant="outline" onClick={handleDeletion}>
                 <Trash />
                 Delete
             </Button>
            <Link href={`/blog/edit/${blogId}`}>
                <Button className="flex items-center gap-2" variant="outline" >
                    <Pencil />
                    Edit
                </Button>
             </Link>
         </div>
     );
 };