import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Check, Flame, Zap, Shield } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Base de datos completa de productos
  const productsData = {
    // COCINAS
    'cocina-4h': {
      id: 'cocina-4h',
      name: 'Cocina Semi-Industrial 4 Hornallas',
      category: 'Cocinas Semi-Industriales',
      description: 'Cocina semi-industrial de alta calidad con 4 hornallas. Estructura de hierro reforzada, rejas de fundición de aluminio con pirómetros medidor de temperatura integrados, y quemadores enlozados de larga duración. Diseñada para funcionar con gas envasado.',
      images: [
        '/images/productos/cocinas/cocina-1.jpg',
        '/images/productos/cocinas/cocina-1.jpg',
        '/images/productos/cocinas/cocina-1.jpg',
        '/images/productos/cocinas/cocina-1.jpg',
      ],
      specifications: [
        { label: 'Dimensiones', value: '55 x 55 x 85 cm' },
        { label: 'Material Estructura', value: 'Hierro Reforzado' },
        { label: 'Rejas', value: 'Fundición de Aluminio' },
        { label: 'Hornallas', value: '4 Quemadores Enlozados' },
        { label: 'Pirómetro', value: 'Medidor de Temperatura' },
        { label: 'Tipo de Gas', value: 'Gas Envasado' },
        { label: 'Garantía', value: '1 año' },
        { label: 'Instalación', value: 'Consultar' },
      ],
      features: [
        'Estructura de hierro reforzada',
        'Rejas de fundición de aluminio',
        'Pirómetros medidor de temperatura',
        'Quemadores enlozados durables',
        'Para gas envasado',
        'Medida estándar 55x55x85cm'
      ]
    },
    'cocina-mini': {
      id: 'cocina-mini',
      name: 'Cocina Múltiple Mini',
      category: 'Cocinas Semi-Industriales',
      description: 'Cocina compacta multi-función ideal para espacios reducidos. Estructura de hierro reforzada, rejas de fundición de aluminio, quemadores enlozados. Perfecta para food trucks y negocios pequeños.',
      images: [
        '/images/productos/cocinas/cocina-2.jpg',
        '/images/productos/cocinas/cocina-2.jpg',
        '/images/productos/cocinas/cocina-2.jpg',
        '/images/productos/cocinas/cocina-2.jpg',
      ],
      specifications: [
        { label: 'Tipo', value: 'Compacta Multi-función' },
        { label: 'Material Estructura', value: 'Hierro Reforzado' },
        { label: 'Rejas', value: 'Fundición de Aluminio' },
        { label: 'Quemadores', value: 'Enlozados Alta Calidad' },
        { label: 'Tipo de Gas', value: 'Gas Envasado' },
        { label: 'Ideal para', value: 'Food Trucks' },
        { label: 'Garantía', value: '1 año' },
        { label: 'Instalación', value: 'Consultar' },
      ],
      features: [
        'Diseño compacto',
        'Multi-función versátil',
        'Estructura reforzada',
        'Quemadores enlozados',
        'Fácil transporte',
        'Para espacios reducidos'
      ]
    },
    'cocina-grande': {
      id: 'cocina-grande',
      name: 'Cocina Múltiple Grande',
      category: 'Cocinas Semi-Industriales',
      description: 'Cocina semi-industrial de alto rendimiento con 6 hornallas y plancha integrada. Estructura robusta de hierro, rejas de fundición de aluminio, pirómetros para control preciso de temperatura.',
      images: [
        '/images/productos/cocinas/cocina-3.jpg',
        '/images/productos/cocinas/cocina-3.jpg',
        '/images/productos/cocinas/cocina-3.jpg',
        '/images/productos/cocinas/cocina-3.jpg',
      ],
      specifications: [
        { label: 'Hornallas', value: '6 Quemadores' },
        { label: 'Plancha', value: 'Incluida' },
        { label: 'Material Estructura', value: 'Hierro Reforzado' },
        { label: 'Rejas', value: 'Fundición de Aluminio' },
        { label: 'Pirómetro', value: 'Sí, integrado' },
        { label: 'Tipo de Gas', value: 'Gas Envasado' },
        { label: 'Garantía', value: '1 año' },
        { label: 'Uso', value: 'Profesional' },
      ],
      features: [
        '6 hornallas de alto rendimiento',
        'Plancha integrada',
        'Pirómetros de temperatura',
        'Estructura robusta',
        'Ideal para restaurantes',
        'Uso intensivo profesional'
      ]
    },
    'cocina-freidora': {
      id: 'cocina-freidora',
      name: 'Cocina con Freidora',
      category: 'Cocinas Semi-Industriales',
      description: 'Cocina semi-industrial versátil con freidora incorporada. Estructura de hierro, rejas de fundición de aluminio, 4 hornallas más freidora lateral. Ideal para negocios gastronómicos.',
      images: [
        '/images/productos/cocinas/cocina-4.jpg',
        '/images/productos/cocinas/cocina-4.jpg',
        '/images/productos/cocinas/cocina-4.jpg',
        '/images/productos/cocinas/cocina-4.jpg',
      ],
      specifications: [
        { label: 'Hornallas', value: '4 Quemadores' },
        { label: 'Freidora', value: 'Incorporada' },
        { label: 'Material Estructura', value: 'Hierro' },
        { label: 'Rejas', value: 'Fundición de Aluminio' },
        { label: 'Quemadores', value: 'Enlozados' },
        { label: 'Tipo de Gas', value: 'Gas Envasado' },
        { label: 'Garantía', value: '1 año' },
        { label: 'Ideal para', value: 'Gastronomía' },
      ],
      features: [
        'Freidora incorporada',
        '4 hornallas enlozadas',
        'Estructura de hierro',
        'Rejas de aluminio',
        'Versátil y práctica',
        'Para negocios gastronómicos'
      ]
    },
    // AIRES ACONDICIONADOS
    'aire-3000': {
      id: 'aire-3000',
      name: 'Aire Acondicionado 3000 Frigorías',
      category: 'Aires Acondicionados',
      description: 'Equipo split de 3000 frigorías con kit de instalación completo incluido. Marca Hisense, frío/calor, ideal para ambientes de hasta 30m². Alta eficiencia energética.',
      images: [
        '/images/productos/frio/aire-1.jpg',
        '/images/productos/frio/aire-1.jpg',
        '/images/productos/frio/aire-1.jpg',
        '/images/productos/frio/aire-1.jpg',
      ],
      specifications: [
        { label: 'Capacidad', value: '3000 Frigorías' },
        { label: 'Marca', value: 'Hisense' },
        { label: 'Tipo', value: 'Split Frío/Calor' },
        { label: 'Kit Instalación', value: 'Incluido' },
        { label: 'Cobertura', value: 'Hasta 30m²' },
        { label: 'Eficiencia', value: 'Clase A' },
        { label: 'Garantía', value: '2 años' },
        { label: 'Instalación', value: 'Incluida' },
      ],
      features: [
        'Kit de instalación completo',
        'Frío y Calor',
        'Alta eficiencia energética',
        'Bajo consumo',
        'Control remoto',
        'Instalación profesional incluida'
      ]
    },
    'aire-4500': {
      id: 'aire-4500',
      name: 'Aire Acondicionado 4500 Frigorías',
      category: 'Aires Acondicionados',
      description: 'Equipo split de 4500 frigorías con kit de instalación completo. Marca Meling, frío/calor, perfecto para ambientes medianos de hasta 45m². Eficiente y silencioso.',
      images: [
        '/images/productos/frio/aire-2.jpg',
        '/images/productos/frio/aire-2.jpg',
        '/images/productos/frio/aire-2.jpg',
        '/images/productos/frio/aire-2.jpg',
      ],
      specifications: [
        { label: 'Capacidad', value: '4500 Frigorías' },
        { label: 'Marca', value: 'Meling' },
        { label: 'Tipo', value: 'Split Frío/Calor' },
        { label: 'Kit Instalación', value: 'Incluido' },
        { label: 'Cobertura', value: 'Hasta 45m²' },
        { label: 'Eficiencia', value: 'Clase A+' },
        { label: 'Garantía', value: '2 años' },
        { label: 'Ruido', value: 'Bajo nivel' },
      ],
      features: [
        'Kit de instalación incluido',
        'Potencia para ambientes medianos',
        'Funcionamiento silencioso',
        'Frío y Calor',
        'Eficiencia energética',
        'Garantía 2 años'
      ]
    },
    'aire-6000': {
      id: 'aire-6000',
      name: 'Aire Acondicionado 6000 Frigorías',
      category: 'Aires Acondicionados',
      description: 'Equipo split de 6000 frigorías con kit de instalación incluido. Marca Meling, frío/calor, ideal para ambientes grandes de hasta 60m². Máxima potencia y rendimiento.',
      images: [
        '/images/productos/frio/aire-3.jpg',
        '/images/productos/frio/aire-3.jpg',
        '/images/productos/frio/aire-3.jpg',
        '/images/productos/frio/aire-3.jpg',
      ],
      specifications: [
        { label: 'Capacidad', value: '6000 Frigorías' },
        { label: 'Marca', value: 'Meling' },
        { label: 'Tipo', value: 'Split Frío/Calor' },
        { label: 'Kit Instalación', value: 'Incluido' },
        { label: 'Cobertura', value: 'Hasta 60m²' },
        { label: 'Eficiencia', value: 'Clase A++' },
        { label: 'Garantía', value: '2 años' },
        { label: 'Potencia', value: 'Alta' },
      ],
      features: [
        'Máxima potencia 6000 fg',
        'Kit de instalación completo',
        'Para ambientes grandes',
        'Alta eficiencia A++',
        'Frío y Calor',
        'Garantía extendida'
      ]
    },
  };

  // Obtener producto según ID
  const product = productsData[id] || {
    id: 'not-found',
    name: 'Producto no encontrado',
    category: '',
    description: 'El producto que buscas no existe.',
    images: [
      '/images/productos/cocinas/cocina-1.jpg',
      '/images/productos/cocinas/cocina-1.jpg',
      '/images/productos/cocinas/cocina-1.jpg',
      '/images/productos/cocinas/cocina-1.jpg',
    ],
    specifications: [],
    features: []
  };

  const handleWhatsAppClick = () => {
    const phone = '5493416039872'; 
    const message = encodeURIComponent(`Hola Cesar Cocinas! Me interesa mas informacion sobre el producto: ${product.name}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver a productos
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback icon si no carga la imagen */}
              <div className="absolute inset-0 hidden items-center justify-center bg-dark-800">
                <Flame className="w-32 h-32 text-primary-600/20" />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary-600 scale-105'
                      : 'border-dark-700 hover:border-primary-600/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback icon para thumbnails */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-dark-800">
                    <Flame className="w-8 h-8 text-primary-600/20" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Category */}
            <div className="inline-block px-4 py-2 bg-primary-600/10 border border-primary-600/30 rounded-lg">
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Features Highlights */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-dark-700">
              <div className="text-center">
                <Flame className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Alta Potencia</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Garantía 6 meses</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Instalación</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppClick}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-900/50 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Consultar por WhatsApp
            </motion.button>

            {/* Features List */}
            <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Características Principales
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-dark-800 rounded-2xl p-8 border border-dark-700"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-8">
            Especificaciones Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.specifications.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b border-dark-700 last:border-0"
              >
                <span className="text-gray-400 font-medium">{spec.label}</span>
                <span className="text-white font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;