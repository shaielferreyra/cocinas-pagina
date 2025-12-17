import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';

const AboutUs = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Fundación',
      description: 'César Cocinas inicia operaciones, dedicándose a la fabricación y comercialización de equipamiento gastronómico de alta calidad 100% argentino.',
      icon: Heart
    },
    {
      year: '2021',
      title: 'Consolidación',
      description: 'Establecemos nuestros canales de venta mayorista y minorista, comenzando a abastecer mueblerías, bazares y distribuidores.',
      icon: TrendingUp
    },
    {
      year: '2023',
      title: 'Expansión Nacional',
      description: 'Abrimos puntos de venta en Rosario, Tucumán y Salta. Nuestra red de distribución crece por todo el país.',
      icon: Users
    },
    {
      year: '2025',
      title: 'Líderes en Cocinas Semi-Industriales',
      description: 'Superamos las 4,250 ventas exitosas, consolidándonos como referente confiable en equipamiento gastronómico argentino.',
      icon: Award
    }
  ];

  const stats = [
    { number: '5+', label: 'Años de Experiencia' },
    { number: '4,250+', label: 'Ventas Exitosas' },
    { number: '100%', label: 'Argentino' },
    { number: '3', label: 'Puntos de Venta' }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Sobre César Cocinas
          </h2>
          <div className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              César Cocinas es una empresa <strong className="text-primary-500">orgullosamente 100% argentina</strong>, dedicada desde hace <strong className="text-primary-500">5 años</strong> a la fabricación y comercialización de equipamiento gastronómico de alta calidad.
            </p>
            <p>
              Nos especializamos en <strong className="text-white">cocinas semi-industriales</strong>, diseñadas para brindar la potencia de un equipo profesional con la estética y funcionalidad adaptable al hogar o emprendimientos gastronómicos.
            </p>
            <p>
              Nuestra propuesta de valor une la <strong className="text-white">robustez de la industria nacional</strong> con un diseño moderno y duradero. Gracias a la confianza de nuestros clientes, hemos concretado más de <strong className="text-primary-500">4,250 ventas exitosas</strong>, consolidándonos como un referente confiable en el sector.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 border border-primary-900/30 rounded-xl p-6 text-center hover:border-primary-600/50 transition-all"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 via-primary-700 to-primary-600 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-primary-600/50 transition-all shadow-xl"
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                        <IconComponent className="w-6 h-6 text-primary-500" />
                        <span className="text-3xl font-display font-bold text-primary-500">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-dark-900 border-4 border-primary-600 rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Canales de Venta */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">
            Nuestros Canales de Venta
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Venta Mayorista */}
            <div className="bg-gradient-to-br from-primary-900/20 to-dark-800 border border-primary-900/30 rounded-2xl p-8 hover:border-primary-600/50 transition-all">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                Venta Mayorista
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Abastecemos a <strong className="text-white">mueblerías, bazares y distribuidores</strong> en todo el país. 
                Ofrecemos condiciones especiales, volúmenes competitivos y soporte comercial continuo para hacer crecer tu negocio.
              </p>
            </div>

            {/* Venta Minorista */}
            <div className="bg-gradient-to-br from-dark-800 to-primary-900/20 border border-primary-900/30 rounded-2xl p-8 hover:border-primary-600/50 transition-all">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                Venta Minorista
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Atención directa a <strong className="text-white">familias y chefs emprendedores</strong> que buscan llevar su cocina al siguiente nivel. 
                Asesoramiento personalizado y garantía de calidad en cada producto.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <div className="bg-gradient-to-br from-primary-900/20 to-dark-800 border border-primary-900/30 rounded-2xl p-8">
            <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Nuestra Misión
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Fabricar y comercializar <strong className="text-white">equipamiento gastronómico 100% argentino de alta calidad</strong>, 
              uniendo la robustez industrial con diseño moderno. Nuestro compromiso es ofrecer productos duraderos 
              que impulsen el éxito de familias y emprendedores gastronómicos.
            </p>
          </div>

          <div className="bg-gradient-to-br from-dark-800 to-primary-900/20 border border-primary-900/30 rounded-2xl p-8">
            <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Nuestra Visión
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Consolidarnos como el <strong className="text-white">referente líder en cocinas semi-industriales argentinas</strong>, 
              reconocidos por nuestra calidad, diseño y compromiso con la industria nacional. 
              Aspiramos a seguir creciendo junto a nuestros clientes en todo el país.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;