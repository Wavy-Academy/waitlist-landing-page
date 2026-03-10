import Image from "next/image";
import { siteAssets, siteContent } from "@/lib/site-config";

export function BrandHeader() {
  return (
    <>
      <Image
        src={siteAssets.logo}
        alt={siteContent.logoAlt}
        width={200}
        height={200}
        className="md:h-24 md:w-26 h-22 w-24 md:fixed relative left-2 sm:left-10"
        priority
      />
    </>
  );
}
