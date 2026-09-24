import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Kurumsal',
    links: [
      { label: 'Ana Sayfa', href: '/' },
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Sıkça Sorulan Sorular', href: '/sss' },
      { label: 'İletişim', href: '/iletisim' },
    ],
  },
  {
    title: 'Ürünler',
    links: [
      { label: 'Kruvasan', href: '/urunler#kruvasan' },
      { label: 'El Yapımı Baklava', href: '/urunler#baklava' },
      { label: 'Makaron Üçlüsü', href: '/urunler#makaron' },
      { label: 'Özel Catering', href: '/urunler#catering' },
    ],
  },
  {
    title: 'Kaynaklar',
    links: [
      { label: 'Fırın Ustası Günlüğü', href: '/firin-ustasi-gunlugu' },
      { label: 'Tarif Bülteni', href: '/tarif-bulteni' },
      { label: 'Etkinlik Galerisi', href: '/etkinlik-galerisi' },
      { label: 'Özel Fırsatlar', href: '/ozel-firsatlar' },
    ],
  },
  {
    title: 'Yasal',
    links: [
      { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
      { label: 'Gıda Güvenliği Standartları', href: '/gida-guvenligi-standartlari' },
      { label: 'Hizmet Şartları', href: '/hizmet-sartlari' },
      { label: 'Alerjen Bilgileri', href: '/alerjen-bilgileri' },
      { label: 'Çerez Ayarları', href: '/cerez-ayarlari' },
    ],
  },
];

const socials = [
  {
    name: 'LinkedIn',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z',
  },
  {
    name: 'X',
    path: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z',
  },
  {
    name: 'Instagram',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z',
  },
  {
    name: 'Facebook',
    path: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z',
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-6 pb-10 text-white md:pt-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-5 text-sm font-semibold tracking-[0.2em] uppercase">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white transition-colors hover:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-[0.2em] uppercase">
              İletişim
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li>
                <a
                  href="mailto:destek@novaartisan.com"
                  className="transition-colors hover:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  destek@novaartisan.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+903121234567"
                  className="transition-colors hover:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  +90 312 123 45 67
                </a>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="transition-colors hover:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Pzt-Cmt: 07:00 - 20:00
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white" />

        <div className="flex flex-col-reverse items-start justify-between gap-8 py-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1 text-sm text-white">
            <p>
              Nova Artisan Merkez, Gurmeler Plaza No:1, Gastronomi Mahallesi,
              Çankaya, Ankara.
            </p>
            <p>© 2026 Nova Artisan. Tüm hakları saklıdır.</p>
          </div>

          <ul className="flex items-center gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#"
                  aria-label={social.name}
                  className="flex size-11 items-center justify-center rounded-full border border-neutral-500 text-white transition-colors hover:border-white focus-visible:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-4 fill-current"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="font-logo pointer-events-none absolute inset-x-0 bottom-0 translate-y-[30%] text-center text-[clamp(6rem,18vw,16rem)] leading-none whitespace-nowrap text-neutral-800/60 select-none"
      >
        Nova Artisan
      </p>
    </footer>
  );
}
