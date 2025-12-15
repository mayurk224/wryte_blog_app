import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon } from "lucide-react";

export default function CreatePage() {
  return (
    <div className="flex gap-5">
      <div className="createForm mx-auto w-full max-w-2xl rounded-lg bg-background p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4 border-b pb-4">
          <Button variant="outline" size="icon">
            <ArrowLeftIcon />
          </Button>
          <h2 className="text-2xl font-semibold">Create a new article</h2>
        </div>

        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Enter article title" />
          </div>

          {/* Tag + Image */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Cover Image</Label>
              <Input type="file" />
            </div>
          </div>

          {/* Content Section */}
          <div className="rounded-lg border bg-muted/30 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Content</h3>
            </div>

            <div className="space-y-2">
              <Label>Body</Label>
              <Textarea rows={6} placeholder="Write your content here..." />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Create Article</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
