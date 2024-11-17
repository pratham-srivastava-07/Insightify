import EditBlog from "@/pages/editBlog";
import axios from "axios";

async function getBlog(blogId: string) {
    const response = await axios.get(`http://localhost:3000/api/blogs/${blogId}`)
    return response.data;
}

export default async function EditBlogPage({ params }: { params: { blogId: string } }) {
    const {blogId} = params
    try{
        const initData = await getBlog(blogId);
        return <div>
            <EditBlog initialData={initData} />
        </div>
    } catch(e) {
        return <div>
            Error: {`${e}`}
        </div>
    }
}