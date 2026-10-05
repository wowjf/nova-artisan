// File: src/pages/HomePage.tsx

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
    'Tokat Erbaa’da butik ve profesyonel pastane: özel tasarım pastalar, el yapımı kat kat börekler, artisan kruvasanlar ve Antep fıstıklı baklava çeşitleri.',
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
  sameAs: ['https://www.instagram.com/nova.artisann'],
  openingHours: 'Mo-Sa 07:00-20:00, Su 08:00-19:00',
  priceRange: '₺₺',
  servesCuisine: ['Pastane', 'Börek', 'Kruvasan', 'Baklava', 'Kahve'],
};

export function HomePage() {
  return (
    <>
      <Seo
        title="Nova Artisan — Butik & Profesyonel Pastane | Tokat Erbaa"
        description="Tokat Erbaa'da açılan Nova Artisan: zengin pasta ve börek çeşitleri, el yapımı kruvasanlar, çıtır baklavalar ve nitelikli kahveler. Her sabah taze taş fırın üretimi."
        jsonLd={localBusinessJsonLd}
      />
      <Hero />
      <Sliders />
      <MapSection />
      <NewSection />
    </>
  );
}
