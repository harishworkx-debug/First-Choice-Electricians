import { Phone, Clock, MapPin } from 'lucide-react';
import { business } from '../data/business.js';

export default function CTASection({
  heading = 'Need an Electrician in Los Angeles? Call First Choice Electricians.',
  subtext = 'Speak directly with First Choice Electricians for fast, professional electrical service across Los Angeles, CA.',
}) {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Phone className="w-8 h-8 fill-current" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">{heading}</h2>
        <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">{subtext}</p>
        <div className="mt-8 flex flex-col items-center">
          <a
            href={business.phoneTel}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xl sm:text-2xl shadow-2xl shadow-amber-400/30 hover:shadow-amber-400/50 hover:scale-105 active:scale-100 transition-all"
          >
            <Phone className="w-7 h-7 fill-current animate-pulse" />
            <span>Call {business.phoneDisplay}</span>
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" /> Speak directly with an electrician
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" /> {business.addressShort}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
