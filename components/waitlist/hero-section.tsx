import Image from "next/image";
import { siteAssets, siteContent, siteTheme } from "@/lib/site-config";
import { WaitlistForm } from "./waitlist-form";

export function HeroSection() {
  return (
    <section className="relative mx-auto mt-4 flex w-full max-w-190 flex-col items-center sm:mt-22 text-center">
      <span
        className={`rounded-full border px-6 py-2 text-sm font-medium tracking-[0.08em] ${siteTheme.badgeBorder} ${siteTheme.badgeText}`}
      >
        {siteContent.comingSoon}
      </span>

      <div className="relative mt-5">
        <Image
          src={siteAssets.cable}
          alt=""
          width={72}
          height={72}
          priority={true}
          className="pointer-events-none absolute -right-10 -top-8 h-14 w-14 sm:-right-15 sm:-top-6 sm:h-20 sm:w-20"
        />
        <Image
          src={siteAssets.lightBulb}
          alt=""
          width={58}
          height={58}
          priority={true}
          className="pointer-events-none absolute left-1 top-14 h-13 w-13 -rotate-1 sm:-left-6 sm:top-17 sm:h-24 sm:w-24"
        />
        <h1
          className={`text-6xl font-semibold tracking-wide sm:text-[85px] ${siteTheme.titleText}`}
        >
          {siteContent.heroTitle[0]}
          <br />
          {siteContent.heroTitle[1]}
        </h1>
      </div>

      <div className="mt-8 max-w-150 px-2">
        <p className={`text-sm font-normal leading-relaxed sm:text-[20px] ${siteTheme.bodyText}`}>
          {siteContent.heroSubtitle}
        </p>
        <Image
        src={siteAssets.signal}
        alt=""
        width={66}
        height={66}
        priority={true}
        className="pointer-events-none absolute right-8 top-54 h-14 w-14 rotate-13 sm:right-14 sm:top-55 sm:h-24 sm:w-24"
      />
      </div>

      

      <div className="relative mt-10 w-full max-w-185 px-2 sm:px-0">
        <Image
          src={siteAssets.cable}
          alt=""
          width={52}
          height={52}
          priority={true}
          className="pointer-events-none absolute left-5 -top-4 h-12 w-12 rotate-90 sm:left-12 sm:-top-7 sm:h-16 sm:w-16"
        />
        <div className="flex justify-center w-full">
        <WaitlistForm />
        </div>
      </div>

      <div className="relative mt-16 sm:mt-10">
        <Image
          src={siteAssets.heroArt}
          alt={siteContent.heroArtAlt}
          width={500}
          height={500}
          className="mx-auto h-auto w-90 sm:w-130"
          priority
        />
      </div>
    </section>
  );
}
