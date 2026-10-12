import { motion } from 'framer-motion';
import { FileText, Download, Scale } from 'lucide-react';

/**
 * Documents migrated from the legacy site (праводействие.рф).
 *
 * Only files that were verified as actually existing on the legacy host are
 * listed here. Paths are relative to /public, so they resolve through the Vite
 * `base` option on GitHub Pages.
 */
type Document = {
  name: string;
  description: string;
  path: string;
  size: string;
};

type Category = {
  category: string;
  files: Document[];
};

const categories: Category[] = [
  {
    category: 'Прайс-листы',
    files: [
      {
        name: 'Прайс-лист на юридические услуги',
        description: 'Полный перечень услуг и стоимость по каждому направлению.',
        path: 'documents/price-lists/price-list-legal-services.pdf',
        size: '782 КБ',
      },
      {
        name: 'Прайс-лист на бухгалтерские услуги',
        description: 'Стоимость бухгалтерского и налогового сопровождения.',
        path: 'documents/price-lists/price-list-accounting-services.pdf',
        size: '117 КБ',
      },
    ],
  },
  {
    category: 'Правовые документы',
    files: [
      {
        name: 'Политика обработки персональных данных',
        description: 'Порядок обработки и защиты персональных данных посетителей сайта.',
        path: 'documents/legal/personal-data-processing.pdf',
        size: '2,4 МБ',
      },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <section id="documents" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            Документы для скачивания
          </h2>

          <p className="text-white/90 font-['Inter'] text-lg max-w-2xl mx-auto drop-shadow-md">
            Прайс-листы и правовые документы в формате PDF.
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="font-['Playfair_Display'] text-xl lg:text-2xl font-semibold text-white mb-5 drop-shadow">
                {category.category}
              </h3>

              <ul className="space-y-3">
                {category.files.map((file) => (
                  <li key={file.path}>
                    <a
                      href={`${import.meta.env.BASE_URL}${file.path}`}
                      download
                      className="flex items-center justify-between gap-4 p-5 lg:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#C5A059]/40 hover:bg-[#C5A059]/5 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-11 h-11 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C5A059]/20 transition-colors">
                          <FileText className="w-5 h-5 text-[#C5A059]" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-white/90 font-['Inter'] font-medium text-base group-hover:text-[#C5A059] transition-colors">
                            {file.name}
                          </span>
                          <span className="block text-white/60 font-['Inter'] text-sm mt-0.5">
                            {file.description}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[#C5A059] shrink-0">
                        <span className="font-['Inter'] text-xs hidden sm:inline">{file.size}</span>
                        <Download className="w-5 h-5" />
                        <span className="font-['Inter'] text-sm font-medium hidden sm:inline">
                          Скачать
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
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
            Нужны шаблоны договоров?
          </h4>
          <p className="text-white/90 font-['Inter'] text-sm leading-relaxed drop-shadow-sm mb-6">
            Базовые формы договоров и доверенностей юристы подготовят под вашу конкретную
            ситуацию. Это быстрее и надёжнее, чем универсальный шаблон.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold rounded hover:bg-[#D4B06A] transition-all duration-300"
          >
            <Scale className="w-4 h-4" />
            Заказать документ
          </a>
        </motion.div>
      </div>
    </section>
  );
}