import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ step, index, isReversed }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2 + 0.3
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isReversed ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      {/* Content */}
      <div className={`${isReversed ? 'lg:col-start-2' : ''}`}>
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
            {step.number}
          </div>
          <div className="text-4xl">{step.icon}</div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
          {step.title}
        </h2>
        
        <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
          {step.description}
        </p>
        
        <div className="space-y-3">
          {step.details.map((detail, detailIndex) => (
            <motion.div
              key={detailIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + detailIndex * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image */}
      <motion.div
        variants={imageVariants}
        className={`${isReversed ? 'lg:col-start-1' : ''} relative group`}
      >
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              const svgContent = `
                <svg xmlns="http://www.w3.org/2000/svg" width="500" height="400" viewBox="0 0 500 400">
                  <rect width="500" height="400" fill="#f3f4f6"/>
                  <text x="250" y="200" text-anchor="middle" fill="#9ca3af" font-size="18" font-family="Arial">
                    ${step.title} Image
                  </text>
                  <circle cx="250" cy="250" r="40" fill="#d1d5db"/>
                  <text x="250" y="260" text-anchor="middle" fill="#6b7280" font-size="24" font-family="Arial">
                    ${step.number}
                  </text>
                </svg>
              `;
              e.target.src = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
            }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-200 rounded-full opacity-50"></div>
      </motion.div>
    </motion.div>
  );
};

export default ProcessStep;