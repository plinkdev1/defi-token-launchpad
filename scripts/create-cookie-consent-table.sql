-- Create cookie_consent_preferences table for Treezures Labs
-- This table stores user cookie consent preferences with GDPR compliance

CREATE TABLE IF NOT EXISTS cookie_consent_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  session_id VARCHAR(255) NOT NULL UNIQUE,
  analytics_consent BOOLEAN DEFAULT false,
  marketing_consent BOOLEAN DEFAULT false,
  necessary_consent BOOLEAN DEFAULT true,
  preferences_consent BOOLEAN DEFAULT false,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on session_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_cookie_consent_session_id 
ON cookie_consent_preferences(session_id);

-- Create index on user_id for user-specific queries
CREATE INDEX IF NOT EXISTS idx_cookie_consent_user_id 
ON cookie_consent_preferences(user_id) WHERE user_id IS NOT NULL;

-- Create audit log table for compliance tracking
CREATE TABLE IF NOT EXISTS cookie_consent_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id VARCHAR(255) NOT NULL,
  action VARCHAR(50) NOT NULL,
  preferences JSONB NOT NULL,
  ip_address VARCHAR(50),
  user_agent TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on audit log session_id
CREATE INDEX IF NOT EXISTS idx_audit_log_session_id 
ON cookie_consent_audit_log(session_id);

-- Add RLS policies for security
ALTER TABLE cookie_consent_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE cookie_consent_audit_log ENABLE ROW LEVEL SECURITY;

-- Allow unauthenticated users to insert their consent
CREATE POLICY "Allow anonymous inserts" ON cookie_consent_preferences
  FOR INSERT WITH CHECK (true);

-- Allow users to view their own consent records
CREATE POLICY "Allow user view own preferences" ON cookie_consent_preferences
  FOR SELECT USING (
    auth.uid() IS NULL OR user_id = auth.uid() OR session_id = current_setting('app.session_id', true)
  );

-- Audit log policies
CREATE POLICY "Allow anonymous audit inserts" ON cookie_consent_audit_log
  FOR INSERT WITH CHECK (true);
