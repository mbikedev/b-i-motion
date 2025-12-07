import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// For build time, use dummy values if env vars are missing
// This prevents build errors while still requiring env vars at runtime
const buildTimeUrl = supabaseUrl || 'https://placeholder.supabase.co';
const buildTimeAnonKey = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder';
const buildTimeServiceKey = supabaseServiceRoleKey || buildTimeAnonKey;

// Client for public operations (client-side)
export const supabase = createClient(buildTimeUrl, buildTimeAnonKey);

// Admin client for server-side operations that bypass RLS
export const supabaseAdmin = createClient(buildTimeUrl, buildTimeServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

// Runtime check helper - use this in API routes to ensure env vars are present
export function ensureSupabaseConfig() {
    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Missing Supabase environment variables. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
    }
}
