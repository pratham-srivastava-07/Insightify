"use client"
import axios from "axios"
import { useEffect, useState } from "react"

async function getBlogDetails(blogId: string) {
    const response = await axios.get(`http://localhost:3000/api/blogs/${blogId}`)
    return response.data
}

export default function BlogId({blogId}: {blogId: string}) {
    const [data, setData] = useState<any>(null)

    async function getData() {
        const res = await getBlogDetails(blogId)
        setData(res)
    }

    useEffect(() => {
        getData()
    }, [])
   
    return <div>
      {data}
        Single Blog Page
    </div>
}