import { business } from '../data/business.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';

export default function PrivacyPolicy() {
  usePageMeta({
    title: 'Privacy Policy | First Choice Electricians',
    description:
      'Privacy Policy for First Choice Electricians. Learn how we handle information collected through our website and phone communications.',
    path: '/privacy-policy',
  });
  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ]);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy' }]} />
      <article className="py-12 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              This Privacy Policy describes how {business.name} handles information collected through
              our website at {business.website} and during phone communications. By using our website
              or contacting us, you agree to the practices described below.
            </p>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
              <p>
                When you contact us by phone or through our contact form, we may collect your name,
                phone number, email address, and any details you provide about your electrical needs.
                We collect only the information necessary to respond to your inquiry and schedule
                service.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">How We Use Information</h2>
              <p>
                We use the information you provide to respond to your inquiry, schedule and perform
                electrical service, and communicate with you about your request. We do not sell or
                rent your personal information to third parties.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Website Analytics</h2>
              <p>
                Our website may use standard analytics tools that collect non-identifying information
                about how visitors use the site, such as pages visited and general location data. This
                information is used to improve the website and is not linked to your personal
                identity.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Third-Party Services</h2>
              <p>
                Our website displays a Google Maps embed and may link to external services such as
                Google Maps for directions. These services have their own privacy policies, and we
                encourage you to review them.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Data Retention</h2>
              <p>
                We retain contact and service information only as long as necessary to provide
                service and respond to inquiries, and as needed for legitimate business records.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
              <p>
                You are not required to provide personal information to browse our website. If you
                contact us, you may request that we correct or remove your contact information at any
                time by calling {business.phoneDisplay}.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, call {business.name} at{' '}
                <a href={business.phoneTel} className="text-amber-400 font-bold hover:text-amber-300">
                  {business.phoneDisplay}
                </a>{' '}
                or visit us at {business.addressShort}.
              </p>
            </section>
            <p className="text-sm text-slate-500 pt-4">
              This Privacy Policy may be updated from time to time. Last updated:{' '}
              {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
