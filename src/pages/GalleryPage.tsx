import { Link } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

const events = [
  { year: '2026', title: 'Açılış Gecesi', desc: 'İlk fırın serpmesi ve davetli tadımı', img: '/images/kruvasan.webp', alt: 'Açılış gecesinde kruvasan sunumu' },
  { year: '2026', title: 'Baklava Atölyesi', desc: '40 yufka tekniği misafirlere uygulamalı', img: '/images/baklava.png', alt: 'Baklava atölyesinde katlama demonstrasyonu' },
  { year: '2025', title: 'Makaron Günü', desc: 'Üç aromalı makaron tadım standı', img: '/images/macaron.png', alt: 'Makaron gününde renkli tadım standı' },
  { year: '2025', title: 'Dünya Ekmeği Günü', desc: 'Doğal mayalı ekmek sergisi', img: '/images/kruvasan.webp', alt: 'Dünya ekmeği gününde fırın tezgahı' },
];

export function GalleryPage() {
  return (
    <>
      <Seo
        title="Etkinlik Galerisi — Atölye ve Tadım Günleri | Nova Artisan"
        description="Açılış gecemizden baklava atölyelerine, makaron günlerinden ekmek sergilerine Nova Artisan etkinliklerinden kareler."
      />
      <PageTemplate
        eyebrow="Kaynaklar"
        title="Etkinlik Galerisi"
        intro="Açılış gecelerimizden atölye çalışmalarımıza, dünya günlerinden sabah serpmelerine kareler."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <figure
              key={event.title}
              className="bg-card group overflow-hidden rounded-2xl border border-border"
            >
              <div className="flex aspect-square items-center justify-center overflow-hidden bg-background p-8">
                <img
                  src={event.img}
                  alt={event.alt}
                  width={500}
                  height={500}
                  className="size-full object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
                />
              </div>
              <figcaption className="flex flex-col gap-1 p-5">
                <span className="text-muted text-xs">{event.year}</span>
                <h2 className="font-bold text-foreground">{event.title}</h2>
                <p className="text-muted text-sm">{event.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Etkinlik Takvimi Özeti
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Etkinlik
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Sıklık
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Kapasite
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Katılım
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Fırın Atölyesi', 'Ayda 1', '12 kişi', 'Ücretsiz*'],
                  ['Tadım Günü', 'Sezonluk', '40 kişi', 'Ücretsiz'],
                  ['Çocuk Şömine Günü', '3 ayda 1', '20 çocuk', '₺150'],
                  ['Kurumsal Catering Tadımı', 'Talep üzerine', 'Değişken', 'Ücretsiz'],
                ].map(([ad, siklik, kapasite, ucret]) => (
                  <tr key={ad} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">{ad}</td>
                    <td className="text-muted py-3 pr-4">{siklik}</td>
                    <td className="text-muted py-3 pr-4">{kapasite}</td>
                    <td className="text-primary py-3 font-medium">{ucret}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted mt-3 text-xs">
            * Atölyeler bülten abonelerine önceliklidir.
          </p>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/tarif-bulteni" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Tarif Bülteni
            </Link>
            <Link to="/firin-ustasi-gunlugu" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Fırın Ustası Günlüğü
            </Link>
            <Link to="/iletisim" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              İletişim
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
