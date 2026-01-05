import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Loading() {
  return (
     <div className="w-full mx-auto">
      <div className="flex items-center gap-5 py-5">
        <div className="text-sm font-medium flex items-center gap-1 text-gray-400">
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </div>
        <Skeleton className="h-4 w-48" />
      </div>
      
      <div className="text-center max-w-5xl mx-auto space-y-8 mb-10">
        <Skeleton className="h-14 w-3/4 mx-auto" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full mx-auto" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
          <Skeleton className="h-4 w-4/6 mx-auto" />
        </div>
      </div>
      
      <div className="relative">
        <Skeleton className="w-full h-[80vh] rounded-lg" />
        <div className="absolute bottom-0 w-full flex justify-between p-10 backdrop-blur-[2px] bg-black/50">
          <div className="flex gap-10 text-white">
            <div className="space-y-1">
              <p className="text-sm">Written By</p>
              <Skeleton className="h-5 w-32 bg-white/20" />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Published On</p>
              <Skeleton className="h-5 w-32 bg-white/20" />
            </div>
            <div className="space-y-1">
              <p className="text-sm">Reading Now</p>
              <Skeleton className="h-5 w-20 bg-white/20" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-32 bg-white/20" />
            <Skeleton className="h-10 w-10 bg-white/20" />
            <Skeleton className="h-10 w-10 bg-white/20" />
            <Skeleton className="h-10 w-10 bg-white/20" />
          </div>
        </div>
      </div>
      
      <div className="mt-10 flex gap-24">
        <div className="w-[30%]">
          <ul>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b-2 border-b-gray-200 py-3"
              >
                <div className="flex items-center gap-2">
                  {index === 0 && (
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  )}
                  <Skeleton className="h-7 w-48" />
                </div>
                <ArrowRight className="text-gray-300" />
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-[70%]">
          <div className="space-y-4 mb-10">
            <Skeleton className="h-8 w-48" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="space-y-2 pt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
          
          <div className="space-y-6">
            <Skeleton className="h-8 w-40" />
            <div className="space-y-4">
              <Skeleton className="h-20 w-full rounded-lg" />
              <Skeleton className="h-20 w-full rounded-lg" />
              <Skeleton className="h-20 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
