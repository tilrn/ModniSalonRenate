import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, text, image, role }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="testimonial-bubble mb-6"
    >
      <div className="mb-4">
        <div className="flex text-yellow-400 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-neutral-700 text-lg leading-relaxed mb-4">
          "{text}"
        </p>
      </div>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-primary-200">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const svgContent = `
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="24" fill="#e5e7eb"/>
                  <circle cx="24" cy="18" r="8" fill="#9ca3af"/>
                  <path d="M24 28c-8 0-14 6-14 14h28c0-8-6-14-14-14z" fill="#9ca3af"/>
                </svg>
              `;
              e.target.src = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-primary-800">{name}</h4>
          <p className="text-neutral-500 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;