import Link from 'next/link'

export default function Logo() {
  return (
    <Link
        href="/"
        aria-label="home"
        className="flex items-center space-x-2 text-[#0eb4f3] font-bold text-2xl ">
        ATCAT Online
        
    </Link>
  )
}