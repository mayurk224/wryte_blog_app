"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2, Search } from "lucide-react";

export function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();
  const [isPending] = useTransition();

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
  return (
    <nav className="flex justify-between items-center p-4 ">
      <div className="leftSide flex items-center gap-3">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Wryte" className="h-6 mr-2" />
            <span className="text-2xl font-bold font-sans">Wryte</span>
          </div>
        </Link>
        <div className="flex items-center gap-1">
          {navLink.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={buttonVariants({ variant: "link" })}
            >
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="rightSide flex items-center gap-3">
        <div className="flex items-center relative">
          <Search className="absolute left-3" />
          <input
            type="text"
            placeholder="Search an article..."
            className="p-2 rounded-full border border-input w-80 pl-10"
          />
        </div>

        {isLoading ? null : isAuthenticated ? (
          <>
            <div className="">
              <Button variant="secondary">Create</Button>
            </div>
            <Button
              variant="secondary"
              disabled={isPending}
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      toast.success("Signed out successfully");
                      router.push("/");
                    },
                    onError: () => {
                      toast.error("Error signing out");
                    },
                  },
                })
              }
            >
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span className="ml-2">Signing out...</span>
                </>
              ) : (
                "Sign Out"
              )}
            </Button>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className={buttonVariants()}>
              <span className="">Log In</span>
            </Link>
            <Link
              href="/auth/sign-up"
              className={buttonVariants({ variant: "secondary" })}
            >
              <span className="">Sign Up</span>
            </Link>
          </div>
        )}

        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
