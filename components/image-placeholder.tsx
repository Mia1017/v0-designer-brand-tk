import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  icon?: LucideIcon
  text?: string
  className?: string
  aspectRatio?: string
}

export function ImagePlaceholder({
  icon: Icon,
  text,
  className,
  aspectRatio = "aspect-video"
}: ImagePlaceholderProps) {
  return (
    <div className={cn(
      "bg-gradient-to-br from-muted via-muted/50 to-muted/30 rounded-lg flex items-center justify-center",
      aspectRatio,
      className
    )}>
      <div className="text-center p-6">
        {Icon && (
          <Icon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 text-muted-foreground/40" />
        )}
        {text && (
          <p className="text-sm md:text-base text-muted-foreground/60 font-medium">{text}</p>
        )}
      </div>
    </div>
  )
}
