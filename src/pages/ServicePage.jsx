import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, CheckCircle2, ChevronRight, MapPin, AlertTriangle } from 'lucide-react';
import { business, services, serviceAreas } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema, useServiceSchema } from '../components/Seo.js';
import { ServiceIcon } from '../components/ServiceIcon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTASection from '../components/CTASection.jsx';

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  usePageMeta({
    title: `${service.name} in Los Angeles, CA | First Choice Electricians`,
    description: `${service.tagline} Call First Choice Electricians at (323) 924-3273 for ${service.name.toLowerCase()} in Los Angeles, CA.`,
    path: `/${service.slug}`,
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name, path: `/${service.slug}` },
  ]);
  useServiceSchema(service);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name },
        ]}
      />

      <section className="relative overflow-hidden pt-10 pb-16 bg-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-5">
                <ServiceIcon name={service.icon} className="w-4 h-4" />
                {service.name} · Los Angeles, CA
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                {service.name} in Los Angeles, CA
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">{service.intro}</p>
              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <a
                  href={business.phoneTel}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-400/25 hover:-translate-y-1 transition-all"
                >
                  <Phone className="w-5 h-5 fill-current animate-pulse" />
                  Call for {service.name}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-white font-bold transition-all"
                >
                  Contact First Choice Electricians
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="w-16 h-16 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                  <ServiceIcon name={service.icon} className="w-8 h-8" />
                </div>
                <h2 className="text-white font-bold text-lg mb-3">What to Expect</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{service.expect}</p>
                <a
                  href={business.phoneTel}
                  className="mt-5 flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-amber-300"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              Common {service.name} Issues
            </h2>
            <ul className="space-y-3">
              {service.problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <ChevronRight className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-amber-400" />
              Benefits of Professional {service.name}
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-white mb-6">
                About {service.name} in Los Angeles
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>{service.intro}</p>
                <p>
                  Every {service.name.toLowerCase()} job performed by First Choice Electricians is
                  completed to current National Electrical Code standards and local Los Angeles
                  requirements. Whether the work is a small repair or a larger installation, the goal
                  is the same: a safe, reliable result that you can depend on.
                </p>
                <p>
                  To schedule {service.name.toLowerCase()} in Los Angeles, call{' '}
                  <a href={business.phoneTel} className="text-amber-400 font-bold hover:text-amber-300">
                    {business.phoneDisplay}
                  </a>{' '}
                  and speak directly with First Choice Electricians.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6">FAQs</h2>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
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
              <h2 className="text-xl font-black text-white mb-5">Related Electrical Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                      <ServiceIcon name={s.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-white">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-black text-white mb-5">Service Areas in Los Angeles</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {serviceAreas.map((a) => (
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
          </div>
        </div>
      </section>

      <CTASection
        heading={`Need ${service.name} in Los Angeles? Call First Choice Electricians.`}
        subtext={`Speak directly with First Choice Electricians for professional ${service.name.toLowerCase()} across Los Angeles, CA.`}
      />
    </>
  );
}
