import { MarqueeRow } from './MarqueeRow';

const rows = [
  { words: ['Taze Fırın', 'El Yapımı', 'Günün Ekmeği'], direction: 'left' as const },
  { words: ['Çıtır Kruvasan', 'Sıcak Kahve', 'Gül Yağı'], direction: 'right' as const },
  { words: ['Sabah Serpme', 'Akşam Tatlısı', 'Yöresel Lezzet'], direction: 'left' as const },
];

export function Sliders() {
  return (
    <section className="relative py-10 md:py-16">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        {rows.map((row) => (
          <MarqueeRow
            key={row.direction + row.words[0]}
            direction={row.direction}
            className="w-full"
          >
            {row.words.map((word) => (
              <span
                key={word}
                className="font-hero text-hero px-3 whitespace-nowrap text-foreground sm:px-5 md:px-7"
              >
                {word}
              </span>
            ))}
          </MarqueeRow>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-between px-4 sm:flex sm:px-10 lg:px-16">
        <img
          src="/images/baklava.png"
          alt="El yapımı baklava"
          width={541}
          height={461}
          className="size-[clamp(14rem,32vw,30rem)] object-contain drop-shadow-2xl"
        />
        <img
          src="/images/macaron.png"
          alt="Renkli makaron"
          width={348}
          height={348}
          className="size-[clamp(14rem,32vw,30rem)] object-contain drop-shadow-2xl"
        />
      </div>

      <img
        src="/images/kruvasan.webp"
        alt="Çıtır kruvasan"
        width={500}
        height={500}
        className="pointer-events-none absolute top-1/2 left-1/2 z-20 size-[clamp(14rem,32vw,30rem)] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-2xl"
      />
    </section>
  );
}
