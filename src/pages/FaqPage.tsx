import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';

type Faq = { soru: string; cevap: string };

const faqs: Faq[] = [
  {
    soru: 'Günlük üretim saatleriniz nedir, teslimat yapıyor musunuz?',
    cevap:
      'Hamur yoğurma işlemi her gece 21:00’de başlar, ilk tepsiler sabah 04:30’da fırına verilir ve vitrin 07:00’de dolmuş olur. Çankaya ve komşu ilçelere catering siparişlerinde teslimat yapıyoruz; vitrin ürünlerinde teslimat yerine mağazadan teslim uygulamasını koruyoruz.',
  },
  {
    soru: 'Kruvasanlarınız glütenli mi, içeriğinde neler var?',
    cevap:
      'Evet, kruvasanlarımız buğday unu içerdiği için glütenlidir. İçindekiler: buğday unu, tereyağı, süt, maya, şeker ve tuz. Katman yapısını korumak için katkı maddesi ve koruyucu kullanmıyoruz. Tüm ürünlerimiz için eksik ve güncel alerjen tablosunu Alerjen Bilgileri sayfamızda yayınlıyoruz.',
  },
  {
    soru: 'Catering için minimum kişi sayısı nedir?',
    cevap:
      'Catering siparişlerinde minimum 25 kişiyle başlıyoruz. 25-50 kişi aralığında tek menü, 50 kişinin üzerinde kahvaltı, tatlı ve tuzlu olmak üzere üç ayrı menü seçeneği sunuyoruz. Kurumsal taleplerde kişi sayısına göre fiyatlandırma ve menü planlaması için iletişim sayfamızdan bize ulaşabilirsiniz.',
  },
  {
    soru: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
    cevap:
      'Nakit, kredi kartı ve banka kartı ile ödeme yapılabiliyor. Ön siparişlerde havale/EFT ve online kart ödemesi, kurumsal anlaşmalı müşterilerimize ise 30 gün vadeli faturalı ödeme imkânı sunuyoruz.',
  },
  {
    soru: 'Hangi günler ve saatlerde açıksınız?',
    cevap:
      'Pazartesi’den Cumartesi’ye 07:00-20:00, Pazar günleri 08:00-18:00 saatleri arasında açığız. Resmî tatillerde Pazar düzeninde çalışıyoruz; ramazan bayramı ve kurban bayramı öncesi özel üretim takvimi duyuruyoruz.',
  },
  {
    soru: 'Büyük siparişleri kaç gün önce vermem gerekiyor?',
    cevap:
      'Kruvasan ve günlük pastalar için 1 gün, baklava çeşitleri için 2 gün, makaron kuleleri ve özel yazılı pastalar için 3 gün önceden sipariş yeterlidir. 50 kişinin üzerindeki catering siparişleri için talebinizi en az 5 iş günü önce iletmenizi rica ederiz.',
  },
  {
    soru: 'Kuru pastalarınız ne kadar dayanır?',
    cevap:
      'Şeker hamuru ve kuru pastalarımız hava almayan kapta oda sıcaklığında ortalama 3 hafta dayanır. Nemli pastalar ve kruvasanlar ise aynı gün içinde tüketilmesini öneriyoruz; kruvasanı ikinci gün tazelemek için 160 derecelik fırında 3 dakika pişirmek yeterlidir.',
  },
  {
    soru: 'Sitedeki fotoğraflardaki ürün, vitrinden farklı mı çıkar?',
    cevap:
      'Sitedeki fotoğraflar kendi tezgâhımızda çekilen gerçek ürünlerdir; stok görsel kullanmıyoruz. Yine de tüm ürünlerimiz el yapımı olduğu için boyut ve renkte küçük farklılıklar olabilir. Bu, seri üretim fırınlarından ayrıldığımız noktanın doğal sonucudur.',
  },
];

export function FaqPage() {
  return (
    <>
      <Seo
        title="Sıkça Sorulan Sorular — Üretim, Catering ve Sipariş Bilgileri | Nova Artisan"
        description="Nova Artisan sıkça sorulan sorular: el yapımı kruvasan üretim saatleri, teslimat, catering minimum kişi, ödeme yöntemleri, sipariş süreleri ve tazelik."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.soru,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.cevap,
            },
          })),
        }}
      />
      <PageTemplate
        eyebrow="Kurumsal"
        title="Sıkça Sorulan Sorular"
        intro="Üretim saatlerimizden catering kurallarına, ödeme yöntemlerinden tazelik sürelerine kadar en çok merak edilenleri ustalarımızın ağzından yanıtladık."
      >
        <section aria-label="Soru ve cevaplar">
          {faqs.map((faq) => (
            <details key={faq.soru} className="border-b border-border py-4">
              <summary className="cursor-pointer font-semibold text-foreground">
                {faq.soru}
              </summary>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                {faq.cevap}
              </p>
            </details>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Cevabını bulamadınız mı?
          </h2>
          <p className="text-muted leading-relaxed">
            Sorunuz burada yoksa{' '}
            <Link
              to="/iletisim"
              className="text-primary font-medium hover:underline"
            >
              İletişim sayfamızdaki
            </Link>{' '}
            formu doldurun ya da fırınımızı arayın:{' '}
            <strong className="text-foreground">el yapımı kruvasan</strong>{' '}
            siparişleri, <strong className="text-foreground">catering</strong>{' '}
            planlaması ve alerjen içerikleri hakkında en hızlı yanıtı ustalarımız
            verir. Sorularınız genelde yarım iş günü içinde yanıtlanır.
          </p>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/iletisim"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              İletişim
            </Link>
            <Link
              to="/alerjen-bilgileri"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Alerjen Bilgileri
            </Link>
            <Link
              to="/ozel-firsatlar"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Özel Fırsatlar
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
