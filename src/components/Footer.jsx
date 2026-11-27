import { Link } from 'react-router-dom';
import { Phone, Zap, MapPin, Mail, ChevronRight } from 'lucide-react';
import { business, services, serviceAreas } from '../data/business.js';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-28 lg:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="text-lg font-black text-white tracking-tight leading-none">
                FIRST CHOICE
                <span className="block text-[10px] font-semibold tracking-widest text-amber-400 uppercase mt-0.5">
                  Electricians
                </span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Professional electrician serving Los Angeles, CA. Safe, code-compliant electrical
              repair, installation, and upgrades for homes and businesses.
            </p>
            <a
              href={business.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call {business.phoneDisplay}
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs tracking-wide uppercase mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <a href={business.mapsShare} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  {business.addressShort}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a href={business.phoneTel} className="text-amber-400 hover:text-amber-300 font-bold text-base transition-colors">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-amber-400 transition-colors">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs tracking-wide uppercase mb-4">Electrical Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-amber-400 font-semibold hover:text-amber-300">All Electrical Services</Link>
              </li>
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-xs tracking-wide uppercase mb-4">Service Areas & More</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/service-areas" className="text-amber-400 font-semibold hover:text-amber-300">All Service Areas</Link>
              </li>
              {serviceAreas.slice(0, 5).map((a) => (
                <li key={a.slug}>
                  <Link to={`/${a.slug}`} className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    Electrician in {a.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800 mt-3 space-y-2">
                <Link to="/about" className="block text-slate-400 hover:text-amber-400">About Us</Link>
                <Link to="/reviews" className="block text-slate-400 hover:text-amber-400">Reviews</Link>
                <Link to="/contact" className="block text-slate-400 hover:text-amber-400">Contact Us</Link>
                <Link to="/privacy-policy" className="block text-slate-400 hover:text-amber-400">Privacy Policy</Link>
                <Link to="/terms-and-conditions" className="block text-slate-400 hover:text-amber-400">Terms and Conditions</Link>
                <Link to="/sitemap" className="block text-slate-400 hover:text-amber-400">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</div>
          <div className="text-center sm:text-right">
            {business.addressShort} | Phone: {business.phoneDisplay}
          </div>
        </div>
      </div>
    </footer>
  );
}
