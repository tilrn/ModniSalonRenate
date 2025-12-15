import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';

const About = () => {
  const workshopImages = [
    {
      src: require('../images/tailor.jpg'),
      alt: 'Master tailor at work',
      caption: 'Precision in every stitch'
    },
    {
      src: require('../images/measuring.jpg'),
      alt: 'Measuring process',
      caption: 'Time-honored tools of the trade'
    },
    {
      src: require('../images/sketch.jpg'),
      alt: 'Design sketching',
      caption: 'Curating the finest materials'
    },
    {
      src: require('../images/tryingOn.jpg'),
      alt: 'Fitting process',
      caption: 'The art of perfect fitting'
    }
  ];

  const values = [
    {
      title: 'Obrtništvo',
      description: 'Vsako oblačilo je ustvarjeno z uporabo tradicionalnih tehnik, ki se prenašajo skozi generacije, kar zagotavlja neprimerjivo kakovost in pozornost do detajlov.',
      icon: '🎨'
    },
    {
      title: 'Trajnost',
      description: 'Verjame v počasno modo, ustvarja brezčasne kose, ki trajajo vse življenje, zmanjšuje odpadke in vpliv na okolje.',
      icon: '🌱'
    },
    {
      title: 'Personalizacija',
      description: 'Vsak kos je edinstven vaš, odraža vaš slog, osebnost in zgodbo skozi oblikovanje po meri in popoln kroj.',
      icon: '✨'
    },
    {
      title: 'Odličnost',
      description: 'Nikoli ne sklene kompromisov glede kakovosti, uporablja le najkakovostnejše materiale in ohranja najvišje standarde v vsakem detajlu.',
      icon: '🏆'
    }
  ];

  const milestones = [
    { year: '1998', event: 'Začetek vajeništva pri mojstru krojača Giovaniju Rossiju v Milanu' },
    { year: '2003', event: 'Diplomirala na Milanskem modnem inštitutu s pohvalami' },
    { year: '2008', event: 'Odprla prvi atelje v modnem okrožju' },
    { year: '2012', event: 'Prejela certifikat "Mojstrica obrtnica"' },
    { year: '2018', event: 'Razširila delavnico z vključitvijo poročnih in večernih oblek' },
    { year: '2024', event: 'Praznuje več kot 500 ustvarjenih del po meri in še šteje' }
  ];

  const testimonials = [
    {
      name: "Renato Pečnik Šporn",
      text: "Delo z Renato je kot opazovanje čudenja. Njen občutek za detajle in predanost popolnosti je neprimež no.",
      image: "/api/placeholder/60/60",
      role: "Kolega mojster krojač"
    },
    {
      name: "Grača Novak",
      text: "Elena ne ustvarja le oblačil, ustvarja samozavest. Vsak kos pripoveduje zgodbo in se prilega kot sanje.",
      image: "/api/placeholder/60/60",
      role: "Modna urednica"
    },
    {
      name: "David Kovač",
      text: "Kakovost in obrtništvo sta izjemna. To je prava umetnost v svetu mode.",
      image: "/api/placeholder/60/60",
      role: "Modni fotograf"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-neutral-100">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-800 mb-6">
              Spoznajte
              <span className="text-primary-600"> Renato Pečnik Šporn</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Mojstrska krojačica
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Z več kot 25 leti izkušenj pri krojenju po meri Renata združuje 
              tradicionalno slovensko obrtništvo s sodobnimi oblikovnimi občutki. 
              Njena pot se je začela v tradicionalnih ateljejih in jo pripeljala do ustvarjanja 
              nekaterih najizjemnejših oblačil po meri.
            </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={require('../images/final.jpeg')}
                  alt="Renata Pečnik Šporn - Master Tailor"
                  className="w-full h-full object-cover"
                                      onError={(e) => {
                      const svgContent = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="600" viewBox="0 0 500 600">
                          <rect width="500" height="600" fill="#f3f4f6"/>
                          <circle cx="250" cy="200" r="80" fill="#d1d5db"/>
                          <text x="250" y="350" text-anchor="middle" fill="#6b7280" font-size="18" font-family="Arial">
                            Elena Martinez
                          </text>
                          <text x="250" y="380" text-anchor="middle" fill="#9ca3af" font-size="14" font-family="Arial">
                            Master Tailor
                          </text>
                        </svg>
                      `;
                      e.target.src = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
                    }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
                Pot strasti in natančnosti
              </h2>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Moja ljubezenska zgodba s tkaninami in oblikami se je začela v babičini šivalni sobi, 
                  kjer sem prevedel nešteto ur ob opazovanju, kako preoblikuje preproste kose blaga 
                  v čudovita oblačila. Ta zgodnja fascinacija je prerasla v vseživljenjsko strast, 
                  ki me je popeljala po svetu v iskanju popolnosti.
                </p>
                
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Po končanem vajeništvu pri legendarnem mojstru krojača Giovaniju 
                  Rossiju v Milanu sem leta brušila svoje veščine v najprestižnejših ateljejih 
                  Evrope. Vsaka delavnica me je naučila nekaj novega – natančnost Savile Row, 
                  kreativnost pariške visoke mode, inovativnost sodobnega italijanskega oblikovanja.
                </p>
                
                <p className="text-neutral-700 leading-relaxed">
                  Danes Mojstrski Atelje predstavlja vrh te poti. Tu združujem 
                  tradicionalne tehnike s sodobnimi občutki za ustvarjanje oblačil, ki niso 
                  le obleka, temveč izraz identitete, samozavesti in osebnega sloga. Vsak 
                  kos pripoveduje zgodbo – vašo.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Mejniki odličnosti
            </h2>
            <p className="text-xl text-neutral-600">
              Pot nenehnega učenja in rasti
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className={`flex-1 p-6 bg-white rounded-xl shadow-lg ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <p className="text-neutral-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Values Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Naše vrednote
            </h2>
            <p className="text-xl text-primary-100">
              Načela, ki vodijo vsak šiv
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Kaj pravijo kolegi
            </h2>
            <p className="text-xl text-neutral-600">
              Priznanje sodelavcev obrtnikov in strokovnjakov iz industrije
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ustvariva vašo zgodbo skupaj
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Vsako oblačilo ima svojo zgodbo. Začniva pisati vašo z 
              osebnim posvetovanjem, kjer se pogovoriva o vaši viziji in preferencah.
            </p>
            <motion.a
              href="/book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Rezervirajte posvetovanje
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;