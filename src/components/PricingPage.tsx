import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function PricingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const priceCategories = [
    {
      title: 'Консультационные услуги',
      services: [
        { name: 'Устная консультация юриста (по телефону или лично)', price: 'от 1 000 ₽' },
        { name: 'Письменное юридическое заключение', price: 'от 2 500 ₽' },
        { name: 'Участие в переговорах', price: 'от 3 000 ₽/час' },
      ],
    },
    {
      title: 'Договорная работа',
      services: [
        { name: 'Разработка проекта договора', price: 'от 2 500 ₽' },
        { name: 'Проверка договора', price: 'от 1 000 ₽' },
        { name: 'Письменное экспертное заключение', price: 'от 2 500 ₽' },
        { name: 'Протокол разногласий', price: 'от 1 500 ₽' },
        { name: 'Разработка проекта трудового договора', price: 'от 2 000 ₽' },
      ],
    },
    {
      title: 'Сделки с недвижимостью',
      services: [
        { name: 'Сопровождение сделки с недвижимостью «под ключ»', price: 'от 15 000 ₽' },
        { name: 'Проверка юридической чистоты объекта', price: 'от 5 000 ₽' },
        { name: 'Подготовка договора купли-продажи', price: 'от 3 000 ₽' },
      ],
    },
    {
      title: 'Судебное представительство',
      services: [
        { name: 'Представление интересов в арбитражном суде', price: 'от 20 000 ₽' },
        { name: 'Представление интересов в суде общей юрисдикции', price: 'от 15 000 ₽' },
        { name: 'Подготовка искового заявления', price: 'от 3 000 ₽' },
        { name: 'Подготовка апелляционной жалобы', price: 'от 5 000 ₽' },
        { name: 'Подготовка кассационной жалобы', price: 'от 7 000 ₽' },
        { name: 'Исполнительное производство', price: 'от 10 000 ₽' },
      ],
    },
    {
      title: 'Корпоративное право',
      services: [
        { name: 'Регистрация ООО', price: 'от 5 000 ₽' },
        { name: 'Регистрация ИП', price: 'от 3 000 ₽' },
        { name: 'Регистрация АО', price: 'от 15 000 ₽' },
        { name: 'Ликвидация юридического лица', price: 'от 25 000 ₽' },
        { name: 'Реорганизация юридического лица', price: 'от 30 000 ₽' },
        { name: 'Смена адреса юридического лица', price: 'от 3 000 ₽' },
        { name: 'Смена участников/учредителей', price: 'от 5 000 ₽' },
        { name: 'Разработка учредительных документов', price: 'от 5 000 ₽' },
        { name: 'Разработка локальных актов', price: 'от 3 000 ₽' },
      ],
    },
    {
      title: 'Банкротство',
      services: [
        { name: 'Банкротство физического лица', price: 'от 80 000 ₽' },
        { name: 'Банкротство юридического лица', price: 'от 150 000 ₽' },
        { name: 'Подготовка заявления о банкротстве', price: 'от 10 000 ₽' },
        { name: 'Подготовка заявления о включении в реестр требований кредиторов', price: 'от 5 000 ₽' },
        { name: 'Сопровождение арбитражного управляющего', price: 'от 20 000 ₽/мес' },
        { name: 'Представление интересов на собрании кредиторов', price: 'от 5 000 ₽' },
        { name: 'Выявление фиктивного и преднамеренного банкротства', price: 'от 15 000 ₽' },
      ],
    },
    {
      title: 'Деловая переписка и претензии',
      services: [
        { name: 'Составление досудебной претензии', price: 'от 3 000 ₽' },
        { name: 'Подготовка деловых писем', price: 'от 1 500 ₽' },
        { name: 'Подготовка запроса в органы государственной власти', price: 'от 3 000 ₽' },
        { name: 'Составление заявлений и жалоб', price: 'от 2 000 ₽' },
      ],
    },
    {
      title: 'Юридическое сопровождение бизнеса',
      services: [
        { name: 'Абонентское обслуживание (малый бизнес)', price: 'от 20 000 ₽/мес' },
        { name: 'Абонентское обслуживание (средний бизнес)', price: 'от 50 000 ₽/мес' },
        { name: 'Абонентское обслуживание (крупный бизнес)', price: 'от 100 000 ₽/мес' },
        { name: 'Бухгалтерские услуги', price: 'от 5 000 ₽/мес' },
        { name: 'Сопровождение сделки по приобретению бизнеса', price: 'от 50 000 ₽' },
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
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
              Прейскурант
            </span>
            <div className="w-12 h-px bg-[#C5A059]" />
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Цены на юридические
            <span className="block text-[#C5A059] mt-2">услуги</span>
          </h2>

          <p className="text-white/90 font-['Inter'] text-lg max-w-2xl mx-auto drop-shadow-md">
            Полный перечень услуг с фиксированными ценами. Окончательная стоимость зависит от сложности дела.
          </p>
        </motion.div>

        <div className="space-y-6">
          {priceCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:border-[#C5A059]/30 transition-all duration-500"
            >
              <button
                onClick={() => setOpenCategory(openCategory === catIndex ? null : catIndex)}
                className="w-full p-6 lg:p-8 bg-gradient-to-r from-[#C5A059]/5 to-transparent border-b border-white/5 hover:from-[#C5A059]/10 transition-all duration-300 flex items-center justify-between"
              >
                <h3 className="font-['Playfair_Display'] text-xl lg:text-2xl font-semibold text-white text-left drop-shadow">
                  {category.title}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#C5A059] transition-transform duration-300 ${
                    openCategory === catIndex ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openCategory === catIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="divide-y divide-white/5"
                >
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="p-6 lg:p-8 hover:bg-[#C5A059]/5 transition-colors"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <Check className="w-5 h-5 text-[#C5A059] mt-0.5 shrink-0" />
                          <span className="text-white/90 font-['Inter'] text-base drop-shadow-sm">
                            {service.name}
                          </span>
                        </div>
                        <div className="lg:text-right pl-8 lg:pl-0">
                          <span className="inline-block px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded text-[#C5A059] font-['Inter'] font-semibold text-sm whitespace-nowrap">
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-6 lg:p-8 bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-lg"
        >
          <h4 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-4 drop-shadow">
            Важная информация
          </h4>
          <ul className="space-y-2 text-white/90 font-['Inter'] text-sm leading-relaxed drop-shadow-sm">
            <li>• Указанные цены являются ориентировочными и могут варьироваться в зависимости от сложности дела</li>
            <li>• Окончательная стоимость определяется после консультации и анализа документов</li>
            <li>• Возможна рассрочка оплаты для сложных дел</li>
            <li>• Первичная консультация — бесплатно</li>
            <li>• Для постоянных клиентов действуют специальные условия</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/90 font-['Inter'] mb-6 drop-shadow">
            Нужна точная оценка стоимости вашего дела?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold rounded hover:bg-[#D4B06A] transition-all duration-300"
          >
            Получить консультацию
          </a>
        </motion.div>
      </div>
    </section>
  );
}
