"use client";

import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { commentSchema } from "@/app/schemas/comment";
import { Field, FieldDescription } from "../ui/field";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { Preloaded, useMutation, usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export function CommentSection(props: {
  preloadedComments: Preloaded<typeof api.comments.getCommentsByPostId>;
}) {
  const params = useParams<{ postId: Id<"posts"> }>();
  const data = usePreloadedQuery(props.preloadedComments);
  const [isPending, startTransition] = useTransition();
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
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="py-10">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <span className="px-2 py-1 bg-muted rounded-full">{data.length}</span>
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
        {data?.map((comment) => (
          <div key={comment._id} className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-10 shrink-0">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${comment.authorName}`}
                  alt={comment.authorName}
                />
                <AvatarFallback>
                  {comment.authorName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="">
                <h3 className="font-semibold">{comment.authorName}</h3>
                <span className="text-sm text-muted-foreground">
                  {new Date(comment._creationTime).toLocaleDateString()}
                </span>
              </div>
            </div>
            <p className="text-sm">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
