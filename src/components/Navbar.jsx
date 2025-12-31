import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categorias = {
    'Cocinas': [
      { name: 'Cocinas Industriales', link: '/#cocinas-industriales' },
      { name: 'Cocinas Semi-Industriales', link: '/#cocinas-semi-industriales' }
    ],
    'Equipos de Frío': [
      { name: 'Heladeras', link: '/#heladeras' },
      { name: 'Aires Acondicionados', link: '/#aires' }
    ]
  };

  const handleCategoryClick = (link) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    // Si estamos en home, hacer scroll, si no, navegar
    if (window.location.pathname === '/') {
      const id = link.split('#')[1];
      const element = document.querySelector(`#${id}`);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-primary-900/20' 
            : 'bg-dark-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                {/* Logo Image */}
                <img 
                  src="images/logo/logo.png" 
                  alt="César Cocina Logo" 
                  className="h-12 w-auto"
                />
                {/* Brand Name */}
                <div className="flex flex-col">
                  <h1 className="text-2xl font-display font-black leading-tight">
                    <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-transparent bg-clip-text">
                      César
                    </span>
                    <span className="text-white ml-1">Cocina</span>
                  </h1>
                  <p className="text-xs text-gray-400 font-medium">Equipamiento Comercial</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Dropdown Categorías */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('categorias')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors flex items-center group">
                  Categorías
                  <ChevronDown className="ml-1 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'categorias' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-dark-800 border border-primary-900/30 rounded-lg shadow-2xl overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-px bg-primary-900/10">
                        {Object.entries(categorias).map(([categoria, items]) => (
                          <div key={categoria} className="bg-dark-800 p-4">
                            <h3 className="text-primary-500 font-semibold text-sm mb-3 uppercase tracking-wide">
                              {categoria}
                            </h3>
                            <ul className="space-y-2">
                              {items.map((item) => (
                                <li key={item.name}>
                                  <button
                                    onClick={() => handleCategoryClick(item.link)}
                                    className="text-gray-300 hover:text-white text-sm transition-colors block w-full text-left hover:translate-x-1 transform duration-200"
                                  >
                                    {item.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/sobre-nosotros"
                className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors"
              >
                Sobre Nosotros
              </Link>

              <Link 
                to="/sucursales"
                className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors"
              >
                Sucursales
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-900/50"
              >
                Contacto
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark-800 border-t border-primary-900/30"
            >
              <div className="px-4 py-6 space-y-4">
                {Object.entries(categorias).map(([categoria, items]) => (
                  <div key={categoria}>
                    <h3 className="text-primary-500 font-semibold mb-2">{categoria}</h3>
                    <ul className="space-y-2 ml-4">
                      {items.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => handleCategoryClick(item.link)}
                            className="text-gray-300 hover:text-white transition-colors block w-full text-left"
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                <Link 
                  to="/sobre-nosotros"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium transition-colors block w-full text-left"
                >
                  Sobre Nosotros
                </Link>

                <Link 
                  to="/sucursales"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium transition-colors block w-full text-left"
                >
                  Sucursales
                </Link>

                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all"
                >
                  Contacto
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsContactModalOpen(false)}
            />
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="w-full max-w-lg bg-dark-800 rounded-2xl shadow-2xl border border-primary-900/30 p-6 sm:p-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Contacto</h2>
                    <button
                      onClick={() => setIsContactModalOpen(false)}
                      className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-400" />
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors">
                      <Phone className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                        <a href="tel:+5493416039872" className="text-gray-300 hover:text-primary-500 transition-colors break-all">
                          +54 9 3416 039872
                        </a>
                      </div>
                    </div>

                 

                    <div className="flex items-start space-x-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors">
                      <MapPin className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-white mb-1">Dirección</h3>
                        <p className="text-gray-300">
                          Padre Giacobe 1790, Rosario, Santa Fe<br />
                          Consulta por otras ubicaciones
                        </p>
                      </div>
                    </div>

                    <motion.a
                      href="https://wa.me/5493416039872"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all text-center shadow-lg"
                    >
                      Contactar por WhatsApp
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;