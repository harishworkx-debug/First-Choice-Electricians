import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, ShieldCheck, ThumbsUp, Award, ChevronRight } from 'lucide-react';
import { business, services } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import { ServiceIcon } from '../components/ServiceIcon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTASection from '../components/CTASection.jsx';

export default function About() {
  usePageMeta({
    title: 'About First Choice Electricians | Los Angeles Electrician',
    description:
      'Learn about First Choice Electricians, a Los Angeles-based electrician providing residential and commercial electrical repair, installation, and upgrades. Call (323) 924-3273.',
    path: '/about',
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);

  const values = [
    {
      title: 'Professional Workmanship',
      desc: 'Every job is performed to current National Electrical Code standards with careful attention to every connection, box, and circuit.',
      icon: Award,
    },
    {
      title: 'Safety First',
      desc: 'Proper grounding, correct wiring sizing, and quality materials are the foundation of every repair and installation we complete.',
      icon: ShieldCheck,
    },
    {
      title: 'Clear Communication',
      desc: 'We explain what is happening in plain language, answer your questions honestly, and give you straightforward guidance before any work begins.',
      icon: ThumbsUp,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} />

      <section className="relative pt-10 pb-16 bg-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-4">
                About Us
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                About First Choice Electricians
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                First Choice Electricians is a Los Angeles-based electrical contractor providing
                residential and commercial electrical services across the city. From a single faulty
                outlet to a complete panel upgrade, we deliver safe, code-compliant work with
                straightforward communication on every job.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                We are located at {business.addressShort}, and we schedule every job by phone so the
                work can be discussed in detail before we arrive. When you call{' '}
                <a href={business.phoneTel} className="text-amber-400 font-bold hover:text-amber-300">
                  {business.phoneDisplay}
                </a>
                , you speak directly with us — no call centers, no booking forms.
              </p>
              <div className="mt-7">
                <a
                  href={business.phoneTel}
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-400/25 hover:-translate-y-1 transition-all"
                >
                  <Phone className="w-5 h-5 fill-current animate-pulse" />
                  Call {business.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950">
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg leading-none">FIRST CHOICE</div>
                    <div className="text-amber-400 text-[10px] font-semibold tracking-widest uppercase">
                      Electricians
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                    <span>{business.address}</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-5 h-5 text-amber-400" />
                    <a href={business.phoneTel} className="text-amber-400 font-bold text-base hover:text-amber-300">
                      {business.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center">
            How We Approach Electrical Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Our Electrical Services
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              First Choice Electricians handles a complete range of residential and commercial
              electrical work across Los Angeles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group flex items-center gap-3 p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <ServiceIcon name={service.icon} className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors flex-1">
                  {service.name}
                </span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to schedule electrical service in Los Angeles?"
        subtext="Call First Choice Electricians for professional, code-compliant electrical work across Los Angeles, CA."
      />
    </>
  );
}
