import { z } from "zod";


const productSchema = z.object({
    id: z.number(),
    title: z.string(),
    category: z.string(),
    price: z.string(),
    cardImageUrl: z.string(),
    author: z.object({
        firstName: z.string(),
        lastName: z.string(),
        avatar: z.string()
    })
  })


type Product = z.infer<typeof productSchema>


export type { Product }