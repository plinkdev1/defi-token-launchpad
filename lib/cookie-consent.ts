import { createClient } from "@/lib/supabase/client"

export interface CookieConsentPreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

const CONSENT_STORAGE_KEY = "treezures_cookie_consent"
const SESSION_ID_KEY = "treezures_session_id"
const CONSENT_VERSION = "1.0"

export const generateSessionId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const getSessionId = (): string => {
  if (typeof window === "undefined") return ""

  let sessionId = localStorage.getItem(SESSION_ID_KEY)
  if (!sessionId) {
    sessionId = generateSessionId()
    localStorage.setItem(SESSION_ID_KEY, sessionId)
  }
  return sessionId
}

export const getCookieConsent = (): CookieConsentPreferences | null => {
  if (typeof window === "undefined") return null

  const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
  if (!stored) return null

  try {
    const parsed = JSON.parse(stored)
    // Validate version to ensure compatibility
    if (parsed.version === CONSENT_VERSION) {
      return {
        necessary: parsed.necessary ?? true,
        analytics: parsed.analytics ?? false,
        marketing: parsed.marketing ?? false,
        preferences: parsed.preferences ?? false,
      }
    }
  } catch {
    return null
  }
  return null
}

export const setCookieConsent = (preferences: CookieConsentPreferences): void => {
  if (typeof window === "undefined") return

  localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify({
      ...preferences,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    })
  )
}

export const saveCookieConsentToDatabase = async (preferences: CookieConsentPreferences): Promise<void> => {
  try {
    const supabase = createClient()
    const sessionId = getSessionId()

    // Try to save to database, but fail gracefully if it's not available
    const { error: prefsError } = await supabase.from("cookie_consent_preferences").upsert(
      {
        session_id: sessionId,
        necessary_consent: preferences.necessary,
        analytics_consent: preferences.analytics,
        marketing_consent: preferences.marketing,
        preferences_consent: preferences.preferences,
      },
      { onConflict: "session_id" }
    )

    if (prefsError) {
      // Silently fail for database operations - localStorage is the primary storage
      console.debug("[v0] Cookie consent database save:", prefsError.message)
    }

    // Try audit logging, but don't fail if it's not available
    try {
      await supabase.from("cookie_consent_audit_log").insert({
        session_id: sessionId,
        action: "consent_updated",
        preferences,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      })
    } catch (auditError) {
      // Silently fail audit logging - it's not critical
      console.debug("[v0] Cookie audit log failed:", auditError)
    }
  } catch (error) {
    // Network errors, CORS issues, etc. - localStorage already has the data
    console.debug("[v0] Cookie consent sync failed (using localStorage):", error)
  }
}

export const hasUserConsented = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem(CONSENT_STORAGE_KEY) !== null
}

export const clearCookieConsent = (): void => {
  if (typeof window === "undefined") return
  localStorage.removeItem(CONSENT_STORAGE_KEY)
}
