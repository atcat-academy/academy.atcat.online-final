import DynamicLayout from '@/components/layouts/dynamic-layout'
import { HeaderFree } from '@/components/headers/header-free'
import FooterHamed from '@/components/footers/footer-hamed'

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
        <div className='flex min-h-screen flex-col'>
            <HeaderFree />
        <main className='flex-1'>{children}</main>
        <FooterHamed />
        </div>
    )
  }