// File: src/components/Sliders.tsx

import { MarqueeRow } from './MarqueeRow';

const rows = [
  { words: ['Taze Fırın', 'El Yapımı', 'Günün Ekmeği'], direction: 'left' as const },
  { words: ['Çıtır Kruvasan', 'Sıcak Kahve', 'Gül Yağı'], direction: 'right' as const },
  { words: ['Sabah Serpme', 'Akşam Tatlısı', 'Yöresel Lezzet'], direction: 'left' as const },
];

export function Sliders() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 md:py-12">
      <div className="flex flex-col items-center gap-1.5 sm:gap-2.5 md:gap-3">
        {rows.map((row) => (
          <MarqueeRow
            key={row.direction + row.words[0]}
            direction={row.direction}
            className="w-full"
          >
            {row.words.map((word) => (
              <span
                key={word}
                className="font-hero text-hero px-2 whitespace-nowrap text-foreground sm:px-4 md:px-6"
              >
                {word}
              </span>
            ))}
          </MarqueeRow>
        ))}
      </div>

      {/* Floating Product Accents - Balanced Scales */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-between px-4 sm:flex sm:px-8 lg:px-14">
        <img
          src="/images/baklava.png"
          alt="El yapımı baklava"
          width={541}
          height={461}
          className="size-[clamp(7rem,15vw,13rem)] object-contain drop-shadow-xl transition-transform hover:scale-105"
        />
        <img
          src="/images/macaron.png"
          alt="Renkli makaron"
          width={348}
          height={348}
          className="size-[clamp(7rem,15vw,13rem)] object-contain drop-shadow-xl transition-transform hover:scale-105"
        />
      </div>

      <img
        src="/images/kruvasan.webp"
        alt="Çıtır kruvasan"
        width={500}
        height={500}
        className="pointer-events-none absolute top-1/2 left-1/2 z-20 size-[clamp(7.5rem,16vw,14rem)] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl"
      />
    </section>
  );
}
