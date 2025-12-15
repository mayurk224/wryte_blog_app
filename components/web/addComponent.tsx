import { PlusIcon } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"

type AddComponentProps = {
  onAdd: (type: "blockquote" | "code" | "list" | "image" | "paragraph") => void
}

export function AddComponent({ onAdd }: AddComponentProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <PlusIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Add Components</DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => onAdd("blockquote")}>
            Block Quote
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => onAdd("code")}>
            Inline Code
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => onAdd("list")}>
            List
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => onAdd("image")}>
            Image
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => onAdd("paragraph")}>
            Paragraph
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
