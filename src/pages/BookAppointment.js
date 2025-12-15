import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';

const BookAppointment = () => {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      id: 'consultation',
      name: 'Prvo posvetovanje',
      duration: '60 minut',
      price: 'Brezplačno',
      description: 'Pogovorimo se o vaši viziji, razizkujmo možnosti tkanin in razumejmo postopek.',
      includes: ['Stilno svetovanje', 'Izbira tkanin', 'Pogovor o časovnici', 'Začetne mere']
    },
    {
      id: 'suit',
      name: 'Kostim po meri',
      duration: '6-8 tednov',
      price: 'Od 2.500 €',
      description: 'Popoln kostim po meri, skrojen po vaših natančnih specifikacijah.',
      includes: ['Popolno posvetovanje', 'Ustvarjanje vzorca', 'Večkratni poskusi', 'Premiẙ tkanine']
    },
    {
      id: 'dress',
      name: 'Obleka po meri',
      duration: '4-6 tednov',
      price: 'Od 1.800 €',
      description: 'Elegantne obleke po meri za vsako priložnost.',
      includes: ['Oblikovno posvetovanje', 'Vzorec po meri', 'Premiẙ materiali', 'Garancija popolnega kroja']
    },
    {
      id: 'shirt',
      name: 'Srajce po meri',
      duration: '3-4 tedne',
      price: 'Od 350 €',
      description: 'Popolno prilegajoče srajce, ustvarjene po vaših merah.',
      includes: ['Seja merjenja', 'Izbira tkanin', 'Detajli po meri', 'Možnosti ovratnikov in manžet']
    },
    {
      id: 'alterations',
      name: 'Predelave',
      duration: '1-2 tedna',
      price: 'Od 75 €',
      description: 'Strokovne predelave za popoln kroj obstoječih oblačil.',
      includes: ['Ocena kroja', 'Profesionalne predelave', 'Garancija kakovosti', 'Hitra izvedba']
    },
    {
      id: 'wedding',
      name: 'Poročna kolekcija',
      duration: '8-12 tednov',
      price: 'Od 3.500 €',
      description: 'Popolna poročna kolekcija za nevesto in ženina za vaš poseben dan.',
      includes: ['Poročno posvetovanje', 'Večkratni poskusi', 'Luksuzne tkanine', 'Storitev ohranjanja']
    }
  ];

  const benefits = [
    {
      icon: '🎯',
      title: 'Garancija popolnega kroja',
      description: 'Zagotavljamo, da se vam vsako oblačilo popolno prilega z večkratnimi poskusi in prilagoditvami.'
    },
    {
      icon: '🕐',
      title: 'Prilagodljivo načartovanje',
      description: 'Na voljo so večerni in vikend termini, da se prilagodimo vašemu zasedenemu urniku.'
    },
    {
      icon: '📍',
      title: 'Priročna lokacija',
      description: 'Nahaja se v srcu modnega okrožja z lahkim parkiranjem in dostopom z javnim prevozom.'
    },
    {
      icon: '💎',
      title: 'Premiẙ izkušnja',
      description: 'Uživajte v brezplačnih osvržilnih napitkih in sprostični atmosferi med obiskom.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-neutral-100">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-800 mb-6">
              Rezervirajte vaše 
              <span className="text-primary-600"> posvetovanje</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Začnite svojo pot do popolnega oblačila. Rezervirajte posvetovanje 
              za pogovor o vaši viziji in odkrivanje možnosti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Naše storitve
            </h2>
            <p className="text-xl text-neutral-600">
              Izberite storitev, ki najbolj ustreza vašim potrebam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedService === service.id
                    ? 'border-primary-500 bg-primary-50 shadow-lg'
                    : 'border-neutral-200 hover:border-primary-300 hover:shadow-md'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-semibold text-primary-800">
                    {service.name}
                  </h3>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedService === service.id
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-neutral-300'
                  }`}>
                    {selectedService === service.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-neutral-600 mb-2">
                    <span>Duration: {service.duration}</span>
                    <span className="font-semibold text-primary-700">{service.price}</span>
                  </div>
                </div>
                
                <p className="text-neutral-700 mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neutral-800">Zajema:</p>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary-800 mb-6">
                  Rezervirajte termin
                </h2>
                <BookingForm selectedService={selectedService} />
              </motion.div>
            </div>

            {/* Benefits */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <h3 className="text-2xl font-serif font-semibold text-primary-800 mb-6">
                  Zakaj izbrati nas?
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{benefit.icon}</div>
                      <div>
                        <h4 className="font-semibold text-primary-800 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-neutral-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-serif font-semibold text-primary-800 mb-4">
                    Kontaktni podatki
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">📍</span>
                      <span className="text-neutral-700">Trubarjeva cesta 15, 1000 Ljubljana, Slovenija</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">📞</span>
                      <span className="text-neutral-700">01 555 1234</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">✉️</span>
                      <span className="text-neutral-700">info@mojstrski-atelje.si</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">🕐</span>
                      <span className="text-neutral-700">Pon-Sob: 9:00-19:00, Ned: 12:00-17:00</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Pogosto zastavljena vprašanja
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Koliko časa traja posvetovanje?",
                answer: "Začetna posvetovanja običajno trajajo 60 minut. To nam da čas za pogovor o vaši viziji, raziskovanje možnosti tkanin, vzem preliminarnih mer in podrobno razlago našega postopka."
              },
              {
                question: "Kaj naj prinesem na termin?",
                answer: "Prinesite navdihujjoče slike, obstoječa oblačila, ki vam je kroj všeč, in bodite pripravljeni razpravljati o vašem življenjskem slogu in preferencah. Vse ostalo bomo zagotovili mi."
              },
              {
                question: "Koliko vnaprej naj rezerviram?",
                answer: "Priporočamo rezervacijo 2-3 tedne vnaprej za posvetovanja in 2-3 mesece vnaprej za poročna ali oblačila za posebne priložnosti, da zagotovimo dovolj časa za ustvarjanje."
              },
              {
                question: "Ali ponujate načrte plačevanja?",
                answer: "Da, ponujamo prilagodljive možnosti plačevanja, vključno s 50% pologom in končnim plačilom ob dokončanju, ali razširjene načrte plačevanja za večje naročila."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-neutral-50 rounded-xl"
              >
                <h3 className="font-serif font-semibold text-primary-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-700">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;