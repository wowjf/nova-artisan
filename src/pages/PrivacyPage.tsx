import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';

const dataRows = [
  {
    veri: 'Kimlik (ad soyad)',
    amac: 'Sipariş kaydı ve faturalama',
    sure: '5 yıl',
  },
  {
    veri: 'İletişim (e-posta / telefon)',
    amac: 'Tarif bülteni ve müşteri desteği',
    sure: 'Abonelik iptaline kadar',
  },
  {
    veri: 'Sipariş verileri',
    amac: 'Ürün hazırlama ve teslim',
    sure: '5 yıl',
  },
  {
    veri: 'Çerez tercihleri',
    amac: 'Site deneyimini iyileştirme',
    sure: '12 ay',
  },
];

const kvkkRights = [
  'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
  'İşlenmişse buna ilişkin bilgi talep etme',
  'İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
  'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
  'Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme',
  'KVKK’daki şartlara uygun olmayan verilerin silinmesini veya yok edilmesini isteme',
  'Düzeltme ve silme taleplerinizin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme',
  'Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme',
  'Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme',
];

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Gizlilik Politikası — Verileriniz ve KVKK Haklarınız | Nova Artisan"
        description="Nova Artisan gizlilik politikası: KVKK ve GDPR uyumlu veri işleme amaçları, saklama süreleri, üçüncü taraflara aktarım, çerezler ve haklarınız."
      />
      <PageTemplate
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        intro="Nova Artisan olarak verilerinizi taş fırınımızdaki hamur kadar özenle işliyoruz. Bu politika, hangi verileri neden topladığımızı ve haklarınızı şeffaf biçimde açıklar."
      >
        <p className="text-muted text-sm">
          Son güncelleme: <time dateTime="2026-09-21">21 Eylül 2026</time>
        </p>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Veri Sorumlusu
          </h2>
          <p className="text-muted leading-relaxed">
            Bu politika kapsamında veri sorumlusu{' '}
            <strong className="text-foreground">Nova Artisan</strong>'dır.
            Adresimiz: Gurmeler Plaza No:1 Çankaya Ankara. Verilerinizle
            ilgili her türlü soru ve talebiniz için{' '}
            <span className="text-primary font-medium">kvkk@novaartisan.com</span>{' '}
            adresine yazabilirsiniz.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İşlediğimiz Veriler
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            Yalnızca hizmetimizi sunmak için gereken asgari veriyi topluyoruz.
            Topladığımız veri kategorileri, işlenme amaçları ve{' '}
            <strong className="text-foreground">saklama süreleri</strong> aşağıdaki
            tabloda listelenmiştir.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Veri
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Amaç
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Saklama Süresi
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row) => (
                  <tr key={row.veri} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">{row.veri}</td>
                    <td className="text-muted py-3 pr-4">{row.amac}</td>
                    <td className="text-primary py-3 font-medium">{row.sure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Hukuki Sebepler
          </h2>
          <p className="text-muted leading-relaxed">
            Verilerinizi{' '}
            <strong className="text-foreground">KVKK</strong> m.5’te tanımlanan
            hukuki sebeplerle işliyoruz: bir hizmetin sunulduğu sözleşmenin
            ifası (siparişler), meşru menfaat (site güvenliği ve hizmet
            kalitesinin iyileştirilmesi). Tarif bülteni gibi pazarlama
            iletişimleri için ise kayıt sırasında aldığımız{' '}
            <strong className="text-foreground">açık rızanıza</strong> dayanıyoruz.
            Uluslararası misafirlerimiz için{' '}
            <strong className="text-foreground">GDPR</strong> ilkeleriyle uyumlu
            aynı standartları uyguluyoruz.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Üçüncü Taraflara Aktarım
          </h2>
          <p className="text-muted leading-relaxed">
            Verilerinizi yalnızca siparişinizin yerine getirilmesi için zorunlu
            olduğu ölçüde, kargo ve ödeme hizmet sağlayıcılarıyla paylaşıyoruz.
            Bu paylaşımda verileriniz reklam ya da profilleme amacıyla
            kullanılmaz; aktarım kapsamı tek bir siparişin ifasıyla sınırlıdır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Haklarınız
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            <strong className="text-foreground">KVKK</strong> m.11 kapsamında
            aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="space-y-3">
            {kvkkRights.map((hak) => (
              <li key={hak} className="flex items-start gap-3">
                <span aria-hidden="true" className="text-primary mt-1">
                  ✦
                </span>
                <span className="text-muted text-sm leading-relaxed">{hak}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">Çerezler</h2>
          <p className="text-muted leading-relaxed">
            Sitemizde oturum tercihleri ve anonim ziyaret ölçümü için çerezler
            kullanıyoruz. Hangi çerezlerin çalıştığını seçme hakkınızı{' '}
            <Link
              to="/cerez-ayarlari"
              className="text-primary font-medium hover:underline"
            >
              Çerez Ayarları sayfasından yönetin
            </Link>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Bize Ulaşın
          </h2>
          <p className="text-muted leading-relaxed">
            Gizlilik uygulamalarımız hakkında sorularınız için{' '}
            <span className="text-primary font-medium">kvkk@novaartisan.com</span>{' '}
            adresine e-posta gönderebilir veya Çankaya Ankara’daki fırınımızı
            ziyaret edebilirsiniz. Talepleriniz en geç 30 gün içinde
            yanıtlanır.
          </p>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/cerez-ayarlari"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Çerez Ayarları
            </Link>
            <Link
              to="/hizmet-sartlari"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Hizmet Şartları
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
