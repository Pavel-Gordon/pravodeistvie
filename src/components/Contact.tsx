import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Bus, Building2, Send, Shield } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Введите ваше имя'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  email: z.string().email('Введите корректный email').optional().or(z.literal('')),
  message: z.string().min(10, 'Опишите ваш вопрос подробнее'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Необходимо согласие на обработку данных' }),
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      reset();
      setIsSubmitted(false);
    }, 3000);
  };
  const offices = [
    {
      title: 'Главный офис',
      address: '428001, Чебоксары, Чувашская республика, ул. Петра Ермолаева, 3 корп. 2',
      phone: '+7 (8352) 222-341',
      fax: '+7 (8352) 222-432',
      email: 'pravodeistvie@mail.ru',
      schedule: {
        weekdays: 'Понедельник - Пятница: с 9:00 до 18:00',
        weekend: 'Суббота, Воскресенье: выходной',
        holidays: 'Праздничные дни: выходной',
      },
      transport: {
        stop: 'Остановка: "Институт образования"',
        routes: 'Маршрутки: 22, 35, 101с; Автобусы: 52; Троллейбусы: 1, 21',
      },
      location: 'Московский район (Северо-западный район (СЗР)), микрорайон "Волжский-3"',
      image: 'https://image.qwenlm.ai/generated-images/71ccaf02-c606-4334-87b3-47d83cfdae19/_result.png',
    },
    {
      title: 'Дополнительный офис',
      address: '428001, Чебоксары, Чувашская республика, ул. Текстильщиков, д. 10, офис 222',
      phone: '+7 (8352) 222-340',
      fax: '+7 (8352) 222-432',
      email: 'pravodeistvie@mail.ru',
      schedule: {
        weekdays: 'Понедельник - Пятница: с 8:30 до 17:30',
        weekend: 'Суббота, Воскресенье: выходной',
        holidays: 'Праздничные дни: выходной',
      },
      transport: {
        stop: 'Остановка: "ХБК"',
        routes: 'Маршрутки: 7, 12, 26, 37, 45, 101с, 331, 333; Автобусы: 42, 52; Троллейбусы: 3, 18',
      },
      location: 'Калининский район (В районе ХБК / Мега Молл), деловой центр на Текстильщиках',
      image: 'https://image.qwenlm.ai/generated-images/721de880-f658-40fb-80d1-88d7366df1f2/_result.png',
    },
  ];

  const requisites = {
    ogrn: '1072130012833',
    inn: '2130025200',
    kpp: '213001001',
    account: '40702810629040002256',
    bank: 'ФИЛИАЛ «НИЖЕГОРОДСКИЙ» АО «АЛЬФА-БАНК»',
    bik: '042202824',
    corrAccount: '30101810200000000824',
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
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
              Контакты
            </span>
            <div className="w-12 h-px bg-[#C5A059]" />
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Свяжитесь с нами
          </h2>

          <p className="text-white/90 font-['Inter'] text-lg max-w-2xl mx-auto drop-shadow-md">
            Два офиса в Чебоксарах для вашего удобства
          </p>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:border-[#C5A059]/30 transition-all duration-500"
            >
              {/* Office Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white drop-shadow-lg">
                    {office.title}
                  </h3>
                </div>
              </div>

              {/* Office Info */}
              <div className="p-8 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-white/50 font-['Inter'] text-xs mb-1">Адрес</div>
                    <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{office.address}</div>
                    <div className="text-white/60 font-['Inter'] text-xs mt-1 drop-shadow-sm">{office.location}</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-white/50 font-['Inter'] text-xs mb-1">Телефон</div>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-white font-['Inter'] text-sm hover:text-[#C5A059] transition-colors drop-shadow-sm"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-white/50 font-['Inter'] text-xs mb-1">Email</div>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-white font-['Inter'] text-sm hover:text-[#C5A059] transition-colors drop-shadow-sm"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-white/50 font-['Inter'] text-xs mb-1">График работы</div>
                    <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{office.schedule.weekdays}</div>
                    <div className="text-white/60 font-['Inter'] text-xs drop-shadow-sm">{office.schedule.weekend}</div>
                    <div className="text-white/60 font-['Inter'] text-xs drop-shadow-sm">{office.schedule.holidays}</div>
                  </div>
                </div>

                {/* Transport */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                    <Bus className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-white/50 font-['Inter'] text-xs mb-1">Как добраться</div>
                    <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{office.transport.stop}</div>
                    <div className="text-white/60 font-['Inter'] text-xs mt-1 drop-shadow-sm">{office.transport.routes}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-6 text-center drop-shadow-lg">
            Мы на карте
          </h3>
          <div className="rounded-lg overflow-hidden border border-[#C5A059]/20 h-96">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=47.193330%2C56.151199&z=13&pt=47.193330%2C56.151199%2Cpm2rdm~47.272719%2C56.142987%2Cpm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта офисов ПравоДействие"
              loading="lazy"
            />
          </div>
          <div className="mt-4 text-center text-white/90 font-['Inter'] text-sm drop-shadow">
            <p>📍 Главный офис: ул. Петра Ермолаева, 3 корп. 2</p>
            <p>📍 Дополнительный офис: ул. Текстильщиков, д. 10, офис 222</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-[#C5A059]" />
              <span className="text-[#C5A059] font-['Inter'] text-sm tracking-[0.2em] uppercase">
                Обратная связь
              </span>
              <div className="w-12 h-px bg-[#C5A059]" />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Запишитесь на консультацию
            </h3>
            <p className="text-white/90 font-['Inter'] mt-3 drop-shadow">
              Оставьте заявку — мы свяжемся с вами в течение 2 часов
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 lg:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-[#C5A059]" />
                </div>
                <h4 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-3 drop-shadow">
                  Заявка отправлена
                </h4>
                <p className="text-white/90 font-['Inter'] drop-shadow">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/90 font-['Inter'] text-sm mb-2 drop-shadow">
                      Ваше имя *
                    </label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded text-white font-['Inter'] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-white/30"
                      placeholder="Иван Иванов"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-['Inter']">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white/90 font-['Inter'] text-sm mb-2 drop-shadow">
                      Телефон *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded text-white font-['Inter'] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-white/30"
                      placeholder="+7 (___) ___-__-__"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 font-['Inter']">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white/90 font-['Inter'] text-sm mb-2 drop-shadow">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded text-white font-['Inter'] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-white/30"
                    placeholder="ivan@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 font-['Inter']">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white/90 font-['Inter'] text-sm mb-2 drop-shadow">
                    Опишите ваш вопрос *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded text-white font-['Inter'] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-white/30 resize-none"
                    placeholder="Расскажите о вашей ситуации..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-['Inter']">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    {...register('consent')}
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-[#C5A059] focus:ring-[#C5A059] focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-white/90 font-['Inter'] text-xs leading-relaxed cursor-pointer drop-shadow">
                    Я согласен на обработку персональных данных в соответствии с{' '}
                    <a href="#" className="text-[#C5A059] hover:underline">
                      Политикой конфиденциальности
                    </a>
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-400 text-xs font-['Inter']">{errors.consent.message}</p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold rounded hover:bg-[#D4B06A] transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Отправить заявку
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Requisites */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#C5A059]/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white drop-shadow-lg">
              Реквизиты компании
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-white/50 font-['Inter'] text-xs mb-1">ОГРН</div>
              <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{requisites.ogrn}</div>
            </div>
            <div>
              <div className="text-white/50 font-['Inter'] text-xs mb-1">ИНН / КПП</div>
              <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{requisites.inn} / {requisites.kpp}</div>
            </div>
            <div>
              <div className="text-white/50 font-['Inter'] text-xs mb-1">Расчётный счёт</div>
              <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{requisites.account}</div>
            </div>
            <div>
              <div className="text-white/50 font-['Inter'] text-xs mb-1">Банк</div>
              <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{requisites.bank}</div>
            </div>
            <div>
              <div className="text-white/50 font-['Inter'] text-xs mb-1">БИК</div>
              <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{requisites.bik}</div>
            </div>
            <div>
              <div className="text-white/50 font-['Inter'] text-xs mb-1">Корр. счёт</div>
              <div className="text-white font-['Inter'] text-sm drop-shadow-sm">{requisites.corrAccount}</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/90 font-['Inter'] mb-6 drop-shadow">
            Готовы обсудить ваш вопрос? Свяжитесь с нами прямо сейчас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+78352222341"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] font-['Inter'] font-semibold rounded hover:bg-[#D4B06A] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
            <a
              href="mailto:pravodeistvie@mail.ru"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C5A059]/30 text-[#C5A059] font-['Inter'] font-semibold rounded hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Написать
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
