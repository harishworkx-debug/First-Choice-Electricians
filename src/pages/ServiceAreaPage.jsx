import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, ChevronRight, MapPin, CheckCircle2 } from 'lucide-react';
import { business, services, serviceAreas } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema, useWebPageSchema } from '../components/Seo.js';
import { ServiceIcon } from '../components/ServiceIcon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTASection from '../components/CTASection.jsx';

export default function ServiceAreaPage({ areaSlug }) {
  const { slug } = useParams();
  const currentSlug = areaSlug || slug;
  const area = serviceAreas.find((a) => a.slug === currentSlug);

  if (!area) return <Navigate to="/service-areas" replace />;

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 5);

  usePageMeta({
    title: `Electrician in ${area.name}, Los Angeles, CA | First Choice Electricians`,
    description: `First Choice Electricians provides electrical repair, panel upgrades, lighting, EV chargers, and wiring in ${area.name}, Los Angeles, CA. Call (323) 924-3273.`,
    path: `/${area.slug}`,
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: area.name, path: `/${area.slug}` },
  ]);
  useWebPageSchema(
    `Electrician in ${area.name}`,
    `Electrical services in ${area.name}, Los Angeles, CA by First Choice Electricians.`,
    `/${area.slug}`,
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: area.name },
        ]}
      />

      <section className="relative pt-10 pb-16 bg-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-5">
              <MapPin className="w-4 h-4" />
              Service Area · Los Angeles, CA
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
              Electrician in {area.name}, Los Angeles, CA
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">{area.intro}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <a
                href={business.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-400/25 hover:-translate-y-1 transition-all"
              >
                <Phone className="w-5 h-5 fill-current animate-pulse" />
                Call an Electrician
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-white font-bold transition-all"
              >
                Explore Electrical Services
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-6">
            Electrical Services Available in {area.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group flex items-start gap-3 p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <ServiceIcon name={service.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.name} in {area.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{service.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-white mb-6">
                Local Electrical Service in {area.name}
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>{area.intro}</p>
                <p>
                  Whether you need a quick repair, a panel upgrade, or a new EV charger circuit,
                  First Choice Electricians provides the same careful, code-compliant work to every
                  {area.name} property we serve. Every job is scheduled by phone so the work can be
                  discussed in detail before arrival.
                </p>
                <p>
                  To schedule electrical service in {area.name}, call{' '}
                  <a href={business.phoneTel} className="text-amber-400 font-bold hover:text-amber-300">
                    {business.phoneDisplay}
                  </a>{' '}
                  and speak directly with First Choice Electricians.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    {s.name} in {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6">{area.name} FAQs</h2>
              <div className="space-y-3">
                {area.faqs.map((faq, i) => (
                  <details key={i} className="group p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <summary className="cursor-pointer text-white font-semibold text-sm list-none flex items-center justify-between">
                      {faq.q}
                      <ChevronRight className="w-4 h-4 text-amber-400 group-open:rotate-90 transition-transform shrink-0" />
                    </summary>
                    <p className="mt-3 text-slate-400 text-xs leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-black text-white mb-5">Other Service Areas in Los Angeles</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {otherAreas.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/${a.slug}`}
                    className="flex items-center gap-1.5 p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-400/50 text-xs text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h2 className="text-xl font-black text-white mb-3">Contact First Choice Electricians</h2>
              <p className="text-slate-400 text-sm mb-4">{business.addressShort}</p>
              <a
                href={business.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.mapsShare}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading={`Need an electrician in ${area.name}? Call First Choice Electricians.`}
        subtext={`Professional electrical service in ${area.name}, Los Angeles, CA. Call (323) 924-3273 to schedule.`}
      />
    </>
  );
}
