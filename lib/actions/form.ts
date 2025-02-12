"use server"

import { FormSchema } from "@/components/content/CreateBlog"
// import { FormSchema } from "@/components/CreateBlog"
import { createServerClient } from "@supabase/ssr"
import {cookies} from 'next/headers'
import { prismaClient } from "../db"

// const cookieStore = cookies()

// const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, 
//     {
//         cookies: {
//             get(name: string) {
//                 return cookieStore.get(name)?.value;
//             }
//         }
//     }
// )


export async function FormBlog(data: FormSchema) {
    // To be continued
    const {["content"]:excludedKey, ...blog} =  data

    try {
        const response = await prismaClient.blog.create({
            data: {
                title: blog.title,
                created_at: new Date(),
                image_url: blog.image_url,
                is_premium: blog.is_premium,
                is_published: blog.is_published
            },
            select: {
                id: true
            }
        })
        const result = await prismaClient.blogContent.create({
            data: {
                blogId: response.id,
                content: data.content
            }
        })
        return JSON.stringify({result})
    } catch(e) {
        console.log(JSON.stringify({error: e}))
    }
}

export async function readBlogs() {
    try{ 
        const blogs = await prismaClient.blog.findMany({})
        return blogs;
    } catch(e) {
        console.error(e)
    }
    return;
}

export async function deleteBlog(id: string) {
    try {
        await prismaClient.blogContent.deleteMany({
            where: {
                blogId: id
            }
        })

        const blogDeletion = await prismaClient.blog.delete({
            where: {
                id: id
            }
        })

        return blogDeletion;
    } catch(e) {
        console.log(e)
    }
}

