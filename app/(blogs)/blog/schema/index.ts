import { z } from "zod";


export const FormSchema = z.object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    image_url: z.string().url({message: "Invalid Url"}),
    content: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    is_published: z.boolean(),
    is_premium: z.boolean()
  })
//   .refine((data) => {
//     const image_url = data.image_url;
//     try {
//       const url = new URL(image_url)
//       return url.hostname === "**"
//     } catch  {
//       return false; // iski vajah se zod false return karra hai
//     }
//   },
//     {
//       message: "supports valid url",
//     }
//   )
  