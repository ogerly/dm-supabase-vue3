import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xxx.supabase.co'

/**
 * Client API Key - Safe for browser usage
 * - Has Row Level Security (RLS) enabled
 * - Limited permissions based on user authentication status
 */
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Create Supabase client with auto session persistence
export const supabase = createClient(supabaseUrl, supabaseKey)
