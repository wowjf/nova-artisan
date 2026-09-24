import { useEffect, useRef } from 'react';
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
        marginTop: 'calc(-1 * clamp(3rem, 5vw, 4.5rem))',
        minHeight: 'calc(100svh - 20svh * var(--hero-shrink, 0))',
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
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5),rgba(0,0,0,0.25))]"
      />

      <Container className="relative flex min-h-[inherit] flex-col items-center justify-center gap-6 pt-[clamp(5rem,7vw,6.5rem)] pb-16 text-center md:gap-8">
        <p className="font-logo text-on-media text-5xl drop-shadow-md md:text-7xl">
          Nova Artisan
        </p>
        <p className="max-w-xl text-on-media/90 text-base md:text-lg">
          El yapımı fırın ürünleri, taze kahve ve güne güzel bir başlangıç.
          Açılışa özel %20 indirimle tanışın.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#rezervasyon"
            className="bg-primary text-primary-foreground focus-visible:border-primary focus-visible:border-3 inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-semibold transition-transform hover:scale-105 focus-visible:outline-none"
          >
            Rezervasyon Yap
          </a>
          <a
            href="#menu"
            className="text-on-media border-on-media/40 hover:border-on-media focus-visible:border-on-media inline-flex h-12 items-center justify-center rounded-full border-2 bg-transparent px-8 text-base font-semibold backdrop-blur-sm transition-colors focus-visible:outline-none"
          >
            Menüyü Gör
          </a>
        </div>
      </Container>
    </section>
  );
}
