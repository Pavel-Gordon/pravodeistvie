import { motion } from 'framer-motion';
import { Scale, Building2, FileText, Briefcase, Landmark, Shield, Users, Building } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Консультационные услуги',
    icon: Scale,
    services: [
      { name: 'Юридическая консультация', description: 'Устная консультация юриста по телефону или лично. Анализ вашей ситуации и рекомендации по дальнейшим действиям.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/юридическая-консультация-чебоксары-москва-пфо-вопрос-юристу' },
      { name: 'Юридический консалтинг', description: 'Подготовка письменного юридического заключения с анализом ситуации и рекомендациями.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/правовой-юридический-консалтинг-чебоксары-москва-пфо-анализ-экспертиза-ситуации-вопроса' },
      { name: 'Участие в переговорах', description: 'Профессиональное участие юриста в переговорах от имени клиента.', link: '#' },
    ],
  },
  {
    title: 'Судебное представительство',
    icon: Landmark,
    services: [
      { name: 'Представление интересов в суде', description: 'Представление интересов в арбитражном суде и суде общей юрисдикции: физ. лиц, юр. лиц и ИП.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/представление-интересов-в-арбитражном-суде-представитель-защита-в-арбитраже' },
      { name: 'Подготовка судебных документов', description: 'Подготовка исковых заявлений, отзывов, апелляционных и кассационных жалоб без представления интересов в суде.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/помощь-в-составлении-и-подготовка-судебных-документов' },
      { name: 'Исполнительное производство', description: 'Юридическая помощь на стадии исполнительного производства.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/помощь-на-стадии-исполнительного-производства' },
    ],
  },
  {
    title: 'Договорная работа',
    icon: FileText,
    services: [
      { name: 'Разработка проекта договора', description: 'Разработка гражданско-правового договора (ГПХ) с учетом ваших интересов.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/разработка-проекта-договора' },
      { name: 'Проверка договора', description: 'Юридическая экспертиза и проверка договора с составлением письменного заключения или протокола разногласий.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/юридическая-экспертиза-проверка-договора-анализ' },
      { name: 'Протокол разногласий', description: 'Составление протокола разногласий к договору контрагента.', link: '#' },
    ],
  },
  {
    title: 'Корпоративное право',
    icon: Briefcase,
    services: [
      { name: 'Регистрация ООО, АО', description: 'Регистрация (открытие) юридического лица с разработкой учредительных и иных сопутствующих документов.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/открытие-ооо-ип-ао-и-др-с-разработкой-документов' },
      { name: 'Ликвидация юридического лица', description: 'Ликвидация (закрытие) ООО, АО и др. «под ключ».', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/закрытие-и-ликвидация-юридического-лица' },
      { name: 'Реорганизация юридического лица', description: 'Реорганизация ООО, АО и др. «под ключ».', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/реорганизация-юридического-лица' },
    ],
  },
  {
    title: 'Недвижимость и сделки',
    icon: Building2,
    services: [
      { name: 'Сделки по купле-продаже недвижимости', description: 'Юридическое сопровождение сделки с недвижимостью «под ключ».', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/сделки-по-купле-продаже-недвижимости-юридическое-сопровождение' },
      { name: 'Сделки по купле-продаже бизнеса', description: 'Сопровождение сделки по приобретению финансового актива (купле-продаже бизнеса).', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/сделки-по-купле-продаже-бизнеса-активов' },
    ],
  },
  {
    title: 'Банкротство',
    icon: Shield,
    services: [
      { name: 'Банкротство физического лица', description: 'Представление интересов клиента в качестве должника по делу о банкротстве физического лица.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/объявить-себя-банкротом-банкротство-юр-или-физ-лица' },
      { name: 'Банкротство юридического лица', description: 'Представление интересов клиента в качестве должника по делу о банкротстве юридического лица.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/объявить-себя-банкротом-банкротство-юр-или-физ-лица' },
      { name: 'Сопровождение арбитражного управляющего', description: 'Сопровождение деятельности арбитражного управляющего в рамках дела о несостоятельности (банкротстве).', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/помощник-арбитражного-управляющего-сопровождение-деятельности' },
    ],
  },
  {
    title: 'Специализированные услуги',
    icon: Users,
    services: [
      { name: 'Автоюрист', description: 'Юридическая помощь по автомобильным вопросам: ДТП, страховые споры, лишение прав.', link: '#' },
      { name: 'Семейный юрист', description: 'Расторжение брака, раздел имущества, алименты, определение места жительства детей.', link: '#' },
      { name: 'Налоговый юрист', description: 'Налоговое планирование, сопровождение проверок, оспаривание решений налоговых органов.', link: '#' },
      { name: 'Трудовой юрист', description: 'Трудовые споры, незаконное увольнение, невыплата зарплаты, охрана труда.', link: '#' },
    ],
  },
  {
    title: 'Взаимодействие с государством',
    icon: Building,
    services: [
      { name: 'Подготовка запросов', description: 'Подготовка запроса в органы государственной власти и местного самоуправления: юр. и физ. лиц.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/подготовка-запроса-в-органы-государственной-власти' },
      { name: 'Составление заявлений и жалоб', description: 'Составление заявлений, жалоб и пр. в административные и правоохранительные органы.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/составление-заявлений-жалоб-и-прочее' },
      { name: 'Подготовка досудебной претензии', description: 'Подготовка претензии в рамках соблюдения досудебного порядка урегулирования спора.', link: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/цены-на-услуги/составление-досудебной-претензии' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C5A059]" />
            <span className="text-[#C5A059] font-['Inter'] text-sm tracking-[0.2em] uppercase">Наши услуги</span>
            <div className="w-12 h-px bg-[#C5A059]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Полный спектр<span className="block text-[#C5A059] mt-2">юридических услуг</span>
          </h2>
          <p className="text-white/90 font-['Inter'] text-lg max-w-2xl mx-auto drop-shadow-md">Более 50 видов юридических услуг для бизнеса и частных лиц</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#C5A059]/30 hover:shadow-xl transition-all duration-500 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                  <category.icon className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-white drop-shadow">{category.title}</h3>
              </div>
              <ul className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <a
                      href={service.link}
                      target={service.link.startsWith('http') ? '_blank' : undefined}
                      rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group block p-4 rounded-lg bg-white/5 hover:bg-[#C5A059]/10 border border-white/10 hover:border-[#C5A059]/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-[#C5A059] mt-1 text-lg">•</span>
                        <div className="flex-1">
                          <h4 className="text-white font-['Inter'] font-semibold text-sm mb-1 group-hover:text-[#C5A059] transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-white/70 font-['Inter'] text-xs leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
