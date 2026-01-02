import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Check, Flame, Zap, Shield } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Base de datos completa de productos ACTUALIZADOS
  const productsData = {
    // ==================== COCINAS ====================
    'cocina-2h': {
      id: 'cocina-2h',
      name: 'Cocina 2 Hornallas',
      category: 'Cocinas Semi-Industriales',
      description: 'Cocina compacta ideal para espacios reducidos. Perfecta para departamentos, food trucks o negocios gastronómicos pequeños. Incluye 2 hornallas de alto rendimiento y horno con termostato regulable.',
      images: [
        '/images/cocina2hornallas.jpeg',
        '/images/cocina2hornallas.jpeg',
        '/images/cocina2hornallas.jpeg',
        '/images/cocina2hornallas.jpeg',
      ],
      specifications: [
        { label: 'Dimensiones', value: '60cm x 85cm x 60cm' },
        { label: 'Material', value: 'Acero inoxidable 430' },
        { label: 'Hornallas', value: '2 quemadores semi-industriales' },
        { label: 'Horno', value: 'Capacidad 35 litros con termostato' },
        { label: 'Tipo de Gas', value: 'Natural o envasado (adaptable)' },
        { label: 'Encendido', value: 'Piezoeléctrico' },
        { label: 'Garantía', value: '6 meses' },
        { label: 'Origen', value: '100% Argentino' },
      ],
      features: [
        '2 quemadores de alta potencia',
        'Horno con visor de vidrio templado',
        'Perillas cromadas anti-calor',
        'Base reforzada con patas regulables',
        'Estructura en acero inoxidable',
        'Ideal para espacios compactos'
      ]
    },
    'cocina-multiple-mini': {
      id: 'cocina-multiple-mini',
      name: 'Cocina Múltiple Mini',
      category: 'Cocinas Semi-Industriales',
      description: 'Cocina multifuncional compacta que maximiza el espacio. Combina 2 hornallas, plancha, tostadora y horno en un diseño inteligente. Perfecta para food trucks, stands gastronómicos o cocinas con espacio limitado.',
      images: [
        '/images/cocina-multiple-mini.jpeg',
        '/images/cocina-multiple-mini.jpeg',
        '/images/cocina-multiple-mini.jpeg',
        '/images/cocina-multiple-mini.jpeg',
      ],
      specifications: [
        { label: 'Dimensiones', value: '70cm x 85cm x 60cm' },
        { label: 'Material', value: 'Acero inoxidable 430' },
        { label: 'Hornallas', value: '2 quemadores industriales' },
        { label: 'Plancha', value: '30cm x 30cm anti-adherente' },
        { label: 'Tostadora', value: 'Parrilla superior rebatible' },
        { label: 'Horno', value: '40 litros con termostato' },
        { label: 'Garantía', value: '6 meses' },
        { label: 'Origen', value: '100% Argentino' },
      ],
      features: [
        'Diseño multifuncional 4 en 1',
        'Plancha de acero cromado',
        'Tostadora con parrilla rebatible',
        'Horno espacioso de 40 litros',
        'Quemadores de alto rendimiento',
        'Máxima eficiencia en espacio reducido'
      ]
    },
    'cocina-multifuncion': {
      id: 'cocina-multifuncion-grande',
      name: 'Cocina Multifunción',
      category: 'Cocinas Semi-Industriales',
      description: 'La cocina más completa de nuestra línea. Equipada con 4 hornallas, plancha, tostadora, freidora integrada y horno de gran capacidad. Diseñada para negocios gastronómicos exigentes que requieren máxima versatilidad y producción.',
      images: [
        '/images/cocina_multifuncion_mini.jpeg',
        '/images/cocina-multifuncion.jpeg',
        '/images/cocina_multifuncion_mini.jpeg',
        '/images/cocina-multifuncion.jpeg',
      ],
      specifications: [
        { label: 'Dimensiones', value: '100cm x 90cm x 65cm' },
        { label: 'Material', value: 'Acero inoxidable 304' },
        { label: 'Hornallas', value: '4 quemadores industriales' },
        { label: 'Plancha', value: '40cm x 35cm anti-adherente' },
        { label: 'Freidora', value: '8 litros con termostato' },
        { label: 'Horno', value: '60 litros con convección' },
        { label: 'Garantía', value: '6 meses' },
        { label: 'Origen', value: '100% Argentino' },
      ],
      features: [
        '6 funciones en un solo equipo',
        'Freidora con sistema de filtrado',
        'Plancha de gran superficie',
        '4 hornallas de máxima potencia',
        'Horno con sistema de convección',
        'Ideal para restaurantes y fast food'
      ]
    },
    'cocina-4h': {
      id: 'cocina-4h',
      name: 'Cocina 4 Hornallas',
      category: 'Cocinas Semi-Industriales',
      description: 'Cocina clásica con 4 hornallas potentes y horno de gran capacidad. El equilibrio perfecto entre funcionalidad y espacio. Ideal para restaurantes, hoteles y comedores industriales que priorizan la cocción tradicional.',
      images: [
        '/images/cocina4hornallas.jpeg',
        '/images/cocina4hornallas2.jpeg',
        '/images/cocina4hornallas.jpeg',
        '/images/cocina4hornallas2.jpeg',
      ],
      specifications: [
        { label: 'Dimensiones', value: '85cm x 85cm x 60cm' },
        { label: 'Material', value: 'Acero inoxidable 430' },
        { label: 'Hornallas', value: '4 quemadores industriales' },
        { label: 'Potencia', value: '3500W por quemador' },
        { label: 'Horno', value: '50 litros con termostato' },
        { label: 'Tipo de Gas', value: 'Natural o envasado' },
        { label: 'Garantía', value: '6 meses' },
        { label: 'Origen', value: '100% Argentino' },
      ],
      features: [
        '4 quemadores de alto rendimiento',
        'Horno con puerta reforzada',
        'Parrillas de hierro fundido',
        'Sistema de seguridad por termopar',
        'Bandeja recolectora extraíble',
        'Diseño robusto para uso intensivo'
      ]
    },
    'cocina-multiple-grande': {
      id: 'cocina-multiple-grande',
      name: 'Cocina Múltiple Grande',
      category: 'Cocinas Semi-Industriales',
      description: 'Cocina semi-industrial de máxima capacidad. Combina 6 hornallas potentes, plancha profesional, tostadora y horno de gran volumen. La solución definitiva para restaurantes de alto volumen, hoteles y catering profesional.',
      images: [
        '/images/cocinamultiplegrande.jpeg',
        '/images/cocinamultiplegrande2.jpeg',
        '/images/cocinamultiplegrande.jpeg',
        '/images/cocinamultiplegrande2.jpeg',
      ],
      specifications: [
        { label: 'Dimensiones', value: '120cm x 95cm x 70cm' },
        { label: 'Material', value: 'Acero inoxidable 304 reforzado' },
        { label: 'Hornallas', value: '6 quemadores industriales' },
        { label: 'Plancha', value: '50cm x 40cm profesional' },
        { label: 'Tostadora', value: 'Parrilla doble superior' },
        { label: 'Horno', value: '80 litros con termómetro' },
        { label: 'Garantía', value: '6 meses' },
        { label: 'Origen', value: '100% Argentino' },
      ],
      features: [
        '6 hornallas de máxima potencia',
        'Plancha profesional de gran superficie',
        'Horno de 80 litros con termómetro',
        'Estructura reforzada extra resistente',
        'Quemadores con doble corona',
        'Diseñada para producción intensiva'
      ]
    },

    // ==================== AIRES ACONDICIONADOS ====================
    'hisense-3000': {
      id: 'hisense-3000',
      name: 'Hisense 3000 fg',
      category: 'Aires Acondicionados',
      description: 'Aire acondicionado Split Hisense de 3000 frigorías con tecnología Inverter. Eficiencia energética clase A, bajo consumo y funcionamiento silencioso. Ideal para ambientes de hasta 25m². Incluye control remoto, modo sleep y filtro lavable.',
      images: [
        '/images/aire3000fg.jpeg',
        '/images/aire3000fg1.jpeg',
        '/images/aire3000fg2.jpeg',
        '/images/aire3000fg.jpeg',
      ],
      specifications: [
        { label: 'Capacidad', value: '3000 frigorías (2600W)' },
        { label: 'Tecnología', value: 'Inverter' },
        { label: 'Voltaje', value: '220V 50Hz' },
        { label: 'Eficiencia', value: 'Clase A' },
        { label: 'Área Cubierta', value: 'Hasta 25m²' },
        { label: 'Funciones', value: 'Frío / Calor' },
        { label: 'Garantía', value: '6 meses' },
        { label: 'Gas Refrigerante', value: 'R410A ecológico' },
      ],
      features: [
        'Tecnología Inverter ahorro energético',
        'Modo Sleep programable',
        'Filtro lavable purificador',
        'Control remoto inteligente',
        'Función deshumidificador',
        'Bajo nivel de ruido (32dB)'
      ]
    },
    'meling-4500': {
      id: 'meling-4500',
      name: 'Meling 4500 fg',
      category: 'Aires Acondicionados',
      description: 'Aire acondicionado Split Meling de 4500 frigorías con tecnología Inverter de última generación. Eficiencia energética superior, cobertura para ambientes medianos hasta 40m². Incluye WiFi integrado, control por app y modo turbo cooling.',
      images: [
        '/images/aire4500fg.jpeg',
        '/images/aire4500fg.jpeg',
        '/images/aire4500fg.jpeg',
        '/images/aire4500fg.jpeg',
      ],
      specifications: [
        { label: 'Capacidad', value: '4500 frigorías (3900W)' },
        { label: 'Tecnología', value: 'Inverter Plus' },
        { label: 'Voltaje', value: '220V 50Hz' },
        { label: 'Eficiencia', value: 'Clase A+' },
        { label: 'Área Cubierta', value: 'Hasta 40m²' },
        { label: 'Conectividad', value: 'WiFi + Control remoto' },
        { label: 'Garantía', value: '6 meses' },
        { label: 'Gas Refrigerante', value: 'R32 ecológico' },
      ],
      features: [
        'Control WiFi por smartphone',
        'Modo Turbo para enfriamiento rápido',
        'Deshumidificador de 2 litros/hora',
        'Ventilador 3 velocidades',
        'Display LED temperatura',
        'Sistema de auto-limpieza'
      ]
    },
    'meling-6000': {
      id: 'meling-6000',
      name: 'Meling 6000 fg',
      category: 'Aires Acondicionados',
      description: 'Aire acondicionado Split Meling de 6000 frigorías, el más potente de nuestra línea. Tecnología Inverter Premium con WiFi dual band. Diseñado para ambientes grandes hasta 60m². Incluye todas las funciones smart: control por voz, modo ECO y filtro HEPA.',
      images: [
        '/images/aire6000fg.jpeg',
        '/images/aire6000fg.jpeg',
        '/images/aire6000fg.jpeg',
        '/images/aire6000fg.jpeg',
      ],
      specifications: [
        { label: 'Capacidad', value: '6000 frigorías (5200W)' },
        { label: 'Tecnología', value: 'Inverter Premium' },
        { label: 'Voltaje', value: '220V 50Hz' },
        { label: 'Eficiencia', value: 'Clase A++' },
        { label: 'Área Cubierta', value: 'Hasta 60m²' },
        { label: 'Conectividad', value: 'WiFi Dual + Alexa/Google' },
        { label: 'Garantía', value: '6 meses' },
        { label: 'Gas Refrigerante', value: 'R32 última generación' },
      ],
      features: [
        'Control por voz (Alexa/Google Home)',
        'Filtro HEPA purificador de aire',
        'Modo ECO inteligente',
        'Pantalla digital LED',
        'Función auto-limpieza Premium',
        'Cobertura para ambientes grandes'
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
      '/images/cocina2hornallas.jpeg',
      '/images/cocina2hornallas.jpeg',
      '/images/cocina2hornallas.jpeg',
      '/images/cocina2hornallas.jpeg',
    ],
    specifications: [],
    features: []
  };

  const handleWhatsAppClick = () => {
    const phone = '5493416039872'; // Número real de César Cocinas
    const message = encodeURIComponent(`Hola! Me interesa el producto: ${product.name}`);
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
                <p className="text-sm text-gray-400">Garantía</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">100% Argentino</p>
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