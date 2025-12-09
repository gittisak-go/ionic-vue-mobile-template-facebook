// Supabase client stub — placeholder until you add real keys.
// When ready, replace with: import { createClient } from '@supabase/supabase-js'
// and export the client created with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.

export function getSupabaseClient() {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  // Return a minimal object so other code can detect presence.
  return { url, key };
}
