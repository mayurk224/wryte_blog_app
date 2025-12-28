"use server";

import z from "zod";
import { postSchema } from "./schemas/blog";
import { api } from "@/convex/_generated/api";
import { fetchMutation } from "convex/nextjs";
import { redirect } from "next/navigation";
import { getToken } from "@/lib/auth-server";

export async function createBlogAction(values: z.infer<typeof postSchema>) {
  try {
    const parsed = postSchema.safeParse(values);

    if (!parsed.success) {
      throw new Error("Something went wrong");
    }

    const token = await getToken();

    const url = await fetchMutation(
      api.posts.generateImageUploadUrl,
      {},
      { token }
    );

    const uploadResult = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": parsed.data.image.type,
      },
      body: parsed.data.image,
    });

    if (!uploadResult.ok) {
      return {
        error: "Upload failed",
      };
    }

    const { storageId } = await uploadResult.json();
    await fetchMutation(
      api.posts.createPost,
      {
        body: parsed.data.body,
        title: parsed.data.title,
        imageStorageId: storageId,
      },
      { token }
    );
  } catch {
    return { error: "Failed to create post" };
  }

  return redirect("/");
}
