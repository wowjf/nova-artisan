import { Link } from 'react-router-dom';
import { Container } from './Container';

const leftLinks = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'İletişim', to: '/iletisim' },
];

const rightLinks = [
  { label: 'Menü', to: '/urunler' },
  { label: 'Rezervasyon', to: '/iletisim' },
  { label: 'Sipariş', to: '/urunler#catering' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 rounded-t-[12px] bg-background/80 border-b border-border backdrop-blur-md">
      <Container className="flex h-[clamp(4rem,6vw,5.5rem)] items-center justify-between gap-4">
        <nav aria-label="Sol menü" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-12">
            {leftLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/"
          aria-label="Nova Artisan ana sayfa"
          className="font-logo text-3xl leading-none"
        >
          Nova Artisan
        </Link>

        <nav aria-label="Sağ menü" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-12">
            {rightLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
