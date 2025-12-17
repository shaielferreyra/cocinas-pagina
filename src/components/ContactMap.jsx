import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const ContactMap = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Visítanos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos listos para asesorarte. Visita nuestras sucursales o contáctanos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-900 rounded-2xl overflow-hidden border border-dark-700 h-[400px] lg:h-[500px]"
          >
            {/* Google Maps Iframe - Rosario */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2!2d-60.6393!3d-32.9587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1e6f6d6f6f%3A0x1234567890abcdef!2sPadre%20Giacobe%201790%2C%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de César Cocinas - Rosario"
            ></iframe>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Punto de Venta Principal Card */}
            <div className="bg-dark-900 rounded-2xl p-6 border border-dark-700 hover:border-primary-600/50 transition-all">
              <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary-500" />
                Punto de Venta Rosario
              </h3>

              <div className="space-y-4">
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium mb-1">Dirección</h4>
                    <p className="text-white">Padre Giacobe 1790<br />Rosario, Santa Fe</p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium mb-1">Teléfono</h4>
                    <a 
                      href="tel:3416039872"
                      className="text-white hover:text-primary-500 transition-colors"
                    >
                      +54 9 3816 123456
                    </a>
                  </div>
                </div>
                {/* Horario */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium mb-1">Horario</h4>
                    <p className="text-white">
                      Lunes a Viernes: 09:00 - 18:00<br />
                      Sábados: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <motion.a
                  href="https://wa.me/5493416039872"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all text-center text-sm shadow-lg"
                >
                  WhatsApp
                </motion.a>
                <motion.a
                  href="https://www.google.com/maps/place/Padre+Giacobe+1790,+Rosario,+Santa+Fe"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all text-center text-sm flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo Llegar
                </motion.a>
              </div>
            </div>

            {/* CTA Ver todos los puntos de venta */}
            <Link to="/#sucursales">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-primary-900/20 to-dark-900 border border-primary-900/30 rounded-2xl p-6 cursor-pointer hover:border-primary-600/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-display font-bold text-lg mb-2">
                      ¿Buscas otro punto de venta?
                    </h4>
                    <p className="text-gray-400 text-sm">
                      También estamos en Tucumán y Salta. Ver todas las ubicaciones
                    </p>
                  </div>
                  <Navigation className="w-8 h-8 text-primary-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Stats rápidos */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-dark-900 rounded-xl p-4 border border-dark-700 text-center"
              >
                <div className="text-3xl font-display font-bold text-primary-500 mb-1">
                  5+
                </div>
                <div className="text-gray-400 text-sm">Años</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-dark-900 rounded-xl p-4 border border-dark-700 text-center"
              >
                <div className="text-3xl font-display font-bold text-primary-500 mb-1">
                  4,250+
                </div>
                <div className="text-gray-400 text-sm">Ventas</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;