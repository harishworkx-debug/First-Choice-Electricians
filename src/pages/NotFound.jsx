import { Link } from 'react-router-dom';
import { Phone, Home, ChevronRight } from 'lucide-react';
import { business } from '../data/business.js';
import { usePageMeta } from '../components/Seo.js';

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found | First Choice Electricians',
    description: 'The page you are looking for could not be found. Browse our electrical services or call First Choice Electricians at (323) 924-3273.',
    path: '/404',
  });

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-7xl font-black text-amber-400 mb-4">404</div>
        <h1 className="text-3xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          The page you are looking for may have moved or no longer exists. Try one of these options
          instead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-white font-bold text-sm transition-all"
          >
            <Home className="w-4 h-4 text-amber-400" />
            Back to Homepage
          </Link>
          <a
            href={business.phoneTel}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all"
          >
            <Phone className="w-4 h-4 fill-current" />
            Call {business.phoneDisplay}
          </a>
        </div>
        <div className="mt-8">
          <Link to="/services" className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm font-semibold">
            Browse Electrical Services
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
