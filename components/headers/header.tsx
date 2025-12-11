'use client'
import Link from 'next/link'
import Logo  from '@/components/logos/logo-atcat-online'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
//clerk
import { Authenticated, Unauthenticated } from 'convex/react'
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const freeItems = [
    { name: 'Philosophy', href: '/philosophy' },
    { name: 'Pricing', href: 'https://subscriptions.atcat.online' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: 'https://blog.atcat.online' },
]

const playItems = [
    { name: 'Features', href: '/play' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
    { name: 'Blog', href: 'https://blog.atcat.online' },
]

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    //check actual subscription status
    const subscribed = false

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className='fixed top-0 right-0 left-0 z-50 '>
              <nav
                data-state={menuState && 'active'}
                className=" fixed z-20 w-full px-6">
                    
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-atcat-black/10 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5', !isScrolled && 'bg-atcat-black rounded-2xl')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            
                            <Logo />
                            {/* Media query text */}
                            {/* <div className="absolutez-100 top-100 left-10 text-sm text-red-500 sm:text-orange-500 md:text-yellow-500 lg:text-green-500 xl:text-blue-500 2xl:text-purple-500">Media red - orange - yellow - green - blue - purple</div>
           */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {/*desktop menu*/}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block  ">
                        
                            <ul className="flex gap-8 text-sm">
                                {freeItems.map((item, index) => (
                                    <li key={index}>
                                        <Button variant="secondary" size="sm" className="hover:text-[#0eb4f3] hover:font-bold hover:border-2 hover:border-[#0eb4f3]">
                                            <Link
                                                href={item.href}
                                                className=" block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </Button>
                                        
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/*mobile menu*/}
                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            
                            <div className="lg:hidden">
                                
                                <ul className="space-y-6 text-base">
                                    {freeItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Unauthenticated>
                                    <SignInButton >
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className={cn(isScrolled && 'lg:hidden')}>
                                            <Link href="#">
                                                <span>Login</span>
                                            </Link>
                                        </Button>
                                    </SignInButton>

                                    <SignUpButton >
                                        <Button
                                            asChild
                                            size="sm"
                                            className={cn(isScrolled && 'lg:hidden')}>
                                            <Link href="#">
                                                <span>Sign Up</span>
                                            </Link>
                                        </Button> 
                                    </SignUpButton>

                                    <SignUpButton mode="modal" >
                                        <Button
                                            asChild
                                            size="sm"
                                            className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                            <Link href="#">
                                                <span>Get Started</span>
                                            </Link>
                                        </Button>

                                    </SignUpButton>
                                        
                                </Unauthenticated>
                                <Authenticated>
                                    {!subscribed && 
                                        (
                                        <Button>
                                            <Link href="http://localhost:3001">
                                                <span>TRY Now</span>
                                            </Link>
                                        </Button>
                                        )
                                    }
                                    {subscribed && 
                                        (
                                        <Button>
                                            <Link href="/play">
                                                <span>PLAY Now</span>
                                            </Link>
                                        </Button>
                                        )
                                    }
                                    
                                    <UserButton />
                                </Authenticated>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
