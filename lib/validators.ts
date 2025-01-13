import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly 2 decimal places"
  );

//Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(255),
  description: z
    .string()
    .min(3, "description must be at least 3 characters")
    .max(1000),
  slug: z.string().min(3, "Slug must be at least 3 characters").max(1000),
  category: z
    .string()
    .min(3, "Category must be at least 3 characters")
    .max(255),
  price: currency,
  stock: z.coerce.number(),
  image: z.array(z.string()).min(1, "Product must be at least 1 image"),
  brand: z.string().min(3, "Brand must be at least 3 characters").max(255),
  rating: z.string().min(1, "Rating must be at least 1 character"),
  numReviews: z.number().min(0),
  countInStock: z.number().min(0),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});
