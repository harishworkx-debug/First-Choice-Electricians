import { useState } from 'react';
import { Phone, MapPin, Mail, Star, CheckCircle2 } from 'lucide-react';
import { business, services } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Contact() {
  usePageMeta({
    title: 'Contact First Choice Electricians | Los Angeles Electrician',
    description:
      'Contact First Choice Electricians in Los Angeles, CA. Call (323) 924-3273 for electrical repair, installation, panel upgrades, and more. Located at 314 Omar St, Los Angeles, CA 90013.',
    path: '/contact',
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    honeypot: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (form.honeypot) {
      setError('Submission rejected.');
      return;
    }
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError('Please fill in your name, phone number, and a brief description of your needs.');
      return;
    }
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setError('Please enter a valid phone number with at least 10 digits.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact' }]} />

      <section className="relative pt-10 pb-12 bg-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact First Choice Electricians
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The fastest way to reach us is by phone. Call{' '}
            <a href={business.phoneTel} className="text-amber-400 font-bold">
              {business.phoneDisplay}
            </a>{' '}
            to speak directly with First Choice Electricians about your electrical needs.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-xl font-black text-white mb-6">Business Information</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Phone</div>
                    <a href={business.phoneTel} className="text-amber-400 font-bold text-lg hover:text-amber-300">
                      {business.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Address</div>
                    <a
                      href={business.mapsShare}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-400 transition-colors"
                    >
                      {business.address}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <Star className="w-5 h-5 text-amber-400 mt-0.5 shrink-0 fill-amber-400" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Rating</div>
                    <span>5.0 stars · 14 Google Reviews</span>
                  </div>
                </div>
              </div>
              <a
                href={business.phoneTel}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all w-full justify-center"
              >
                <Phone className="w-4 h-4 fill-current" />
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.mapsShare}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-colors w-full justify-center"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                Get Directions
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-xl font-black text-white mb-6">Send a Message</h2>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Message received</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Thank you for reaching out. For the fastest response, please call{' '}
                    <a href={business.phoneTel} className="text-amber-400 font-bold">
                      {business.phoneDisplay}
                    </a>
                    .
                  </p>
                  <a
                    href={business.phoneTel}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    Call Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="hidden">
                    <label htmlFor="honeypot">Leave this field empty</label>
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      value={form.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                        placeholder="(323) 555-0123"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Describe Your Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors resize-none"
                      placeholder="Briefly describe the electrical issue or project."
                    />
                  </div>
                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    For the fastest response, call{' '}
                    <a href={business.phoneTel} className="text-amber-400 font-semibold">
                      {business.phoneDisplay}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-slate-800 min-h-[350px]">
            <iframe
              title="First Choice Electricians location map"
              src={business.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection
        heading="Call First Choice Electricians today."
        subtext="Speak directly with us for professional electrical service across Los Angeles, CA."
      />
    </>
  );
}
