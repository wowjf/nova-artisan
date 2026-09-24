import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';

type AllergenRow = {
  product: string;
  gluten: boolean;
  milk: boolean;
  egg: boolean;
  pistachio: boolean;
  almond: boolean;
  soy: boolean;
  sesame: boolean;
};

const ALLERGEN_ROWS: AllergenRow[] = [
  {
    product: 'Klasik Kruvasan',
    gluten: true,
    milk: true,
    egg: true,
    pistachio: false,
    almond: false,
    soy: false,
    sesame: false,
  },
  {
    product: 'Çikolatalı Kruvasan',
    gluten: true,
    milk: true,
    egg: true,
    pistachio: false,
    almond: false,
    soy: true,
    sesame: false,
  },
  {
    product: 'Bademli Kruvasan',
    gluten: true,
    milk: true,
    egg: true,
    pistachio: false,
    almond: true,
    soy: false,
    sesame: false,
  },
  {
    product: 'Antep Fıstıklı Baklava',
    gluten: true,
    milk: true,
    egg: false,
    pistachio: true,
    almond: false,
    soy: false,
    sesame: false,
  },
  {
    product: 'Makaron Üçlüsü',
    gluten: true,
    milk: true,
    egg: true,
    pistachio: false,
    almond: true,
    soy: false,
    sesame: false,
  },
  {
    product: 'Doğal Mayalı Ekmek',
    gluten: true,
    milk: false,
    egg: false,
    pistachio: false,
    almond: false,
    soy: false,
    sesame: false,
  },
];

function Cell({ present }: { present: boolean }) {
  if (present) {
    return <span className="text-primary font-medium">Var</span>;
  }
  return <span className="text-muted">—</span>;
}

export function AllergenPage() {
  return (
    <>
      <Seo
        title="Alerjen Bilgileri — Ürün Bazlı Alerjen Matrisi | Nova Artisan"
        description="Nova Artisan ürünlerinin alerjen matrisi: kruvasan, baklava, makaron ve ekmeklerde gluten, süt, yumurta, fıstık, badem, soya ve susam bilgileri."
      />
      <PageTemplate
        eyebrow="Yasal"
        title="Alerjen Bilgileri"
        intro="Vitrindeki her ürünün içerik şeffaflığı: hangi üründe hangi alerjen var, iz riski ne anlama geliyor ve özel üretim nasıl istenir."
      >
        <section>
          <p className="text-muted leading-relaxed">
            Bu sayfa, ürünlerimizin{' '}
            <strong className="text-foreground">alerjen matrisi</strong>ni tek
            yerde toplar. Matriste "Var" işaretli hücre, o ürünün tarifi itibarıyla
            söz konusu alerjeni içerdiği anlamına gelir; "—" hücreleri ise tarife
            göre alerjen içermediğini gösterir. Ancak tüm ürünlerimiz aynı
            mutfakta üretildiği için{" "}
            <strong className="text-foreground">iz</strong> riski her zaman
            vardır. Hassasiyeti olan misafirlerimizin sipariş öncesinde{' '}
            <Link to="/iletisim" className="text-primary font-medium underline">
              bizimle iletişime geçmesini
            </Link>{' '}
            rica ederiz.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Alerjen Matrisi
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Ürün
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Buğday (Gluten)
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Süt
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Yumurta
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Fıstık
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Badem
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Soya
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Susam
                  </th>
                </tr>
              </thead>
              <tbody>
                {ALLERGEN_ROWS.map((row) => (
                  <tr key={row.product} className="border-b border-border/60">
                    <th
                      scope="row"
                      className="py-3 pr-4 text-left font-medium"
                    >
                      {row.product}
                    </th>
                    <td className="py-3 pr-4">
                      <Cell present={row.gluten} />
                    </td>
                    <td className="py-3 pr-4">
                      <Cell present={row.milk} />
                    </td>
                    <td className="py-3 pr-4">
                      <Cell present={row.egg} />
                    </td>
                    <td className="py-3 pr-4">
                      <Cell present={row.pistachio} />
                    </td>
                    <td className="py-3 pr-4">
                      <Cell present={row.almond} />
                    </td>
                    <td className="py-3 pr-4">
                      <Cell present={row.soy} />
                    </td>
                    <td className="py-3">
                      <Cell present={row.sesame} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted mt-3 text-xs">
            Çikolatalı kruvasandaki soya, kullanılan bitter çikolatanın
            içerdiği lecithin kaynağıdır.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Çapraz Bulaşma (İz)
          </h2>
          <p className="text-muted leading-relaxed">
            Tüm ürünlerimiz aynı mutfakta, aynı ekipmanların özenle
            temizlenmesiyle üretilir. Bu nedenle tarifinde fındık veya susam
            bulunmasa bile her ürün{' '}
            <strong className="text-foreground">fındık ve susam izi</strong>{' '}
            taşıyabilir. Ciddi alerjisi olan misafirlerimiz için en güvenli yol,
            sipariş öncesinde bizimle doğrudan konuşmaktır; mümkün olan durumlarda
            ürünü ayrı bir bölümde, ayrı ekipmanla hazırlarız.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-black text-foreground">
            Özel Üretim
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-foreground">
              Glütensiz Siparişler
            </h3>
            <p className="text-muted mt-3 leading-relaxed">
              Glütensiz ürünlerimizi 48 saat ön bildirimle, özel sipariş olarak
              hazırlıyoruz. Bu süre, hamurun dinlenmesi ve üretim öncesi tezgâh
              ile ekipmanın gluten kaynaklarından arındırılması için gereklidir.
              Ön bildirimli siparişlerde glütensiz ürünü mümkün olan en düşük iz
              riskiyle üretiriz; yine de ciddi çölyak hassasiyeti olan
              misafirlerimizin bizimle birebir görüşmesini öneririz.
            </p>
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
              to="/sss"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Sıkça Sorulan Sorular
            </Link>
            <Link
              to="/iletisim"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              İletişim
            </Link>
            <Link
              to="/gida-guvenligi-standartlari"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Gıda Güvenliği Standartları
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
