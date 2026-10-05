// File: src/pages/ProductsPage.tsx

import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageTemplate } from '@/components/PageTemplate';
import { Seo } from '@/components/Seo';
import { CATEGORIES, PRODUCTS, type Product } from '@/data/catalog';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

const catalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Nova Artisan Lezzet Kataloğu',
  description: 'Tokat Erbaa Nova Artisan pastane kataloğu: butik pastalar, kat kat börekler, Fransız kruvasanları, Antep fıstıklı baklavalar ve nitelikli kahveler.',
  hasMenuSection: CATEGORIES.map((cat) => ({
    '@type': 'MenuSection',
    name: cat.name,
    description: cat.description,
  })),
};

const filterTags = ['Tümü', 'Öne Çıkan', 'Yeni', 'Glutensiz', 'Vejetaryen'];

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategoryId = searchParams.get('kategori');

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('Tümü');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSearchParams({ kategori: categoryId });
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  const handleResetToCategories = () => {
    setSearchQuery('');
    setActiveTag('Tümü');
    setSearchParams({});
    window.scrollTo({ top: 220, behavior: 'smooth' });
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategoryId) {
      list = list.filter((p) => p.categoryId === selectedCategoryId);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.details.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (activeTag !== 'Tümü') {
      list = list.filter((p) => p.tags.includes(activeTag));
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
    }

    return list;
  }, [selectedCategoryId, searchQuery, activeTag, sortBy]);

  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategoryId);

  return (
    <>
      <Seo
        title="Ürün Kataloğu — Butik Pasta, Börek, Kruvasan & Baklava | Nova Artisan"
        description="Tokat Erbaa'da Nova Artisan'ın zengin ürün kataloğu: özel tasarım pastalar, el açması börekler, 84 katmanlı kruvasanlar, çıtır baklavalar ve makaronlar. Fiyatlar ve detaylar."
        jsonLd={catalogJsonLd}
      />

      <PageTemplate
        eyebrow="Erbaa / Tokat Butik Pastanesi"
        title="Ürün & Lezzet Kataloğu"
        intro="Nova Artisan tezgâhında yer alan tüm lezzetler günlük olarak saf tereyağı, taze ham maddeler ve geleneksel artisan teknikleriyle hazırlanır. Kategorileri keşfedin, arama ve filtreleme ile damak tadınıza uygun lezzetleri inceleyin."
      >
        {/* Global Search & Quick Actions Bar */}
        <div className="mb-6 sm:mb-8 rounded-xl border border-border bg-card p-3 sm:p-5 shadow-xs">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <label htmlFor="catalog-search" className="sr-only">
                Katalogda ürün ara
              </label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted">
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                id="catalog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Örn: San Sebastian, Su Böreği, Kruvasan..."
                className="w-full rounded-lg border border-border bg-background py-2 pr-9 pl-9 text-xs sm:text-sm text-foreground placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Aramayı temizle"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-foreground"
                >
                  <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <label htmlFor="catalog-sort" className="text-[11px] font-semibold tracking-wider text-muted uppercase">
                Sırala:
              </label>
              <select
                id="catalog-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="default">Önerilen</option>
                <option value="price-asc">Fiyat: Artan</option>
                <option value="price-desc">Fiyat: Azalan</option>
                <option value="name-asc">İsim: A-Z</option>
              </select>
            </div>
          </div>

          {/* Tag Filter Pills */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-border/60">
            <span className="text-[11px] font-semibold text-muted mr-1">Filtre:</span>
            {filterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
                  activeTag === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background border border-border text-foreground hover:bg-neutral-100'
                }`}
              >
                {tag}
              </button>
            ))}

            {(selectedCategoryId || searchQuery || activeTag !== 'Tümü' || sortBy !== 'default') && (
              <button
                type="button"
                onClick={handleResetToCategories}
                className="ml-auto text-[11px] font-medium text-primary hover:underline"
              >
                Sıfırla
              </button>
            )}
          </div>
        </div>

        {/* VIEW 1: CATEGORIES OVERVIEW */}
        {!selectedCategoryId && !searchQuery.trim() && (
          <section aria-label="Ürün Kategorileri" className="space-y-4 sm:space-y-5">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                  Kategoriler
                </h2>
                <p className="mt-0.5 text-xs text-muted">
                  İncelemek istediğiniz lezzet kategorisini seçin.
                </p>
              </div>
              <span className="text-xs font-medium text-muted">
                {CATEGORIES.length} Kategori
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleSelectCategory(category.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectCategory(category.id);
                    }
                  }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                        {category.badge}
                      </span>
                      <span className="text-[11px] font-medium text-muted">
                        {category.featuredCount} Çeşit
                      </span>
                    </div>

                    <div className="my-3 sm:my-4 flex h-24 sm:h-28 items-center justify-center overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        width={200}
                        height={140}
                        loading="lazy"
                        className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                    <span className="text-xs font-semibold text-primary group-hover:underline">
                      Ürünleri İncele
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VIEW 2: PRODUCTS VIEW */}
        {(selectedCategoryId || searchQuery.trim()) && (
          <section aria-label="Ürün Listesi" className="space-y-4 sm:space-y-5">
            {/* Top Navigation & Back Button */}
            <div className="flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
              <div>
                <button
                  type="button"
                  onClick={handleResetToCategories}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-2xs transition-all hover:bg-neutral-100 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
                >
                  <span aria-hidden="true">←</span>
                  <span>Tüm Kategorilere Geri Dön</span>
                </button>

                <div className="mt-2">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">
                    {searchQuery.trim()
                      ? `"${searchQuery}" için Sonuçlar`
                      : currentCategory?.name || 'Tüm Ürünler'}
                  </h2>
                  <p className="text-xs text-muted mt-0.5">
                    {searchQuery.trim()
                      ? `${filteredProducts.length} lezzet bulundu`
                      : currentCategory?.description}
                  </p>
                </div>
              </div>

              {/* Quick Category Switch Pills */}
              <div className="flex flex-wrap items-center gap-1 self-start sm:self-center">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-colors cursor-pointer ${
                      selectedCategoryId === cat.id
                        ? 'bg-primary text-primary-foreground font-semibold shadow-2xs'
                        : 'bg-background border border-border text-foreground hover:bg-neutral-100'
                    }`}
                  >
                    {cat.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1.5">
                        <div className="flex flex-wrap gap-1">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-neutral-200/80 px-1.5 py-0.5 text-[9px] font-semibold text-neutral-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-[11px] font-medium text-muted">
                          {product.portion}
                        </span>
                      </div>

                      <div className="my-2.5 sm:my-3 flex h-28 sm:h-32 items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          width={200}
                          height={140}
                          loading="lazy"
                          className="max-h-full w-auto object-contain transition-transform hover:scale-105"
                        />
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-foreground">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-3.5 border-t border-border/60 pt-3">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[11px] text-muted">Fiyat:</span>
                        <span className="text-lg font-black text-primary">
                          ₺{product.price}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          type="button"
                          onClick={() => setModalProduct(product)}
                          className="w-full rounded-lg border border-border bg-background py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-neutral-100 cursor-pointer"
                        >
                          Detaylı İncele
                        </button>
                        <Link
                          to={`/rezervasyon?urun=${encodeURIComponent(product.name)}`}
                          className="inline-flex w-full items-center justify-center rounded-lg bg-primary py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-95"
                        >
                          Sipariş / Ayırt
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-card p-8 sm:p-10 text-center">
                <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-neutral-100 text-muted">
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-base font-bold text-foreground">
                  Aramanızla Eşleşen Lezzet Bulunamadı
                </h3>
                <p className="mt-1.5 text-xs text-muted max-w-sm mx-auto">
                  Arama teriminizi sadeleştirebilir ya da filtreleri temizleyerek tüm kategorileri görüntüleyebilirsiniz.
                </p>
                <button
                  type="button"
                  onClick={handleResetToCategories}
                  className="mt-4 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 cursor-pointer"
                >
                  Filtreleri Temizle & Kategorilere Dön
                </button>
              </div>
            )}
          </section>
        )}

        {/* PRODUCT DETAIL MODAL */}
        {modalProduct && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-2xs"
            onClick={() => setModalProduct(null)}
          >
            <div
              className="relative w-full max-w-md rounded-xl border border-border bg-background p-5 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setModalProduct(null)}
                aria-label="Kapat"
                className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-neutral-100 text-xs text-muted hover:text-foreground cursor-pointer"
              >
                ✕
              </button>

              <div className="flex h-32 sm:h-36 items-center justify-center">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  width={220}
                  height={150}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {CATEGORIES.find((c) => c.id === modalProduct.categoryId)?.name}
                  </span>
                  <span className="text-xl font-black text-primary">
                    ₺{modalProduct.price}
                  </span>
                </div>

                <h3 id="product-modal-title" className="mt-1.5 text-base sm:text-lg font-bold text-foreground">
                  {modalProduct.name}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                  {modalProduct.description}
                </p>

                <div className="mt-3 rounded-lg border border-border bg-card p-2.5 text-xs">
                  <h4 className="font-semibold text-foreground text-[11px]">Ustanın Notu & Malzeme:</h4>
                  <p className="mt-0.5 text-muted text-[11px] leading-relaxed">
                    {modalProduct.details}
                  </p>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-muted">
                  <span><strong>Gramaj:</strong> {modalProduct.portion}</span>
                  {modalProduct.allergens.length > 0 && (
                    <span><strong>Alerjen:</strong> {modalProduct.allergens.join(', ')}</span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Link
                  to={`/rezervasyon?urun=${encodeURIComponent(modalProduct.name)}`}
                  className="flex-1 rounded-lg bg-primary py-2 text-center text-xs font-semibold text-primary-foreground hover:opacity-95"
                >
                  Rezervasyon Yap / Ayırt
                </Link>
                <a
                  href={`https://wa.me/905462778746?text=${encodeURIComponent(
                    `Merhaba, Nova Artisan web sitesinden ${modalProduct.name} hakkında bilgi almak ve sipariş vermek istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground hover:bg-neutral-100"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </PageTemplate>
    </>
  );
}
