import { AboutSection } from "@/components/waitlist/about-section";
import { BrandHeader } from "@/components/waitlist/brand-header";
import { HeroSection } from "@/components/waitlist/hero-section";
import { siteTheme } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto flex w-full flex-col px-3 pt-0 sm:px-4 sm:pt-2 ">
        <BrandHeader />
        <div className={`mx-auto w-full ${siteTheme.contentWidth}`}>
          <HeroSection />
          <AboutSection />
        </div>
      </div>
    </main>
  );
}
