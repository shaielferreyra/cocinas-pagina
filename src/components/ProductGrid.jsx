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
          {products.slice(0, 4).map((product, index) => (
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
      id: 'cocina-4h',
      name: 'Cocina Semi-Industrial 4 Hornallas',
      description: 'Cocina semi-industrial con 4 hornallas. Estructura de hierro, rejas de fundición de aluminio con pirómetros medidor de temperatura, quemadores enlozados.',
      features: ['4 Hornallas', 'Pirómetro', 'Gas Envasado'],
      image: '/images/productos/cocinas/cocina-1.jpg',
      badge: 'DESTACADO'
    },
    {
      id: 'cocina-mini',
      name: 'Cocina Múltiple Mini',
      description: 'Cocina compacta multi-función. Estructura de hierro reforzada, rejas de fundición de aluminio, quemadores enlozados. Ideal para espacios reducidos.',
      features: ['Compacta', 'Multi-función', 'Alta Calidad'],
      image: '/images/productos/cocinas/cocina-2.jpg',
    },
    {
      id: 'cocina-grande',
      name: 'Cocina Múltiple Grande',
      description: 'Cocina semi-industrial de alto rendimiento. 6 hornallas con pirómetros, rejas de fundición de aluminio, estructura robusta de hierro.',
      features: ['6 Hornallas', 'Plancha Incluida', 'Profesional'],
      image: '/images/productos/cocinas/cocina-3.jpg',
      badge: 'NUEVO'
    },
    {
      id: 'cocina-freidora',
      name: 'Cocina con Freidora',
      description: 'Cocina semi-industrial con freidora incorporada. Estructura de hierro, rejas de fundición de aluminio, quemadores enlozados de alta durabilidad.',
      features: ['Freidora', '4 Hornallas', 'Versátil'],
      image: '/images/productos/cocinas/cocina-4.jpg',
      badge: 'OFERTA'
    },
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
      id: 'aire-3000',
      name: 'Aire Acondicionado 3000 Frigorías',
      description: 'Equipo split de 3000 frigorías con kit de instalación incluido. Ideal para ambientes de hasta 30m². Frío/Calor.',
      features: ['3000 Fg', 'Kit Instalación', 'Frío/Calor'],
      image: '/images/productos/frio/aire-1.jpg',
      badge: 'DESTACADO'
    },
    {
      id: 'aire-4500',
      name: 'Aire Acondicionado 4500 Frigorías',
      description: 'Equipo split de 4500 frigorías con kit de instalación completo incluido. Perfecto para ambientes medianos de hasta 45m². Frío/Calor.',
      features: ['4500 Fg', 'Kit Instalación', 'Eficiente'],
      image: '/images/productos/frio/aire-2.jpg',
    },
    {
      id: 'aire-6000',
      name: 'Aire Acondicionado 6000 Frigorías',
      description: 'Equipo split de 6000 frigorías con kit de instalación incluido. Ideal para ambientes grandes de hasta 60m². Máxima potencia.',
      features: ['6000 Fg', 'Kit Instalación', 'Alta Potencia'],
      image: '/images/productos/frio/aire-3.jpg',
      badge: 'NUEVO'
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