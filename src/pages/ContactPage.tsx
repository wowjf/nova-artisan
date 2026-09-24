import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
};

const weekHours: [string, string][] = [
  ['Pazartesi', '07:00–20:00'],
  ['Salı', '07:00–20:00'],
  ['Çarşamba', '07:00–20:00'],
  ['Perşembe', '07:00–20:00'],
  ['Cuma', '07:00–20:00'],
  ['Cumartesi', '07:00–20:00'],
];

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:destek@novaartisan.com?subject=${encodeURIComponent(
      `İletişim Formu: ${subject}`
    )}&body=${encodeURIComponent(`${name} (${email}): ${message}`)}`;
    setSent(true);
  };

  return (
    <>
      <Seo
        title="İletişim — Adres, Telefon ve Çalışma Saatleri | Nova Artisan"
        description="Nova Artisan iletişim: Çankaya Ankara'daki fırınımızın adresi, telefonu, e-postası ve çalışma saatleri; formu doldurun, sorularınızı aynı gün yanıtlayalım."
        jsonLd={contactJsonLd}
      />
      <PageTemplate
        eyebrow="Kurumsal"
        title="İletişim"
        intro="Sorularınız, siparişiniz ya da özel talepleriniz mi var? Fırınımıza ulaşmanın tüm yolları — adres, telefon, e-posta ve çalışma saatleri — bu sayfada."
      >
        <section>
          <h2 className="mb-6 text-2xl font-black text-foreground">
            İletişim Kanalları
          </h2>
          <p className="text-muted mb-6 max-w-2xl leading-relaxed">
            En hızlı <strong className="text-foreground">iletişim</strong>{' '}
            kanalımız e-posta; sıcak ürün saatinde sipariş için telefon hattımız
            açık. Çankaya / Ankara'daki fırınımıza çay içmeye de bekleriz.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 motion-reduce:transition-none">
              <h3 className="text-lg font-bold text-foreground">Adres</h3>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                Gurmeler Plaza No:1, Gastronomi Mah. Çankaya / Ankara
              </p>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                Tezgâhımız her gün sabah 07:00'de sıcak ürünle açılıyor.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 motion-reduce:transition-none">
              <h3 className="text-lg font-bold text-foreground">Telefon</h3>
              <p className="mt-3 text-sm leading-relaxed">
                <a
                  href="tel:+903121234567"
                  className="text-primary font-medium hover:underline"
                >
                  +90 312 123 45 67
                </a>
              </p>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                Sipariş ve rezervasyon hattı; hafta içi ve Cumartesi
                07:00–20:00 arasında yanıt veriyoruz.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 motion-reduce:transition-none">
              <h3 className="text-lg font-bold text-foreground">E-posta</h3>
              <p className="mt-3 text-sm leading-relaxed">
                <a
                  href="mailto:destek@novaartisan.com"
                  className="text-primary font-medium hover:underline"
                >
                  destek@novaartisan.com
                </a>
              </p>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                Sorularınıza genelde aynı gün içinde dönüyoruz.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1 motion-reduce:transition-none">
              <h3 className="text-lg font-bold text-foreground">
                Çalışma Saatleri
              </h3>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                Pazartesi–Cumartesi{' '}
                <strong className="text-foreground">07:00–20:00</strong>, Pazar
                günleri kapalıyız.
              </p>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                Ayrıntılı tablo aşağıdaki bölümde.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="mb-6 text-2xl font-black text-foreground">
              Çalışma Saatleri
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[24rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Gün
                    </th>
                    <th scope="col" className="py-3 font-semibold">
                      Saatler
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weekHours.map(([day, hours]) => (
                    <tr key={day} className="border-b border-border/60">
                      <td className="py-3 pr-4 font-medium">{day}</td>
                      <td className="text-muted py-3">{hours}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium">Pazar</td>
                    <td className="text-primary py-3 font-medium">Kapalı</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mt-4 text-sm leading-relaxed">
              Resmî bayramlarda saatler değişebilir; güncel durum için
              telefonla teyit etmenizi rica ederiz.
            </p>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-black text-foreground">
              Bize Yazın
            </h2>
            <form
              onSubmit={submit}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <label
                htmlFor="contact-name"
                className="font-semibold text-foreground"
              >
                Adınız
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız Soyadınız"
                className="focus:border-primary h-12 rounded-lg border border-border bg-background px-4 text-foreground focus:outline-none"
              />
              <label
                htmlFor="contact-email"
                className="font-semibold text-foreground"
              >
                E-posta adresiniz
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@eposta.com"
                className="focus:border-primary h-12 rounded-lg border border-border bg-background px-4 text-foreground focus:outline-none"
              />
              <label
                htmlFor="contact-subject"
                className="font-semibold text-foreground"
              >
                Konu
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Örneğin: Doğum günü pastası siparişi"
                className="focus:border-primary h-12 rounded-lg border border-border bg-background px-4 text-foreground focus:outline-none"
              />
              <label
                htmlFor="contact-message"
                className="font-semibold text-foreground"
              >
                Mesajınız
              </label>
              <textarea
                id="contact-message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Bize nasıl yardımcı olabiliriz?"
                className="focus:border-primary h-32 rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground inline-flex h-12 items-center justify-center rounded-full px-8 font-semibold transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
              >
                Mesajı Gönder
              </button>
              <p aria-live="polite" className="text-muted text-xs">
                {sent
                  ? 'E-posta uygulamanız açıldı — mesajı göndererek iletişiminizi tamamlayın.'
                  : 'Mesajınız e-posta uygulamanız üzerinden bize ulaşır; genelde aynı gün yanıt veriyoruz.'}
              </p>
            </form>
          </section>
        </div>

        <p className="text-muted mt-14 text-sm leading-relaxed">
          Konum haritamız ve ulaşım yönlendirmeleri{' '}
          <Link to="/" className="text-primary font-medium hover:underline">
            ana sayfada
          </Link>{' '}
          yer alıyor; sipariş teslim süreleri için menümüzü de inceleyebilirsiniz.
        </p>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">
            İlgili Sayfalar
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/sss"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Sıkça Sorulan Sorular
            </Link>
            <Link
              to="/tarif-bulteni"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Tarif Bülteni
            </Link>
            <Link
              to="/urunler"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Ürünlerimiz
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
