import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Sucursales = () => {
  const sucursales = [
    {
      id: 1,
      name: 'Punto de Venta Rosario',
      address: 'Padre Giacobe 1790, Rosario, Santa Fe',
      phone: '+54 9 3416 039872',
      schedule: 'Lunes a Viernes: 9:00 - 18:00 | Sábados: 9:00 - 13:00',
      coords: { lat: -32.9587, lng: -60.6393 },
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2!2d-60.6393!3d-32.9587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU3JzMxLjMiUyA2MMKwMzgnMjEuNSJX!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar',
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2!2d-60.6393!3d-32.9587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1e6f6d6f6f%3A0x1234567890abcdef!2sPadre%20Giacobe%201790%2C%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar'
    },
    {
      id: 2,
      name: 'Punto de Venta Tucumán - Aguilares',
      address: 'Sin punto de venta fisico, solo contacto vía WhatsApp',
      phone: '+54 9 3816 123456',
      schedule: 'Lunes a Viernes: 09:00 - 18:00 | Sábados: 09:00 - 13:00',
      coords: { lat: -27.4317, lng: -65.6165 },
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5!2d-65.6165!3d-27.4317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzU0LjEiUyA2NcKwMzYnNTkuNCJX!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar',
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57297.4!2d-65.6165!3d-27.4317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423ddb9c43a095b%3A0xb8b8b8b8b8b8b8b8!2sAguilares%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar'
    },
    {
      id: 3,
      name: 'Punto de Venta Salta - Orán',
      address: 'Sin punto de venta fisico, solo contacto vía WhatsApp',
      phone: '+54 9 3875 123456',
      schedule: 'Lunes a Viernes: 09:00 - 18:00 | Sábados: 09:00 - 13:00',
      coords: { lat: -23.1365, lng: -64.3239 },
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2!2d-64.3239!3d-23.1365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA4JzExLjQiUyA2NMKwMTknMjYuMCJX!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar',
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112889.8!2d-64.3239!3d-23.1365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9405e8c3b3c3c3c3%3A0x1234567890abcdef!2sOr%C3%A1n%2C%20Salta!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar'
    }
  ];

  return (
    <section id="sucursales" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Puntos de Venta
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Visítanos en cualquiera de nuestros puntos de venta. Estamos en Rosario, Tucumán y Salta.
          </p>
        </motion.div>

        {/* Sucursales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sucursales.map((sucursal, index) => (
            <motion.div
              key={sucursal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden hover:border-primary-600/50 transition-all group"
            >
              {/* Map Preview */}
              <div className="h-64 bg-dark-900 relative overflow-hidden">
                {/* Google Maps Iframe */}
                <iframe
                  src={sucursal.iframe}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Ver en Mapa button */}
                <motion.a
                  href={sucursal.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-4 right-4 px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2 font-semibold shadow-lg hover:bg-primary-700 transition-colors z-10"
                >
                  <Navigation className="w-4 h-4" />
                  Ver en Mapa
                </motion.a>
              </div>

              {/* Sucursal Info */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  {sucursal.name}
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-medium mb-1">Dirección</h4>
                      <p className="text-white">{sucursal.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-medium mb-1">Teléfono</h4>
                      <a 
                        href={`tel:${sucursal.phone}`}
                        className="text-white hover:text-primary-500 transition-colors"
                      >
                        {sucursal.phone}
                      </a>
                    </div>
                  </div>


                  {/* Schedule */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-medium mb-1">Horario</h4>
                      <p className="text-white">{sucursal.schedule}</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <motion.a
                  href={`https://wa.me/${sucursal.phone.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Contactar por WhatsApp
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary-900/20 to-dark-800 border border-primary-900/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            ¿Necesitas asesoramiento personalizado?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está disponible para ayudarte a elegir el equipamiento perfecto para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+5493816123456"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </motion.a>
            <motion.a
              href="https://wa.me/5493416039872"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
            >
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sucursales;