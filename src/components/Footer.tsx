import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { contacts } from '../data/siteData';

const quickLinks = [
  { label: 'Главная', href: '#' },
  { label: 'О фирме', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Команда', href: '#team' },
  { label: 'Контакты', href: '#contact' },
];

const specializations = [
  { label: 'Автоюрист', href: '#services' },
  { label: 'Судебный юрист', href: '#services' },
  { label: 'Административный юрист', href: '#services' },
  { label: 'Антимонопольный юрист', href: '#services' },
  { label: 'Банковский / кредитный юрист', href: '#services' },
  { label: 'Гражданский юрист', href: '#services' },
  { label: 'Жилищный юрист', href: '#services' },
  { label: 'Земельный юрист', href: '#services' },
  { label: 'Корпоративный юрист', href: '#services' },
  { label: 'Налоговый юрист', href: '#services' },
  { label: 'Семейный юрист', href: '#services' },
  { label: 'Строительный юрист', href: '#services' },
  { label: 'Трудовой юрист', href: '#services' },
  { label: 'Юрист-аудитор', href: '#services' },
  { label: 'Юрист по интеллектуальному праву', href: '#services' },
  { label: 'Юрист по банкротству', href: '#services' },
  { label: 'Юрист по защите потребителей', href: '#services' },
  { label: 'Юрист по интернету', href: '#services' },
  { label: 'Юрист по наследству', href: '#services' },
  { label: 'Юрист по недвижимости', href: '#services' },
  { label: 'Юрист-представитель', href: '#services' },
];

const publications = [
  { label: 'Блог юриста', href: '#blog' },
  { label: 'Образцы документов', href: '#downloads' },
  { label: 'Глоссарий', href: '#glossary' },
  { label: 'Прайс-лист (PDF)', href: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/price/prajs-list-na-uslugi-yurista-cheboksary-firmy-pravodejstvie.pdf' },
  { label: 'Прайс-лист (Word)', href: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/price/prajs-list-na-uslugi-yurista-cheboksary-firmy-pravodejstvie.doc' },
];

const legalLinks = [
  { label: 'Политика конфиденциальности', href: '#' },
  { label: 'Правовая информация', href: '#' },
  { label: 'Пользовательское соглашение', href: '#' },
  { label: 'Реквизиты', href: '#' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className="relative bg-[#0F172A] overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-white rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content - 5 columns */}
        <div className="py-16 lg:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <Scale className="w-7 h-7 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
              <span className="font-['Playfair_Display'] text-lg font-bold text-white tracking-[0.12em]">
                ПРАВОДЕЙСТВИЕ
              </span>
            </a>
            <p className="text-white/50 font-['Inter'] text-sm leading-relaxed mb-6 max-w-xs">
              Премиальная юридическая фирма полного цикла. Защищаем интересы
              бизнеса и частных клиентов с безупречной репутацией и индивидуальным подходом.
            </p>
            {/* Social / trust badges */}
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1.5 border border-[#C5A059]/20 rounded text-[10px] text-[#C5A059]/70 font-['Inter'] tracking-wider uppercase">
                Право.ru
              </div>
              <div className="px-3 py-1.5 border border-[#C5A059]/20 rounded text-[10px] text-[#C5A059]/70 font-['Inter'] tracking-wider uppercase">
                Forbes Legal
              </div>
            </div>

            {/* VK Social Link */}
            <a
              href="https://vk.com/lawyers_cheboksary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ПравоДействие в ВКонтакте — скидка 5% участникам группы"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-[#C5A059]/20 hover:border-[#0077FF]/40 hover:bg-[#0077FF]/5 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 text-[#C5A059] group-hover:text-[#0077FF] transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM17.6 13.9c.45.44.92.86 1.3 1.35.18.23.34.48.44.76.17.48.02 1.0-.4 1.05h-1.7c-.44.04-.78-.14-1.08-.42-.24-.22-.46-.46-.69-.7-.09-.1-.19-.19-.3-.26-.23-.15-.43-.1-.56.14-.13.25-.16.53-.17.81-.02.4-.15.51-.55.53-.88.04-1.73-.09-2.52-.5-1.38-.7-2.43-1.74-3.3-3.02-.7-1.03-1.28-2.13-1.78-3.28-.12-.28-.03-.43.28-.44h1.7c.23 0 .38.14.45.36.3.9.72 1.73 1.26 2.5.14.2.28.4.46.56.2.18.36.14.46-.1.06-.15.08-.32.09-.48.03-.53.03-1.06-.02-1.58-.04-.4-.2-.66-.6-.73-.18-.03-.15-.1-.06-.15.15-.1.3-.16.48-.16h1.9c.3.06.37.2.41.5l.01 2.1c0 .12.06.47.28.55.18.06.3-.09.41-.2.5-.53.86-1.16 1.18-1.82.14-.28.26-.57.37-.87.08-.22.23-.33.47-.33h1.82c.06 0 .12 0 .18.01.27.05.34.17.27.44-.14.47-.4.88-.67 1.28-.28.4-.58.78-.86 1.18-.1.15-.1.22.03.35z" />
              </svg>
              <span className="text-white/70 group-hover:text-white font-['Inter'] text-xs transition-colors">
                Мы в ВКонтакте
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-[#0077FF]/20 text-[#0077FF] rounded font-medium">
                −5%
              </span>
            </a>
          </motion.div>

          {/* Column 2: Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-[#C5A059]" />
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                <span className="text-white/50 font-['Inter'] text-sm leading-relaxed">
                  {contacts.city},<br />
                  {contacts.addresses[0]}<br />
                  <span className="text-white/30">и</span><br />
                  {contacts.addresses[1]}
                </span>
              </li>
              {contacts.phones.map((phone, idx) => (
                <li key={idx}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    aria-label={`Позвонить по телефону ${phone}`}
                    className="flex items-center gap-3 text-white/50 hover:text-[#C5A059] transition-colors duration-300 font-['Inter'] text-sm group min-h-[48px] items-center"
                  >
                    <Phone className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                    <span>{phone}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contacts.email}`}
                  aria-label={`Написать на email ${contacts.email}`}
                  className="flex items-center gap-3 text-white/50 hover:text-[#C5A059] transition-colors duration-300 font-['Inter'] text-sm group min-h-[48px] items-center"
                >
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" aria-hidden="true" />
                  <span>{contacts.email}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Quick Links + Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-[#C5A059]" />
              Быстрые ссылки
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#C5A059] transition-colors duration-300 font-['Inter'] text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-['Playfair_Display'] text-base font-semibold text-white mt-8 mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[#C5A059]/50" />
              Публикации
            </h4>
            <ul className="space-y-3">
              {publications.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/50 hover:text-[#C5A059] transition-colors duration-300 font-['Inter'] text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Legal Info + Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-[#C5A059]" />
              Юридическая информация
            </h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#C5A059] transition-colors duration-300 font-['Inter'] text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Working hours */}
            <div className="p-4 rounded-lg border border-[#C5A059]/10 bg-[#C5A059]/5">
              <div className="text-[#C5A059] font-['Inter'] text-xs font-medium tracking-wider uppercase mb-2">
                Часы приёма
              </div>
              <div className="text-white/60 font-['Inter'] text-sm">
                Пн — Пт: 9:00 — 18:00
              </div>
              <div className="text-white/40 font-['Inter'] text-xs mt-1">
                Сб, Вс — Выходной
              </div>
              <div className="text-white/40 font-['Inter'] text-xs mt-1">
                Праздничные дни — Выходной
              </div>
            </div>
          </motion.div>

          {/* Column 5: Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-[#C5A059]" />
              Специализации
            </h4>
            <ul className="space-y-2 max-h-80 overflow-y-auto pr-2">
              {specializations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#C5A059] transition-colors duration-300 font-['Inter'] text-xs flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 font-['Inter'] text-sm text-center md:text-left">
            © 2026 ООО «ПравоДействие». Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-[#C5A059] transition-colors font-['Inter'] text-sm"
            >
              Политика конфиденциальности
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#"
              className="text-white/40 hover:text-[#C5A059] transition-colors font-['Inter'] text-sm"
            >
              Карта сайта
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
