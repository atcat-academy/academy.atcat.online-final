import { ComponentType } from 'react'

// Component maps


import { Header } from '@/components/headers/header'
import  FooterMinimal  from '@/components/footers/footer-minimal'
import LogoATCAT from '@/components/logos/logo-atcat-online'

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
    
    { value: 'header-atcat', label: 'Header ATCAT', component: Header },
  ],
  footer: [
    { value: 'none', label: 'None' },
    { value: 'footer-minimal', label: 'Footer Minimal', component: FooterMinimal },
  ],
  logo: [
    { value: 'none', label: 'None' },
    { value: 'logo-atcat-online', label: 'Logo ATCAT Online', component: LogoATCAT },
    
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

