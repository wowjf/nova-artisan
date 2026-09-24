import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Tarif Bülteni ücretsiz mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet, bülten tamamen ücretsizdir. Ayda bir e-posta, dilediğiniz zaman tek tıkla ayrılma hakkı.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bültende neler var?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mevsimlik tarifler, fırın sırları, yeni ürünlerin ilk haberleri ve abonelere özel indirimler.',
      },
    },
    {
      '@type': 'Question',
      name: 'E-postam üçüncü taraflarla paylaşılıyor mu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hayır. Adresiniz yalnızca bülteni göndermek için kullanılır, satılmaz veya paylaşılmaz.',
      },
    },
  ],
};

export function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:destek@novaartisan.com?subject=${encodeURIComponent(
      'Tarif Bülteni Aboneliği'
    )}&body=${encodeURIComponent(`Merhaba, bültene abone olmak istiyorum: ${email}`)}`;
    setSent(true);
  };

  return (
    <>
      <Seo
        title="Tarif Bülteni — Ücretsiz E-Bülten | Nova Artisan"
        description="Ayda bir e-postanıza: mevsimlik tarifler, fırın sırları, yeni ürünlerin ilk haberi ve abonelere özel indirimler. Ücretsiz abonelik."
        jsonLd={faqJsonLd}
      />
      <PageTemplate
        eyebrow="Kaynaklar"
        title="Tarif Bülteni"
        intro="Her ay e-postana gelen mevsimlik tarifler, fırın sırları ve yeni ürünlerin ilk haberleri."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="mb-4 text-2xl font-black text-foreground">
              Bültende Sizi Neler Bekliyor?
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                'Ayın tarifi: ustamızın seçtiği, ev fırınına uyarlanmış sezonluk tarif',
                'Fırın sırrı: profesyonel tekniğin tek adımlık özeti',
                'Yeni ürün duyuruları — vitrine çıkmadan 48 saat önce',
                'Abonelere özel indirimler ve ön sipariş hakkı',
                'Etkinlik davetleri: atölye çalışmaları ve tadım günleri',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="text-primary mt-1">
                    ✦
                  </span>
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 mb-4 text-lg font-bold text-foreground">
              Sıkça Sorulan Sorular
            </h3>
            <dl className="flex flex-col gap-4">
              <div>
                <dt className="font-semibold text-foreground">
                  Tarif Bülteni ücretsiz mi?
                </dt>
                <dd className="text-muted text-sm">
                  Evet, tamamen ücretsiz. Ayda bir e-posta, tek tıkla ayrılma
                  hakkı.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  E-postam paylaşılıyor mu?
                </dt>
                <dd className="text-muted text-sm">
                  Hayır. Adresiniz yalnızca bülteni göndermek için kullanılır,
                  satılmaz veya paylaşılmaz.
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <form
              onSubmit={submit}
              className="bg-card flex flex-col gap-4 rounded-2xl border border-border p-6"
            >
              <label htmlFor="newsletter-email" className="font-semibold text-foreground">
                E-posta adresiniz
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@eposta.com"
                className="focus:border-primary h-12 rounded-lg border border-border bg-background px-4 text-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground inline-flex h-12 items-center justify-center rounded-full px-8 font-semibold transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
              >
                Bültene Katıl
              </button>
              <p aria-live="polite" className="text-muted text-xs">
                {sent
                  ? 'E-posta uygulamanız açıldı — mesajı göndererek aboneliğinizi tamamlayın.'
                  : 'Ayda bir e-posta. Spam yok, tek tıkla ayrılma.'}
              </p>
            </form>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[24rem] border-collapse text-sm">
                <caption className="mb-3 text-left font-semibold text-foreground">
                  Bülten İstatistikleri
                </caption>
                <thead>
                  <tr className="border-b border-border text-left">
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Metrik
                    </th>
                    <th scope="col" className="py-3 font-semibold">
                      Değer
                  </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Yayın sıklığı', 'Ayda 1 sayı'],
                    ['Ortalama okunma süresi', '4 dakika'],
                    ['Açılma oranı', '%68'],
                    ['Abone sayısı', '4.200+'],
                  ].map(([m, v]) => (
                    <tr key={m} className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">{m}</td>
                      <td className="text-primary py-3 font-medium">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/firin-ustasi-gunlugu" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Fırın Ustası Günlüğü
            </Link>
            <Link to="/etkinlik-galerisi" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Etkinlik Galerisi
            </Link>
            <Link to="/ozel-firsatlar" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Özel Fırsatlar
            </Link>
            <Link to="/gizlilik-politikasi" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
