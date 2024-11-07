import { prismaClient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id')

    try {
        const singleBlog = await prismaClient.blog.findFirst({
            where: {
                id: id as string
            }
        })
        return NextResponse.json({blog: singleBlog}, {status: 200});
    } catch(e) {
        console.log(e)
    }
    return;
}