export function NewSection() {
  return (
    <section
      id="yeni-section"
      className="bg-card flex min-h-screen flex-col items-center justify-center gap-10 py-8 md:flex-row md:items-center md:justify-between md:gap-12 md:py-12"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <img
          src="/arrows/on-right-arrow.png"
          alt=""
          aria-hidden="true"
          width={1440}
          height={1158}
          className="h-[clamp(10rem,24vh,16rem)] w-auto"
        />
        <p className="text-muted max-w-sm text-center text-lg leading-relaxed font-bold md:text-xl">
          Kruvasan: 84 kat tereyağlı hamur, sabah 06:00'da taş fırından ilk
          çıkan.
        </p>
      </div>

      <img
        src="/images/kruvasan.webp"
        alt="Çıtır kruvasan"
        width={500}
        height={500}
        className="h-[clamp(16rem,38vh,28rem)] w-auto shrink-0 self-center object-contain drop-shadow-xl"
      />

      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <img
          src="/arrows/on-right-arrow.png"
          alt=""
          aria-hidden="true"
          width={1440}
          height={1158}
          className="h-[clamp(10rem,24vh,16rem)] w-auto"
          style={{ transform: 'scaleX(-1)' }}
        />
        <p className="text-muted max-w-sm text-center text-lg leading-relaxed font-bold md:text-xl">
          İnce katmanları ayıran tereyağı, dışında çıtır bir kabuk bırakır.
        </p>
      </div>
    </section>
  );
}
