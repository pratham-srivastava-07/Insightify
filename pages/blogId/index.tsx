"use client";

import axios from "axios";
import { useEffect, useState } from "react";

async function getBlogDetails(blogId: string) {
  try {
    const response = await axios.get(`http://localhost:3000/api/blogs/${blogId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog details:", error);
    throw error;
  }
}

export default function BlogId({ blogId }: { blogId: string }) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function getData() {
    try {
      const res = await getBlogDetails(blogId);
      setData(res);
    } catch (err) {
      setError("Failed to load blog data.");
    }
  }

  useEffect(() => {
    if (blogId) getData();
  }, [blogId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
      {/* <p>{data.content}</p> */}
      <div>Single Blog Page</div>
    </div>
  );
}
