import { Link } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

const menuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Nova Artisan Menü',
  hasMenuSection: [
    { '@type': 'MenuSection', name: 'Kruvasan' },
    { '@type': 'MenuSection', name: 'Baklava' },
    { '@type': 'MenuSection', name: 'Makaron' },
    { '@type': 'MenuSection', name: 'Catering' },
  ],
};

export function ProductsPage() {
  return (
    <>
      <Seo
        title="Menümüz — Kruvasan, Baklava, Makaron ve Catering Fiyatları | Nova Artisan"
        description="Nova Artisan menü ve fiyat listesi: el yapımı kruvasan, Antep fıstıklı baklava, Fransız usulü makaron ve özel catering seçenekleri; Çankaya Ankara fırını."
        jsonLd={menuJsonLd}
      />
      <PageTemplate
        eyebrow="Ürünler"
        title="Menümüz"
        intro="Taş fırından çıkan her ürün, 1987'den beri aynı özenle hazırlanır. Kruvasandan baklavaya, makarondan catering tabaklarına — tüm menümüz ve fiyatlarımız tek sayfada."
      >
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-muted text-sm leading-relaxed">
            <strong className="text-primary">Açılışa Özel %20</strong> — Menüdeki
            tüm ürünlerde geçerli; ayrıntılar için{' '}
            <Link
              to="/ozel-firsatlar"
              className="text-primary font-medium hover:underline"
            >
              kampanya koşulları
            </Link>{' '}
            sayfamızı inceleyin.
          </p>
        </div>

        <section id="kruvasan" className="scroll-mt-24 mt-14">
          <div className="flex items-start gap-6">
            <img
              src="/images/kruvasan.webp"
              alt="Nova Artisan'ın el yapımı kruvasanı"
              width={500}
              height={500}
              className="size-40 shrink-0 object-contain"
            />
            <div>
              <h2 className="mb-4 text-2xl font-black text-foreground">
                Kruvasan
              </h2>
              <p className="text-muted leading-relaxed">
                Her gece hamurlanan, 18 saat dinlenen ve şafakta taş fırına
                giren <strong className="text-foreground">
                el yapımı kruvasan
                </strong>{' '}
                çeşitlerimiz. 60 gr'lık adetlerimiz sabah 07:00'den itibaren
                vitrinde.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[24rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Ürün
                      </th>
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Boyut
                      </th>
                      <th scope="col" className="py-3 font-semibold">
                        Fiyat
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Klasik</td>
                      <td className="text-muted py-3 pr-4">60 gr / adet</td>
                      <td className="text-primary py-3 font-medium">₺55</td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Çikolatalı</td>
                      <td className="text-muted py-3 pr-4">60 gr / adet</td>
                      <td className="text-primary py-3 font-medium">₺65</td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Bademli</td>
                      <td className="text-muted py-3 pr-4">60 gr / adet</td>
                      <td className="text-primary py-3 font-medium">₺70</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="baklava" className="scroll-mt-24 mt-14">
          <div className="flex items-start gap-6">
            <img
              src="/images/baklava.png"
              alt="Nova Artisan'ın Antep fıstıklı baklavası"
              width={541}
              height={461}
              className="size-40 shrink-0 object-contain"
            />
            <div>
              <h2 className="mb-4 text-2xl font-black text-foreground">
                Baklava
              </h2>
              <p className="text-muted leading-relaxed">
                40 kat elle açılmış yufka, gerçek tereyağı ve dolgun{' '}
                <strong className="text-foreground">
                  Antep fıstıklı baklava
                </strong>{' '}
                geleneği. Her dilim günlük olarak kesilir, şerbeti pişiminden
                sonra dinlendirilir.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[24rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Ürün
                      </th>
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Boyut
                      </th>
                      <th scope="col" className="py-3 font-semibold">
                        Fiyat
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Dilim</td>
                      <td className="text-muted py-3 pr-4">Tek dilim</td>
                      <td className="text-primary py-3 font-medium">₺70</td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Kutu</td>
                      <td className="text-muted py-3 pr-4">500 gr</td>
                      <td className="text-primary py-3 font-medium">₺450</td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Kutu</td>
                      <td className="text-muted py-3 pr-4">1 kg</td>
                      <td className="text-primary py-3 font-medium">₺850</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="makaron" className="scroll-mt-24 mt-14">
          <div className="flex items-start gap-6">
            <img
              src="/images/macaron.png"
              alt="Nova Artisan'ın Fransız usulü makaronları"
              width={348}
              height={348}
              className="size-40 shrink-0 object-contain"
            />
            <div>
              <h2 className="mb-4 text-2xl font-black text-foreground">
                Makaron
              </h2>
              <p className="text-muted leading-relaxed">
                <strong className="text-foreground">
                  Fransız usulü makaron
                </strong>{' '}
                koleksiyonumuz: gül, vanilya ve çikolata aromalı, dışı çıtır
                içi kremamsı kabuklar. Renkler doğal katkılarla elde edilir.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[24rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Ürün
                      </th>
                      <th scope="col" className="py-3 pr-4 font-semibold">
                        Boyut
                      </th>
                      <th scope="col" className="py-3 font-semibold">
                        Fiyat
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Tek adet</td>
                      <td className="text-muted py-3 pr-4">Adet</td>
                      <td className="text-primary py-3 font-medium">₺35</td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Üçlü kutu</td>
                      <td className="text-muted py-3 pr-4">3 adet</td>
                      <td className="text-primary py-3 font-medium">₺95</td>
                    </tr>
                    <tr className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">Altılı kutu</td>
                      <td className="text-muted py-3 pr-4">6 adet</td>
                      <td className="text-primary py-3 font-medium">₺180</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="catering" className="scroll-mt-24 mt-14">
          <div>
            <h2 className="mb-4 text-2xl font-black text-foreground">
              Catering
            </h2>
            <p className="text-muted max-w-3xl leading-relaxed">
              Toplantılar, davetler ve kurumsal etkinlikler için{' '}
              <strong className="text-foreground">özel catering</strong>{' '}
              paketlerimiz. Menüyü birlikte belirler, ürünleri etkinlik saatinde
              taze taze teslim ederiz. 50 kişiden büyük gruplara kademeli
              indirim uygulanır; ayrıntılar için{' '}
              <Link
                to="/ozel-firsatlar"
                className="text-primary font-medium hover:underline"
              >
                özel fırsatlar
              </Link>{' '}
              sayfamıza bakın.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[24rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Ürün
                    </th>
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Boyut
                    </th>
                    <th scope="col" className="py-3 font-semibold">
                      Fiyat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">Kahvaltı tabağı</td>
                    <td className="text-muted py-3 pr-4">Kişi başı</td>
                    <td className="text-primary py-3 font-medium">₺180</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">Tatlı çeşitleri</td>
                    <td className="text-muted py-3 pr-4">Kişi başı</td>
                    <td className="text-primary py-3 font-medium">₺220</td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">Tam menü</td>
                    <td className="text-muted py-3 pr-4">Kişi başı</td>
                    <td className="text-primary py-3 font-medium">₺350</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/ozel-firsatlar"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Özel Fırsatlar
            </Link>
            <Link
              to="/firin-ustasi-gunlugu"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Fırın Ustası Günlüğü
            </Link>
            <Link
              to="/hakkimizda"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
