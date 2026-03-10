import { NextResponse } from "next/server";
import { env, hasSupabaseServerEnv } from "@/lib/env";
import { siteContent } from "@/lib/site-config";
import { createSupabaseAdminClient } from "@/lib/supabase";
import { isValidEmail } from "@/lib/validation";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 4;
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const ip = forwardedFor.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const userAgent = request.headers.get("user-agent")?.slice(0, 120) ?? "unknown";
  return `${ip || realIp || "unknown"}:${userAgent}`;
}

function isRateLimited(request: Request): boolean {
  const now = Date.now();
  const key = getClientKey(request);
  const entry = rateLimitStore.get(key);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  let payload: { email?: string };

  if (isRateLimited(request)) {
    return NextResponse.json(
      { message: siteContent.genericErrorMessage },
      { status: 429 },
    );
  }

  try {
    payload = (await request.json()) as { email?: string };
  } catch {
    return NextResponse.json(
      { message: siteContent.genericErrorMessage },
      { status: 400 },
    );
  }

  const email = payload.email?.trim().toLowerCase() ?? "";

  if (email.length > 320) {
    return NextResponse.json(
      { message: siteContent.invalidEmailMessage },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: siteContent.invalidEmailMessage },
      { status: 400 },
    );
  }

  if (!hasSupabaseServerEnv()) {
    return NextResponse.json(
      { message: siteContent.configErrorMessage },
      { status: 500 },
    );
  }

  const supabase = createSupabaseAdminClient();

  const { error } = await supabase.from(env.waitlistTable).insert({ email });

  if (error?.code === "23505") {
    return NextResponse.json(
      { message: siteContent.duplicateEmailMessage },
      { status: 409 },
    );
  }

  if (error) {
    return NextResponse.json(
      { message: siteContent.genericErrorMessage },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: siteContent.successMessage }, { status: 201 });
}
