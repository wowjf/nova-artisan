// File: src/pages/AboutPage.tsx

import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';

const milestones = [
  {
    yil: 'Ekim 2026',
    olay: 'Nova Artisan, Tokat Erbaa’da Fevzipaşa Mahallesi Atatürk Caddesi’nde kapılarını açtı; modern taş fırın ve butik pasta atölyesi faaliyete geçti.',
  },
  {
    yil: '2026',
    olay: 'Pasta ve börek reçetelerinde uzmanlaşarak; el açması kat kat börekler, artisan kruvasanlar ve Belçika çikolatalı butik pastalar aynı çatı altında buluştu.',
  },
  {
    yil: 'Günümüz',
    olay: 'Erbaa’da hem profesyonel fırıncılık disiplinini hem de samimi butik pastane kültürünü harmanlayarak her sabah 07:00’de taze üretim sürdürülüyor.',
  },
];

const values = [
  {
    baslik: 'Günlük Taze Üretim',
    metin: 'Hamurlarımız gece dinlendirilir, sabahın ilk ışıklarıyla taş fırına girer. Vitrinimizde bekleyen hiçbir ürün ertesi güne aktarılmaz; tazelik Nova Artisan’ın vazgeçilmez kuralıdır.',
  },
  {
    baslik: 'Hakiki Tereyağı & Katkısız İçerik',
    metin: 'Kruvasanlarımızda ve böreklerimizde margarin veya endüstriyel esanslar asla kullanılmaz. Sadece %82 yağ oranına sahip gerçek tereyağı ve doğal ham maddeler tercih edilir.',
  },
  {
    baslik: 'Butik ve Profesyonel Denge',
    metin: 'Büyük ölçekli işletmelerin hijyen ve profesyonellik standartlarını, butik bir pastanenin özeni ve el ustalığıyla birleştiriyoruz.',
  },
];

const stats = [
  { deger: 'Ekim 2026', etiket: 'Erbaa’da açılış tarihi' },
  { deger: '30+', etiket: 'günlük taze pasta & börek' },
  { deger: '%100', etiket: 'doğal tereyağı ve taze malzeme' },
  { deger: '84 Kat', etiket: 'el yapımı çıtır laminasyon' },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="Hakkımızda — Tokat Erbaa Butik ve Profesyonel Pastanesi | Nova Artisan"
        description="Nova Artisan hikâyesi: 2026 yılının Ekim ayında Tokat Erbaa Atatürk Caddesi'nde kurulan, farklı pasta ve börek çeşitleriyle öne çıkan butik pastanemiz hakkında bilgi alın."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Bakery',
          name: 'Nova Artisan',
          foundingDate: '2026-10',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Fevzipaşa, Atatürk Cd.',
            addressLocality: 'Erbaa',
            addressRegion: 'Tokat',
            postalCode: '60500',
            addressCountry: 'TR',
          },
          telephone: '+905462778746',
          email: 'destek@novaartisanbakery.com',
        }}
      />

      <PageTemplate
        eyebrow="Erbaa / Tokat Butik Pastanesi"
        title="Hikâyemiz & Felsefemiz"
        intro="Nova Artisan, 2026 yılının Ekim ayında Tokat Erbaa'da kuruldu. Farklı türlerdeki pasta ve el açması börek çeşitleriyle öne çıkan işletmemiz; profesyonel mutfak disiplini ile butik pastane sıcaklığını tek bir tezgâhta buluşturuyor."
      >
        <section aria-label="Giriş ve Felsefe">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-foreground">
                Erbaa'da Başlayan Artisan Tutku
              </h2>
              <p className="mt-3 leading-relaxed text-muted text-xs sm:text-sm">
                Fevzipaşa Mahallesi, Atatürk Caddesi üzerindeki fırınımızda her sabah taze un kokusu ve tereyağının çıtırtısıyla güne başlıyoruz. Nova Artisan, sıradan bir fırın veya pastane olmanın ötesinde; hem dünya pastacılığının zarif tatlarını (San Sebastian, Belçika çikolatalı mus, makaron) hem de geleneksel Türk mutfağının incelikli lezzetlerini (el açması kol böreği, su böreği, Antep fıstıklı baklava) titizlikle sunar.
              </p>
              <p className="mt-2.5 leading-relaxed text-muted text-xs sm:text-sm">
                İşletmemizin alametifarikası, pasta ve börek çeşitliliğindeki zenginliktir. Her bir ürün, reçetesi günlerce test edilmiş özel tariflerle hazırlanır.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <Link
                  to="/katalog"
                  className="rounded-lg bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-95"
                >
                  Lezzet Kataloğunu İncele
                </Link>
                <Link
                  to="/rezervasyon"
                  className="rounded-lg border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-neutral-100"
                >
                  Masa & Sipariş Ayırt
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card p-4">
              <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src="/images/danish-panistry.png"
                  alt="Nova Artisan fırın atölyesi lezzetleri"
                  width={600}
                  height={450}
                  className="size-full object-cover"
                />
              </div>
              <p className="mt-3 text-[11px] text-muted text-center italic">
                Tokat / Erbaa Atölyemizde günlük fırınlanan butik lezzetler.
              </p>
            </div>
          </div>
        </section>

        {/* İstatistikler */}
        <section aria-label="Temel Değerler ve İstatistikler" className="mt-10 sm:mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.etiket}
                className="rounded-xl border border-border bg-card p-4 text-center transition-transform hover:-translate-y-0.5"
              >
                <div className="text-xl sm:text-2xl font-black text-primary">
                  {s.deger}
                </div>
                <div className="mt-1 text-[11px] text-muted font-medium">
                  {s.etiket}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Değerler */}
        <section aria-label="İlkelerimiz" className="mt-10 sm:mt-12">
          <h2 className="mb-4 text-lg sm:text-xl font-black text-foreground">
            Üretim Standartlarımız
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.baslik}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 sm:p-5"
              >
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {v.baslik}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {v.metin}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kilometre Taşları */}
        <section aria-label="Zaman Çizelgesi" className="mt-10 sm:mt-12">
          <h2 className="mb-4 text-lg sm:text-xl font-black text-foreground">
            Kuruluş Yolculuğumuz
          </h2>
          <div className="space-y-3">
            {milestones.map((m) => (
              <div
                key={m.yil + m.olay}
                className="flex flex-col gap-1.5 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="shrink-0 font-mono text-xs font-bold text-primary sm:w-24">
                  {m.yil}
                </span>
                <p className="text-xs leading-relaxed text-muted">
                  {m.olay}
                </p>
              </div>
            ))}
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
