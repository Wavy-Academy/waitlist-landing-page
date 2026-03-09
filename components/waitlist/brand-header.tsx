import Image from "next/image";
import { siteAssets, siteContent } from "@/lib/site-config";

export function BrandHeader() {
  return (
    <>
      <Image
        src={siteAssets.logo}
        alt={siteContent.logoAlt}
        width={100}
        height={100}
        className="md:h-14 md:w-17 h-15 w-17 md:fixed relative left-2 sm:left-10"
        priority
      />
    </>
  );
}
