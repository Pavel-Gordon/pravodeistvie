import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, FileText, Download } from 'lucide-react';

export default function DownloadsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const documents = [
    {
      category: 'Договоры',
      files: [
        { name: 'Договор аренды нежилого помещения', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/dogovor-arendy-nezhilogo-pomeshheniya.doc' },
        { name: 'Договор аренды квартиры', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/dogovor-arendy-kvartiry.doc' },
        { name: 'Договор купли-продажи автомобиля', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/dogovor-kupli-prodazhi-avtomobilya.doc' },
        { name: 'Договор купли-продажи квартиры', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/dogovor-kupli-prodazhi-kvartiry.doc' },
        { name: 'Договор подряда', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/dogovor-podryada.doc' },
        { name: 'Договор поставки', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/dogovor-postavki.doc' },
        { name: 'Договор оказания услуг', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/dogovor-okazaniya-uslug.doc' },
        { name: 'Договор займа', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/dogovor-zayma.doc' },
      ],
    },
    {
      category: 'Трудовые документы',
      files: [
        { name: 'Трудовой договор', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/trudovoy-dogovor.doc' },
        { name: 'Заявление о приёме на работу', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/zayavlenie-o-priyome-na-rabotu.doc' },
        { name: 'Заявление об увольнении', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/zayavlenie-ob-uvolnenii.doc' },
        { name: 'Приказ о приёме на работу', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/prikaz-o-priyome-na-rabotu.doc' },
        { name: 'Приказ об увольнении', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/prikaz-ob-uvolnenii.doc' },
      ],
    },
    {
      category: 'Претензии и заявления',
      files: [
        { name: 'Претензия о возврате товара', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/pretenziya-o-vozvrate-tovara.doc' },
        { name: 'Претензия о некачественной услуге', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/pretenziya-o-nekachestvennoy-usluge.doc' },
        { name: 'Заявление о возврате денежных средств', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/zayavlenie-o-vozvrate-denezhnyh-sredstv.doc' },
        { name: 'Жалоба в Роспотребнадзор', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/zhaloba-v-rospotrebnadzor.doc' },
        { name: 'Исковое заявление', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/iskovoe-zayavlenie.doc' },
      ],
    },
    {
      category: 'Корпоративные документы',
      files: [
        { name: 'Устав ООО', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/ustav-ooo.doc' },
        { name: 'Учредительный договор ООО', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/uchreditelnyy-dogovor-ooo.doc' },
        { name: 'Протокол общего собрания учредителей', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/protokol-obshchego-sobraniya-uchrediteley.doc' },
        { name: 'Решение единственного учредителя', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/reshenie-edinstvennogo-uchreditelya.doc' },
        { name: 'Доверенность на представление интересов', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/doverennost-na-predstavlenie-interesov.doc' },
      ],
    },
    {
      category: 'Бухгалтерские документы',
      files: [
        { name: 'Акт выполненных работ', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/akt-vypolnennyh-rabot.doc' },
        { name: 'Товарная накладная', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/tovarnaya-nakladnaya.doc' },
        { name: 'Счёт-фактура', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/schet-faktura.doc' },
        { name: 'Акт сверки расчётов', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/akt-sverki-raschyotov.doc' },
      ],
    },
    {
      category: 'Прайс-листы',
      files: [
        { name: 'Прайс-лист на юридические услуги (PDF)', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/price/prajs-list-na-uslugi-yurista-cheboksary-firmy-pravodejstvie.pdf' },
        { name: 'Прайс-лист на юридические услуги (Word)', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/price/prajs-list-na-uslugi-yurista-cheboksary-firmy-pravodejstvie.doc' },
        { name: 'Прайс-лист на бухгалтерские услуги', url: 'http://xn--80aeahfbug6bhlsn.xn--p1ai/doc/price/prajs-list-na-buhgalterskie-uslugi.doc' },
      ],
    },
  ];

  return (
    <section id="downloads" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
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
              Документы
            </span>
            <div className="w-12 h-px bg-[#C5A059]" />
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Шаблоны документов
            <span className="block text-[#C5A059] mt-2">для скачивания</span>
          </h2>

          <p className="text-white/90 font-['Inter'] text-lg max-w-2xl mx-auto drop-shadow-md">
            Готовые шаблоны договоров, заявлений и других юридических документов. Скачивайте и используйте для своих нужд.
          </p>
        </motion.div>

        <div className="space-y-6">
          {documents.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:border-[#C5A059]/30 transition-all duration-500"
            >
              <button
                onClick={() => setOpenCategory(openCategory === catIndex ? null : catIndex)}
                className="w-full p-6 lg:p-8 bg-gradient-to-r from-[#C5A059]/10 to-transparent border-b border-white/5 hover:from-[#C5A059]/20 transition-all duration-300 flex items-center justify-between"
              >
                <h3 className="font-['Playfair_Display'] text-xl lg:text-2xl font-semibold text-white text-left drop-shadow">
                  {category.category}
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
                  {category.files.map((file, fileIndex) => (
                    <motion.a
                      key={fileIndex}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-6 lg:p-8 hover:bg-[#C5A059]/5 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C5A059]/20 transition-colors">
                          <FileText className="w-5 h-5 text-[#C5A059]" />
                        </div>
                        <span className="text-white/90 font-['Inter'] text-base group-hover:text-[#C5A059] transition-colors drop-shadow-sm">
                          {file.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#C5A059]">
                        <Download className="w-5 h-5" />
                        <span className="font-['Inter'] text-sm font-medium hidden sm:inline">Скачать</span>
                      </div>
                    </motion.a>
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
            <li>• Все документы предоставлены в формате Word (.doc) для удобного редактирования</li>
            <li>• Шаблоны являются базовыми и могут требовать адаптации под вашу конкретную ситуацию</li>
            <li>• Рекомендуем проконсультироваться с юристом перед использованием документов</li>
            <li>• Для сложных случаев лучше заказать индивидуальную разработку документов у наших специалистов</li>
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
            Нужен индивидуальный документ? Наши юристы подготовят его для вас.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold rounded hover:bg-[#D4B06A] transition-all duration-300"
          >
            Заказать документ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
