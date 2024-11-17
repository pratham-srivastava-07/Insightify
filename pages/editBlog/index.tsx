"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BsSave } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";

import { EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { RocketIcon, StarIcon } from "lucide-react";
import MarkDownPreview from "@/components/content/MarkDown";
import axios from "axios";

// Zod validation schema for the form
const EditBlogSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  image_url: z.string().url("Invalid image URL"),
  content: z.string().min(1, "Content is required"),
  is_published: z.boolean(),
  is_premium: z.boolean(),
});

type EditBlogSchemaType = z.infer<typeof EditBlogSchema>;

export default function EditBlog({ initialData }: { initialData: EditBlogSchemaType }) {
  const [isPreview, setPreview] = useState(false);

  const form = useForm<EditBlogSchemaType>({
    resolver: zodResolver(EditBlogSchema),
    defaultValues: initialData, // Directly using initial data
  });

  async function onSubmit(data: EditBlogSchemaType) {
    try {
      await axios.put(`http://localhost:3000/api/blogs/${data.id}`, data); // Assuming 'id' is part of initialData
      toast({ title: "Blog updated successfully!", description: "The blog has been updated." });
    } catch (error) {
      console.error("Error updating blog:", error);
      toast({ title: "Error", description: "Failed to update the blog.", variant: "destructive" });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full rounded-md space-y-6">
        <div className="px-5 flex gap-5 items-center flex-wrap justify-between">
          <div className="flex items-center gap-7">
            <span
              role="button"
              tabIndex={0}
              onClick={() => setPreview(!isPreview && !form.getFieldState("image_url").invalid)}
              className="flex items-center gap-1 bg-zinc-600 p-2 rounded-md hover:ring-2 hover:ring-zinc-400 transition-all"
            >
              {isPreview ? (
                <>
                  <Pencil1Icon />
                  Edit
                </>
              ) : (
                <>
                  <EyeOpenIcon />
                  Preview
                </>
              )}
            </span>

            {/* Premium Switch */}
            <FormField
              control={form.control}
              name="is_premium"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2 border bg-zinc-700 p-2 rounded-md">
                      <StarIcon />
                      <span>Premium</span>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Publish Switch */}
            <FormField
              control={form.control}
              name="is_published"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2 border bg-zinc-700 p-2 rounded-md">
                      <RocketIcon />
                      <span>Publish</span>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Save Button */}
          <Button className="flex items-center gap-2" disabled={!form.formState.isValid}>
            <BsSave />
            Save
          </Button>
        </div>

        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" className="border-none text-lg font-medium" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image URL Field */}
        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Image URL" className="border-none text-lg font-medium" {...field} />
              </FormControl>
              {isPreview && field.value && (
                <div className="relative h-80 mt-5 border rounded-md">
                  <img src={field.value} alt="Blog Image" className="object-cover object-center rounded-md" />
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content Field */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Content" className="border-none text-lg font-medium" {...field} />
              </FormControl>
              {isPreview && (
                <div className="mt-5">
                  <MarkDownPreview content={field.value} />
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
