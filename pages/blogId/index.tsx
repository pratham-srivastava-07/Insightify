import axios from "axios"

async function getBlogDetails() {
    const response = await axios.get('http://localhost:3000/api/blogs/:blogId')
    return response.data
}

export default async function BlogId() {
    const data = await getBlogDetails()
    return <div>
        {data?.title}
        {data?.imageUrl}
        Single Blog Page
    </div>
}