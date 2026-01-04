"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { resolve } from "path";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { commentSchema } from "@/app/schemas/comment";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";

export function CommentSection() {
  const [isPending, startTransition] = useTransition();
  const params = useParams<{ postId: Id<"posts"> }>();
  const createComment = useMutation(api.comments.createComment);
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      body: "",
      postId: params.postId,
    },
  });
  async function onSubmit(data: z.infer<typeof commentSchema>) {
    startTransition(async () => {
      try {
        await createComment(data);
        toast.success("Comment created successfully");
        form.reset();
      } catch (error) {
        toast.error("Error creating comment");
      }
    });
  }
  return (
    <div className="py-10">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <span className="px-2 py-1 bg-muted rounded-full">10</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <img
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg"
            alt=""
            className="rounded-full w-8 h-8 object-cover"
          />
          <h3 className="font-semibold">John Doe</h3>
        </div>
        <form
          className="flex items-center gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Controller
            name="body"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <Input
                  id="comment"
                  type="text"
                  placeholder="Add a comment..."
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && (
                  <FieldDescription className="text-destructive">
                    {fieldState.error.message}
                  </FieldDescription>
                )}
              </Field>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="animate-spin" />
                <span className="ml-2">Creating comment...</span>
              </>
            ) : (
              "Create Comment"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
