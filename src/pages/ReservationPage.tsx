// File: src/pages/ReservationPage.tsx

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

const reservationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ReserveAction',
  target: 'https://novaartisanbakery.com/rezervasyon',
  agent: {
    '@type': 'Bakery',
    name: 'Nova Artisan',
    address: 'Fevzipaşa, Atatürk Cd., 60500 Erbaa/Tokat',
    telephone: '+905462778746',
  },
};

const hoursOptions = [
  '08:30 - 09:30',
  '09:30 - 10:30',
  '10:30 - 11:30',
  '12:00 - 13:00',
  '13:30 - 14:30',
  '15:00 - 16:00',
  '16:30 - 17:30',
  '18:00 - 19:00',
  '19:00 - 20:00',
];

export function ReservationPage() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('urun') || '';

  const [reservationType, setReservationType] = useState<'masa' | 'pasta' | 'catering'>('masa');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState(hoursOptions[2]);
  const [guests, setGuests] = useState('2 Kişi');
  const [notes, setNotes] = useState(prefilledProduct ? `Talep Edilen Lezzet: ${prefilledProduct}` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Nova Artisan! ${fullName} adına rezervasyon / sipariş talebim bulunmaktadır:\n` +
      `- Tür: ${reservationType === 'masa' ? 'Masa Rezervasyonu' : reservationType === 'pasta' ? 'Özel Butik Pasta' : 'Toplu Sipariş / Börek'}\n` +
      `- Tarih: ${date || 'Belirtilmedi'} (${timeSlot})\n` +
      `- Kişi / Miktar: ${guests}\n` +
      `- Telefon: ${phone}\n` +
      (notes ? `- Notlar: ${notes}` : '')
  );

  return (
    <>
      <Seo
        title="Rezervasyon & Özel Pasta Siparişi — Masa & Fırın Ayırtma | Nova Artisan"
        description="Tokat Erbaa'da Nova Artisan'da masa rezervasyonu yapın veya özel kutlama pastaları, sıcak börek tepsileri için ön sipariş oluşturun."
        jsonLd={reservationJsonLd}
      />

      <PageTemplate
        eyebrow="Erbaa / Tokat Butik Pastanesi"
        title="Rezervasyon & Sipariş Talebi"
        intro="Nova Artisan'ın butik salonunda keyifli bir çay-kahve saati için masa ayırtabilir veya özel günleriniz için el yapımı pasta ve sıcak börek siparişlerinizi önceden iletebilirsiniz."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Form Section */}
          <div className="lg:col-span-2">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs">
                {/* Type Selection Tabs */}
                <div className="mb-5 sm:mb-6">
                  <label className="mb-2 block text-xs font-bold text-foreground uppercase tracking-wider">
                    Rezervasyon Türünü Seçin
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setReservationType('masa')}
                      className={`rounded-lg py-2 px-2 text-center text-xs font-semibold transition-all cursor-pointer ${
                        reservationType === 'masa'
                          ? 'bg-primary text-primary-foreground shadow-2xs'
                          : 'bg-background border border-border text-foreground hover:bg-neutral-100'
                      }`}
                    >
                      Masa
                    </button>
                    <button
                      type="button"
                      onClick={() => setReservationType('pasta')}
                      className={`rounded-lg py-2 px-2 text-center text-xs font-semibold transition-all cursor-pointer ${
                        reservationType === 'pasta'
                          ? 'bg-primary text-primary-foreground shadow-2xs'
                          : 'bg-background border border-border text-foreground hover:bg-neutral-100'
                      }`}
                    >
                      Özel Pasta
                    </button>
                    <button
                      type="button"
                      onClick={() => setReservationType('catering')}
                      className={`rounded-lg py-2 px-2 text-center text-xs font-semibold transition-all cursor-pointer ${
                        reservationType === 'catering'
                          ? 'bg-primary text-primary-foreground shadow-2xs'
                          : 'bg-background border border-border text-foreground hover:bg-neutral-100'
                      }`}
                    >
                      Börek / Toplu
                    </button>
                  </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="res-name" className="mb-1 block text-xs font-semibold text-foreground">
                      Adınız Soyadınız *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ahmet Yılmaz"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="res-phone" className="mb-1 block text-xs font-semibold text-foreground">
                      Telefon Numaranız *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0546 277 87 46"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="res-email" className="mb-1 block text-xs font-semibold text-foreground">
                      E-posta Adresiniz *
                    </label>
                    <input
                      id="res-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ornek@domain.com"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="res-date" className="mb-1 block text-xs font-semibold text-foreground">
                      Tarih *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label htmlFor="res-time" className="mb-1 block text-xs font-semibold text-foreground">
                      Saat Aralığı *
                    </label>
                    <select
                      id="res-time"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      {hoursOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Party Size */}
                  <div>
                    <label htmlFor="res-guests" className="mb-1 block text-xs font-semibold text-foreground">
                      {reservationType === 'masa' ? 'Kişi Sayısı' : 'Porsiyon / Adet'} *
                    </label>
                    <select
                      id="res-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="1-2 Kişi">1 - 2 Kişi</option>
                      <option value="3-4 Kişi">3 - 4 Kişi</option>
                      <option value="5-8 Kişi">5 - 8 Kişi (Grup)</option>
                      <option value="10+ Kişi">10+ Kişi (Özel)</option>
                      <option value="1 Tepsi / Bütün Pasta">1 Bütün Pasta / Tepsi</option>
                      <option value="2+ Tepsi / Büyük Sipariş">2+ Tepsi / Büyük Sipariş</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-4">
                  <label htmlFor="res-notes" className="mb-1 block text-xs font-semibold text-foreground">
                    Özel Notlar veya Alerjen Hassasiyeti
                  </label>
                  <textarea
                    id="res-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Pasta üzeri yazısı, masa tercihi veya alerjen notlarınızı iletiniz."
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-all hover:opacity-95 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Talebiniz Alınıyor...' : 'Rezervasyon Talebini Gönder'}
                  </button>
                  <span className="text-[11px] text-muted">
                    Erbaa atölyemiz en geç 2 saat içinde teyit eder.
                  </span>
                </div>
              </form>
            ) : (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Talebiniz Başarıyla Alındı!
                </h3>
                <p className="mx-auto mt-1.5 max-w-sm text-xs sm:text-sm leading-relaxed text-muted">
                  Sayın <strong>{fullName}</strong>, talebiniz Tokat Erbaa ekibimize iletilmiştir. {phone} numarası üzerinden teyit araması yapılacaktır.
                </p>

                <div className="mx-auto my-4 max-w-xs rounded-lg border border-border bg-background p-3 text-left text-[11px] space-y-1">
                  <div><strong>Tür:</strong> {reservationType === 'masa' ? 'Masa' : 'Pasta / Sipariş'}</div>
                  <div><strong>Zaman:</strong> {date || 'Bugün'} — {timeSlot}</div>
                  <div><strong>Kişi / Adet:</strong> {guests}</div>
                  {notes && <div><strong>Not:</strong> {notes}</div>}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-2">
                  <a
                    href={`https://wa.me/905462778746?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-[#25D366] px-4 py-2 text-xs font-semibold text-white hover:opacity-90 inline-flex items-center justify-center gap-1.5"
                  >
                    <span>WhatsApp ile İletişime Geç</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setNotes('');
                    }}
                    className="rounded-lg border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-neutral-100 cursor-pointer"
                  >
                    Yeni Rezervasyon
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Info Section */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h3 className="text-sm font-bold text-foreground">
                Hızlı Rezervasyon Hattı
              </h3>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">
                Acil pasta ve masa talepleriniz için doğrudan fırınımızla irtibata geçebilirsiniz:
              </p>
              <div className="mt-3">
                <a
                  href="tel:+905462778746"
                  className="flex items-center gap-2.5 rounded-lg border border-primary/20 bg-primary/10 p-2.5 text-primary text-xs font-bold transition-colors hover:bg-primary/20"
                >
                  <span>📞</span>
                  <span>+90 546 277 87 46</span>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h3 className="text-sm font-bold text-foreground">
                Erbaa Fırın & Butik Adresimiz
              </h3>
              <p className="mt-1 text-xs text-muted">
                Fevzipaşa, Atatürk Cd., 60500 Erbaa / Tokat
              </p>
              <div className="mt-3 border-t border-border/60 pt-2.5 text-[11px] text-muted space-y-1">
                <div className="flex justify-between">
                  <span>Pazartesi – Cumartesi:</span>
                  <span className="font-semibold text-foreground">07:00 – 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="font-semibold text-foreground">08:00 – 19:00</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h3 className="text-sm font-bold text-foreground">
                Instagram & Vitrin
              </h3>
              <p className="mt-1 text-[11px] text-muted">
                Günlük çıkan taze pasta ve börek çeşitlerimizi hikayelerimizden izleyin:
              </p>
              <a
                href="https://www.instagram.com/nova.artisann"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>@nova.artisann</span>
                <span>↗</span>
              </a>
            </div>
          </aside>
        </div>
      </PageTemplate>
    </>
  );
}
