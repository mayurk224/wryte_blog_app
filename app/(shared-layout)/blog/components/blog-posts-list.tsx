'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { BlogCard } from '@/components/web/blogCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogPostsList() {
  const data = useQuery(api.posts.getPosts);

  if (data === undefined) {
    return (
      <div className="flex items-center flex-wrap gap-5 justify-center">
        {[...Array(8)].map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full py-10">
        <h2 className="text-2xl font-semibold text-muted-foreground">No posts yet</h2>
        <p className="text-muted-foreground mt-2">Be the first to create a post!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-5 w-full mx-auto">
      {data?.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}

function BlogCardSkeleton() {
  return (
    <div className="max-w-sm">
      <div className="rounded-xl bg-muted/30 p-2 shadow-sm">
        {/* Image */}
        <Skeleton className="h-56 w-80 rounded-2xl" />

        <div className="p-3 space-y-4">
          {/* Date + Read Time */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          {/* Author */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}