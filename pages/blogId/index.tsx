import axios from "axios"

async function getBlogDetails() {
    const response = await axios.get('http://localhost:3000/api/blog/:blogId')
    return response.data
}

export default async function BlogId() {
    const data = await getBlogDetails()
    if(!data) {
        return ""
    }
    return <div>
        {data?.title}
        {data?.imageUrl}
        Single Blog Page
    </div>
}