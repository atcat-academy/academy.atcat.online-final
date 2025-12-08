'use client'

import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function AcademyPage() {
  useEffect(() => {
    // Redirect to the external academy site
    window.location.href = 'https://academy.atcat.online'
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <h1 className="text-2xl font-semibold mb-2">Redirecting to ATCAT Academy...</h1>
            <p className="text-muted-foreground">
              You'll be redirected to the academy in a moment.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              If you're not redirected,{' '}
              <a 
                href="https://academy.atcat.online" 
                className="text-primary underline hover:no-underline"
              >
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

