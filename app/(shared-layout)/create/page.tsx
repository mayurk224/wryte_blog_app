"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "@/app/schemas/blog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import z from "zod";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createBlogAction } from "@/app/actions";

export default function CreatePage() {
  const [isPending, startTransition] = useTransition();

  const mutation = useMutation(api.posts.createPost);
  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof postSchema>) {
    startTransition(async () => {
      await createBlogAction(values);
      toast.success("Article created successfully");
      router.push("/");
    });
  }
  return (
    <div className="flex gap-5">
      <div className="createForm mx-auto w-full max-w-xl rounded-lg bg-background p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4 border-b pb-4">
          <Button variant="outline" size="icon">
            <ArrowLeftIcon />
          </Button>
          <div className="">
            <h2 className="text-2xl font-semibold">Create a new article</h2>
            <p className="text-sm text-muted-foreground">
              Share your thoughts and ideas with the world
            </p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="rounded-lg border bg-muted/30 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Content</h3>
              </div>

              <div className="space-y-2">
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="title">Title</FieldLabel>
                      <Input
                        id="title"
                        type="text"
                        placeholder="Enter article title"
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
              </div>

              <div className="space-y-2">
                <Controller
                  name="body"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor="body">Body</FieldLabel>
                      <Textarea
                        id="body"
                        rows={10}
                        placeholder="Write your content here..."
                        {...field}
                        aria-invalid={fieldState.invalid}
                        className="resize-none h-[150px]"
                      />
                      {fieldState.error && (
                        <FieldDescription className="text-destructive">
                          {fieldState.error.message}
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />
              </div>
              <Field className="flex justify-center items-center">
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="animate-spin" />
                      <span className="ml-2">Creating article...</span>
                    </>
                  ) : (
                    "Create Article"
                  )}
                </Button>
              </Field>
            </div>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
