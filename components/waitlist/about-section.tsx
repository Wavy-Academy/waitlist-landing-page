import Image from "next/image";
import { siteAssets, siteContent, siteTheme } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section className="mx-auto mt-10 flex w-full flex-col items-center text-center sm:mt-4">
      <h2 className={`text-4xl font-bold tracking-tight sm:text-4xl ${siteTheme.sectionText}`}>
        {siteContent.aboutTitle}
      </h2>
      <p className={`mt-5 max-w-185 text-md font-normal leading-relaxed text-center sm:text-[19px] ${siteTheme.bodyText}`}>
        {siteContent.aboutBody}
      </p>
      <Image
        src={siteAssets.motto}
        alt={siteContent.mottoAlt}
        width={398}
        height={387}
        className="mt-8 h-auto w-52.5 sm:mt-5 sm:w-80"
      />
    </section>
  );
}
