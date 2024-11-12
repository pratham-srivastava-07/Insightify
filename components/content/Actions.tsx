"use client"
import { deleteBlog } from "@/lib/actions/form";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

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
             <Button className="flex items-center gap-2" variant="outline" onClick={handleDeletion}>
                 <Trash />
                 Delete
             </Button>
            <Link href={'/blog/create'}>
                <Button className="flex items-center gap-2" variant="outline">
                    <Pencil />
                    Edit
                </Button>
             </Link>
         </div>
     );
 };