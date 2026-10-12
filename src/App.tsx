import { MotionConfig } from 'framer-motion';
import { Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Specializations from './components/Specializations';
import PricingPage from './components/PricingPage';
import DocumentsPage from './components/DocumentsPage';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0F172A] pb-20 lg:pb-0">
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <About />
          <ServicesPage />
          <Specializations />
          <PricingPage />
          <DocumentsPage />
          <Team />
          <Testimonials />
          <Contact />
        </main>
        <Footer />

        {/* Мобильная панель быстрых действий */}
        <nav
          aria-label="Быстрые действия"
          className="lg:hidden fixed bottom-0 inset-x-0 z-30 flex gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#0F172A]/95 backdrop-blur-md border-t border-[#C5A059]/20"
        >
          <a
            href="tel:+78352222341"
            className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] rounded bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            Позвонить
          </a>
          <a
            href="#contact"
            className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] rounded border border-[#C5A059]/40 text-[#C5A059] font-['Inter'] font-semibold text-sm"
          >
            Оставить заявку
          </a>
        </nav>
      </div>
    </MotionConfig>
  );
}
