import BlogId from "@/pages/blogId";

export default function BlogIdPage({ params }: { params: { blogId: string } }) {
    return <div>
        <BlogId blogId={params.blogId} />
    </div>
}