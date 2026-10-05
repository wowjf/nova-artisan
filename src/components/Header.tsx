// File: src/components/Header.tsx

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';

const leftLinks = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Katalog', to: '/katalog' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
];

const rightLinks = [
  { label: 'Rezervasyon', to: '/rezervasyon' },
  { label: 'İletişim', to: '/iletisim' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 rounded-t-[12px] bg-background/90 border-b border-border backdrop-blur-md">
      <Container className="flex h-14 sm:h-16 lg:h-18 items-center justify-between gap-3 sm:gap-4">
        {/* Desktop Left Navigation */}
        <nav aria-label="Sol menü" className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            {leftLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary font-semibold' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Brand Logo */}
        <Link
          to="/"
          aria-label="Nova Artisan ana sayfa"
          className="font-logo text-2xl sm:text-3xl leading-none text-foreground hover:opacity-90 transition-opacity"
        >
          Nova Artisan
        </Link>

        {/* Desktop Right Navigation */}
        <nav aria-label="Sağ menü" className="hidden md:flex items-center gap-5 lg:gap-7">
          <ul className="flex items-center gap-5 lg:gap-8">
            {rightLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary font-semibold' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="tel:+905462778746"
            className="rounded-full bg-primary/10 border border-primary/30 px-3.5 py-1 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            0546 277 87 46
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+905462778746"
            className="rounded-full bg-primary/10 p-2 text-primary"
            aria-label="Telefonla ara"
          >
            <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-neutral-100"
          >
            {mobileMenuOpen ? (
              <span className="text-lg leading-none">✕</span>
            ) : (
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-b border-border bg-background px-4 py-5 md:hidden shadow-lg animate-in slide-in-from-top duration-200"
        >
          <nav aria-label="Mobil menü" className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-foreground hover:bg-neutral-100"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/katalog"
              onClick={closeMenu}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-foreground hover:bg-neutral-100"
            >
              Katalog (Ürünler)
            </Link>
            <Link
              to="/hakkimizda"
              onClick={closeMenu}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-foreground hover:bg-neutral-100"
            >
              Hakkımızda
            </Link>
            <Link
              to="/rezervasyon"
              onClick={closeMenu}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-foreground hover:bg-neutral-100"
            >
              Rezervasyon & Sipariş
            </Link>
            <Link
              to="/iletisim"
              onClick={closeMenu}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-foreground hover:bg-neutral-100"
            >
              İletişim
            </Link>

            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2.5">
              <a
                href="tel:+905462778746"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-semibold text-primary-foreground"
              >
                <span>Hemen Ara: 0546 277 87 46</span>
              </a>
              <a
                href="https://www.instagram.com/nova.artisann"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-border py-2 text-xs font-semibold text-foreground"
              >
                <span>Instagram: @nova.artisann</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
