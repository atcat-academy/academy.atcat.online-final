import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className='py-24'>
      <div className='m-auto w-full max-w-[424px]  border-[12px] border-[var(--signin-atcat-online-border-color)] rounded-3xl'>

        <SignIn appearance={{
          variables: {
            colorForeground: 'var(--signin-text-color)',
            colorBackground: 'var(--signin-atcat-online-background-color)',
            fontSize: 'var(--signin-font-size) !important',
            
            colorPrimary: 'var(--signin-button-color)',
          },
        }} />  
       
      
      </div>
     
    </section>
  );
}