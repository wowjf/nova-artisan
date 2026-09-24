import { Link } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

const posts = [
  {
    date: '2026-09-14',
    readTime: '6 dk',
    title: 'Lamine Hamurun Bilimi: 84 Katın Sırrı',
    excerpt:
      'Tereyağının hamur katmanları arasında nasıl davrandığını, turşu sıcaklığının kırılganlığı nasıl belirlediğini fırın günlüğümüzden notlarla anlattık.',
    tag: 'Teknik',
  },
  {
    date: '2026-09-02',
    readTime: '4 dk',
    title: 'Taş Fırın Neden Hâlâ Rakipsiz?',
    excerpt:
      'Elektrikli fırınların hassasiyetine karşın taş yüzeyin ısı depolaması taban dokusunu neden daha iyi çıkarıyor? Ustamız Mehmet Usta cevaplıyor.',
    tag: 'Fırın',
  },
  {
    date: '2026-08-21',
    readTime: '5 dk',
    title: 'Mevsimde Kalmak: Son Yaz Meyveleriyle Tatlılar',
    excerpt:
      'Ağustos şeftalisi ve incirle hazırladığımız sezonluk tatlıların mutfaktan vitrine yolculuğu ve arızalarını en aza indiren hazırlık sırası.',
    tag: 'Sezon',
  },
  {
    date: '2026-08-05',
    readTime: '7 dk',
    title: 'Mayanın Dili: Doğal Mayalı Ekmeğe Giriş',
    excerpt:
      'Kendi ekşimizden başlattığımız mayanın 30 günlük yolculuğu, besleme ritmi ve evde denemek isteyenler için başlangıç oranı tablosu.',
    tag: 'Ekmek',
  },
];

export function BlogPage() {
  return (
    <>
      <Seo
        title="Fırın Ustası Günlüğü — Nova Artisan Blog | Ankara Pastane"
        description="Lamine hamur tekniği, taş fırın notları, doğal maya rehberleri ve sezonluk tarifler. Ankara'nın fırın ustasından saha notları."
      />
      <PageTemplate
        eyebrow="Kaynaklar"
        title="Fırın Ustası Günlüğü"
        intro="Taş fırının başından notlar: hamurun sabrı, mayanın dili ve üç kuşağın ortak tarifleri."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-card group flex flex-col gap-3 rounded-2xl border border-border p-6 transition-transform hover:-translate-y-1 motion-reduce:transition-none"
            >
              <div className="text-muted flex items-center gap-3 text-xs">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                <span aria-hidden="true">•</span>
                <span>{post.readTime} okuma</span>
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-muted flex-1 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                {post.tag}
              </span>
            </article>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Günlükten Sayılar
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Konu
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Yayın Sayısı
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Ortalama Okuma
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Popülerlik
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Lamine Hamur', '12 yazı', '6 dk', 'En çok okunan'],
                  ['Doğal Maya', '9 yazı', '7 dk', 'Yükselen'],
                  ['Taş Fırın', '7 yazı', '4 dk', 'Klasik'],
                  ['Sezonluk Tarifler', '15 yazı', '5 dk', 'En çok paylaşılan'],
                ].map(([konu, sayi, okuma, pop]) => (
                  <tr key={konu} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">{konu}</td>
                    <td className="text-muted py-3 pr-4">{sayi}</td>
                    <td className="text-muted py-3 pr-4">{okuma}</td>
                    <td className="text-primary py-3 font-medium">{pop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Neden Günlüğü Takip Etmelisiniz?
          </h2>
          <div className="text-muted grid gap-4 md:grid-cols-3">
            <p className="leading-relaxed">
              <strong className="text-foreground">Şeffaf üretim:</strong>{' '}
              Hamurdan vitrine giden her adımı fotoğraflarıyla paylaşıyoruz —
              kısayol yok, gizli malzeme yok.
            </p>
            <p className="leading-relaxed">
              <strong className="text-foreground">Usta bilgisi:</strong> 39
              yıllık fırın tecrübesi, ölçüleri tablolaştırılmış tariflere
              dönüşüyor.
            </p>
            <p className="leading-relaxed">
              <strong className="text-foreground">Ev mutfağına uyarlanmış:</strong>{' '}
              Her profesyonel teknik, ev fırınına uyarlanmış alternatifiyle
              gelir.
            </p>
          </div>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/tarif-bulteni" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Tarif Bülteni
            </Link>
            <Link to="/urunler" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Menü
            </Link>
            <Link to="/hakkimizda" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Hakkımızda
            </Link>
            <Link to="/etkinlik-galerisi" className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary">
              Etkinlik Galerisi
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
