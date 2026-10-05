// File: src/App.tsx

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { NotificationBar } from '@/components/NotificationBar';
import { Footer } from '@/components/Footer';
import { ScrollManager } from '@/components/ScrollManager';
import { HomePage } from '@/pages/HomePage';
import { BlogPage } from '@/pages/BlogPage';
import { NewsletterPage } from '@/pages/NewsletterPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { OffersPage } from '@/pages/OffersPage';
import { AboutPage } from '@/pages/AboutPage';
import { FaqPage } from '@/pages/FaqPage';
import { ContactPage } from '@/pages/ContactPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ReservationPage } from '@/pages/ReservationPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { FoodSafetyPage } from '@/pages/FoodSafetyPage';
import { AllergenPage } from '@/pages/AllergenPage';
import { CookiePage } from '@/pages/CookiePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="flex min-h-screen flex-col bg-background">
        <NotificationBar />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/katalog" element={<ProductsPage />} />
            <Route path="/urunler" element={<Navigate to="/katalog" replace />} />
            <Route path="/rezervasyon" element={<ReservationPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/firin-ustasi-gunlugu" element={<BlogPage />} />
            <Route path="/tarif-bulteni" element={<NewsletterPage />} />
            <Route path="/etkinlik-galerisi" element={<GalleryPage />} />
            <Route path="/ozel-firsatlar" element={<OffersPage />} />
            <Route path="/sss" element={<FaqPage />} />
            <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
            <Route path="/gida-guvenligi-standartlari" element={<FoodSafetyPage />} />
            <Route path="/hizmet-sartlari" element={<TermsPage />} />
            <Route path="/alerjen-bilgileri" element={<AllergenPage />} />
            <Route path="/cerez-ayarlari" element={<CookiePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
