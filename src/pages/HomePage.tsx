import { Hero } from '@/components/Hero';
import { Sliders } from '@/components/Sliders';
import { MapSection } from '@/components/MapSection';
import { NewSection } from '@/components/NewSection';
import { Seo } from '@/components/Seo';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Nova Artisan',
  description:
    'Ankara Çankayada el yapımı fırın ürünleri: kruvasan, baklava, makaron. Taş fırın geleneği ve taze günlük üretim.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gurmeler Plaza No:1, Gastronomi Mahallesi',
    addressLocality: 'Çankaya',
    addressRegion: 'Ankara',
    addressCountry: 'TR',
  },
  telephone: '+903121234567',
  email: 'destek@novaartisan.com',
  openingHours: 'Mo-Sa 07:00-20:00',
  priceRange: '₺₺',
  servesCuisine: ['Fırın Ürünleri', 'Pastane', 'Kahve'],
};

export function HomePage() {
  return (
    <>
      <Seo
        title="Nova Artisan — El Yapımı Fırın Ürünleri | Ankara Çankaya"
        description="Ankara Çankaya'da taş fırından çıkan el yapımı kruvasan, baklava ve makaron. Sabah 07:00'den akşama taze üretim. Açılışa özel %20 indirim."
        jsonLd={localBusinessJsonLd}
      />
      <Hero />
      <Sliders />
      <MapSection />
      <NewSection />
    </>
  );
}
