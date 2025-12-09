import { ReactNode } from "react"
import { cn } from "@/lib/utils"

import { MaxWidthWrapperProps } from "@/lib/types/"

export const MaxWidthWrapper = ({
    className, 
    children,
}: MaxWidthWrapperProps) => {
  return (
    <div className={cn("h-full mx-auto w-full max-w-6xl px-2.5 md:px-20 relative", className)}>
      {children}
    </div>
  )
}