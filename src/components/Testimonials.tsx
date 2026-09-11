import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C5A059]" />
            <span className="text-[#C5A059] font-['Inter'] text-sm tracking-[0.2em] uppercase">Отзывы</span>
            <div className="w-12 h-px bg-[#C5A059]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Нам доверяют<span className="text-[#C5A059]"> лидеры отраслей</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#C5A059]/30 p-8 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-white/70 font-['Inter'] text-sm leading-relaxed mb-6 italic">«{testimonial.text}»</p>
              <div>
                <div className="font-['Playfair_Display'] text-lg font-semibold text-white">{testimonial.author}</div>
                <div className="text-[#C5A059]/70 font-['Inter'] text-sm mt-1">{testimonial.position}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
