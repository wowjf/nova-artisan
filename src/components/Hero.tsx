// File: src/components/Hero.tsx

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const p = Math.min(Math.max(window.scrollY / vh, 0), 1);
      section.style.setProperty('--hero-shrink', p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ana-sayfa"
      className="relative isolate overflow-hidden rounded-t-[12px] bg-foreground motion-reduce:min-h-screen"
      style={{
        marginTop: 'calc(-1 * clamp(2.5rem, 4vw, 3.5rem))',
        minHeight: 'calc(100svh - 15svh * var(--hero-shrink, 0))',
      }}
    >
      <video
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55),rgba(0,0,0,0.3))]"
      />

      <Container className="relative flex min-h-[inherit] flex-col items-center justify-center gap-4 pt-[clamp(3.5rem,5vw,4.5rem)] pb-12 text-center sm:gap-5 md:gap-6">
        <div className="inline-block rounded-full bg-black/40 border border-white/20 px-3.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
          Tokat Erbaa'da Butik ve Profesyonel Pastane
        </div>

        <h1 className="font-logo text-on-media text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          Nova Artisan
        </h1>

        <p className="max-w-lg text-on-media/90 text-sm sm:text-base leading-relaxed">
          El açması kat kat börekler, taze butik pastalar ve taş fırından çıkan artisan kruvasanlar. Tokat Erbaa'da açılışa özel lezzetlerimizi keşfedin.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 mt-1">
          <Link
            to="/katalog"
            className="bg-primary text-primary-foreground focus-visible:border-primary inline-flex h-10 sm:h-11 items-center justify-center rounded-full px-6 sm:px-7 text-xs sm:text-sm font-semibold transition-transform hover:scale-105 focus-visible:outline-none shadow-md"
          >
            Lezzet Kataloğunu İncele
          </Link>
          <Link
            to="/rezervasyon"
            className="text-on-media border-on-media/60 hover:border-on-media focus-visible:border-on-media inline-flex h-10 sm:h-11 items-center justify-center rounded-full border bg-black/30 px-6 sm:px-7 text-xs sm:text-sm font-semibold backdrop-blur-sm transition-colors focus-visible:outline-none"
          >
            Rezervasyon & Sipariş
          </Link>
        </div>
      </Container>
    </section>
  );
}
