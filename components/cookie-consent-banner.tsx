"use client"

import { useState, useEffect } from "react"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getCookieConsent,
  hasUserConsented,
  setCookieConsent,
  saveCookieConsentToDatabase,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent"

export function CookieConsentBanner() {
  const [mounted, setMounted] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [preferences, setPreferences] = useState<CookieConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    setMounted(true)
    // Only show banner if user hasn't consented yet
    if (!hasUserConsented()) {
      setIsOpen(true)
    }

    // Listen for manage cookies link click
    const handleManageCookies = () => {
      setIsOpen(true)
      setIsExpanded(true)
    }

    window.addEventListener('manage-cookies', handleManageCookies as EventListener)
    return () => window.removeEventListener('manage-cookies', handleManageCookies as EventListener)
  }, [])

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return null
  }

  const handleAcceptAll = async () => {
    const allAccepted: CookieConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    setPreferences(allAccepted)
    setCookieConsent(allAccepted)
    await saveCookieConsentToDatabase(allAccepted)
    setIsOpen(false)
  }

  const handleRejectAll = async () => {
    const minimal: CookieConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    setPreferences(minimal)
    setCookieConsent(minimal)
    await saveCookieConsentToDatabase(minimal)
    setIsOpen(false)
  }

  const handleSavePreferences = async () => {
    setCookieConsent(preferences)
    await saveCookieConsentToDatabase(preferences)
    setIsOpen(false)
  }

  const handleTogglePreference = (key: keyof CookieConsentPreferences) => {
    if (key === "necessary") return // Necessary is always enabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-background/95 backdrop-blur-md border border-border/40 rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Cookie Preferences</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  We use cookies to enhance your experience, analyze site traffic, and serve personalized content. You
                  have full control over your preferences.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Expandable Details */}
          {isExpanded && (
            <div className="px-6 py-4 border-t border-border/20 bg-muted/30">
              <div className="space-y-4">
                {/* Necessary */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="checkbox"
                      id="necessary"
                      checked={preferences.necessary || false}
                      disabled
                      onChange={() => {}}
                      className="h-4 w-4 rounded cursor-not-allowed opacity-50"
                    />
                    <label htmlFor="necessary" className="text-sm font-medium text-foreground cursor-default">
                      Necessary Cookies
                    </label>
                  </div>
                  <span className="text-xs text-muted-foreground">Always On</span>
                </div>
                <p className="text-xs text-muted-foreground ml-7">
                  Essential for website functionality, authentication, and security. Cannot be disabled.
                </p>

                {/* Analytics */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="checkbox"
                      id="analytics"
                      checked={preferences.analytics || false}
                      onChange={() => handleTogglePreference("analytics")}
                      className="h-4 w-4 rounded cursor-pointer"
                    />
                    <label htmlFor="analytics" className="text-sm font-medium text-foreground cursor-pointer">
                      Analytics Cookies
                    </label>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-7">
                  Help us understand how you use our site to improve performance and user experience.
                </p>

                {/* Marketing */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={preferences.marketing || false}
                      onChange={() => handleTogglePreference("marketing")}
                      className="h-4 w-4 rounded cursor-pointer"
                    />
                    <label htmlFor="marketing" className="text-sm font-medium text-foreground cursor-pointer">
                      Marketing Cookies
                    </label>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-7">
                  Enable personalized advertising and content based on your interests and browsing behavior.
                </p>

                {/* Preferences */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="checkbox"
                      id="preferences"
                      checked={preferences.preferences || false}
                      onChange={() => handleTogglePreference("preferences")}
                      className="h-4 w-4 rounded cursor-pointer"
                    />
                    <label htmlFor="preferences" className="text-sm font-medium text-foreground cursor-pointer">
                      Preference Cookies
                    </label>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-7">
                  Remember your preferences and settings to provide a personalized experience.
                </p>

                <div className="pt-2 text-xs text-muted-foreground">
                  <p>
                    Read our{" "}
                    <a href="/privacy" className="underline hover:text-foreground transition-colors">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms" className="underline hover:text-foreground transition-colors">
                      Terms of Service
                    </a>{" "}
                    for more information.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer / Actions */}
          <div className="px-6 py-4 border-t border-border/20 bg-muted/20 flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors justify-center sm:justify-start"
            >
              <span>{isExpanded ? "Hide" : "Customize"}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </button>

            <div className="flex gap-2 flex-col sm:flex-row w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={handleRejectAll}
                className="flex-1 sm:flex-none bg-transparent hover:bg-muted"
              >
                Reject All
              </Button>
              {isExpanded && (
                <Button onClick={handleSavePreferences} className="flex-1 sm:flex-none bg-primary hover:bg-primary/90">
                  Save Preferences
                </Button>
              )}
              {!isExpanded && (
                <Button onClick={handleAcceptAll} className="flex-1 sm:flex-none bg-primary hover:bg-primary/90">
                  Accept All
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
