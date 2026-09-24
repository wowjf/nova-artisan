import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';
import { Container } from '@/components/Container';

const chipClass =
  'text-primary rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary';

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Sayfa Bulunamadı (404) | Nova Artisan"
        description="Aradığınız sayfa bulunamadı. Nova Artisan menüsüne, hikâyesine veya iletişim sayfalarına göz atın."
      />
      <section className="bg-card flex min-h-[70vh] items-center">
        <Container className="flex flex-col items-center gap-6 py-20 text-center">
          <p className="font-logo text-primary text-7xl md:text-9xl">39</p>
          <h1 className="text-3xl font-black text-foreground md:text-5xl">
            Bu fırında öyle bir sayfa yok
          </h1>
          <p className="text-muted max-w-md leading-relaxed">
            Aradığınız sayfa taşınmış ya da hiç pişmemiş olabilir. Aşağıdaki
            bağlantılardan mutfağımıza geri dönebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/" className={chipClass}>
              Ana Sayfa
            </Link>
            <Link to="/urunler" className={chipClass}>
              Menü
            </Link>
            <Link to="/hakkimizda" className={chipClass}>
              Hakkımızda
            </Link>
            <Link to="/sss" className={chipClass}>
              Sıkça Sorulan Sorular
            </Link>
            <Link to="/iletisim" className={chipClass}>
              İletişim
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
