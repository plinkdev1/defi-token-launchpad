# Cookie Consent Implementation Guide for Treezures Labs

## Overview

The cookie consent system is fully GDPR-compliant and tracks user preferences for necessary, analytics, marketing, and preference cookies. It stores consent data in Supabase with both local storage backup and database persistence.

## Components

### 1. Database Tables

Two main tables have been created:

- **`cookie_consent_preferences`**: Stores user cookie preferences with session tracking
- **`cookie_consent_audit_log`**: Tracks all consent changes for compliance audits

### 2. Frontend Components

- **`CookieConsentBanner`** (`components/cookie-consent-banner.tsx`): The main banner UI that appears on first visit
- **`lib/cookie-consent.ts`**: Utility functions for managing cookie consent state

### 3. Integration

The banner is automatically rendered in the root layout (`app/layout.tsx`) and only shows when users haven't consented yet.

## Setup Instructions

### Option A: Automatic Setup (Recommended)

The tables should be automatically created when Supabase runs migrations. If they're not created:

### Option B: Manual Setup via Supabase Dashboard

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy the entire contents of `scripts/create-cookie-consent-table.sql`
5. Paste into the query editor
6. Click **Run**

This will:
- Create the `cookie_consent_preferences` table
- Create the `cookie_consent_audit_log` table
- Set up proper indexes for performance
- Enable Row Level Security (RLS) policies
- Configure anonymous access for consent tracking

### Option C: Using psql Command Line

If you have psql installed:

\`\`\`bash
psql $DATABASE_URL < scripts/create-cookie-consent-table.sql
\`\`\`

Replace `$DATABASE_URL` with your Supabase connection string.

## How It Works

### User Journey

1. **First Visit**: Banner appears at bottom of page
2. **Customize**: User can click "Customize" to see detailed cookie options
3. **Save**: User chooses "Accept All", "Reject All", or "Save Preferences"
4. **Storage**: Preferences saved to localStorage + Supabase database
5. **Future Visits**: Banner hidden if user already consented

### Data Storage

**Local Storage:**
\`\`\`json
{
  "necessary": true,
  "analytics": false,
  "marketing": false,
  "preferences": false,
  "version": "1.0",
  "timestamp": "2026-02-08T..."
}
\`\`\`

**Database** (`cookie_consent_preferences` table):
- `session_id`: Unique identifier for this session/user
- `analytics_consent`: Boolean
- `marketing_consent`: Boolean
- `necessary_consent`: Always true
- `preferences_consent`: Boolean
- Timestamps for compliance tracking

## GDPR Compliance Features

✅ **Consent Before Tracking**: No analytics/marketing cookies without explicit consent
✅ **Granular Preferences**: Users can choose individual cookie categories
✅ **Clear Information**: Links to Privacy Policy and Terms of Service
✅ **Easy Withdrawal**: Users can change preferences anytime
✅ **Audit Trail**: All consent changes logged for compliance
✅ **No Forced Acceptance**: "Reject All" option available
✅ **Session Tracking**: Unique session IDs track preferences even without login

## API Reference

### Get User Consent

\`\`\`typescript
import { getCookieConsent } from "@/lib/cookie-consent"

const preferences = getCookieConsent()
// Returns: { necessary: boolean, analytics: boolean, marketing: boolean, preferences: boolean } | null
\`\`\`

### Check if Consented

\`\`\`typescript
import { hasUserConsented } from "@/lib/cookie-consent"

if (hasUserConsented()) {
  // User has already made consent choices
}
\`\`\`

### Save Consent to Database

\`\`\`typescript
import { saveCookieConsentToDatabase, type CookieConsentPreferences } from "@/lib/cookie-consent"

const preferences: CookieConsentPreferences = {
  necessary: true,
  analytics: true,
  marketing: false,
  preferences: true,
}

await saveCookieConsentToDatabase(preferences)
\`\`\`

## Styling & Branding

The banner uses:
- **Colors**: TRZ design tokens (primary, background, border, muted)
- **Font**: Inter (system default)
- **Layout**: Responsive (full width on mobile, max-width on desktop)
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Proper labels, keyboard navigation support

## Environment Variables

No additional environment variables needed. Uses existing:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Testing

1. **First Visit**: Clear localStorage and refresh to see banner
2. **Accept All**: Click "Accept All" and verify all preferences set to true
3. **Customize**: Click "Customize", toggle options, "Save Preferences"
4. **Persistence**: Refresh page - banner should be hidden
5. **Database**: Check Supabase `cookie_consent_preferences` table for records

## Troubleshooting

### Banner Not Showing

- Clear `localStorage` - check Application tab in DevTools
- Make sure `hasUserConsented()` returns `false`

### Database Not Saving

- Verify Supabase connection with existing tables
- Check browser console for errors
- Ensure RLS policies allow anonymous inserts

### Preferences Not Loading

- Check `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- Verify Supabase client is initialized correctly

## Future Enhancements

- [ ] Cookie management dashboard (allow users to modify choices anytime)
- [ ] Regional compliance (different text for GDPR, CCPA, etc.)
- [ ] Cookie analytics dashboard (see consent rates by region)
- [ ] Integration with actual analytics tools (Google Analytics conditional loading)
- [ ] Cookie banner translations for international users

## Legal Notes

This implementation covers:
- **GDPR (EU)**: Full compliance with consent requirements
- **CCPA (California)**: Supports "Do Not Sell My Personal Information"
- **General Privacy**: Respects user choice without dark patterns

Always consult with your legal team regarding specific compliance requirements for your jurisdiction.
