'use client'

import { useState, useEffect } from 'react'
import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import {
  LAYOUT_COMPONENTS,
  DEFAULT_LAYOUT_CONFIG,
  type LayoutSection,
  type LayoutConfig,
} from '@/lib/layout-config'

export default function LayoutConfigPage() {
  const savedConfig = useQuery(api.layoutConfig.get)
  const updateConfig = useMutation(api.layoutConfig.update)
  
  const [config, setConfig] = useState<LayoutConfig>(DEFAULT_LAYOUT_CONFIG)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Load saved config when available
  useEffect(() => {
    if (savedConfig) {
      setConfig({
        header: savedConfig.header,
        footer: savedConfig.footer,
        logo: savedConfig.logo,
      })
    }
  }, [savedConfig])

  const handleChange = (section: LayoutSection, value: string) => {
    setConfig(prev => ({ ...prev, [section]: value }))
    setSaveStatus('idle')
  }

  const handleSave = async () => {
    setIsSaving(true)
    setSaveStatus('idle')
    
    try {
      await updateConfig({
        header: config.header,
        footer: config.footer,
        logo: config.logo,
      })
      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (error) {
      console.error('Failed to save config:', error)
      setSaveStatus('error')
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setConfig(DEFAULT_LAYOUT_CONFIG)
    setSaveStatus('idle')
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Layout Configuration</h1>
          <p className="text-muted-foreground">
            Configure which components to display in different sections of your site.
            Select "None" to disable a section.
          </p>
        </div>

        <div className="space-y-6">
          {(Object.keys(LAYOUT_COMPONENTS) as LayoutSection[]).map(section => (
            <div
              key={section}
              className="border rounded-lg p-6 space-y-4 bg-card"
            >
              <div>
                <h2 className="text-xl font-semibold capitalize mb-1">
                  {section}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Choose a {section} component or select "None" to disable
                </p>
              </div>

              <div className="grid gap-3">
                {LAYOUT_COMPONENTS[section].map(option => (
                  <label
                    key={option.value}
                    className={`
                      flex items-center space-x-3 p-4 rounded-md border-2 cursor-pointer
                      transition-all hover:border-primary/50
                      ${
                        config[section] === option.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name={section}
                      value={option.value}
                      checked={config[section] === option.value}
                      onChange={e => handleChange(section, e.target.value)}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="min-w-32"
          >
            {isSaving ? 'Saving...' : 'Save Configuration'}
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            disabled={isSaving}
          >
            Reset to Default
          </Button>

          {saveStatus === 'success' && (
            <div className="flex items-center text-green-600 dark:text-green-400">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Configuration saved successfully!</span>
            </div>
          )}

          {saveStatus === 'error' && (
            <div className="flex items-center text-red-600 dark:text-red-400">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Failed to save configuration</span>
            </div>
          )}
        </div>

        <div className="border-t pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-3">Current Configuration</h3>
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            <pre>{JSON.stringify(config, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

