import Link from "next/link";

export function BlogCard({ post }: { post: any }) {
  const { title, body, _id } = post;
  return (
    <div className="max-w-sm mt-8" key={_id}>
      <div className=" bg-muted/30 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 p-2">
        {/* Image Container with Badge */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/35198886/pexels-photo-35198886.jpeg"
            alt="Blog Image"
            className="w-full h-56 object-cover rounded-2xl"
          />
          <span className="absolute top-3 left-3 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
            Outline
          </span>
        </div>

        {/* Card Content */}
        <div className="p-3 space-y-4">
          {/* Date and Read Time */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 font-medium">17 Dec 2025</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 font-medium">10 mins read</span>
          </div>

          {/* Title and Description */}
          <div className="space-y-2">
            <Link
              href={`/blog/${_id}`}
              className="text-xl font-bold leading-tight line-clamp-2 hover:text-primary transition-colors cursor-pointer"
            >
              {title}
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {body}
            </p>
          </div>

          {/* Author Section */}
          <div className="flex items-center gap-3 border-gray-100">
            <img
              src="https://images.pexels.com/photos/35198886/pexels-photo-35198886.jpeg"
              alt="Mayur Kamble"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100"
            />
            <h3 className="font-semibold">Mayur Kamble</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
