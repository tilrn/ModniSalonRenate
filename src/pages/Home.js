import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const testimonials = [
    {
      name: "Ana Novak",
      text: "Pozornost do detajlov je izjemna. Moja poročna obleka je bila vse, o čemer sem sanjala, in še več.",
      image: require('../images/weding.jpg'),
      role: "Nevesta"
    },
    {
      name: "Marko Kovač",
      text: "Popoln kroj, izjemna kakovost. To je tisto, kar bi krojenje po meri moralo biti.",
      image: require('../images/casual.jpg'),
      role: "Poslovnež"
    },
    {
      name: "Maja Horvat",
      text: "Od prvega posvetovanja do zadnjega poskusa je bilo izkušnja brezhibna.",
      image: require('../images/dress.jpg'),
      role: "Ljubiteljica mode"
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
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-800 mb-6 leading-tight">
                Od skice do šiva – 
                <span className="text-primary-600"> oblačila ustvarjena za vas.</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Doživite umetnost krojenja po meri, kjer vsak kos oblačila pripoveduje vašo edinstveno zgodbo. 
                Renata združuje tradicionalne tehnike s sodobnim oblikovanjem in ustvarja 
                kose, ki so izključno vaši.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book" className="btn-primary text-center">
                  Rezerviraj posvetovanje
                </Link>
                <Link to="/process" className="btn-secondary text-center">
                  Odkrijte njen postopek
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={require('../images/tailor.jpg')}
                  alt="Master tailor at work"
                  className="w-full h-full object-cover"
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

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Ustvarjeno s preciznostjo
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Vsak kos oblačila je mojstrovino, skrbno izdelano z uporabo preizkušenih tehnik 
              in najkakovostnejših materialov.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✂️",
                title: "Mojstrsko obrtništvo",
                description: "Več kot 25 let izkušenj pri krojenju po meri s skrbno pozornostjo do vsakega detajla."
              },
              {
                icon: "📏",
                title: "Popoln kroj",
                description: "Večkratni poskusi zagotavljajo, da se vam oblačilo prilega kot druga koža, skrojeno po vaših edinstvenih merah."
              },
              {
                icon: "🎨",
                title: "Oblika po meri",
                description: "Sodelujte z Renato pri ustvarjanju kosov, ki odražajo vaš osebni slog in preference."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-primary-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
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
              Ustvariva nekaj izjemnega. Rezervirajte posvetovanje 
              in začnite pot od skice do šiva.
            </p>
            <Link 
              to="/book" 
              className="inline-block bg-white text-primary-800 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Rezervirajte posvetovanje
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;