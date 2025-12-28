import z from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(3, "Title is required")
    .max(50, "Title must be at most 50 characters long"),
  body: z
    .string()
    .min(3, "Body must be at least 3 characters long")
    .max(500, "Body must be at most 500 characters long"),
  image: z.instanceof(File),
});
