import { Phone } from 'lucide-react';
import { business } from '../data/business.js';

export default function CallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 z-40 shadow-2xl">
      <a
        href={business.phoneTel}
        className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl bg-amber-400 text-slate-950 font-black text-base shadow-lg shadow-amber-400/30 active:scale-[0.98] transition-transform"
      >
        <Phone className="w-5 h-5 fill-current animate-bounce" />
        <span>Call Now: {business.phoneDisplay}</span>
      </a>
    </div>
  );
}
