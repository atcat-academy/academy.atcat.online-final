'use client'

import { useAuth, useUser } from '@clerk/nextjs'
import { useEffect } from 'react'

export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser()

  const { has } = useAuth()
  const hasFreePlan = has?.({ plan: 'free' }) //this is the Key of the plan you want to check for
  
  // Show loading state while data is being fetched
  if (!isLoaded) {
    return (
      <section className='py-24'>
        <div className='container'>
          <p>Loading...</p>
        </div>
      </section>
    )
  }

  // If not signed in, redirect
  if (!isSignedIn || !hasFreePlan) {
    return (
      <section className='py-24'>
        <div className='container'>
          <p>Please Sign-in to continue. Redirecting to sign-in page...</p>
          <div className="flex justify-center items-center mt-6">
            <svg className="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          </div>
          {typeof window !== "undefined" && (() => {
            setTimeout(() => {
              window.location.href = "/sign-in";
            }, 2000);
            return null;
          })()}
        </div>
      </section>
    )
  }


  // User is signed in AND has free plan - show the page
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>This is a client-side page</h1>
        <p className='mt-4'>You are logged in as {user?.firstName}</p>
        <p>You have a free plan - you have access!</p>
      </div>
    </section>
  );
}