import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* CSS-градиент фон */}
      <div className="absolute inset-0 z-0">
        {/* Базовый градиент */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900"></div>
        
        {/* Золотистое свечение справа */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#C5A059]/10 via-transparent to-transparent"></div>
        
        {/* Тонкие радиальные градиенты для глубины */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(197, 160, 89, 0.08) 0%, transparent 40%),
                            radial-gradient(circle at 80% 70%, rgba(197, 160, 89, 0.05) 0%, transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.4) 0%, transparent 70%)`
        }}></div>
        
        {/* Декоративные круги */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-[#C5A059]/10 rounded-full"></div>
        <div className="absolute top-32 right-32 w-72 h-72 border border-[#C5A059]/5 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-0 w-full" style={{ zIndex: 10 }}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-[#C5A059]" />
            <span className="text-[#C5A059] font-['Inter'] text-xs tracking-[0.3em] uppercase font-medium">
              Юридическая фирма в Чебоксарах · С 2007 года
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
          >
            Защищаем ваши
            <br />
            <span className="text-[#C5A059]">интересы</span> на высшем
            <br />
            уровне
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-['Inter'] text-lg lg:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl font-light"
          >
            Комплексные юридические решения для бизнеса и частных лиц
            в Чебоксарах и по всей России. Опыт с 2007 года.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold text-sm rounded overflow-hidden"
            >
              <span className="relative z-10">Получить консультацию</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-[#D4B06A] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-['Inter'] font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Наши услуги
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
