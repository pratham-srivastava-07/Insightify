import { Button } from "@/components/ui/button"
import { EyeOpenIcon } from "@radix-ui/react-icons"
import { Switch } from "@/components/ui/switch"
import { Pencil, PencilIcon, Trash} from "lucide-react"
import { readBlogs } from "@/lib/actions/blog"

export default async function BlogTable() {
   const {data: blogs} =  await readBlogs()

    return(
        <div className="overflow-x-auto">
        <div className="border bg-graident-dark rounded-md w-[900px] md:w-full">
            <div className="grid grid-cols-5 p-5 text-gray-400">
                <h1 className="col-span-2">Title</h1>
                <h1>Premium</h1>
                <h1>Publish</h1>
            </div>
            {blogs?.map((blog, ind)=> {
                return (<div key={ind} className="bg-graident-dark grid grid-cols-5 p-5">
                <h1 className="col-span-2">{blog.title}</h1>
                <Switch checked={blog.is_premium}/>
                <Switch checked = {blog.is_published}/>
                <Actions/>
            </div>)
            })}
          
        </div>
        </div>
    )
}

const Actions = () => {
    return (
        <div className="flex justify-center gap-2 flex-wrap">
        <Button className="flex items-center gap-2"
        variant="outline">
            <EyeOpenIcon/>
            View
        </Button>
        <Button className="flex items-center gap-2"
        variant="outline">
            <Trash/>
            Delete
        </Button>
        <Button className="flex items-center gap-2"
        variant="outline">
            <Pencil/>
            Edit
        </Button>
       </div>
    )
}