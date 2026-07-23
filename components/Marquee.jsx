import { site } from "@/data/site";

export default function Marquee() {
  const items = [...site.marquee, ...site.marquee];

  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#8750f7] to-[#6d28d9] py-4 text-white">
      <div className="marquee-track gap-8 px-4">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em]">
            {item}
            <span aria-hidden className="text-white/70">
              +
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
