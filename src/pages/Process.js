import React from 'react';
import { motion } from 'framer-motion';
import ProcessStep from '../components/ProcessStep';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Posvetovanje",
      description: "Začnemo z natančnim pogovorom o vaši viziji, življenjskem slogu in preferencah. Tu se vaša zgodba začne razvijati.",
      details: [
        "Pogovorimo se o vaših slogovnih preferencah in zahtevah",
        "Pregledamo možnosti tkanin in oblikovnih rešitev",
        "Razumemo vaš življenjski slog in namen nošenja",
        "Določimo časovni razpored in pričakovanja"
      ],
      icon: "💬",
      image: require('../images/talking.jpg')
    },
    {
      number: 2,
      title: "Skica",
              description: "Renata pretvori vašo vizijo v podrobne skice, ujame vsako nianso vašega želenega oblačila.",
      details: [
        "Ustvarimo začetne oblikovne koncepte",
        "Izboljšamo podrobnosti na podlagi vaših povratnih informacij",
        "Dokončamo tehnične specifikacije",
        "Izberemo dopolnilne oblikovne elemente"
      ],
      icon: "✏️",
      image: require('../images/sketch.jpg')
    },
    {
      number: 3,
      title: "Merjenje",
      description: "Natančne mere vzamemo z uporabo tradicionalnih tehnik, kar zagotavlja, da se vam oblačilo prilega, kot da bi bilo narejeno samo za vas – ker tako tudi je.",
      details: [
        "Vzamemo obsežne telesne mere",
        "Upoštevamo držo in vzorce gibanja",
        "Ustvarimo vaš edinstveni profil kroja",
        "Dokumentiramo posebne zahteve"
      ],
      icon: "📏",
      image: require('../images/measuring.jpg')
    },
    {
      number: 4,
      title: "Poskus",
      description: "Večkratni poskusi zagotavljajo popolnost. Izboljšujemo in prilagajamo, dokler vsaka linija ne teče točno tako, kot mora.",
      details: [
        "Začetni grob poskus za strukturo",
        "Napredni poskus za izboljšane prilagoditve",
        "Končni poskus za popolno dokončanje",
        "Končne podrobnosti in zaključni detajli"
      ],
      icon: "👔",
      image: require('../images/tryingOn.jpg')
    },
    {
      number: 5,
      title: "Končni kos",
      description: "Vaše dokončano oblačilo – mojstrovino, ki pripoveduje vašo zgodbo in se popolno prilega vašemu življenju.",
      details: [
        "Končni pregled kakovosti",
        "Profesionalno likanje in dokončanje",
        "Navodila za nego in vzdrževanje",
        "Dostava in svetovanje za styling"
      ],
      icon: "✨",
      image: require('../images/final.jpeg')
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
              Pot od 
              <span className="text-primary-600"> skice do šiva</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Vsako oblačilo pripoveduje zgodbo. Odkrijte skrben postopek za vsako 
              ustvarjeno delo po meri, kjer se tradicionalno obrtništvo srečuje s sodobnim oblikovanjem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <ProcessStep 
                key={step.number} 
                step={step} 
                index={index}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Časovnica vaše poti
            </h2>
            <p className="text-xl text-neutral-600">
              Od prvega posvetovanja do končnega poskusa, običajno 6-8 tednov
            </p>
          </motion.div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-primary-800">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">Teden {step.number === 5 ? '6-8' : step.number === 4 ? '4-6' : step.number}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-300 transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10">
                    {step.number}
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif font-semibold text-lg text-primary-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Teden {step.number === 5 ? '6-8' : step.number === 4 ? '4-6' : step.number}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Pripravljeni začeti svojo pot?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Doživite umetnost krojenja po meri. Rezervirajte posvetovanje 
              in začnimo ustvarjati vaše popolno oblačilo.
            </p>
            <motion.a
              href="/book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-800 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Rezervirajte posvetovanje
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;