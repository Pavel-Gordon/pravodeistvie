import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Car, Scale, Building, Shield, Landmark, FileText, Home, Map,
  Briefcase, Calculator, Heart, HardHat, Users, ClipboardCheck,
  Lightbulb, TrendingDown, ShoppingBag, Globe, Scroll, Building2, UserCheck
} from 'lucide-react';

const specializations = [
  {
    title: 'Автоюрист',
    description: 'Споры со страховыми компаниями, гарантийный ремонт, оспаривание штрафов ГИБДД, лишение прав, ДТП.',
    icon: Car,
  },
  {
    title: 'Судебный юрист',
    description: 'Представительство в судах всех инстанций, подготовка процессуальных документов, защита интересов.',
    icon: Scale,
  },
  {
    title: 'Административный юрист',
    description: 'Оспаривание постановлений, обжалование действий должностных лиц, административные дела.',
    icon: Building,
  },
  {
    title: 'Антимонопольный юрист',
    description: 'Споры в сфере деятельности естественных монополий, антимонопольное законодательство, ФАС.',
    icon: Shield,
  },
  {
    title: 'Банковский / кредитный юрист',
    description: 'Споры с банками, кредитные договоры, оспаривание начислений, реструктуризация долгов.',
    icon: Landmark,
  },
  {
    title: 'Гражданский юрист',
    description: 'Гражданско-правовые споры, договорные отношения, защита гражданских прав.',
    icon: FileText,
  },
  {
    title: 'Жилищный юрист',
    description: 'Жилищные споры, ЖКХ, выселение, приватизация, раздел лицевого счёта.',
    icon: Home,
  },
  {
    title: 'Земельный юрист',
    description: 'Земельные споры, оформление прав на землю, межевание, категории земель.',
    icon: Map,
  },
  {
    title: 'Корпоративный юрист',
    description: 'Корпоративные споры, деятельность ООО и АО, отношения между участниками.',
    icon: Briefcase,
  },
  {
    title: 'Налоговый юрист',
    description: 'Налоговые споры, сопровождение проверок, оптимизация налогообложения, возврат НДС.',
    icon: Calculator,
  },
  {
    title: 'Семейный юрист',
    description: 'Развод, алименты, брачный договор, раздел имущества, определение места жительства детей.',
    icon: Heart,
  },
  {
    title: 'Строительный юрист',
    description: 'Строительные споры, долевое участие, подряд, приёмка работ, гарантии качества.',
    icon: HardHat,
  },
  {
    title: 'Трудовой юрист',
    description: 'Трудовые споры, незаконное увольнение, невыплата зарплаты, охрана труда.',
    icon: Users,
  },
  {
    title: 'Юрист-аудитор',
    description: 'Юридический аудит документов, проверка контрагентов, due diligence, правовой анализ.',
    icon: ClipboardCheck,
  },
  {
    title: 'Юрист по интеллектуальному праву',
    description: 'Защита авторских прав, товарные знаки, патенты, лицензионные договоры.',
    icon: Lightbulb,
  },
  {
    title: 'Юрист по банкротству',
    description: 'Банкротство физических и юридических лиц, сопровождение арбитражного управляющего.',
    icon: TrendingDown,
  },
  {
    title: 'Юрист по защите потребителей',
    description: 'Защита прав потребителей, возврат товаров, некачественные услуги, компенсации.',
    icon: ShoppingBag,
  },
  {
    title: 'Юрист по интернету',
    description: 'Интернет-споры, защита персональных данных, доменные споры, кибербезопасность.',
    icon: Globe,
  },
  {
    title: 'Юрист по наследству',
    description: 'Наследственные споры, оспаривание завещания, восстановление сроков, оформление наследства.',
    icon: Scroll,
  },
  {
    title: 'Юрист по недвижимости',
    description: 'Сделки с недвижимостью, проверка чистоты, регистрация прав, споры о собственности.',
    icon: Building2,
  },
  {
    title: 'Юрист-представитель',
    description: 'Представительство интересов в государственных органах, на переговорах, в суде.',
    icon: UserCheck,
  },
];

export default function Specializations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="specializations" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C5A059]" />
            <span className="text-[#C5A059] font-['Inter'] text-sm tracking-[0.2em] uppercase">
              Специализации
            </span>
            <div className="w-12 h-px bg-[#C5A059]" />
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Обслуживаемые виды
            <span className="block text-[#C5A059] mt-2">деятельности</span>
          </h2>

          <p className="text-white/90 font-['Inter'] text-lg max-w-2xl mx-auto drop-shadow-md">
            21 направление юридической практики для решения любых правовых вопросов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#C5A059]/30 hover:shadow-2xl hover:shadow-[#C5A059]/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-['Playfair_Display'] font-semibold text-white mb-2 group-hover:text-[#C5A059] transition-colors drop-shadow">
                      {spec.title}
                    </h3>
                    <p className="text-white/90 font-['Inter'] text-sm leading-relaxed drop-shadow-sm">
                      {spec.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/90 mb-6 drop-shadow">
            Не нашли нужную специализацию? Мы работаем с любыми правовыми вопросами!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold rounded-lg hover:bg-[#D4B06A] transition-colors duration-300"
          >
            Получить консультацию
          </a>
        </motion.div>
      </div>
    </section>
  );
}
