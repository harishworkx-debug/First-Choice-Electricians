import React, { useState, useEffect } from 'react';
import {
  Phone,
  Zap,
  Wrench,
  Lightbulb,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Award,
  AlertTriangle,
  Home,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '+1 (323) 924-3273';
  const telLink = 'tel:+13239243273';
  const businessAddress = '314 Omar St, Los Angeles, CA 90013, United States';

  const services = [
    {
      title: 'Electrical Repairs',
      description: 'Fast, secure diagnosis and repair for broken circuits, blown fuses, faulty outlets, and sudden power issues.',
      icon: Wrench,
      highlight: 'Emergency Response'
    },
    {
      title: 'Electrical Installations',
      description: 'Comprehensive installation for new construction, panel upgrades, EV chargers, wiring additions, and appliances.',
      icon: Zap,
      highlight: 'Code-Compliant'
    },
    {
      title: 'Lighting Installation',
      description: 'Custom indoor & outdoor lighting, recessed LED upgrades, landscape illumination, and smart dimming systems.',
      icon: Lightbulb,
      highlight: 'Energy Efficient'
    },
    {
      title: 'Electrical Troubleshooting',
      description: 'Expert diagnostic pinpointing hidden short circuits, tripping breakers, flickering fixtures, and erratic voltage.',
      icon: AlertTriangle,
      highlight: 'Pinpoint Accuracy'
    },
    {
      title: 'Residential Electrical Services',
      description: 'Complete home electrical solutions including rewiring, breaker replacements, ceiling fans, and safety inspections.',
      icon: Home,
      highlight: 'Safety Focused'
    },
    {
      title: 'Electrical Maintenance',
      description: 'Preventative check-ups, thermal electrical panel scanning, safety tune-ups, and long-term hazard prevention.',
      icon: ShieldCheck,
      highlight: 'Hazard Prevention'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Professional Service',
      desc: 'Licensed, certified, and fully insured technicians who respect your property and deliver clean, prompt results.',
      icon: Award
    },
    {
      title: 'Reliable Electrical Solutions',
      desc: 'Long-lasting repairs and installations done strictly to current National Electrical Code (NEC) standards.',
      icon: ShieldCheck
    },
    {
      title: 'Customer-Focused Approach',
      desc: 'Transparent guidance directly over the phone, honest upfront recommendations, and zero hidden surprises.',
      icon: ThumbsUp
    },
    {
      title: 'Quality Workmanship',
      desc: 'Premium commercial-grade materials, meticulous attention to detail, and a 100% satisfaction commitment.',
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Banner Notice */}
      <div className="bg-slate-900 border-b border-slate-800/80 text-xs text-slate-300 py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 font-medium text-amber-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Available For Immediate Dispatch in Los Angeles
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            314 Omar St, Los Angeles, CA 90013
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <a
            href={telLink}
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            <Phone className="w-3 h-3" />
            {phoneNumber}
          </a>
        </div>
      </div>

      {/* Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800'
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Business Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-6 h-6 fill-current text-slate-950" />
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                FIRST CHOICE
              </span>
              <span className="block text-xs font-semibold tracking-widest text-amber-400 uppercase -mt-0.5">
                ELECTRICIANS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#why-choose-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">Location & Details</a>
          </nav>

          {/* Header Call Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Direct Line</span>
              <a
                href={telLink}
                className="text-white hover:text-amber-400 font-bold tracking-tight text-base transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-slate-950">
        {/* Background Image with Dark Navy Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
            alt="Professional Electrician working on an electrical panel"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <Zap className="w-4 h-4 fill-current text-amber-400" />
              <span>Top-Rated Electrical Contractor in Los Angeles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Reliable Electrical Services You Can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                Count On
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Professional, dependable, and code-compliant electrical services for residential and commercial properties. From rapid troubleshooting to complete panel installations, we ensure your electrical system operates safely and flawlessly.
            </p>

            {/* Key Assurance Highlights */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Fast Diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Licensed Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Phone Estimates</span>
              </div>
            </div>

            {/* Primary Call-To-Action Box */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-lg shadow-xl shadow-amber-400/25 hover:shadow-amber-400/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
              >
                <Phone className="w-6 h-6 fill-current animate-bounce" />
                <span>Call Now: {phoneNumber}</span>
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 text-sm py-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Speak directly with a master electrician</span>
              </div>
            </div>

            {/* Direct Phone Highlight banner */}
            <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 max-w-xl backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Fast Service Line</div>
                  <div className="text-base sm:text-lg font-bold text-white">{phoneNumber}</div>
                </div>
              </div>
              <a
                href={telLink}
                className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                Call Today
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="bg-slate-900 border-y border-slate-800/80 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">100%</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Direct Phone Support</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">Licensed</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">& Insured Pros</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">Prompt</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Arrival & Diagnosis</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-400">5-Star</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Customer Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Comprehensive Electrical Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              We deliver complete turnkey electrical care for homes and businesses. Our team is equipped with top-tier diagnostic tools to solve any challenge swiftly.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/90 rounded-2xl p-7 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-400/10 flex flex-col justify-between"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Top Row: Icon and Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:bg-amber-400 text-amber-400 group-hover:text-slate-950 flex items-center justify-center transition-colors duration-300 shadow-md">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 text-amber-300 border border-slate-700">
                        {service.highlight}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Direct Phone Action Per Service */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Ready to assist</span>
                    <a
                      href={telLink}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:underline"
                    >
                      Call for Service
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Notice under services */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              Don't see your specific electrical issue?{' '}
              <a href={telLink} className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4">
                Call us at {phoneNumber}
              </a>{' '}
              to speak directly with our electricians.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-3">
                Why First Choice Electricians
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Why Property Owners Choose Us
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                We believe in straightforward, reliable service without delays or unnecessary complications. When you call us, you speak directly with experienced professionals ready to solve your electrical needs safely and efficiently.
              </p>

              {/* Call Now Banner box */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 font-black">
                    <Phone className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-white font-bold">Have an urgent electrical concern?</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Call our dedicated line right now for immediate attention and expert scheduling.
                </p>
                <a
                  href={telLink}
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md"
                >
                  Call {phoneNumber}
                </a>
              </div>
            </div>

            {/* Right Column Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
                      <IconComponent className="w-6 h-6" />
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

      {/* Visual Work Showcase Banner */}
      <section className="relative py-16 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-8 lg:p-12 relative shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Precision & Safety
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
                  Electrical safety isn't an option. It's our absolute priority.
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Electrical hazards can cause severe property damage and safety risks. Our certified electricians perform rigorous diagnostics and clean installs to give you complete peace of mind.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={telLink}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-400/20 transition-all"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    Speak With An Electrician
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl aspect-video lg:aspect-auto h-64 lg:h-72">
                <img
                  src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2067&auto=format&fit=crop"
                  alt="Certified electrician testing voltage equipment"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-xs font-semibold text-slate-200 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                    Inspected & Code-Approved Workmanship
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-To-Action (CTA) Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Zap className="w-8 h-8 fill-current" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Need an Electrician? Give Us a Call!
          </h2>

          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact First Choice Electricians today to discuss your electrical needs.
          </p>

          {/* Huge Call Now Button */}
          <div className="mt-8 flex flex-col items-center">
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xl sm:text-2xl shadow-2xl shadow-amber-400/30 hover:shadow-amber-400/50 hover:scale-105 active:scale-100 transition-all duration-200"
            >
              <Phone className="w-7 h-7 fill-current animate-pulse" />
              <span>Call Now</span>
            </a>

            <a
              href={telLink}
              className="mt-4 text-xl sm:text-2xl font-black text-amber-400 hover:text-amber-300 tracking-wider transition-colors"
            >
              {phoneNumber}
            </a>

            <p className="mt-2 text-xs text-slate-400">
              Direct Phone Assistance • No Waiting Queues • No Booking Forms
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-24 lg:pb-12 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Column 1: Business Identity */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xl font-black text-white tracking-tight">
                  First Choice Electricians
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Your reliable local electrical service provider in Los Angeles. Quality workmanship, prompt arrival, and safe electrical solutions you can always count on.
              </p>
            </div>

            {/* Column 2: Location and Contact Info */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
                Direct Contact & Address
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{businessAddress}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <a
                    href={telLink}
                    className="text-amber-400 hover:text-amber-300 font-bold text-base transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </li>
              </ul>
              <div className="mt-4 inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
                Contact Method: <span className="text-amber-400 font-semibold">Phone Calls Only</span>
              </div>
            </div>

            {/* Column 3: Service Scope */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs">
                Specialized Services
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                <li>• Electrical Repairs</li>
                <li>• Electrical Installations</li>
                <li>• Lighting Installation</li>
                <li>• Troubleshooting</li>
                <li>• Residential Services</li>
                <li>• Electrical Maintenance</li>
              </ul>
              <div className="mt-6">
                <a
                  href={telLink}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call For Immediate Help
                </a>
              </div>
            </div>

          </div>

          {/* Copyright notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              &copy; {new Date().getFullYear()} First Choice Electricians. All rights reserved.
            </div>
            <div className="text-slate-500">
              314 Omar St, Los Angeles, CA 90013 | Phone: {phoneNumber}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Call Button (Sticky Bottom on Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 z-50 shadow-2xl">
        <a
          href={telLink}
          className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-base shadow-lg shadow-amber-400/30 active:scale-[0.98] transition-transform"
        >
          <Phone className="w-5 h-5 fill-current animate-bounce" />
          <span>Call Now: {phoneNumber}</span>
        </a>
      </div>

    </div>
  );
}
