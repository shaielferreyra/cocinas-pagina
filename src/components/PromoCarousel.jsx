import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PromoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  const promos = [
    {
      id: 1,
      title: "Aires Acondicionados",
      subtitle: "Tecnología Hisense",
      description: "Equipos Split de última generación. Eficiencia energética garantizada",
      image: "/images/carousel/promo-1.jpg",
      bgGradient: "from-primary-900 via-primary-800 to-dark-900"
    },
    {
      id: 2,
      title: "Cocinas Industriales",
      subtitle: "Acero Inoxidable",
      description: "Cocinas profesionales de 6 hornallas. Calidad premium para tu negocio",
      image: "/images/carousel/promo-2.jpg",
      bgGradient: "from-dark-900 via-primary-900 to-dark-800"
    },
    {
      id: 3,
      title: "¡Financiación Disponible!",
      subtitle: "Hasta 12 cuotas sin interés",
      description: "Equipá tu cocina profesional con las mejores condiciones",
      image: "/images/carousel/promo-3.jpg",
      bgGradient: "from-primary-800 via-dark-900 to-primary-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-dark-900/80 backdrop-blur-sm border border-primary-600/30 rounded-lg px-4 py-3 min-w-[70px]"
      >
        <span className="text-3xl md:text-4xl font-bold text-white font-display">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-dark-900 mt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Imagen de fondo */}
          {promos[currentSlide].image && (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${promos[currentSlide].image})`,
              }}
            />
          )}
          
          {/* Overlay oscuro con gradiente */}
          <div className={`absolute inset-0 bg-gradient-to-br ${promos[currentSlide].bgGradient} ${promos[currentSlide].image ? 'opacity-80' : 'opacity-100'}`}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-4 leading-tight">
                {promos[currentSlide].title}
              </h2>
              <p className="text-2xl md:text-4xl font-semibold text-primary-400 mb-6">
                {promos[currentSlide].subtitle}
              </p>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                {promos[currentSlide].description}
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-primary-500 mr-3" />
                <span className="text-gray-300 font-medium uppercase tracking-wide">
                  La oferta termina en
                </span>
              </div>
              
              <div className="flex gap-3 md:gap-6">
                <TimeBox value={timeLeft.days} label="Días" />
                <div className="text-3xl md:text-4xl text-primary-500 font-bold self-center mb-8">:</div>
                <TimeBox value={timeLeft.hours} label="Horas" />
                <div className="text-3xl md:text-4xl text-primary-500 font-bold self-center mb-8">:</div>
                <TimeBox value={timeLeft.minutes} label="Min" />
                <div className="text-3xl md:text-4xl text-primary-500 font-bold self-center mb-8">:</div>
                <TimeBox value={timeLeft.seconds} label="Seg" />
              </div>
            </motion.div>

            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 bg-white text-dark-900 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all shadow-2xl shadow-primary-900/50"
            >
              Ver Ofertas
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-dark-900/50 backdrop-blur-sm border border-primary-600/30 rounded-full text-white hover:bg-dark-800 transition-all z-10 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-dark-900/50 backdrop-blur-sm border border-primary-600/30 rounded-full text-white hover:bg-dark-800 transition-all z-10 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {promos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'w-12 bg-primary-600' 
                : 'w-2 bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;