import { prismaClient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop(); 

  if (!id) {
    return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
  }

  try {
    const singleBlog = await prismaClient.blog.findUnique({
      where: {
        id: id as string,
      },
    });

    if (!singleBlog) {
      return NextResponse.json({ message: "No blog found with this ID" }, { status: 404 });
    }

    return NextResponse.json(singleBlog, { status: 200 });
  } catch (e) {
    console.error("Error fetching blog:", e);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
