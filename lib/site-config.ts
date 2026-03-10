export const siteContent = {
  comingSoon: "COMING SOON",
  heroTitle: ["Get early", "access"],
  heroSubtitle:
    "We're getting close. Sign up to get early access when Wavy Academy launches",
  emailPlaceholder: "Your email address",
  submitLabel: "JOIN WAITLIST",
  submittingLabel: "SUBMITTING...",
  successMessage: "You're in. We'll notify you when we launch.",
  genericErrorMessage: "Something went wrong. Please try again.",
  invalidEmailMessage: "Please enter a valid email address.",
  duplicateEmailMessage: "This email is already on the waitlist.",
  configErrorMessage: "Server configuration is incomplete.",
  aboutTitle: "About",
  aboutBody:
    "Wavy Academy is a tech-driven photography learning platform that helps beginners learn and practice photography, with the aim of making creative learning simple, practical, and accessible to all.",
  logoAlt: "Wavy Academy",
  heroArtAlt: "Wavy Academy hero art",
  mottoAlt: "See first, shoot later",
} as const;

export const siteAssets = {
  logo: "/logo.svg",
  heroArt: "/IMG_4133 1.png",
  lightBulb: "/ILLUSTRATIONS-12 1.png",
  cable: "/ILLUSTRATIONS-11 1.png",
  signal: "/IMG_4178 2.png",
  motto: "/MOTTO-04 1.png",
} as const;

export const siteTheme = {
  titleText: "text-white",
  bodyText: "text-white/80",
  sectionText: "text-white/90",
  badgeText: "text-white/95",
  badgeBorder: "border-white/75",
  formShell:
    "border border-white/65 bg-black/45 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_22px_38px_rgba(0,0,0,0.42)]",
  inputText: "text-white",
  inputPlaceholder: "placeholder:text-white/35",
  inputBackground: "bg-transparent",
  buttonText: "text-white",
  buttonBackground:
    "bg-[linear-gradient(160deg,#0E466F_0%,#0A3658_42%,#0A243C_100%)]",
  buttonHover:
    "hover:bg-[linear-gradient(160deg,#126194_0%,#0E466F_42%,#0A2B47_100%)]",
  buttonDisabled: "disabled:opacity-65",
  inputRing: "focus-visible:ring-0",
  successText: "text-emerald-300",
  errorText: "text-red-300",
  contentWidth: "max-w-[880px]",
} as const;
