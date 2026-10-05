// File: src/components/NewSection.tsx

export function NewSection() {
  return (
    <section
      id="yeni-section"
      className="bg-card flex flex-col items-center justify-center gap-6 py-10 px-4 sm:py-12 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 md:py-16 lg:px-12"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-3 sm:gap-4">
        <img
          src="/arrows/on-right-arrow.png"
          alt=""
          aria-hidden="true"
          width={1440}
          height={1158}
          className="h-[clamp(4.5rem,9vw,7rem)] w-auto object-contain"
        />
        <p className="text-muted max-w-xs text-center text-sm sm:text-base leading-relaxed font-semibold">
          Kruvasan: 84 kat tereyağlı hamur, sabah 07:00'de taş fırından ilk çıkan.
        </p>
      </div>

      <img
        src="/images/kruvasan.webp"
        alt="Çıtır kruvasan"
        width={500}
        height={500}
        className="h-[clamp(9rem,18vw,15rem)] w-auto shrink-0 self-center object-contain drop-shadow-lg"
      />

      <div className="flex flex-1 flex-col items-center justify-center gap-3 sm:gap-4">
        <img
          src="/arrows/on-right-arrow.png"
          alt=""
          aria-hidden="true"
          width={1440}
          height={1158}
          className="h-[clamp(4.5rem,9vw,7rem)] w-auto object-contain"
          style={{ transform: 'scaleX(-1)' }}
        />
        <p className="text-muted max-w-xs text-center text-sm sm:text-base leading-relaxed font-semibold">
          İnce katmanları ayıran hakiki tereyağı, dışında çıtır bir kabuk bırakır.
        </p>
      </div>
    </section>
  );
}
