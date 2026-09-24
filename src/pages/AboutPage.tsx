import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';

const milestones = [
  {
    yil: '1987',
    olay: 'Mehmet Usta, Çankaya’da ilk fırınını açtı; gece yoğrulan mayalı hamurlar ve günlük ekmek üretimi başladı.',
  },
  {
    yil: '2003',
    olay: 'İkinci kuşak aileye katıldı; 27 katman hamurla açılan el yapımı kruvasan hattı kuruldu.',
  },
  {
    yil: '2014',
    olay: 'Taş fırın baştan yenilendi; oklavada açılan baklava ve elle sıkılan makaron atölyesi hizmete girdi.',
  },
  {
    yil: '2026',
    olay: 'Nova Artisan markası doğdu; “usta eller, taze fırın” mottosu tüm üretimimize yön verdi.',
  },
];

const values = [
  {
    baslik: 'Taze Üretim',
    metin: 'Hamur gece yoğrulur, sabah erkenden fırına verilir ve öğlene kalmadan vitrine dizilir. Gün sonu ürününü ertesi güne taşımıyoruz; kalanları belirlediğimiz sosyal fırın programıyla çevremizle paylaşıyoruz.',
  },
  {
    baslik: 'Şeffaf Mutfak',
    metin: 'Mutfağımız camla çevrili: kruvasanın katmanlanmasını, baklava yufkasının inceltilmesini yerinde izleyebilirsiniz. İçindekiler listesini ve alerjen tablolarını her üründe açıkça paylaşıyoruz.',
  },
  {
    baslik: 'Yöresel Ham Madde',
    metin: 'Unu Konya’nın değirmenlerinden, tereyağını Şiran’ın yaylarından, Antep fıstığını ve cevizi küçük üreticilerden alıyoruz. Tedarikçimizi tanıdığımız ölçüde ürünümüzün lezzetinden emin oluyoruz.',
  },
];

const stats = [
  { deger: '39', etiket: 'yıllık fırın tecrübesi' },
  { deger: '42+', etiket: 'günlük taze ürün çeşidi' },
  { deger: '3', etiket: 'kuşak ustalık mirası' },
  { deger: '%98', etiket: 'müşteri memnuniyeti' },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="Hakkımızda — 1987'den Beri Üç Kuşak Taş Fırın Hikâyesi | Nova Artisan"
        description="Nova Artisan hikâyesi: 1987'den beri Ankara Çankaya'da üç kuşak el yapımı fırın ürünleri, taş fırın geleneği, değerlerimiz ve kilometre taşlarımız."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Nova Artisan',
          foundingDate: '1987',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Gurmeler Plaza No:1, Gastronomi Mahallesi',
            addressLocality: 'Çankaya',
            addressRegion: 'Ankara',
            addressCountry: 'TR',
          },
          telephone: '+903121234567',
          email: 'destek@novaartisan.com',
        }}
      />
      <PageTemplate
        eyebrow="Kurumsal"
        title="Hakkımızda"
        intro="1987'den beri üç kuşaktır süren fırın hikâyemiz: Çankaya'daki taş fırınımızda geçen 39 yıllık ustalık, sabır ve tazelik."
      >
        <section>
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Hikâyemiz
          </h2>
          <div className="space-y-4">
            <p className="text-muted leading-relaxed">
              Her şey 1987’de, Mehmet Usta’nın Çankaya’da küçük bir fırın
              açmasıyla başladı. İlk günden beri değişmeyen tek kuralımız var:
              hamur gece yoğrulur, sabah erkenden{' '}
              <strong className="text-foreground">taş fırın</strong>dan çıkar,
              öğlene kalmadan vitrine dizilir. Bu disiplin zamanla babadan
              oğula, oğuldan toruna geçen gerçek bir ustalık mirasına dönüştü.
            </p>
            <p className="text-muted leading-relaxed">
              Bugün üçüncü kuşak, aynı{' '}
              <strong className="text-foreground">Ankara</strong> mahallesinde
              aynı özenle <strong className="text-foreground">el yapımı fırın ürünleri</strong>{' '}
              üretiyor. Kruvasan hamuru 27 katmanda açılır, baklava yufkası
              oklavada elle inceltilir, makaronlar tek tek sıkılır. Hızlı
              üretim hiçbir zaman tercihimiz olmadı; iyi pişmiş, taze ve dürüst
              ürün bizim ölçümüz.
            </p>
            <p className="text-muted leading-relaxed">
              Mehmet Usta hâlâ her sabah 04:30’da fırının başında; bu 39 yıllık
              alışkanlık fırının nabzı sayılıyor. Torunları artık dijital
              sipariş defterini tutuyor ama lezzet standardı hep aynı ellerin
              sabrıyla korunuyor. Nova Artisan, bu birikimin yeni adıdır:
              usta eller, taze fırın.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Kilometre Taşları
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            Üç kuşağa yayılan yolculuğumuzun durakları aşağıda: her satır,
            bugünkü vitrinimizin bir katmanını temsil ediyor.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Yıl
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Olay
                  </th>
                </tr>
              </thead>
              <tbody>
                {milestones.map((row) => (
                  <tr key={row.yil} className="border-b border-border/60">
                    <td className="text-primary py-3 pr-4 font-medium">
                      {row.yil}
                    </td>
                    <td className="text-muted py-3">{row.olay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Değerlerimiz
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.baslik}
                className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 motion-reduce:transition-none"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {value.baslik}
                </h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {value.metin}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Rakamlarla Nova Artisan
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.etiket}
                className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 motion-reduce:transition-none"
              >
                <p className="text-primary text-4xl font-black">{stat.deger}</p>
                <p className="text-muted mt-2 text-sm">{stat.etiket}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/urunler"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Ürünler
            </Link>
            <Link
              to="/firin-ustasi-gunlugu"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Fırın Ustası Günlüğü
            </Link>
            <Link
              to="/iletisim"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              İletişim
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
