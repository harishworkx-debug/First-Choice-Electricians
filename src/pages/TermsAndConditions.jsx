import { business } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function TermsAndConditions() {
  usePageMeta({
    title: 'Terms and Conditions | First Choice Electricians',
    description:
      'Terms and Conditions for the First Choice Electricians website. Review the terms governing use of our website and electrical services.',
    path: '/terms-and-conditions',
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Terms and Conditions', path: '/terms-and-conditions' },
  ]);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Terms and Conditions' }]} />
      <article className="py-12 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-8">
            Terms and Conditions
          </h1>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              These Terms and Conditions govern your use of the {business.name} website at{' '}
              {business.website} and your interactions with {business.name}. By using this website,
              you agree to these terms.
            </p>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Use of This Website</h2>
              <p>
                This website provides information about {business.name} and the electrical services we
                offer in Los Angeles, CA. You may use the website for personal, non-commercial
                purposes. You agree not to misuse the website, attempt to gain unauthorized access, or
                interfere with its operation.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Scheduling Service</h2>
              <p>
                All electrical service is scheduled by phone by calling{' '}
                <a href={business.phoneTel} className="text-amber-400 font-bold hover:text-amber-300">
                  {business.phoneDisplay}
                </a>
                . This website does not provide online booking. Any contact form submission is a
                request for us to contact you, not a confirmed appointment.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Service Areas</h2>
              <p>
                Service-area pages on this website describe neighborhoods we intend to serve in Los
                Angeles. Actual service coverage must be confirmed by phone before an appointment is
                scheduled. We do not maintain separate offices in each listed area.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">No Warranties</h2>
              <p>
                Information on this website is provided for general informational purposes and does
                not constitute a warranty or guarantee of any specific outcome. Electrical work is
                evaluated and performed on a case-by-case basis after direct communication.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Limitation of Liability</h2>
              <p>
                {business.name} is not liable for damages arising from the use of this website. Any
                electrical work performed is subject to a separate agreement discussed and agreed upon
                by phone or in person before work begins.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">External Links</h2>
              <p>
                This website may link to external services such as Google Maps. {business.name} is not
                responsible for the content or practices of third-party websites.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Changes to These Terms</h2>
              <p>
                These Terms and Conditions may be updated from time to time. Continued use of the
                website after changes constitutes acceptance of the updated terms.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
              <p>
                If you have questions about these Terms and Conditions, call {business.name} at{' '}
                <a href={business.phoneTel} className="text-amber-400 font-bold hover:text-amber-300">
                  {business.phoneDisplay}
                </a>
                .
              </p>
            </section>
            <p className="text-sm text-slate-500 pt-4">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
