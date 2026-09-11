import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Specializations from './components/Specializations';
import PricingPage from './components/PricingPage';
import DownloadsPage from './components/DownloadsPage';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <ServicesPage />
        <Specializations />
        <PricingPage />
        <DownloadsPage />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
