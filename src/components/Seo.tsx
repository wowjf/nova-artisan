import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function Seo({ title, description, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Nova Artisan');
    setMeta('property', 'og:locale', 'tr_TR');

    if (jsonLd) {
      let script = document.head.querySelector<HTMLScriptElement>(
        'script#seo-jsonld'
      );
      if (!script) {
        script = document.createElement('script');
        script.id = 'seo-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, jsonLd]);

  return null;
}
