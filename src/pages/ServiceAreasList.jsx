import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Phone } from 'lucide-react';
import { business, serviceAreas } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTASection from '../components/CTASection.jsx';

export default function ServiceAreasList() {
  usePageMeta({
    title: 'Service Areas in Los Angeles, CA | First Choice Electricians',
    description:
      'First Choice Electricians serves neighborhoods across Los Angeles, including Downtown LA, Echo Park, Silver Lake, Chinatown, Boyle Heights, Koreatown, and more. Call (323) 924-3273.',
    path: '/service-areas',
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
  ]);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Service Areas' }]} />

      <section className="relative pt-10 pb-12 bg-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-4">
            Service Areas
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Service Areas in Los Angeles, CA
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            First Choice Electricians is based in Los Angeles and serves neighborhoods across the city.
            These are proposed service areas — call{' '}
            <a href={business.phoneTel} className="text-amber-400 font-bold">
              {business.phoneDisplay}
            </a>{' '}
            to confirm service at your specific address.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/${area.slug}`}
                className="group p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-all hover:-translate-y-1.5"
              >
                <MapPin className="w-8 h-8 text-amber-400 mb-3" />
                <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  Electrician in {area.name}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{area.intro}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
                  {area.name} Electrical Services
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Not sure if we serve your neighborhood?
          </h2>
          <p className="text-slate-400 mb-6">
            Call First Choice Electricians and we will confirm whether we can reach your address in
            Los Angeles.
          </p>
          <a
            href={business.phoneTel}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 fill-current" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
