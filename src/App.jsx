import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ServicesList from './pages/ServicesList.jsx';
import ServicePage from './pages/ServicePage.jsx';
import ServiceAreasList from './pages/ServiceAreasList.jsx';
import ServiceAreaPage from './pages/ServiceAreaPage.jsx';
import Reviews from './pages/Reviews.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import Sitemap from './pages/Sitemap.jsx';
import NotFound from './pages/NotFound.jsx';
import { services, serviceAreas } from './data/business.js';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          {services.map((s) => (
            <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage serviceSlug={s.slug} />} />
          ))}
          <Route path="/service-areas" element={<ServiceAreasList />} />
          <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
          {serviceAreas.map((a) => (
            <Route key={a.slug} path={`/${a.slug}`} element={<ServiceAreaPage areaSlug={a.slug} />} />
          ))}
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
