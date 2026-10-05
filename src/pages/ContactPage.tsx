// File: src/pages/ContactPage.tsx

import { useState, type FormEvent } from 'react';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Bakery',
    name: 'Nova Artisan',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fevzipaşa, Atatürk Cd.',
      addressLocality: 'Erbaa',
      addressRegion: 'Tokat',
      postalCode: '60500',
      addressCountry: 'TR',
    },
    telephone: '+905462778746',
    email: 'destek@novaartisanbakery.com',
  },
};

const weekHours: [string, string][] = [
  ['Pazartesi', '07:00–20:00'],
  ['Salı', '07:00–20:00'],
  ['Çarşamba', '07:00–20:00'],
  ['Perşembe', '07:00–20:00'],
  ['Cuma', '07:00–20:00'],
  ['Cumartesi', '07:00–20:00'],
  ['Pazar', '08:00–19:00'],
];

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Seo
        title="İletişim & Konum — Erbaa Tokat Fırın & Pastane | Nova Artisan"
        description="Nova Artisan Tokat Erbaa iletişim bilgileri: Fevzipaşa Atatürk Caddesi fırın adresi, telefon 0546 277 87 46, e-posta, Instagram ve Google Haritalar konumu."
        jsonLd={contactJsonLd}
      />
      <PageTemplate
        eyebrow="Erbaa / Tokat Butik Pastanesi"
        title="İletişim & Ulaşım"
        intro="Özel pasta siparişleriniz, toplu börek talepleriniz veya fırınımız hakkındaki tüm sorularınız için bize telefon, e-posta ya da WhatsApp üzerinden doğrudan ulaşabilirsiniz."
      >
        <section aria-label="İletişim Bilgileri">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <span className="text-lg">📍</span>
              <h3 className="mt-1.5 text-sm font-bold text-foreground">Fırın Adresi</h3>
              <p className="text-muted mt-1.5 text-xs leading-relaxed">
                Fevzipaşa, Atatürk Cd., 60500 Erbaa / Tokat
              </p>
              <p className="mt-2 text-[11px] font-semibold text-primary">
                Atatürk Caddesi üzerinde
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <span className="text-lg">📞</span>
              <h3 className="mt-1.5 text-sm font-bold text-foreground">Telefon & Sipariş</h3>
              <p className="mt-1.5 text-xs leading-relaxed">
                <a
                  href="tel:+905462778746"
                  className="text-primary font-bold text-xs sm:text-sm hover:underline"
                >
                  +90 546 277 87 46
                </a>
              </p>
              <p className="text-muted mt-1 text-[11px] leading-relaxed">
                Haftanın her günü sıcak fırın saatlerinde aktiftir.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <span className="text-lg">✉️</span>
              <h3 className="mt-1.5 text-sm font-bold text-foreground">E-posta</h3>
              <p className="mt-1.5 text-xs leading-relaxed">
                <a
                  href="mailto:destek@novaartisanbakery.com"
                  className="text-primary font-medium hover:underline break-all text-xs"
                >
                  destek@novaartisanbakery.com
                </a>
              </p>
              <p className="text-muted mt-1 text-[11px] leading-relaxed">
                Kurumsal ve catering talepleri için.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <span className="text-lg">📷</span>
              <h3 className="mt-1.5 text-sm font-bold text-foreground">Instagram</h3>
              <p className="mt-1.5 text-xs leading-relaxed">
                <a
                  href="https://www.instagram.com/nova.artisann"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-medium hover:underline text-xs"
                >
                  @nova.artisann
                </a>
              </p>
              <p className="text-muted mt-1 text-[11px] leading-relaxed">
                Günlük taze vitrin paylaşımları.
              </p>
            </div>
          </div>
        </section>

        {/* Çalışma Saatleri ve Harita */}
        <section aria-label="Harita ve Saatler" className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4 sm:p-5 lg:col-span-1">
            <h3 className="text-base font-bold text-foreground">
              Çalışma Saatlerimiz
            </h3>
            <p className="mt-0.5 text-xs text-muted">
              Sabah ilk böreklerimiz 07:00'de vitrinde.
            </p>

            <ul className="mt-4 divide-y divide-border/60 text-xs">
              {weekHours.map(([gun, saat]) => (
                <li key={gun} className="flex justify-between py-2">
                  <span className="font-medium text-foreground">{gun}</span>
                  <span className="font-mono text-muted">{saat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card lg:col-span-2">
            <div className="h-64 sm:h-72 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d189.13818290325258!2d36.56771181795871!3d40.66932126066707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1789939511130!5m2!1str!2str"
                title="Nova Artisan Erbaa Haritası"
                className="size-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="p-3 text-xs text-muted flex items-center justify-between">
              <span>Fevzipaşa, Atatürk Cd., 60500 Erbaa / Tokat</span>
              <a
                href="https://maps.google.com/?q=40.669321,36.567711"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Haritada Aç ↗
              </a>
            </div>
          </div>
        </section>

        {/* Mesaj Formu */}
        <section aria-label="İletişim Formu" className="mt-8 sm:mt-10">
          <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              Bize Mesaj Gönderin
            </h3>
            <p className="mt-0.5 text-xs text-muted">
              Formu doldurun, talebinizi aynı gün içinde yanıtlayalım.
            </p>

            {sent ? (
              <div className="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-5 text-center">
                <p className="text-xs sm:text-sm font-semibold text-primary">
                  Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs text-foreground underline cursor-pointer"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-4 grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-semibold text-foreground">
                    Adınız Soyadınız *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-xs font-semibold text-foreground">
                    Telefon Numaranız
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0546 277 87 46"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-semibold text-foreground">
                    E-posta Adresiniz *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1 block text-xs font-semibold text-foreground">
                    Konu *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Özel Pasta, Toplu Börek Siparişi"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1 block text-xs font-semibold text-foreground">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="sm:col-span-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-95 cursor-pointer"
                  >
                    Mesajı Gönder
                  </button>
                  <a
                    href="https://wa.me/905462778746"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    WhatsApp ile yazın ↗
                  </a>
                </div>
              </form>
            )}
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
