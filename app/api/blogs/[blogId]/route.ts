import { prismaClient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id')

    if (!id) {
        return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }
    
    try {
        const singleBlog = await prismaClient.blog.findFirst({
            where: {
                id: id as string
            }
        })

        if(!singleBlog) {
            return NextResponse.json({message: 'no single blog'}, {status: 404})
        }

        return NextResponse.json({blog: singleBlog}, {status: 200});
        
    } catch(e) {
        console.log(e)
    }
}