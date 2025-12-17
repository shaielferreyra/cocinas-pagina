import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const handleCategoryClick = (link) => {
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

  const quickLinks = [
    { name: 'Inicio', link: '/', type: 'route' },
    { name: 'Cocinas Industriales', link: '/s', type: 'scroll' },
    { name: 'Equipos de Frío', link: '/', type: 'scroll' },
    { name: 'Sobre Nosotros', link: '/sobre-nosotros', type: 'route' }
  ];

  const categories = [
    { name: 'Cocinas Semi-Industriales', link: '/', type: 'scroll' },
    { name: 'Heladeras', link: '/', type: 'scroll' },
    { name: 'Aires Acondicionados', link: '/#aires', type: 'scroll' },
    { name: 'Sucursales', link: '/sucursales', type: 'route' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-display font-black">
                <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-transparent bg-clip-text">
                  CÉSAR
                </span>
                <span className="text-white ml-2">COCINA</span>
              </h3>
            </div>
            
            <p className="text-gray-400 mb-6 italic text-lg">
            "¿Que pasa que no vendo?"
            </p>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              Más de 5 años siendo el socio confiable en equipamiento gastronómico industrial. 
              Calidad, servicio y compromiso en cada proyecto.
            </p>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-600 hover:bg-primary-600/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Accesos Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.type === 'route' ? (
                    <Link
                      to={link.link}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleCategoryClick(link.link)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Categorías
            </h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  {category.type === 'route' ? (
                    <Link
                      to={category.link}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                      {category.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleCategoryClick(category.link)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                      {category.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+5493816123456"
                  className="text-gray-400 hover:text-white transition-colors flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Teléfono</div>
                    <div>+54 9 3416 039872</div>
                  </div>
                </a>
              </li>
              <li>
              </li>
              <li>
                <div className="text-gray-400 flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Dirección</div>
                    <div>Padre Giacobe 1790, Rosario, Santa Fe<br />Consulta por otras ubicaciones</div>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} César Cocina. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-primary-500 fill-current animate-pulse" />
              <span>en Argentina</span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <button className="text-gray-500 hover:text-white transition-colors">
                Política de Privacidad
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent"></div>
    </footer>
  );
};

export default Footer;