import { Loader2, Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { useQueries, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const result = useQuery(
    api.posts.searchPosts,
    searchTerm.length >= 2 ? { limit: 5, term: searchTerm } : "skip"
  );
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    setOpen(true);
  }
  return (
    <div className="relative">
      <div className="flex items-center relative">
        <Search className="absolute left-3" />
        <Input
          type="text"
          placeholder="Search an article..."
          className="p-2 rounded-full border border-input w-sm pl-10"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      {open && searchTerm.length >= 2 && (
        <div className="absolute w-full rounded-lg shadow-md top-11  bg-background border z-50">
          {result === undefined ? (
            <div className="flex items-center p-4">
              <Loader2 className="animate-spin h-4 w-4" />
              <div className="ml-2">Searching...</div>
            </div>
          ) : result === null || result.length === 0 ? (
            <div className="p-4 text-">No results found.</div>
          ) : (
            <div className="max-h-60 overflow-y-auto">
              {result.map((post) => (
                <Link
                  href={`/blog/${post._id}`}
                  key={post._id}
                  className="block p-3 hover:bg-muted transition-all rounded-lg"
                  onClick={() => {
                    setOpen(false);
                    setSearchTerm("");
                  }}
                >
                  <div className="font-medium ">{post.title}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
