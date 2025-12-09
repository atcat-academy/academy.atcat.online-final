import DynamicLayout from '@/components/layouts/dynamic-layout'
import { Header } from '@/components/headers/header'
import FooterHamed from '@/components/footers/footer-hamed'
import PageContainer from '@/components/layouts/page-container'


// export default function SiteLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return <DynamicLayout>{children}</DynamicLayout>
// }


export default function SiteLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className='flex min-h-screen flex-col mx-auto w-full'>
            <Header />
        <main className='flex-1'>
          <PageContainer>
            {children}
          </PageContainer>
        </main>
       
        </div>
    )
  }