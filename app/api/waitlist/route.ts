import { NextResponse } from "next/server";
import { env, hasSupabaseServerEnv } from "@/lib/env";
import { siteContent } from "@/lib/site-config";
import { createSupabaseAdminClient } from "@/lib/supabase";
import { isValidEmail } from "@/lib/validation";

export async function POST(request: Request) {
  let payload: { email?: string };

  try {
    payload = (await request.json()) as { email?: string };
  } catch {
    return NextResponse.json(
      { message: siteContent.genericErrorMessage },
      { status: 400 },
    );
  }

  const email = payload.email?.trim().toLowerCase() ?? "";

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
