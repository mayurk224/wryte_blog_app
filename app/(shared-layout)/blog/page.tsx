import { BlogCard } from "@/components/web/blogCard";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";

export default async function BlogPage() {
  const data = await fetchQuery(api.posts.getPosts);
  return (
    <div className="flex items-center flex-wrap gap-4 mx-auto">
      {data?.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}
