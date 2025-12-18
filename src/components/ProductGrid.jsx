import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Flame, Snowflake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ category, title, icon: Icon, products }) => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id={category} className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary-600"></div>
            <Icon className="w-10 h-10 text-primary-600 mx-4" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Equipamiento profesional de la más alta calidad para tu negocio
          </p>
        </motion.div>

        {/* Category Filter - Placeholder for future filtering */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex bg-dark-800 border border-primary-900/30 rounded-lg p-1">
            <button className="px-6 py-2 bg-primary-600 text-white rounded-md font-medium transition-all">
              Todos
            </button>
            <button className="px-6 py-2 text-gray-400 hover:text-white rounded-md font-medium transition-all">
              Destacados
            </button>
            <button className="px-6 py-2 text-gray-400 hover:text-white rounded-md font-medium transition-all">
              Nuevos
            </button>
          </div>
        </motion.div>

        {/* Products Grid - 2x2 Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-600/50 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-72 bg-dark-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
                
                {/* Product Image or Placeholder */}
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
                    <Icon className="w-24 h-24 text-primary-600/20" />
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/80 transition-all duration-300 z-20 flex items-center justify-center">
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    onClick={() => navigate(`/producto/${product.id}`)}
                    className="opacity-0 group-hover:opacity-100 px-6 py-3 bg-white text-dark-900 font-bold rounded-lg flex items-center gap-2 shadow-xl transform transition-all"
                  >
                    <Eye className="w-5 h-5" />
                    Ver Más
                  </motion.button>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-lg shadow-lg z-30">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features?.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-900 text-gray-300 text-xs rounded-full border border-dark-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`/producto/${product.id}`)}
                  className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-900/30"
                >
                  Ver Detalles
                </motion.button>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-600/10 to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Component for different product categories
export const CocinasIndustriales = () => {
  const products = [
    {
      id: 'cocina-2h',
      name: 'Cocina 2 Hornallas',
      description: 'Cocina compacta ideal para espacios reducidos. Perfecta para departamentos, food trucks o negocios gastronómicos pequeños. 2 hornallas de alto rendimiento y horno.',
      features: ['2 Hornallas', 'Horno 35L', 'Compacta'],
      image: '/images/cocina2hornallas.jpeg',
      badge: 'DESTACADO'
    },
    {
      id: 'cocina-multiple-mini',
      name: 'Cocina Múltiple Mini',
      description: 'Cocina multifuncional compacta que maximiza el espacio. Combina 2 hornallas, plancha, tostadora y horno. Perfecta para food trucks y espacios limitados.',
      features: ['2 Hornallas', 'Plancha', 'Tostadora', 'Horno'],
      image: '/images/cocina-multiple-mini.jpeg',
    },
    {
      id: 'cocina-multifuncion',
      name: 'Cocina Multifunción mini',
      description: 'La cocina más completa. 2 hornallas, plancha, tostadora, freidora integrada y horno de gran capacidad. Para negocios gastronómicos exigentes.',
      features: ['2 Hornallas', 'Freidora 8L', 'Plancha', 'Horno'],
      image: '/images/cocina_multifuncion_mini.jpeg',
      badge: 'NUEVO'
    },
    {
      id: 'cocina-multifuncion-grande',
      name: 'Cocina Multifunción ',
      description: 'La cocina más completa. 4 hornallas, plancha, tostadora, freidora integrada y horno de gran capacidad. Para negocios gastronómicos exigentes.',
      features: ['4 Hornallas', 'Freidora 8L', 'Plancha','Horno'],
      image: '/images/cocina-multifuncion.jpeg',
      badge: 'NUEVO'
    },
    {
      id: 'cocina-4h',
      name: 'Cocina 4 Hornallas',
      description: 'Cocina profesional clásica con 4 hornallas potentes y horno de gran capacidad. Ideal para restaurantes, hoteles y comedores industriales.',
      features: ['4 Hornallas', 'Horno 50L', 'Profesional'],
      image: '/images/cocina4hornallas.jpeg',
    },
    {
      id: 'cocina-multiple-grande',
      name: 'Cocina Múltiple Grande',
      description: 'Cocina industrial de máxima capacidad. 6 hornallas potentes, plancha profesional, tostadora y horno de gran volumen. Para alto volumen de producción.',
      features: ['6 Hornallas', 'Plancha 50cm', 'Industrial', 'Horno'],
      image: '/images/cocinamultiplegrande.jpeg',
      badge: 'PREMIUM'
    }
  ];

  return (
    <ProductGrid
      category="cocinas-industriales"
      title="Cocinas Semi-Industriales"
      icon={Flame}
      products={products}
    />
  );
};

export const EquiposFrio = () => {
  const products = [
    {
      id: 'hisense-3000',
      name: 'Hisense 3000 fg',
      description: 'Aire acondicionado Split Hisense 3000 frigorías con tecnología Inverter. Eficiencia clase A, bajo consumo. Ideal para hasta 25m².',
      features: ['3000 Fg', 'Inverter', 'Hasta 25m²'],
      image: '/images/aire3000fg.jpeg',
      badge: 'DESTACADO'
    },
    {
      id: 'meling-4500',
      name: 'Meling 4500 fg',
      description: 'Aire acondicionado Split Meling 4500 frigorías con Inverter Plus. Incluye WiFi, control por app y modo turbo. Cobertura hasta 40m².',
      features: ['4500 Fg', 'WiFi', 'Hasta 40m²'],
      image: '/images/aire4500fg.jpeg',
    },
    {
      id: 'meling-6000',
      name: 'Meling 6000 fg',
      description: 'Aire acondicionado Split Meling 6000 frigorías, el más potente. Inverter Premium con control por voz. Ambientes hasta 60m².',
      features: ['6000 Fg', 'Control Voz', 'Hasta 60m²'],
      image: '/images/aire6000fg.jpeg',
      badge: 'PREMIUM'
    },
  ];

  return (
    <ProductGrid
      category="aires-acondicionados"
      title="Aires Acondicionados"
      icon={Snowflake}
      products={products}
    />
  );
};

export default ProductGrid;