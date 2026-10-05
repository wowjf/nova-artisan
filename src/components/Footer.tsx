// File: src/components/Footer.tsx

import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Kurumsal',
    links: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Ürün Kataloğu', href: '/katalog' },
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Masa & Pasta Rezervasyonu', href: '/rezervasyon' },
      { label: 'İletişim & Konum', href: '/iletisim' },
      { label: 'Sıkça Sorulan Sorular', href: '/sss' },
    ],
  },
  {
    title: 'Lezzetlerimiz',
    links: [
      { label: 'Butik Pastalar', href: '/katalog?kategori=pastalar' },
      { label: 'Fırın Börekleri', href: '/katalog?kategori=borekler' },
      { label: 'El Yapımı Kruvasan', href: '/katalog?kategori=kruvasanlar' },
      { label: 'Geleneksel Baklava', href: '/katalog?kategori=baklavalar' },
      { label: 'Makaron & Kurabiye', href: '/katalog?kategori=kurabiyeler' },
      { label: 'Nitelikli Kahveler', href: '/katalog?kategori=icecekler' },
    ],
  },
  {
    title: 'Bilgilendirme',
    links: [
      { label: 'Fırın Günlüğü', href: '/firin-ustasi-gunlugu' },
      { label: 'Özel Fırsatlar', href: '/ozel-firsatlar' },
      { label: 'Gıda Güvenliği Standartları', href: '/gida-guvenligi-standartlari' },
      { label: 'Alerjen Bilgileri', href: '/alerjen-bilgileri' },
      { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-8 pb-10 text-white sm:pt-10 sm:pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-neutral-300 uppercase">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-neutral-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact Details Column */}
          <div>
            <h3 className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-neutral-300 uppercase">
              İletişim & Atölye
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <span className="block text-[11px] text-neutral-500">Adres:</span>
                <span className="text-white">
                  Fevzipaşa, Atatürk Cd., 60500 Erbaa / Tokat
                </span>
              </li>
              <li>
                <span className="block text-[11px] text-neutral-500">Telefon:</span>
                <a
                  href="tel:+905462778746"
                  className="text-white hover:text-primary transition-colors font-medium"
                >
                  +90 546 277 87 46
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-neutral-500">E-posta:</span>
                <a
                  href="mailto:destek@novaartisanbakery.com"
                  className="text-white hover:text-primary transition-colors break-all"
                >
                  destek@novaartisanbakery.com
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-neutral-500">Instagram:</span>
                <a
                  href="https://www.instagram.com/nova.artisann"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  @nova.artisann
                </a>
              </li>
              <li className="pt-1 text-[11px] text-neutral-500">
                Pazartesi – Cumartesi: 07:00 – 20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-neutral-800" />

        <div className="flex flex-col-reverse items-start justify-between gap-4 py-5 sm:flex-row sm:items-center text-xs text-neutral-500">
          <div>
            <p>
              Nova Artisan — Tokat Erbaa Butik ve Profesyonel Pastanesi.
            </p>
            <p className="mt-0.5">
              © 2026 Nova Artisan Bakery. Tüm hakları saklıdır.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/nova.artisann"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-1.5 rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300 hover:border-white hover:text-white transition-colors"
            >
              <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@nova.artisann</span>
            </a>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="font-logo pointer-events-none absolute inset-x-0 bottom-0 translate-y-[20%] text-center text-[clamp(3.5rem,9vw,7.5rem)] leading-none whitespace-nowrap text-neutral-800/30 select-none"
      >
        Nova Artisan
      </p>
    </footer>
  );
}
