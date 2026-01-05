import { Button } from "@/components/ui/button";
import { BlogBreadCrumb } from "@/components/web/blogBreadCrumb";
import { CommentSection } from "@/components/web/CommentSection";
import { PostPresence } from "@/components/web/PostPresence";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { getToken } from "@/lib/auth-server";
import { fetchQuery, preloadQuery } from "convex/nextjs";
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface PostIdRouteProps {
  params: Promise<{ postId: Id<"posts"> }>;
}

export async function generateMetadata({
  params,
}: PostIdRouteProps): Promise<Metadata> {
  const { postId } = await params;
  const post = await fetchQuery(api.posts.getPostById, { postId });
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostIdRoute({ params }: PostIdRouteProps) {
  const { postId } = await params;
  const token = await getToken();
  const [post, preloadedComments, userId] = await Promise.all([
    await fetchQuery(api.posts.getPostById, { postId }),
    await preloadQuery(api.comments.getCommentsByPostId, { postId: postId }),
    await fetchQuery(api.presence.getUserId, {}, { token }),
  ]);

  if (!userId) {
    return redirect("/auth/login");
  }

  if (!post)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-semibold">Post not found</p>
      </div>
    );
  return (
    <div className="">
      <div className="flex items-center gap-5 py-5">
        <Link
          href="/blog"
          className="text-sm font-medium flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>
        <BlogBreadCrumb />
      </div>
      <div className="text-center w-5xl mx-auto space-y-8 mb-10">
        <h1 className="text-5xl font-semibold">{post.title}</h1>
        <p className="">
          Starting a business with your spouse or significant other is an
          exciting but delicate process and require a great deal of faith. We
          spoke to a dozen successful businesses about how they get it right.
        </p>
      </div>
      <div className="relative">
        <Image
          src={
            post.image ||
            "https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg"
          }
          alt={post.title}
          width={720}
          height={405}
          sizes="100vw"
          className="w-full h-[80vh] object-cover rounded-lg"
        />
        <div className="absolute bottom-0 w-full flex justify-between p-10 backdrop-blur-[2px] bg-black/50">
          <div className="flex gap-10 text-white">
            <div className="space-y-1">
              <p className="text-sm">Written By</p>
              <p className="font-semibold">Mayur Kamble</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm">Published On</p>
              <p className="font-semibold">
                {new Date(post._creationTime).toLocaleDateString()}
              </p>
            </div>
            <div className="">
              <p className="text-sm">Reading Now</p>
              {userId && <PostPresence roomId={post._id} userId={userId} />}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant={"outline"}>
              <Copy /> Copy Link
            </Button>
            <Button variant={"outline"}>
              <Linkedin className="" />
            </Button>
            <Button variant={"outline"}>
              <Facebook className="" />
            </Button>
            <Button variant={"outline"}>
              <Twitter className="" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-24">
        <div className="w-[30%]">
          <ul>
            {[
              { title: "Introduction", hasDot: true },
              { title: "Choosing the best structure", hasDot: false },
              { title: "How to work well together", hasDot: false },
              { title: "What legal agreements", hasDot: false },
              { title: "More Resources", hasDot: false },
              { title: "Conclusion", hasDot: false },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b-2 border-b-accent-foreground py-3"
              >
                <div className="flex items-center gap-2">
                  {item.hasDot && (
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  )}
                  <h2 className="text-2xl">{item.title}</h2>
                </div>
                <ArrowRight />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[70%]">
          <div className="">
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p>{post.body}</p>
          </div>
          <div className="">
            <CommentSection preloadedComments={preloadedComments} />
          </div>
        </div>
      </div>
    </div>
  );
}
