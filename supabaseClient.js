import { createClient } from "@supabase/supabase-js";

// Get these from your Supabase project settings → API
const supabaseUrl = "https://mngpkdexjhzutmrkpjfr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uZ3BrZGV4amh6dXRtcmtwamZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjY4MzgsImV4cCI6MjA3MzgwMjgzOH0.NSSkUfrwQBmKayQuYL9wUDZl_t9dJGWePnx1uz9f7mY";

export const supabase = createClient(supabaseUrl, supabaseKey);
