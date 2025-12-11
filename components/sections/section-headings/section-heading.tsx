
import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"
import { HeadingProps } from "@/lib/types"

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1 className={cn("text-[22px] lg:text-4xl text-pretty font-playfair-display font-semibold tracking-tight text-zinc-800 text-center px-10 text-balance", className)} {...props}>
      {children}
    </h1>
  )
}

export default Heading