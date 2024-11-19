import { Switch } from "@/components/ui/switch";
import {  readBlogs } from "@/lib/actions/form";
import Link from "next/link";
import { Actions } from "@/components/content/Actions";
import BlogSwitch from "./switch";

export default async function BlogsTable() {
   const blogs = await readBlogs();

    return (
        <div className="overflow-x-auto">
            <div className="border bg-graident-dark rounded-md w-[900px] md:w-full">
                <div className="grid grid-cols-4 p-5 text-gray-400">
                    <h1 className="col-span-2">Title</h1>
                    <h1 className="text-center">Premium</h1>
                    <h1 className="text-center">Publish</h1>
                </div>
                {blogs?.map((blog, ind) => {
                    return (
                        <div key={ind} className="bg-graident-dark grid grid-cols-4 p-5 items-center">
                            <Link href={`/blog/${blog.id}`} className="col-span-2">
                                <h1>{blog.title}</h1>
                            </Link>
                            <div className="flex justify-center">
                                <Switch checked={blog.is_premium}  />
                            </div>
                            {/* <BlogSwitch checked={blog.is_premium} onClick={() => !blog.is_premium} /> */}
                            <div className="flex justify-center">
                                <Switch checked={blog.is_published} />
                            </div>
                             {/* <BlogSwitch checked={blog.is_published} onClick={() => !blog.is_published} /> */}
                            <div className="col-span-4 flex justify-center gap-4 mt-2">
                                <Actions blogId={blog.id}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


