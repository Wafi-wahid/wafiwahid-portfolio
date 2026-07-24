import Image from "next/image";
import { site } from "@/data/site";

export default function HeroPortrait() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[var(--color-panel)] scale-75">
      <Image
        src={site.headshot}
        alt={`${site.name} headshot`}
        fill
        priority
        unoptimized
        sizes="(max-width: 768px) 90vw, 420px"
        className="object-cover object-top"
      />
    </div>
  );
}
