import { cacheLife, cacheTag } from 'next/cache';

export default function BlogSidebar() {
  "use cache";
  cacheLife('hours');
  cacheTag('blog-sidebar');

  // Hardcoded sidebar content - this would be replaced with actual sidebar content if it exists
  return (
    <div className="w-full md:w-64 shrink-0">
      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Technology</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Lifestyle</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Business</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Science</span>
        </div>
      </div>
      
      <div className="p-4 bg-muted rounded-lg mt-4">
        <h3 className="font-semibold text-lg mb-2">About</h3>
        <p className="text-sm text-muted-foreground">
          Welcome to our blog where we share insights and stories on various topics.
        </p>
      </div>
    </div>
  );
}