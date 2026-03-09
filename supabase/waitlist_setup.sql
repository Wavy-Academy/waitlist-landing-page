-- Waitlist table setup for the Next.js API route at /api/waitlist
-- Safe to run multiple times.

create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  email text not null,
  created_at timestamptz not null default now(),
  constraint waitlist_email_unique unique (email)
);

alter table public.waitlist enable row level security;

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);
