import { Link } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

const offerJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Açılışa Özel %20 İndirim',
  description:
    'Nova Artisan açılış kampanyası: tüm el yapımı fırın ürünlerinde %20 indirim.',
  availability: 'https://schema.org/InStock',
  priceCurrency: 'TRY',
};

const offers = [
  {
    badge: 'Açılış',
    title: '%20 Açılış İndirimi',
    desc: 'Tüm el yapımı ürünlerde geçerli. Kasada belirtmeniz yeterli.',
    detail: '31 Ekim 2026\'ya kadar',
    highlight: true,
  },
  {
    badge: 'Sabah',
    title: 'Sabah Serpme %15',
    desc: '07:00–09:00 arası günlük ürünlerde ikinci ürüne %15 indirim.',
    detail: 'Her gün',
  },
  {
    badge: 'Bülten',
    title: 'Abonelere Özel Fırsatlar',
    desc: 'Bülten abonelerine ön sipariş hakkı ve dönemsel kuponlar.',
    detail: 'Sürekli',
  },
  {
    badge: 'Kurumsal',
    title: 'Toplu Sipariş Avantajı',
    desc: '50+ kişilik kurumsal catering siparişlerinde kademeli indirim.',
    detail: 'Teklif üzerine',
  },
];

export function OffersPage() {
  return (
    <>
      <Seo
        title="Özel Fırsatlar — İndirimler ve Kampanyalar | Nova Artisan"
        description="Açılışa özel %20 indirim, sabah serpme fırsatları, bülten abonelerine özel kuponlar ve kurumsal catering avantajları."
        jsonLd={offerJsonLd}
      />
      <PageTemplate
        eyebrow="Kaynaklar"
        title="Özel Fırsatlar"
        intro="Açılışa özel %20 indirimden başlayarak sezonluk kampanyalar ve sadık misafir avantajları."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className={`relative flex flex-col gap-3 rounded-2xl border p-6 ${
                offer.highlight
                  ? 'border-primary bg-card'
                  : 'border-border bg-card'
              }`}
            >
              {offer.highlight && (
                <span className="bg-primary text-primary-foreground absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold">
                  Şu an aktif
                </span>
              )}
              <span className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
                {offer.badge}
              </span>
              <h2 className="text-2xl font-black text-foreground">
                {offer.title}
              </h2>
              <p className="text-muted flex-1 text-sm leading-relaxed">
                {offer.desc}
              </p>
              <span className="text-primary text-sm font-semibold">
                {offer.detail}
              </span>
            </article>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Kampanya Koşulları
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Kampanya
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    İndirim
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Geçerlilik
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Koşul
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Açılış İndirimi', '%20', '31.10.2026', 'Kasada belirtin'],
                  ['Sabah Serpme', '%15', 'Sürekli', '07:00–09:00, ikinci ürün'],
                  ['Bülten Kuponu', 'Değişken', 'Dönemsel', 'Bülten aboneliği'],
                  ['Kurumsal Kademeli', '%5–15', 'Teklif', '50+ kişi'],
                ].map(([ad, indirim, gecerlilik, kosul]) => (
                  <tr key={ad} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">{ad}</td>
                    <td className="py-3 pr-4 font-black text-primary">
                      {indirim}
                    </td>
                    <td className="text-muted py-3 pr-4">{gecerlilik}</td>
                    <td className="text-muted py-3">{kosul}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted mt-3 text-xs">
            Kampanyalar birleştirilemez. Stok durumu geçerlilik öncesi
            değişebilir.
          </p>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/urunler" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Menü ve Fiyatlar
            </Link>
            <Link to="/tarif-bulteni" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Tarif Bülteni
            </Link>
            <Link to="/hizmet-sartlari" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Hizmet Şartları
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
