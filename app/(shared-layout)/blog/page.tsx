import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogCard } from "@/components/web/blogCard";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { ChevronDown } from "lucide-react";
import { Metadata } from "next";
import { cacheLife, cacheTag } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs - Latest Articles",
  description: "Read our blog posts on various topics.",
};

export default function BlogPage() {
  const navLink = [
    {
      name: "Recent",
      href: "/",
    },
    {
      name: "Technology",
      href: "/",
    },
    {
      name: "LifeStyle",
      href: "/",
    },
    {
      name: "Business",
      href: "/",
    },
    {
      name: "Entertainment",
      href: "/",
    },
  ];

  const navLink2 = [
    {
      name: "Nature",
      href: "/",
    },
    {
      name: "Health",
      href: "/",
    },
    {
      name: "Sports",
      href: "/",
    },
    {
      name: "Science",
      href: "/",
    },
    {
      name: "Education",
      href: "/",
    },
    {
      name: "General",
      href: "/",
    },
    {
      name: "Business",
      href: "/",
    },

    {
      name: "Entertainment",
      href: "/",
    },
    {
      name: "World",
      href: "/",
    },
  ];

  return (
    <div className="flex items-center flex-wrap mx-auto gap-5">
      <section className="w-full">
        <div className="container-wrapper">
          <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-10 xl:gap-4">
            <a
              data-slot="badge"
              className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent text-secondary-foreground [a&amp;]:hover:bg-secondary/90 bg-transparent"
              href="/docs/changelog"
            >
              <span
                className="flex size-2 rounded-full bg-blue-500"
                title="New"
              ></span>
              Blogs{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <h1 className="text-primary leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tight max-w-4xl">
              Discover our latest articles
            </h1>
            <p className="text-foreground max-w-3xl text-base  sm:text-lg">
              Discover the achievements that set us apart. From groundbreaking
              projects to industry accolades, we take pride in our
              accomplishments.
            </p>
            <div className="flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none">
              <a
                data-slot="button"
                data-variant="default"
                data-size="sm"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5 px-3 has-[&gt;svg]:px-2.5 h-[31px] rounded-lg"
                href="/create"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="currentColor"
                  className=""
                >
                  <path
                    d="M12 4V20M20 12H4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                Write an Article
              </a>
              <a
                data-slot="button"
                data-variant="ghost"
                data-size="sm"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 gap-1.5 px-3 has-[&gt;svg]:px-2.5 rounded-lg"
                href="/docs/components"
              >
                Find an Article
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight text-balance">
            Latest Stories
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into articles crafted to inspire, educate, and spark your next
            big idea.
          </p>
        </div>
        <div className="flex items-center gap-1">
          {navLink.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary data-[active=true]:text-primary flex h-7 items-center justify-center px-4 text-center text-base font-medium transition-colors"
              data-active="false"
            >
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                View All
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48" sideOffset={8}>
              {navLink2.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={`/blog/component/${item.name.toLowerCase()}`}>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      <section className="w-full">
        <Suspense
          fallback={
            <div className="flex items-center flex-wrap gap-5 justify-center">
              {[...Array(8)].map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <LoadingBlog />
        </Suspense>
      </section>
    </div>
  );
}

async function LoadingBlog() {
  "use cache";
  cacheLife("hours");
  cacheTag("blog");
  const data = await fetchQuery(api.posts.getPosts);
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
