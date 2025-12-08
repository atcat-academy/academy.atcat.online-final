import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className='py-24'>
       <div className='m-auto w-full max-w-[424px]  border-[12px] border-[var(--signin-atcat-online-border-color)] rounded-3xl'>
      <SignUp appearance={{
        variables: {
          colorForeground: 'var(--signin-text-color)',
          fontSize: 'var(--signin-font-size)',
          colorBackground: 'var(--signin-background-color)',
          colorPrimary: 'var(--signin-button-color)',
        },
      }} />
      </div>
    </section>
  )
}