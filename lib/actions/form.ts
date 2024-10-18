"use server"

import { FormSchema } from "@/components/content/CreateBlog"
// import { FormSchema } from "@/components/CreateBlog"
import { createServerClient } from "@supabase/ssr"
import {cookies} from 'next/headers'

const cookieStore = cookies()

const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, 
    {
        cookies: {
            get(name: string) {
                return cookieStore.get(name)?.value;
            }
        }
    }
)


export async function FormBlog(data: FormSchema) {
    // To be continued
    const {["content"]:excludedKey, ...blog} =  data

   const response = await supabase.from("blog").insert(blog).select("id").single()

    if(response.error) {
        return JSON.stringify(response)
    }
    else {
        const result = await supabase.from("blog").insert({
            blog_id: response.data.id!,
            content: data.content!
        })
        return JSON.stringify(result)
    }
}

export async function readBlogs() {
    return supabase.from("blog").select("*").order("created_at", {ascending: true})
}