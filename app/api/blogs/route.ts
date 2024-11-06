import { NextRequest, NextResponse } from "next/server";
import {prismaClient} from  "@/lib/db"
export async function GET(req: NextRequest) {
    // const body = req.json()
    try {
        const data = await prismaClient.blog.findMany({})
        return NextResponse.json({data: data}, {status: 200})
    } catch(e) {
        console.error(e)
    }
   return;
}