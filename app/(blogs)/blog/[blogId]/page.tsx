import BlogId from "@/pages-render/blogId";

export default async function BlogIdPage({ params }: { params: Promise<{ blogId: string }> }) {
    const {blogId} = await params;
    return <div>
        <BlogId blogId={blogId} />
    </div>
}