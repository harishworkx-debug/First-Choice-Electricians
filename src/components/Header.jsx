import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  Zap,
  Menu,
  X,
  MapPin,
  ChevronDown,
  Star,
} from 'lucide-react';
import { business, services, serviceAreas } from '../data/business.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-amber-400' : 'text-slate-200 hover:text-amber-400'
    }`;

  return (
    <>
      <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-300 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 font-medium text-amber-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Serving Los Angeles, CA
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            5.0 Google Rating · 14 Reviews
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <a
            href={business.phoneTel}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            <Phone className="w-3 h-3" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800'
            : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors leading-none">
                FIRST CHOICE
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase mt-0.5">
                Electricians
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="flex items-center">
                <NavLink to="/services" className={navLinkClass}>
                  Services
                </NavLink>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setServicesOpen(!servicesOpen);
                  }}
                  className="p-1 text-slate-200 hover:text-amber-400 transition-colors ml-0.5"
                  aria-label="Toggle Services menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-[640px]">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-1">
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="col-span-2 text-amber-400 font-semibold text-xs uppercase tracking-wider px-3 py-2 hover:text-amber-300"
                    >
                      All Electrical Services →
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <div className="flex items-center">
                <NavLink to="/service-areas" className={navLinkClass}>
                  Service Areas
                </NavLink>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setAreasOpen(!areasOpen);
                  }}
                  className="p-1 text-slate-200 hover:text-amber-400 transition-colors ml-0.5"
                  aria-label="Toggle Service Areas menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {areasOpen && (
                <div className="absolute top-full left-0 pt-2 w-[640px]">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-1">
                    <Link
                      to="/service-areas"
                      onClick={() => setAreasOpen(false)}
                      className="col-span-2 text-amber-400 font-semibold text-xs uppercase tracking-wider px-3 py-2 hover:text-amber-300"
                    >
                      All Service Areas →
                    </Link>
                    {serviceAreas.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/${a.slug}`}
                        onClick={() => setAreasOpen(false)}
                        className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/reviews" className={navLinkClass}>Reviews</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Call Us</span>
              <a href={business.phoneTel} className="text-white hover:text-amber-400 font-bold tracking-tight text-base transition-colors">
                {business.phoneDisplay}
              </a>
            </div>
            <a
              href={business.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>Call Now</span>
            </a>
            <button
              className="lg:hidden text-slate-200 hover:text-amber-400 p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-slate-950">
          <div className="h-20 flex items-center justify-between px-4 border-b border-slate-800">
            <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="block text-lg font-black text-white leading-none">FIRST CHOICE</span>
                <span className="block text-[10px] font-semibold tracking-widest text-amber-400 uppercase">
                  Electricians
                </span>
              </div>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-slate-200 p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            <Link to="/" className="block py-3 text-lg font-semibold text-white border-b border-slate-800">Home</Link>
            <Link to="/about" className="block py-3 text-lg font-semibold text-white border-b border-slate-800">About</Link>

            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <Link
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-semibold text-white hover:text-amber-400"
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
                className="p-1 text-slate-300 hover:text-amber-400"
                aria-label="Toggle Services submenu"
              >
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSection === 'services' ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {mobileSection === 'services' && (
              <div className="py-2 space-y-1 pl-3 bg-slate-900/50 rounded-xl mb-2">
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-amber-400 font-semibold text-sm"
                >
                  All Electrical Services →
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-slate-300 hover:text-amber-400 text-sm"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between py-3 border-b border-slate-800">
              <Link
                to="/service-areas"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-semibold text-white hover:text-amber-400"
              >
                Service Areas
              </Link>
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === 'areas' ? null : 'areas')}
                className="p-1 text-slate-300 hover:text-amber-400"
                aria-label="Toggle Service Areas submenu"
              >
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSection === 'areas' ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {mobileSection === 'areas' && (
              <div className="py-2 space-y-1 pl-3 bg-slate-900/50 rounded-xl mb-2">
                <Link
                  to="/service-areas"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-amber-400 font-semibold text-sm"
                >
                  All Service Areas →
                </Link>
                {serviceAreas.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/${a.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-slate-300 hover:text-amber-400 text-sm"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/reviews" className="block py-3 text-lg font-semibold text-white border-b border-slate-800">Reviews</Link>
            <Link to="/contact" className="block py-3 text-lg font-semibold text-white border-b border-slate-800">Contact</Link>

            <div className="pt-4">
              <a href={business.phoneTel} className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-amber-400 text-slate-950 font-black text-lg">
                <Phone className="w-5 h-5 fill-current" />
                Call {business.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-400 pt-4">
              <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              {business.addressShort}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
