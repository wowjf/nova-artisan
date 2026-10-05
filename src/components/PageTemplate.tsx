// File: src/components/PageTemplate.tsx

import type { ReactNode } from 'react';
import { Container } from './Container';

export function PageTemplate({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <section className="relative isolate overflow-hidden rounded-t-[12px] bg-foreground pt-8 pb-10 sm:pt-12 sm:pb-14 md:pt-16 md:pb-18">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(176,141,87,0.25),transparent_60%)]"
        />
        <Container className="relative">
          <p className="text-on-media/80 text-[11px] font-semibold tracking-[0.25em] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-black text-white">
            {title}
          </h1>
          <p className="text-on-media/90 mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            {intro}
          </p>
        </Container>
      </section>

      <main className="flex-1 py-8 sm:py-10 md:py-14">
        <Container>
          {children ?? (
            <p className="text-muted text-sm">
              Bu sayfanın içeriği yakında eklenecek.
            </p>
          )}
        </Container>
      </main>
    </div>
  );
}
