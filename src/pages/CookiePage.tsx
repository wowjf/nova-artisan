import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';

type Prefs = { analytics: boolean; marketing: boolean };

function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem('nova-cookie-prefs');
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Prefs>;
      return { analytics: parsed.analytics === true, marketing: parsed.marketing === true };
    }
  } catch { /* localStorage erişilemiyor olabilir */ }
  return { analytics: false, marketing: false };
}

export function CookiePage() {
  const [prefs, setPrefs] = useState<Prefs>(loadPrefs);
  const [status, setStatus] = useState('');

  function save() {
    try {
      localStorage.setItem('nova-cookie-prefs', JSON.stringify(prefs));
      setStatus('Tercihleriniz kaydedildi.');
    } catch { /* localStorage erişilemiyor olabilir */ }
  }

  return (
    <>
      <Seo
        title="Çerez Ayarları — Tercihlerinizi Yönetin | Nova Artisan"
        description="Nova Artisan çerez tercihleri merkezi: zorunlu, analitik ve pazarlama çerezlerini yönetin, tarayıcınızda saklanan ayarlarınızı dilediğinizde değiştirin."
      />
      <PageTemplate
        eyebrow="Yasal"
        title="Çerez Ayarları"
        intro="Zorunlu, analitik ve pazarlama çerezleri için tercihlerinizi bu sayfadan yönetin."
      >
        <p className="text-muted leading-relaxed">
          Bu sayfadan <strong className="text-foreground">çerez tercihleri</strong>'ni
          yönetebilirsiniz. Seçimleriniz yalnızca sizin tarayıcınızda saklanır;
          <strong className="text-foreground"> analitik</strong> ve
          <strong className="text-foreground"> pazarlama</strong> çerezlerini dilediğiniz
          an açıp kapatabilir, zorunlu çerezler fırın deneyiminizi sürdürülebilir kıldığı
          için her zaman aktif kalır.
        </p>

        <section>
          <h2 className="mb-6 text-2xl font-black text-foreground">Tercihleriniz</h2>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start justify-between gap-4 border-b border-border/60 py-4">
              <div>
                <label htmlFor="pref-required" className="font-semibold text-foreground">
                  Zorunlu Çerezler
                </label>
                <p className="text-muted text-sm">
                  Sepet ve oturum yönetimi için gereklidir.
                </p>
                <span className="text-muted text-xs">Her zaman aktif</span>
              </div>
              <input
                id="pref-required"
                type="checkbox"
                checked
                disabled
                className="size-5 accent-[#b08d57]"
              />
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-border/60 py-4">
              <div>
                <label htmlFor="pref-analytics" className="font-semibold text-foreground">
                  Analitik Çerezler
                </label>
                <p className="text-muted text-sm">
                  Hangi ürün sayfalarının daha çok ziyaret edildiğini anonim olarak ölçer.
                </p>
              </div>
              <input
                id="pref-analytics"
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) => {
                  setPrefs((p) => ({ ...p, analytics: e.target.checked }));
                  setStatus('');
                }}
                className="size-5 accent-[#b08d57]"
              />
            </div>
            <div className="flex items-start justify-between gap-4 py-4">
              <div>
                <label htmlFor="pref-marketing" className="font-semibold text-foreground">
                  Pazarlama Çerezler
                </label>
                <p className="text-muted text-sm">
                  Kampanya etkinliğini ölçer; size özel fırsatlar gösterilmesini sağlar.
                </p>
              </div>
              <input
                id="pref-marketing"
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) => {
                  setPrefs((p) => ({ ...p, marketing: e.target.checked }));
                  setStatus('');
                }}
                className="size-5 accent-[#b08d57]"
              />
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p aria-live="polite" role="status" className="text-muted text-sm">
                {status}
              </p>
              <button
                type="button"
                onClick={save}
                className="bg-primary text-primary-foreground inline-flex h-12 items-center justify-center rounded-full px-8 font-semibold transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
              >
                Tercihleri Kaydet
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-black text-foreground">Çerez Türleri</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Tür
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Amaç
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Süre
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium">Zorunlu</td>
                  <td className="text-muted py-3 pr-4">
                    Sepet ve oturum yönetimi
                  </td>
                  <td className="py-3 pr-4 text-primary font-medium">Oturum boyu</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium">Analitik</td>
                  <td className="text-muted py-3 pr-4">Ziyaret ölçümü</td>
                  <td className="py-3 pr-4 text-primary font-medium">12 ay</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pr-4 font-medium">Pazarlama</td>
                  <td className="text-muted py-3 pr-4">Kampanya ölçümü</td>
                  <td className="py-3 pr-4 text-primary font-medium">12 ay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-black text-foreground">
            Tercihleri Sıfırla
          </h2>
          <p className="text-muted leading-relaxed">
            Kayıtlı <strong className="text-foreground">çerez tercihleri</strong>'ni
            kaldırmak için tarayıcınızın site verilerini temizlemeniz yeterlidir; bu
            işlem sonrasında tercihleriniz varsayılan kapalı durumuna döner. Verilerinizi
            nasıl işlediğimizle ilgili ayrıntılar için
            <Link
              to="/gizlilik-politikasi"
              className="text-primary px-1 font-medium hover:underline"
            >
              gizlilik politikamıza
            </Link>
            göz atabilirsiniz.
          </p>
        </section>

        <div className="mt-14">
          <h2 className="mb-4 text-2xl font-black text-foreground">İlgili Sayfalar</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/gizlilik-politikasi"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Gizlilik Politikası
            </Link>
            <Link
              to="/hizmet-sartlari"
              className="text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary"
            >
              Hizmet Şartları
            </Link>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
