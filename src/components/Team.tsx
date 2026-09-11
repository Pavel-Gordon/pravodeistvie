import { motion } from 'framer-motion';
import { team } from '../data/siteData';

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C5A059]" />
            <span className="text-[#C5A059] font-['Inter'] text-sm tracking-[0.2em] uppercase">Команда</span>
            <div className="w-12 h-px bg-[#C5A059]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ведущие юристы<span className="block text-[#C5A059] mt-2">нашей фирмы</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-[#1E293B]/50 border border-[#C5A059]/10 hover:border-[#C5A059]/30 transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={member.image} alt={`${member.name} — ${member.position}`} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-1 group-hover:text-[#C5A059] transition-colors">{member.name}</h3>
                  <p className="text-[#C5A059] font-['Inter'] text-sm font-medium mb-3">{member.position}</p>
                  <p className="text-white/50 font-['Inter'] text-sm leading-relaxed">{member.bio}</p>
                  <p className="text-[#C5A059]/70 font-['Inter'] text-xs mt-2 italic">{member.experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
