import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const features = [
  { icon: Award, title: 'Безупречная репутация', description: 'Признаны ведущими рейтингами' },
  { icon: Users, title: 'Команда экспертов', description: '30+ юристов с опытом' },
  { icon: Clock, title: 'Оперативность', description: 'Реагируем в течение 2 часов' },
  { icon: Target, title: 'Результат', description: '98% дел завершены успешно' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C5A059]" />
              <span className="text-[#C5A059] font-['Inter'] text-sm tracking-[0.2em] uppercase">О фирме</span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Традиции права.
              <span className="block text-[#C5A059] mt-2">Современный подход.</span>
            </h2>

            <p className="text-white/90 font-['Inter'] text-lg leading-relaxed mb-6 drop-shadow-md">
              ООО «ПравоДействие» — юридическая фирма, основанная в 2007 году опытным и выдающимся юристом Игорем Леонидовичем Ивановым. С первых дней существования компании мы быстро и качественно оказываем комплексные юридические услуги гражданам и организациям в Чебоксарах и Новочебоксарске.
            </p>

            <p className="text-white/90 font-['Inter'] text-lg leading-relaxed mb-10 drop-shadow-md">
              В настоящее время наши услуги востребованы не только в Чувашской республике, но и в соседних регионах: Казань, Йошкар-Ола, Нижний Новгород, Ульяновск, Москва и Московская область. Мы работаем на результат!
            </p>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 flex items-center justify-center">
                <span className="font-['Playfair_Display'] text-2xl font-bold text-[#C5A059]">18</span>
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-xl font-bold text-white drop-shadow">лет на рынке</div>
                <div className="text-white/80 font-['Inter'] text-sm drop-shadow">юридических услуг с 2007 года</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 lg:p-8 rounded-lg border border-white/10 hover:border-[#C5A059]/30 bg-white/5 hover:bg-white/10 transition-all duration-500"
              >
                <feature.icon className="w-10 h-10 text-[#C5A059] mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-2 drop-shadow">{feature.title}</h3>
                <p className="text-white/80 font-['Inter'] text-sm leading-relaxed drop-shadow-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
