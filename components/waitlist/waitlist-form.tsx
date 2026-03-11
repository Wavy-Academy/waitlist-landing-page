"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { siteContent, siteTheme } from "@/lib/site-config";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        toast.error(payload.message ?? siteContent.genericErrorMessage, { autoClose: 5000 });
        return;
      }

      setEmail("");
      toast.success(payload.message ?? siteContent.successMessage);
    } catch {
      toast.error(siteContent.genericErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-9/12">
      <form
        onSubmit={handleSubmit}
        className={`sm:grid flex flex-col relative gap-3 rounded-full p-1 sm:grid-cols-[1fr_auto] sm:gap-2 ${siteTheme.formShell}`}
      >
        <label className="sr-only" htmlFor="email">
          {siteContent.emailPlaceholder}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={siteContent.emailPlaceholder}
          autoComplete="email"
          required
          className={`h-12 rounded-full relative px-5 text-lg outline-none ${siteTheme.inputBackground} ${siteTheme.inputText} ${siteTheme.inputPlaceholder}`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`h-14 md:h-12 w-full top-21 md:top-0 rounded-full absolute md:relative px-12 text-base font-medium tracking-wide transition-colors ${siteTheme.buttonText} ${siteTheme.buttonBackground} ${siteTheme.buttonHover} ${siteTheme.buttonDisabled}`}
        >
          {isSubmitting ? siteContent.submittingLabel : siteContent.submitLabel}
        </button>
      </form>
    </div>
  );
}
