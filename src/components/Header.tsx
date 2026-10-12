import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Scale } from 'lucide-react';

const navLinks = [
  { label: 'Главная', href: '#' },
  { label: 'О фирме', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Документы', href: '#documents' },
  { label: 'Команда', href: '#team' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокировка скролла фона и закрытие меню по Escape, пока меню открыто
  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-2xl border-b border-[#C5A059]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <Scale className="w-8 h-8 text-[#C5A059]" />
              <div className="flex flex-col">
                <span className="font-['Playfair_Display'] text-lg lg:text-xl font-bold text-white tracking-[0.15em]">
                  ПРАВОДЕЙСТВИЕ
                </span>
                <span className="hidden lg:block text-[10px] text-[#C5A059]/70 tracking-[0.25em] uppercase font-['Inter'] mt-0.5">
                  Юридическая фирма
                </span>
              </div>
            </motion.a>

            <nav className="hidden lg:flex items-center gap-12">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="relative text-sm text-white/80 hover:text-[#C5A059] transition-colors duration-300 font-['Inter'] font-medium tracking-wide group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+78352222341"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C5A059] transition-colors font-['Inter']"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (8352) 222-341</span>
              </a>
            </div>

            <motion.button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
              aria-label={isMobileOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isMobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0F172A] z-40 lg:hidden border-l border-[#C5A059]/10 flex flex-col"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-8 overflow-y-auto">
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      className="block py-4 text-xl text-white/80 hover:text-[#C5A059] transition-colors font-['Playfair_Display'] font-medium border-b border-white/5"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto pt-10 space-y-3">
                  <a
                    href="tel:+78352222341"
                    className="flex items-center justify-center gap-2 min-h-[48px] rounded bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    +7 (8352) 222-341
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 min-h-[48px] rounded border border-[#C5A059]/40 text-[#C5A059] font-['Inter'] font-semibold"
                  >
                    Оставить заявку
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
