"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {BsSave} from "react-icons/bs"

import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons"
import { Switch } from "@/components/ui/switch"
import { RocketIcon, StarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
// import { Textarea } from "./ui/textarea"
// import MarkDown from "./MarkDown"
// import MarkDownPreview from "./MarkDown"
import { FormSchema } from "@/app/(blogs)/blog/schema"
import MarkDownPreview from "./MarkDown"
import { Textarea } from "../ui/textarea"


export default function CreateBlog(
  {onHandleSubmit}: 
  {onHandleSubmit: (data: FormSchema)=> void}) {

  const [ isPreview, setPreview] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "all", // for validation of fields whether valid or invalid
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      image_url: "",
      content: "",
      is_published: true,
      is_premium: false,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    onHandleSubmit(data)
    // console.log(form.formState.isValid);
    
  }

  return (
    <Form {...form}>
      <form 
      onSubmit={form.handleSubmit(onSubmit)} 
      className="w-full rounded-md space-y-6">
        <div className="px-5 flex gap-5 items-center flex-wrap justify-between">
          <div className="flex items-center gap-7">
           <span 
           role="button" 
           tabIndex={0} 
           onClick={()=>setPreview(!isPreview && !form.getFieldState("image_url").invalid)}
           className="flex items-center gap-1 bg-zinc-600 p-2 rounded-md hover:ring-2 hover:ring-zinc-400 transition-all">
           {isPreview ? 
            (<>
            <Pencil1Icon/>
            Edit
           </>
          ) : (
             <>
          <EyeOpenIcon/>
            Preview
           </>
          )}   
            </span>
            <FormField
          control={form.control}
          name="is_premium"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
              <div className="flex items-center gap-2 border bg-zinc-700 p-2 rounded-md">
                <StarIcon/>
                <span>Premium</span>
              <Switch checked={field.value} onCheckedChange={field.onChange}/>
              </div>
              </FormControl>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="is_published"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <div className="flex items-center gap-2 border bg-zinc-700 p-2 rounded-md">
                <RocketIcon/>
                <span>Publish</span>
              <Switch checked={field.value} onCheckedChange={field.onChange}/>
              </div>
              </FormControl>
              
            </FormItem>
          )}
        />
        </div>
        <Button className="flex items-cennter gap-2"
        disabled={!form.formState.isValid}
        >
          <BsSave/>
          Save
          </Button>
        {/* {console.log(form.formState.isValid)} */}
        </div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className={cn("p-2 w-full flex break-words gap-2", isPreview ? "divide-x-0": "divide-x")}>
                <Input placeholder="title" className={cn("border-none text-lg font-medium leading relaxed", isPreview ? "w-0 p-0": "w-full lg-1/2")} {...field} />
                <div className={cn("lg:px-10", isPreview? "w-full mx-auto lg:w-4/5": "w-1/2 lg:block hidden")}>
                  <h1 className="text-3xl font-medium">
                    {form.getValues().title}
                  </h1>
                </div>
                </div>
              </FormControl>
              {form.getFieldState("title").invalid && form.getValues().title && <FormMessage/>}
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className={cn("p-2 w-full flex break-words gap-2", isPreview ? "divide-x-0": "divide-x")}>
                <Input placeholder="image url" className={cn("border-none text-lg font-medium leading relaxed", isPreview ? "w-0 p-0": "w-full lg-1/2")} {...field} />
                <div className={cn("lg:px-10", isPreview? "w-full mx-auto lg:w-4/5": "w-1/2 lg:block hidden")}>
                {
                  !isPreview ? (
                    <>
                    Click Preview to view image
                    </>
                  ) : (
                   <div className="relative h-80 mt-5 border rounded-md">
                   <Image src={form.getValues().image_url} alt=""
                   fill 
                   className="object-cover object-center rounded-md" 
                   />
                   </div>
                  )
                }
                </div>
                </div>
              </FormControl>
              {form.getFieldState("image_url").invalid && form.getValues().image_url && <div>
                <FormMessage/>
                </div>}
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className={cn("p-2 w-full flex break-words gap-2", isPreview ? "divide-x-0": "divide-x h-70vh")}>
                <Textarea placeholder="content" className={cn("border-none text-lg font-medium leading relaxed resize-none h-full", isPreview ? "w-0 p-0": "w-full lg-1/2")} {...field} />
                <div className={cn("overflow-y-auto", isPreview? "w-full mx-auto lg:w-4/5": "w-1/2 lg:block hidden")}>
                 <MarkDownPreview content = {form.getValues().content} />
                </div>
                </div>
              </FormControl>
              {form.getFieldState("content").invalid && form.getValues().title && <FormMessage/>}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export type FormSchema = z.infer<typeof FormSchema>
