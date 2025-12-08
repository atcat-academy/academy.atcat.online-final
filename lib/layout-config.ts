import { ComponentType } from 'react'

// Component maps
import HeaderHamed from '@/components/headers/header-hamed'
import HeaderMinimal from '@/components/headers/header-minimal'
import { HeaderFree } from '@/components/headers/header-free'
import FooterHamed from '@/components/footers/footer-hamed'
import FooterMinimal from '@/components/footers/footer-minimal'
import LogoHamed from '@/components/logos/logo-hamed'
import LogoMinimal from '@/components/logos/logo-minimal'

export interface ComponentOption {
  value: string
  label: string
  component?: ComponentType<any>
}

export interface LayoutComponentConfig {
  header: ComponentOption[]
  footer: ComponentOption[]
  logo: ComponentOption[]
}

const linkItems = [
  { name: 'Why Subscribe?', href: '#link' },
  { name: 'Pricing', href: '#link' },
  { name: 'About', href: '#link' },
]

// Define available components for each section
export const LAYOUT_COMPONENTS: LayoutComponentConfig = {
  header: [
    { value: 'none', label: 'None' },
    { value: 'header-hamed', label: 'Header Hamed', component: HeaderHamed },
    { value: 'header-minimal', label: 'Header Minimal', component: HeaderMinimal },
    { value: 'header-free', label: 'Header Free', component: HeaderFree },
  ],
  footer: [
    { value: 'none', label: 'None' },
    { value: 'footer-hamed', label: 'Footer Hamed', component: FooterHamed },
    { value: 'footer-minimal', label: 'Footer Minimal', component: FooterMinimal },
  ],
  logo: [
    { value: 'none', label: 'None' },
    { value: 'logo-hamed', label: 'Logo Hamed', component: LogoHamed },
    { value: 'logo-minimal', label: 'Logo Minimal', component: LogoMinimal },
  ],
}

// Default configuration
export const DEFAULT_LAYOUT_CONFIG = {
  header: 'header-hamed',
  footer: 'footer-hamed',
  logo: 'logo-hamed',
}

export type LayoutSection = keyof LayoutComponentConfig
export type LayoutConfig = Record<LayoutSection, string>

// Helper function to get component by section and value
export function getComponent(section: LayoutSection, value: string): ComponentType<any> | null {
  const option = LAYOUT_COMPONENTS[section].find(opt => opt.value === value)
  return option?.component || null
}

