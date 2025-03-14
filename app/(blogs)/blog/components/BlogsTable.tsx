import { readBlogs } from "@/lib/actions/form";
import Link from "next/link";
import { Actions } from "@/components/content/Actions";

export default async function BlogsTable() {
   const blogs = await readBlogs();

    return (
        <div className="overflow-x-auto">
            <div className="border bg-graident-dark rounded-md w-[900px] md:w-full">
                <div className="grid grid-cols-2 p-5 text-gray-400">
                    <h1 className="col-span-2">Title</h1>
                </div>
                {blogs?.map((blog, ind) => {
                    return (
                        <div key={ind} className="bg-graident-dark grid grid-cols-2 p-5 items-center">
                            {/* Title */}
                            <div className="flex items-center justify-between gap-4">
                                <Link href={`/blog/${blog.id}`}>
                                    <h1>{blog.title}</h1>
                                </Link>
                                {/* Actions beside title */}
                                <Actions blogId={blog.id} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
