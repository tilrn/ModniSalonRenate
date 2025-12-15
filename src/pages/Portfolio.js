import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioModal from '../components/PortfolioModal';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      title: 'Elegantna poročna obleka',
      client: 'Ana M.',
      beforeImage: require('../images/weding.jpg'),
      afterImage: require('../images/weding2.jpg'),
      description: 'Brezčasna A-linijska obleka z ročno šitimi čipkami in dolgim vlečko.',
      testimonial: 'Pozornost do detajlov je bila izjemna. Moja obleka je bila vse, o čemer sem sanjala, in še več.',
      details: [
        'Ročno šite Chantilly čipke',
        'Svilen charmeuse material',
        '3-mesečni proces nastajanja',
        'Dolga ceremonijska vlečka'
      ]
    },
    {
      id: 2,
      category: 'business',
      title: 'Izvršno poslovno obleko',
      client: 'Marko K.',
      beforeImage: require('../images/casual.jpg'),
      afterImage: require('../images/casual2.jpg'),
      description: 'Oster, moderen kostim, skrojen za sodobnega poslovneža.',
      testimonial: 'Popoln kroj, izjemna kakovost. To je tisto, kar bi krojenje po meri moralo biti.',
      details: [
        'Super 150s volneni material',
        'Polplatno konstrukcija',
        'Delujoče gumbnice',
        'Personalizirana podloga'
      ]
    },
    {
      id: 3,
      category: 'evening',
      title: 'Glamurozna večerna obleka',
      client: 'Maja H.',
      beforeImage: require('../images/dress.jpg'),
      afterImage: require('../images/fur.jpg'),
      description: 'Osupljiva dolga obleka za dobrodelno galo.',
      testimonial: 'Od prvega posvetovanja do končnega poskusa je bilo izkušnja brezhibna.',
      details: [
        'Svilen žametni material',
        'Ročno vezeni detajli',
        'Dramatična vlečka',
        'Prilagojena barvna kombinacija'
      ]
    },
    {
      id: 4,
      category: 'casual',
      title: 'Krojeni blazer',
      client: 'Janez L.',
      beforeImage: require('../images/casual.jpg'),
      afterImage: require('../images/casual2.jpg'),
      description: 'Vsestranski blazer, ki se prilagaja od dneva do večera.',
      testimonial: 'Obrtništvo je razvidno v vsakem šivu. Vreden vsakega evra.',
      details: [
        'Lahka volnena mešanica',
        'Nestrukturirani dizajn',
        'Gumbi iz roga',
        'Kontrastna podloga'
      ]
    },
    {
      id: 5,
      category: 'wedding',
      title: 'Klasičen smoking',
      client: 'Robert K.',
      beforeImage: require('../images/weding.jpg'),
      afterImage: require('../images/maturant.jpg'),
      description: 'Brezčasen black-tie komplet za modernega ženina.',
      testimonial: 'Popolnoma popolno. Kroj je bil brezhiben in počutil sem se neverjetno samozavestno.',
      details: [
        'Polnočno modra tkanina',
        'Špičast ovratnik',
        'Svilen grosgrain obrob',
        'Bela srajca s krilnim ovratnikom'
      ]
    },
    {
      id: 6,
      category: 'business',
      title: 'Močni kostim',
      client: 'Viktorija S.',
      beforeImage: require('../images/casual.jpg'),
      afterImage: require('../images/dress.jpg'),
      description: 'Prevladujoč kostim za žensko izvršno direktorico.',
      testimonial: 'Ta kostim me dela močno in samozavestno v vsaki sejni sobi.',
      details: [
        'Tankočrtasta volnena tkanina',
        'Krojeni kroj',
        'Jakna s špičastim ovratnikom',
        'Ujemajoče se ozko krilo'
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'Vsa dela' },
    { key: 'wedding', label: 'Poroke' },
    { key: 'business', label: 'Poslovno' },
    { key: 'evening', label: 'Večerno' },
    { key: 'casual', label: 'Vsakdanje' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
              Njen 
              <span className="text-primary-600"> portfelj</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Bodite priča preobrazbi od vizije do realnosti. Vsak kos v njenem portfelju 
              predstavlja edinstveno zgodbo obrtništva, sloga in osebnega izražanja.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    {/* Before/After Images */}
                    <div className="aspect-[3/4] relative">
                      <motion.img
                        src={item.afterImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const svgContent = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
                              <rect width="400" height="600" fill="#f3f4f6"/>
                              <text x="200" y="280" text-anchor="middle" fill="#9ca3af" font-size="16" font-family="Arial">
                                ${item.title}
                              </text>
                              <text x="200" y="320" text-anchor="middle" fill="#6b7280" font-size="14" font-family="Arial">
                                ${item.client}
                              </text>
                            </svg>
                          `;
                          e.target.src = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                            <span className="text-primary-800 font-medium">Poglej podrobnosti</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase tracking-wide text-primary-600 font-semibold">
                          {categories.find(cat => cat.key === item.category)?.label}
                        </span>
                        <span className="text-sm text-neutral-500">{item.client}</span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-primary-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-neutral-500">V tej kategoriji ni najdenih izdelkov.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Ustvarjenih oblačil' },
              { number: '25+', label: 'Let izkušenj' },
              { number: '98%', label: 'Zadovoljstvo strank' },
              { number: '100%', label: 'Ročno izdelano kakovost' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Portfolio;