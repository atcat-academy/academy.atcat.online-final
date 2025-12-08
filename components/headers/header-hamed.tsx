import Logo from '@/components/logos/logo-hamed'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignedIn, SignInButton, UserButton, SignUpButton, SignedOut } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className='bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md'>
      <div className='container'>
        <div className='flex items-center justify-between h-16'>
          {/* Left side - Logo & Nav */}
          <div className='flex items-center gap-6'>
            <Logo />
            <nav className='hidden md:flex items-center gap-1'>
              <Button variant='ghost' size='sm' asChild>
                <Link href='/layoutConfig'>Layout Config</Link>
              </Button>
            </nav>
          </div>

          {/* Right side - Auth */}
          <div className='flex items-center gap-3'>
            <SignedOut>
              <SignInButton mode='modal'>
                <Button variant='ghost' size='sm'>
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode='modal'>
                <Button size='sm' className='bg-primary hover:bg-primary/90'>
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}