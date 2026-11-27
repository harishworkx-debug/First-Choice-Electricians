import { Link } from 'react-router-dom';
import {
  Phone,
  Zap,
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  ChevronRight,
  ShieldCheck,
  Award,
  ThumbsUp,
  Sparkles,
  Wrench,
  Search,
} from 'lucide-react';
import { business, services, serviceAreas } from '../data/business.js';
import { usePageMeta } from '../components/Seo.js';
import { ServiceIcon } from '../components/ServiceIcon.jsx';
import CTASection from '../components/CTASection.jsx';

const homeFaqs = [
  {
    q: 'What areas of Los Angeles does First Choice Electricians serve?',
    a: 'First Choice Electricians is based in Los Angeles and serves neighborhoods across the city, including Downtown Los Angeles, Echo Park, Silver Lake, Chinatown, Boyle Heights, Koreatown, Westlake, the Arts District, and Highland Park. Call (323) 924-3273 to confirm service at your specific address.',
  },
  {
    q: 'How do I schedule electrical service?',
    a: 'Call (323) 924-3273 to speak directly with First Choice Electricians. Every job is scheduled by phone so the work can be discussed in detail before arrival.',
  },
  {
    q: 'Do you handle both residential and commercial electrical work?',
    a: 'Yes. First Choice Electricians provides both residential and commercial electrical services across Los Angeles, from home repairs and panel upgrades to dedicated circuits and lighting for businesses.',
  },
  {
    q: 'Can you upgrade my electrical panel?',
    a: 'Yes. We perform electrical panel upgrades throughout Los Angeles, replacing outdated or undersized panels with modern, properly rated breaker panels that meet today\'s electrical demands.',
  },
  {
    q: 'Do you install EV chargers in Los Angeles?',
    a: 'Yes. We install Level 2 EV chargers with a dedicated circuit, correct wiring, and proper grounding, including panel upgrades when needed to support the additional load.',
  },
];

export default function Home() {
  usePageMeta({
    title: 'First Choice Electricians | Professional Electrician in Los Angeles, CA',
    description:
      'Professional electrical services in Los Angeles, CA. Residential and commercial electrical repair, panel upgrades, lighting, EV chargers, and wiring. Call (323) 924-3273.',
    path: '/',
  });

  const whyChooseUs = [
    {
      title: 'Professional Workmanship',
      desc: 'Careful, clean electrical work performed to current National Electrical Code standards, with attention to every connection.',
      icon: Award,
    },
    {
      title: 'Safe, Reliable Solutions',
      desc: 'Repairs and installations designed to last, with proper grounding, correct sizing, and quality materials on every job.',
      icon: ShieldCheck,
    },
    {
      title: 'Direct Phone Support',
      desc: 'Speak directly with First Choice Electricians when you call — no call centers, no booking forms, just straightforward answers.',
      icon: ThumbsUp,
    },
    {
      title: 'Quality Materials',
      desc: 'Commercial-grade parts and devices chosen for durability, so your electrical system performs reliably for years to come.',
      icon: Sparkles,
    },
  ];

  const process = [
    { step: '1', title: 'Call Us', desc: 'Describe your electrical issue or project over the phone and get clear guidance on next steps.', icon: Phone },
    { step: '2', title: 'Diagnosis', desc: 'We inspect the affected circuits, devices, or panel and explain what is needed in plain terms.', icon: Search },
    { step: '3', title: 'Work Completed', desc: 'Repairs or installations are performed cleanly with quality parts and tested before the job is done.', icon: Wrench },
    { step: '4', title: 'Safe Result', desc: 'Your electrical system works as it should, with safety verified and the work area left tidy.', icon: ShieldCheck },
  ];

  const reviews = [
    { text: 'Fast, professional service. They fixed a breaker that kept tripping and explained everything clearly. Highly recommend First Choice Electricians.', author: 'Verified Google Review' },
    { text: 'Upgraded our panel and installed an EV charger. Clean work, on time, and fair pricing. Will definitely use them again.', author: 'Verified Google Review' },
    { text: 'Great experience from the phone call to the finished work. Installed recessed lighting and dimmers throughout our living room.', author: 'Verified Google Review' },
    { text: 'Called about a dead outlet and they came out the same day. Friendly, knowledgeable, and reasonably priced.', author: 'Verified Google Review' },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src={business.images.heroPanel}
            alt="Professional electrician working on an electrical panel in Los Angeles"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
            loading="eager"
            width={2069}
            height={1179}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>5.0 Google Rating · 14 Reviews · Los Angeles, CA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Professional Electrical Services in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                Los Angeles, CA
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              First Choice Electricians delivers safe, code-compliant electrical repair, installation,
              panel upgrades, and EV charger installation for homes and businesses throughout Los
              Angeles. Call (323) 924-3273 to schedule service.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Fast Diagnosis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Code-Compliant Work</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Phone Estimates</span>
              </div>
            </div>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={business.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-lg shadow-xl shadow-amber-400/25 hover:shadow-amber-400/40 hover:-translate-y-1 active:translate-y-0 transition-all"
              >
                <Phone className="w-6 h-6 fill-current animate-bounce" />
                <span>Call (323) 924-3273</span>
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-white font-bold text-lg hover:-translate-y-1 transition-all"
              >
                Explore Electrical Services
                <ChevronRight className="w-5 h-5 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 border-y border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center justify-center gap-1 text-3xl lg:text-4xl font-extrabold text-amber-400">
                5.0
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Google Rating</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">14</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Google Reviews</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-2xl lg:text-3xl font-extrabold text-amber-400 leading-tight">Los Angeles</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Business Location</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">10+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Electrical Services</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
              Popular Electrical Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Electrical Services in Los Angeles
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              From quick repairs to complete panel upgrades, First Choice Electricians handles a full
              range of residential and commercial electrical services for Los Angeles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group relative bg-slate-900/90 rounded-2xl p-7 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-400/10 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:bg-amber-400 text-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors duration-300 shadow-md">
                    <ServiceIcon name={service.icon} className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                  {service.name}
                </h3>
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

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-white font-bold text-sm transition-all"
            >
              All Electrical Services
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
                Why Choose First Choice Electricians
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Why Los Angeles Chooses First Choice Electricians
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                First Choice Electricians delivers straightforward, reliable electrical service across
                Los Angeles. When you call, you speak directly with us — no call centers, no booking
                forms, just honest answers and careful work.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-950">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-white font-bold">Have an electrical concern?</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Call First Choice Electricians for immediate attention and expert scheduling.
                </p>
                <a
                  href={business.phoneTel}
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md"
                >
                  Call {business.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-8 lg:p-12 relative shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Our Process
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
                  How First Choice Electricians Works
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  A simple, transparent process from first call to finished work — so you always know
                  what to expect.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {process.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.step} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-amber-400 font-black text-lg">{p.step}</span>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">{p.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Serving Los Angeles and Nearby Communities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              First Choice Electricians is based in Los Angeles and serves neighborhoods across the
              city. Call to confirm service at your specific address.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/${area.slug}`}
                className="group p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-400/50 transition-all hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5 text-amber-400 mb-2" />
                <div className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">
                  Electrician in {area.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-white font-bold text-sm transition-all"
            >
              All Service Areas
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              What Los Angeles Customers Say
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              First Choice Electricians has a 5.0 Google rating from 14 verified reviews. Here is a
              sample of what customers have shared.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white font-semibold">{r.author}</span>
                  <Link to="/reviews" className="text-amber-400 hover:text-amber-300 font-medium">
                    All Reviews →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900 border-y border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Electrical Service FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((faq, i) => (
              <details key={i} className="group p-6 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer text-white font-semibold text-base list-none">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-amber-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={business.phoneTel}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-2xl font-black text-white mb-2">Visit First Choice Electricians</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{business.addressShort}</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <a href={business.phoneTel} className="text-amber-400 font-bold text-base hover:text-amber-300">
                    {business.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span>{business.address}</span>
                </div>
              </div>
              <a
                href={business.mapsShare}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                Get Directions
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-800 min-h-[300px]">
              <iframe
                title="First Choice Electricians location map"
                src={business.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
