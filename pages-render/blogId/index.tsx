"use client"
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

async function getBlogDetails(blogId: string) {
  try {
    const response = await axios.get(`http://localhost:3000/api/blogs/${blogId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog details:", error);
    throw error;
  }
}

interface BlogData {
  id: string;
  created_at: string;
  title: string;
  image_url: string;
  BlogContent: Array<{
    id: number;
    content: string;
  }>;
}

export default function BlogId({ blogId }: { blogId: string }) {
  const [data, setData] = useState<BlogData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getData = useCallback(async () => {
    try {
      const res = await getBlogDetails(blogId);
      setData(res);
    } catch (err) {
      setError(`Failed to load blog data ${err}`);
    }
  }, [blogId]);

  useEffect(() => {
    if (blogId) getData();
  }, [blogId, getData]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(data.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const readingTime = Math.ceil(
    data.BlogContent.reduce((acc, content) => acc + content.content.split(' ').length, 0) / 200
  );

  return (
    <article className="min-h-screen bg-background">
      <div className="container max-w-3xl py-10">
        {/* Hero Image */}
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <Image
            fill
            src={data.image_url}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 pt-8">
          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {data.title}
          </h1>

          {/* Author and Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">Author Name</p>
                <p className="text-sm text-muted-foreground">Technical Writer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{formattedDate}</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Content */}
          <div className="prose prose-gray max-w-none space-y-6">
            {data.BlogContent.map((content) => (
              <p key={content.id} className="leading-7 text-foreground">
                {content.content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}