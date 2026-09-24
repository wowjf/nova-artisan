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
      <section className="relative isolate overflow-hidden rounded-t-[12px] bg-foreground pt-16 pb-20 md:pt-24 md:pb-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(176,141,87,0.25),transparent_60%)]"
        />
        <Container className="relative">
          <p className="text-on-media/80 text-xs font-semibold tracking-[0.3em] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-black text-white md:text-6xl">
            {title}
          </h1>
          <p className="text-on-media/90 mt-6 max-w-xl text-base md:text-lg">
            {intro}
          </p>
        </Container>
      </section>

      <main className="flex-1 py-16 md:py-24">
        <Container>
          {children ?? (
            <p className="text-muted">
              Bu sayfanın içeriği yakında eklenecek.
            </p>
          )}
        </Container>
      </main>
    </div>
  );
}
