import Link from 'next/link'
import Image from 'next/image'
export default function Logo() {
  return (
    <Link
        href="/"
        aria-label="home"
        className="flex items-center space-x-2 text-atcat-white font-playfair-display font-normal text-4xl ">
        <Image src="https://v5huhbl6d7.ufs.sh/f/1etqzKyNnBsqfnmM5ZgG5WLOXgIzdYFy1JPTtaM2UANQ7leZ" alt="ATCAT Online" width={100} height={100} />
       
    </Link>
  )
}