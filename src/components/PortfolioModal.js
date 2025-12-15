import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioModal = ({ item, isOpen, onClose }) => {
  if (!item) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative bg-neutral-100">
                <div className="aspect-[3/4] lg:h-full">
                  <img
                    src={item.afterImage}
                    alt={item.title}
                    className="w-full h-full object-cover"
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
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 overflow-y-auto">
                <div className="mb-6">
                  <span className="text-sm uppercase tracking-wide text-primary-600 font-semibold">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-primary-800 mt-2 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Details */}
                <div className="mb-6">
                  <h3 className="text-xl font-serif font-semibold text-primary-800 mb-3">
                    Podrobnosti obrtništva
                  </h3>
                  <ul className="space-y-2">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Info */}
                <div className="mb-6 p-4 bg-primary-50 rounded-xl">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-800 font-semibold text-sm">
                        {item.client.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-800">{item.client}</p>
                      <p className="text-sm text-primary-600">Stranka</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="testimonial-bubble bg-primary-50 border border-primary-200">
                  <p className="text-neutral-700 italic leading-relaxed">
                    "{item.testimonial}"
                  </p>
                  <div className="flex text-yellow-400 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <motion.a
                    href="/book"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary text-center block"
                  >
                    Začnite svojo pot
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;