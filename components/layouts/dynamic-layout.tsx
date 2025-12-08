'use client'

import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { getComponent, DEFAULT_LAYOUT_CONFIG } from '@/lib/layout-config'

interface DynamicLayoutProps {
  children: React.ReactNode
}

export default function DynamicLayout({ children }: DynamicLayoutProps) {
  const savedConfig = useQuery(api.layoutConfig.get)
  
  // While loading, use default config
  // Once loaded, use saved config or default if no config exists
  const config = savedConfig === undefined 
    ? DEFAULT_LAYOUT_CONFIG 
    : savedConfig || DEFAULT_LAYOUT_CONFIG
  
  // Get the selected components
  const HeaderComponent = getComponent('header', config.header)
  const FooterComponent = getComponent('footer', config.footer)
  
  return (
    <div className='flex min-h-screen flex-col'>
      {HeaderComponent && <HeaderComponent />}
      {/* Add padding-top when header is present to account for fixed positioning */}
      <main className={`flex-1 ${HeaderComponent ? 'pt-16' : ''}`}>
        {children}
      </main>
      {FooterComponent && <FooterComponent />}
    </div>
  )
}

