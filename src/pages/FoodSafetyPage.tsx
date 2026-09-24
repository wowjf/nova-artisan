import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';

const CERTIFICATES: [string, string, string][] = [
  ['ISO 22000 Gıda Güvenliği', 'Tüm üretim süreçleri', 'Yıllık'],
  ['HACCP', 'Kuruluş seviyesi', '2 Yıllık'],
  ['Hijyen Sertifikası', 'Personel', 'Yıllık'],
  ['Sağlık Raporu', 'Personel', '6 Aylık'],
];

const CCP_STEPS: [string, string, string, string][] = [
  ['Hamur Soğutma', 'Sıcaklık', '4°C altı', 'Saatlik kayıt'],
  ['Fırın Pişirme', 'Çekirdek sıcaklık', '96°C', 'Partibaşı'],
  ['Soğutma', 'Oda sıcaklığı', '2 saatte 21°C altı', 'Sensör logu'],
  ['Vitrin Saklama', 'Sıcaklık', '18–22°C', 'Günlük'],
];

const AUDIT_SCHEDULE = [
  {
    title: 'Günlük Kendi Kontrolü',
    desc: 'Her vardiyada CCP kayıtları, vitrin sıcaklıkları ve yüzey temizlik kontrolleri ekip lideri tarafından imzalanır.',
  },
  {
    title: 'Aylık İç Denetim',
    desc: 'Kalite ekibi tüm üretim akışını belgeye karşı denetler; sapmalar düzeltici faaliyet kaydına bağlanır.',
  },
  {
    title: 'Yıllık Bağımsız Denetim',
    desc: 'Akredite bir sertifika kuruluşu ISO 22000 kapsamında eksiksiz saha denetimi yapar ve raporu kamuya açıklanır.',
  },
];

export function FoodSafetyPage() {
  return (
    <>
      <Seo
        title="Gıda Güvenliği Standartları — HACCP ve ISO 22000 | Nova Artisan"
        description="Nova Artisan'ın HACCP ve ISO 22000 sertifikalı gıda güvenliği standartları: kritik kontrol noktaları, sertifika takvimi, tedarik zinciri ve denetim süreci."
      />
      <PageTemplate
        eyebrow="Yasal"
        title="Gıda Güvenliği Standartları"
        intro="Ankara Çankaya'daki fırınımızda her ürün, belgelenmiş güvenlik adımlarından geçer; 1987'den beri kendi kendini denetleyen 39 yıllık bir süreç."
      >
        <section>
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Kalite Yönetim Sistemimiz
          </h2>
          <p className="text-muted mb-4 leading-relaxed">
            Nova Artisan'da gıda güvenliği bir son adım denetimi değil, hamurun
            unundan geldiği andan vitrine dizildiği ana kadar izlenen bir
            sistemdir. <strong className="text-foreground">HACCP</strong>{' '}
            planımız, üretim akışındaki her riski adım adım belirler ve kritik
            noktaları ölçülebilir limitlere bağlar. Bu plan,{' '}
            <strong className="text-foreground">ISO 22000</strong> gıda güvenliği
            yönetim sistemi çerçevesinde belgelenir ve her yıl akredite bir
            kuruluş tarafından yeniden denetlenir.
          </p>
          <p className="text-muted leading-relaxed">
            1987'den bu yana bu disiplini her gün uyguladık; bu, sıfır geri
            çağırma kaydı iddiası değil, kendi kendini denetleyen 39 yıllık bir
            sürecin alışkanlığıdır. Her vardiya kendi ölçümlerini kaydeder,
            her ay iç denetim belgeyi üretimle karşılaştırır ve sapma görüldüğü
            an ürün vitinden çekilir. Amacımız basittir: misafirlerimiz{' '}
            <strong className="text-foreground">gıda güvenliği</strong>{' '}
            konusunda bize hiç düşünmeden güvenebilsin.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Sertifikalarımız
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Sertifika
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Kapsam
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Yenileme
                  </th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATES.map(([sertifika, kapsam, yenileme]) => (
                  <tr key={sertifika} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">{sertifika}</td>
                    <td className="text-muted py-3 pr-4">{kapsam}</td>
                    <td className="text-primary py-3 font-medium">
                      {yenileme}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Kritik Kontrol Noktaları (CCP)
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            Aşağıdaki tablo, üretim akışındaki{' '}
            <strong className="text-foreground">kritik kontrol noktaları</strong>
            ve her biri için belirlenen limitleri özetler. Ölçümler kâğıt
            üzerine değil, dijital kayıt altına alınır ve iç denetimde
            eksiksizliği kontrol edilir.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Adım
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Kontrol
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Limit
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Kayıt
                  </th>
                </tr>
              </thead>
              <tbody>
                {CCP_STEPS.map(([adim, kontrol, limit, kayit]) => (
                  <tr key={adim} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">{adim}</td>
                    <td className="text-muted py-3 pr-4">{kontrol}</td>
                    <td className="text-primary py-3 pr-4 font-medium">
                      {limit}
                    </td>
                    <td className="text-muted py-3">{kayit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Tedarik Zinciri
          </h2>
          <p className="text-muted leading-relaxed">
            Güvenli ürün, güvenli hammaddeyle başlar. Un, tereyağı ve Antep
            fıstığı tedarikçilerimiz sertifikalı ve düzenli olarak denetlenen
            işletmelerdir; her parti, üretim izlenebilirliği için parti
            numarasıyla kayıt altına alınır. Bir hammadde gerekli belgesini
            tamamlayamadığında o parti fırına girmez; bu pazarlık edilemez bir
            kuraldır.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Denetim Takvimi
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIT_SCHEDULE.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 motion-reduce:transition-none"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/alerjen-bilgileri"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Alerjen Bilgileri
            </Link>
            <Link
              to="/hakkimizda"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Hakkımızda
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
