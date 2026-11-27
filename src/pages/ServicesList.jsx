import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { business, services } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import { ServiceIcon } from '../components/ServiceIcon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTASection from '../components/CTASection.jsx';

export default function ServicesList() {
  usePageMeta({
    title: 'All Electrical Services in Los Angeles, CA | First Choice Electricians',
    description:
      'Complete electrical services in Los Angeles: residential and commercial, repair, panel upgrades, circuit breakers, wiring, lighting, outlets, ceiling fans, and EV chargers. Call (323) 924-3273.',
    path: '/services',
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Electrical Services' }]} />

      <section className="relative pt-10 pb-12 bg-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-4">
            Electrical Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            All Electrical Services in Los Angeles, CA
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            First Choice Electricians offers a complete range of residential and commercial electrical
            services for Los Angeles. Call{' '}
            <a href={business.phoneTel} className="text-amber-400 font-bold">
              {business.phoneDisplay}
            </a>{' '}
            to schedule any service below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group bg-slate-900/90 rounded-2xl p-7 border border-slate-800 hover:border-amber-400/50 transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-400/10 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 group-hover:bg-amber-400 text-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors mb-5">
                  <ServiceIcon name={service.icon} className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                  {service.name}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{service.short}</p>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">In Los Angeles, CA</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
                    {service.name}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Don't see your specific electrical issue?
          </h2>
          <p className="text-slate-400 mb-6">
            Call First Choice Electricians to discuss your needs — most electrical work can be handled
            with a phone call and a prompt visit.
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
