"use client";

import { FormEvent, useState } from "react";
import { siteContent, siteTheme } from "@/lib/site-config";

type SubmitState = {
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
};

const initialSubmitState: SubmitState = {
  isLoading: false,
  isSuccess: false,
  message: "",
};

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>(initialSubmitState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ isLoading: true, isSuccess: false, message: "" });

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
        setSubmitState({
          isLoading: false,
          isSuccess: false,
          message: payload.message ?? siteContent.genericErrorMessage,
        });
        return;
      }

      setEmail("");
      setSubmitState({
        isLoading: false,
        isSuccess: true,
        message: payload.message ?? siteContent.successMessage,
      });
    } catch {
      setSubmitState({
        isLoading: false,
        isSuccess: false,
        message: siteContent.genericErrorMessage,
      });
    }
  }

  const feedbackTextColor = submitState.isSuccess ? siteTheme.successText : siteTheme.errorText;

  return (
    <div className="w-9/12">
      <form
        onSubmit={handleSubmit}
        className={`md:grid flex flex-col relative gap-3 rounded-full p-1 sm:grid-cols-[1fr_auto] sm:gap-2 ${siteTheme.formShell}`}
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
          disabled={submitState.isLoading}
          className={`h-14 md:h-12 w-full top-21 md:top-0 rounded-full absolute md:relative px-12 text-base font-medium tracking-wide transition-colors ${siteTheme.buttonText} ${siteTheme.buttonBackground} ${siteTheme.buttonHover} ${siteTheme.buttonDisabled}`}
        >
          {submitState.isLoading ? siteContent.submittingLabel : siteContent.submitLabel}
        </button>
      </form>
      {submitState.message ? (
        <p className={`sm:mt-3 mt-1 text-center text-sm sm:text-left ${feedbackTextColor}`}>
          {submitState.message}
        </p>
      ) : null}
    </div>
  );
}
