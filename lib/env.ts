export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  waitlistTable: process.env.SUPABASE_WAITLIST_TABLE ?? "waitlist",
};

export function hasSupabaseServerEnv(): boolean {
  return Boolean(env.supabaseUrl && env.supabaseServiceRoleKey);
}
