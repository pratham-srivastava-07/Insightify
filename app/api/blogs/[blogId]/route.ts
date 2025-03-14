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
      include: {
        BlogContent: true
      }
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


export async function PUT(req: NextRequest) {
    const body = await req.json()
    const id = req.nextUrl.pathname.split("/").pop()

    if(!id) return NextResponse.json({message: "Not found"}, {status: 404})

    try {
      const res = await prismaClient.blog.update({
        where: {
          id: id as string
        },
        data: {
          title: body.title,
          image_url: body.image_url,
          is_premium: body.is_premium,
          is_published: body.is_published,
          BlogContent: {
            update: {
              where: {
                blogId: id
              },
              data: {
                content: body.content
              }
            }
          }
        }
      })
      return NextResponse.json({message: "Updated blog", result: res}, {status: 200})
    } catch(err) {
      console.error(err)
    }
}