import { HTMLAttributes, ReactNode, AnchorHTMLAttributes } from "react"

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string,
    children: ReactNode,   
}

export interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    //none required to be defined - all Anchor types allowed
}

export interface MaxWidthWrapperProps {
    className?: string,
    children: ReactNode
}