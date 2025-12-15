import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-primary-100">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
                      <Link to="/" className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center">
              <span className="text-primary-800 font-serif font-semibold">M</span>
            </div>
            <span className="text-xl font-serif font-semibold">
              Mojstrski Atelje
            </span>
          </Link>
            <p className="text-primary-200 mb-4 max-w-md">
              Ustvarjamo oblačila po meri z izjemno pozornostjo do detajlov. 
              Od začetne skice do zadnjega šiva, vsak kos pripoveduje svojo zgodbo.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/artisanatelier" aria-label="Follow us on Instagram" className="text-primary-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.68 18.932H6.408V9.75h2.272v9.182zM7.544 8.717c-.728 0-1.32-.592-1.32-1.32 0-.728.592-1.32 1.32-1.32.728 0 1.32.592 1.32 1.32 0 .728-.592 1.32-1.32 1.32zM18.558 18.932h-2.272v-4.478c0-.848-.016-1.94-1.183-1.94-1.183 0-1.365.924-1.365 1.878v4.54H11.466V9.75h2.181v1.25h.031c.304-.576 1.046-1.183 2.155-1.183 2.305 0 2.73 1.516 2.73 3.486v5.629z"/>
                </svg>
              </a>
              <a href="https://facebook.com/artisanatelier" aria-label="Follow us on Facebook" className="text-primary-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Hitre povezave</h3>
            <ul className="space-y-2">
              <li><Link to="/process" className="text-primary-200 hover:text-white transition-colors">Postopek</Link></li>
              <li><Link to="/portfolio" className="text-primary-200 hover:text-white transition-colors">Portfelj</Link></li>
              <li><Link to="/about" className="text-primary-200 hover:text-white transition-colors">O njej</Link></li>
              <li><Link to="/book" className="text-primary-200 hover:text-white transition-colors">Rezerviraj termin</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-2 text-primary-200">
              <p>Trubarjeva cesta 15</p>
              <p>1000 Ljubljana, Slovenija</p>
              <p className="pt-2">
                <a href="tel:+38615551234" className="hover:text-white transition-colors">
                  01 555 1234
                </a>
              </p>
              <p>
                <a href="mailto:info@mojstrski-atelje.si" className="hover:text-white transition-colors">
                  info@mojstrski-atelje.si
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm">
            © 2024 Mojstrski Atelje. Vse pravice pridržane.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-primary-300 hover:text-white text-sm transition-colors">
              Pravilnik o zasebnosti
            </a>
            <a href="/terms-of-service" className="text-primary-300 hover:text-white text-sm transition-colors">
              Pogoji poslovanja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;