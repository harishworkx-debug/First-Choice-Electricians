import { Link } from 'react-router-dom';
import { business, services, serviceAreas } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function Sitemap() {
  usePageMeta({
    title: 'Sitemap | First Choice Electricians',
    description:
      'HTML sitemap for First Choice Electricians. Browse all pages including services, service areas, and company information.',
    path: '/sitemap',
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Sitemap', path: '/sitemap' },
  ]);

  const mainPages = [
    { name: 'Homepage', path: '/' },
    { name: 'About First Choice Electricians', path: '/about' },
    { name: 'All Electrical Services', path: '/services' },
    { name: 'All Service Areas', path: '/service-areas' },
    { name: 'Customer Reviews', path: '/reviews' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms and Conditions', path: '/terms-and-conditions' },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Sitemap' }]} />
      <article className="py-12 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-8">
            Sitemap
          </h1>
          <p className="text-slate-400 mb-10 leading-relaxed">
            A complete list of pages on the {business.name} website.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-bold text-amber-400 mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {mainPages.map((p) => (
                  <li key={p.path}>
                    <Link to={p.path} className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-amber-400 mb-4">Electrical Services</h2>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/${s.slug}`} className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                      {s.name} in Los Angeles
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-amber-400 mb-4">Service Areas</h2>
              <ul className="space-y-2">
                {serviceAreas.map((a) => (
                  <li key={a.slug}>
                    <Link to={`/${a.slug}`} className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                      Electrician in {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 text-sm text-slate-500">
            <p>
              XML sitemap: <a href="/sitemap.xml" className="text-amber-400 hover:text-amber-300">/sitemap.xml</a>
            </p>
            <p className="mt-2">
              Phone: <a href={business.phoneTel} className="text-amber-400 hover:text-amber-300">{business.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
