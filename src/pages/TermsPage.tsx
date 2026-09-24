import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';

const refundRows = [
  {
    durum: 'Standart sipariş',
    sure: '24 saat öncesine kadar',
    sonuc: 'Tam iade',
  },
  {
    durum: 'Catering',
    sure: '72 saat öncesine kadar',
    sonuc: 'Tam iade',
  },
  {
    durum: 'Catering',
    sure: '72–24 saat arası',
    sonuc: '%50 iade',
  },
  {
    durum: 'Catering ve standart',
    sure: '24 saat altı',
    sonuc: 'İade yok',
  },
  {
    durum: 'Ürün hatası (bizim kaynaklı)',
    sure: 'Derhal',
    sonuc: 'Değişim veya iade',
  },
];

export function TermsPage() {
  return (
    <>
      <Seo
        title="Hizmet Şartları — Sipariş, İade ve Catering Koşulları | Nova Artisan"
        description="Nova Artisan hizmet şartları: sipariş ve ödeme yöntemleri, catering rezervasyonu, iptal ve iade koşulları ile sorumluluk sınırları."
      />
      <PageTemplate
        eyebrow="Yasal"
        title="Hizmet Şartları"
        intro="Sipariş verdiğiniz anda taraf olduğunuz bu şartlar, novaartisan.com üzerinden ve Çankaya Ankara’daki fırınımızdan yaptığınız her alışverişi kapsar."
      >
        <p className="text-muted text-sm">
          Son güncelleme: <time dateTime="2026-09-21">21 Eylül 2026</time>
        </p>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">Kapsam</h2>
          <p className="text-muted leading-relaxed">
            Bu şartlar, <strong className="text-foreground">novaartisan.com</strong>{' '}
            üzerinden verilen online siparişlerin yanında Gurmeler Plaza No:1
            Çankaya Ankara adresindeki fiziksel fırınımızda sunulan ürün ve
            hizmetlerin tamamını kapsar. Günlük ürün arzı mevsime ve üretim
            planına göre değişebilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Sipariş ve Ödeme
          </h2>
          <p className="text-muted leading-relaxed">
            Fırınımızda ve online siparişlerde nakit, banka kartı, kredi kartı
            ve havale ile ödeme kabul edilir. Tüm fiyatlar{' '}
            <strong className="text-foreground">₺ cinsinden ve KDV
            dahildir</strong>. El yapımı üretim gereği{' '}
            <strong className="text-foreground">
              fiyat değişiklikleri önceden duyurulmak kaydıyla
            </strong>{' '}
            güncellenebilir; güncel fiyatlar her zaman kasada ve sitede
            yansıtılır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Rezervasyon ve Catering
          </h2>
          <p className="text-muted leading-relaxed">
            50 kişi ve üzeri catering siparişlerinde en az{' '}
            <strong className="text-foreground">3 gün önceden</strong> ön
            bildirim gereklidir. Menü içeriği, adet ve teslim saati yazılı
            olarak (e-posta ya da mesaj) onaylanır; onaylanan menü dışındaki
            değişiklik talepleri ek ücrete tabi olabilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İptal ve İade Koşulları
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            Taze üretim yaptığımız için iptal süreleri üretim planına göre
            belirlenir. İade tutarları ödeme yaptığınız yöntemle, işlemden
            itibaren en geç 7 iş günü içinde iade edilir.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Durum
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Süre
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Sonuç
                  </th>
                </tr>
              </thead>
              <tbody>
                {refundRows.map((row) => (
                  <tr
                    key={`${row.durum}-${row.sure}`}
                    className="border-b border-border/60"
                  >
                    <td className="py-3 pr-4 font-medium">{row.durum}</td>
                    <td className="text-muted py-3 pr-4">{row.sure}</td>
                    <td className="text-primary py-3 font-medium">
                      {row.sonuc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Sorumluluğun Sınırlanması
          </h2>
          <p className="text-muted leading-relaxed">
            Gıda güvenliği bizim birinci önceliğimizdir; yine de{' '}
            <strong className="text-foreground">
              alerjen bildirimi sorumluluğunun doğru paylaşılmasında
            </strong>{' '}
            sipariş sırasında mutlaka alerjinizi personelimize iletmeniz
            gerekir. Ürünlerimizdeki glut, süt, yumurta ve kuruyemiş izleri
            hakkında ayrıntılı bilgi için{' '}
            <Link
              to="/alerjen-bilgileri"
              className="text-primary font-medium hover:underline"
            >
              Alerjen Bilgileri
            </Link>{' '}
            sayfamızı inceleyin.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Fikri Mülkiyet
          </h2>
          <p className="text-muted leading-relaxed">
            Nova Artisan markası, logo, site tasarımı, ürün fotoğrafları ve
            tarif içerikleri Nova Artisan’a aittir. Yazılı izin olmaksızın
            ticari amaçla kopyalanamaz, çoğaltılamaz veya yeniden
            yayımlanamaz.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Uyuşmazlık Çözümü
          </h2>
          <p className="text-muted leading-relaxed">
            Bu şartlardan doğan uyuşmazlıklarda önce fırınımızla iletişime
            geçmenizi rica ederiz. Çözüme ulaşılamayan durumlarda{' '}
            <strong className="text-foreground">
              Ankara mahkemeleri ve tüketici hakem heyeti
            </strong>{' '}
            yetkilidir. Tüketici hakem heyetine başvuru, e-devlet üzerinden
            ücretsizdir.
          </p>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/gizlilik-politikasi"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Gizlilik Politikası
            </Link>
            <Link
              to="/ozel-firsatlar"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Özel Fırsatlar
            </Link>
            <Link
              to="/alerjen-bilgileri"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Alerjen Bilgileri
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
