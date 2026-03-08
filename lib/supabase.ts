import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

export function createSupabaseAdminClient() {
  return createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
