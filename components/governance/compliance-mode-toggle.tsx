'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Shield, CheckCircle2 } from 'lucide-react'

interface ComplianceModeToggleProps {
  onToggle?: (enabled: boolean) => void
}

export function ComplianceModeToggle({ onToggle }: ComplianceModeToggleProps) {
  const [complianceMode, setComplianceMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load preference from localStorage
    const saved = localStorage.getItem('compliance-mode') === 'true'
    setComplianceMode(saved)
  }, [])

  const handleToggle = (enabled: boolean) => {
    setComplianceMode(enabled)
    localStorage.setItem('compliance-mode', enabled.toString())
    onToggle?.(enabled)
    // Dispatch event for UI components to react to
    window.dispatchEvent(
      new CustomEvent('compliance-mode-changed', { detail: { enabled } })
    )
  }

  if (!mounted) return null

  return (
    <Card className="border-primary/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Compliance Mode
            </CardTitle>
            <CardDescription>
              Force governance-only language across UI
            </CardDescription>
          </div>
          <Switch
            checked={complianceMode}
            onCheckedChange={handleToggle}
            className="data-[state=checked]:bg-primary"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {complianceMode && (
          <Alert className="border-green-500/50 bg-green-500/5">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-sm text-green-600">
              ✓ Compliance Mode Active
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-3 text-sm">
          <div className="space-y-2">
            <Label className="text-foreground font-semibold">When Enabled:</Label>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>All UI uses governance-only terminology</li>
              <li>APR/yield indicators hidden or disabled</li>
              <li>Financial calculations removed from display</li>
              <li>Safe-harbor language enforced globally</li>
              <li>No investment-related terminology appears</li>
            </ul>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground font-semibold">Language Examples:</Label>
            <div className="bg-muted/50 p-3 rounded-lg text-xs space-y-1">
              <div>
                <span className="text-red-500">❌ Hidden:</span> "Earn 35% APY"
              </div>
              <div>
                <span className="text-green-500">✓ Shown:</span> "Governance Participation"
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-border/40">
            <p className="text-xs text-muted-foreground italic">
              Note: Compliance Mode enforces regulatory compliance across the entire application. Intended for auditors, regulatory review, and compliance verification.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * Hook to access compliance mode state in components
 */
export function useComplianceMode() {
  const [complianceMode, setComplianceMode] = useState(false)

  useEffect(() => {
    setComplianceMode(localStorage.getItem('compliance-mode') === 'true')

    const handleChange = (event: Event) => {
      const customEvent = event as CustomEvent
      setComplianceMode(customEvent.detail.enabled)
    }

    window.addEventListener('compliance-mode-changed', handleChange)
    return () => window.removeEventListener('compliance-mode-changed', handleChange)
  }, [])

  return complianceMode
}
