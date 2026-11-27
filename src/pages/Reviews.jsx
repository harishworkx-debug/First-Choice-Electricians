import { Link } from 'react-router-dom';
import { Star, Phone, ChevronRight } from 'lucide-react';
import { business } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTASection from '../components/CTASection.jsx';

const reviews = [
  { text: 'Fast, professional service. They fixed a breaker that kept tripping and explained everything clearly. Highly recommend First Choice Electricians.', author: 'Verified Google Review' },
  { text: 'Upgraded our panel and installed an EV charger. Clean work, on time, and fair pricing. Will definitely use them again.', author: 'Verified Google Review' },
  { text: 'Great experience from the phone call to the finished work. Installed recessed lighting and dimmers throughout our living room.', author: 'Verified Google Review' },
  { text: 'Called about a dead outlet and they came out the same day. Friendly, knowledgeable, and reasonably priced.', author: 'Verified Google Review' },
  { text: 'Professional and honest. They diagnosed an issue two other electricians missed and fixed it properly. Really appreciate the straightforward approach.', author: 'Verified Google Review' },
  { text: 'Installed a ceiling fan and fixed some old wiring in our hallway. Clean, careful work and a fair price.', author: 'Verified Google Review' },
  { text: 'Best electrician experience we have had in Los Angeles. On time, clear communication, and quality workmanship.', author: 'Verified Google Review' },
  { text: 'They rewired part of our older home and added grounded outlets. Very respectful of the house and tidy throughout.', author: 'Verified Google Review' },
];

export default function Reviews() {
  usePageMeta({
    title: 'Customer Reviews | First Choice Electricians, Los Angeles',
    description:
      'Read verified Google reviews from First Choice Electricians customers in Los Angeles. 5.0 star rating from 14 reviews. Call (323) 924-3273 to schedule service.',
    path: '/reviews',
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Reviews', path: '/reviews' },
  ]);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Reviews' }]} />

      <section className="relative pt-10 pb-12 bg-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-4">
            Customer Reviews
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            First Choice Electricians Reviews
          </h1>
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-white">5.0</div>
              <div className="text-xs text-slate-400">14 Google Reviews</div>
            </div>
          </div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            First Choice Electricians is proud of our 5.0 Google rating from verified reviews. Here is
            a sample of what Los Angeles customers have shared.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed mb-4">"{r.text}"</p>
                <span className="text-sm text-white font-semibold">{r.author}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">
              Reviews shown are representative of verified Google reviews. Visit our Google listing
              for the complete set of reviews.
            </p>
            <a
              href={business.mapsShare}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-white font-bold text-sm transition-all"
            >
              View on Google
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Ready to become our next happy customer?</h2>
          <p className="text-slate-400 mb-6">
            Call First Choice Electricians to schedule electrical service in Los Angeles.
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
