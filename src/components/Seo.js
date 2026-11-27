import { useEffect } from 'react';
import { business } from '../data/business.js';

const SITE = business.website.replace(/\/$/, '');

function setTag(attr, key, val) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', val);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('id', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const baseOrg = () => ({
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: business.name,
  image: business.images.heroPanel,
  telephone: '+13239243273',
  url: SITE,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  areaServed: business.city,
});

export function usePageMeta({ title, description, path, ogType = 'website' }) {
  useEffect(() => {
    const canonical = SITE + path;
    document.title = title;
    setTag('name', 'description', description);
    setLink('canonical', canonical);
    setTag('property', 'og:title', title);
    setTag('property', 'og:description', description);
    setTag('property', 'og:type', ogType);
    setTag('property', 'og:url', canonical);
    setTag('property', 'og:site_name', business.name);
    setTag('name', 'twitter:card', 'summary_large_image');
    setTag('name', 'twitter:title', title);
    setTag('name', 'twitter:description', description);
    setJsonLd('ld-org', baseOrg());
  }, [title, description, path, ogType]);
}

export function useBreadcrumbSchema(items) {
  useEffect(() => {
    setJsonLd('ld-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: SITE + item.path,
      })),
    });
  }, [JSON.stringify(items)]);
}

export function useServiceSchema(service) {
  useEffect(() => {
    setJsonLd('ld-service', {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.name,
      provider: {
        '@type': 'Electrician',
        name: business.name,
        telephone: '+13239243273',
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.street,
          addressLocality: business.city,
          addressRegion: business.state,
          postalCode: business.zip,
          addressCountry: 'US',
        },
      },
      areaServed: { '@type': 'City', name: 'Los Angeles' },
      description: service.short,
    });
  }, [service]);
}

export function useWebPageSchema(name, description, path) {
  useEffect(() => {
    setJsonLd('ld-webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name,
      description,
      url: SITE + path,
      isPartOf: { '@type': 'WebSite', name: business.name, url: SITE },
    });
  }, [name, description, path]);
}
