import { createClient } from "@supabase/supabase-js";

// Các biến này bạn sẽ add vào Cloudflare Dashboard hoặc file .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
