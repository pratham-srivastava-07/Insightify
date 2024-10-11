'use client'
import CreateBlog, { FormSchema } from "@/components/content/CreateBlog";
// import CreateBlog, { FormSchema } from "@/components/CreateBlog";
import { toast } from "@/components/ui/use-toast";
import { BlogForm } from "@/lib/actions/blog";

export default function page() {
  const handleChange = async (data: FormSchema) => {
    const result= await BlogForm(data);
    const {error} = JSON.parse(result)

    if(error?.message) {
      toast({
        title: "Failed to create blog",
        description: (
          <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(error.message)}</code>
          </pre>
        ),
      })
    } else {
      toast({
        title: "Successfully submitted" + data.title
      })
    }
   
  }
    return (
        <div className="mt-4">
          <CreateBlog onHandleSubmit={handleChange}/>
        </div>
    )
}