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
        className="bg-dark-900/80 backdrop-blur-sm border border-primary-600/30 rounded-md sm:rounded-lg px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 min-w-[50px] sm:min-w-[60px] md:min-w-[70px]"
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden bg-dark-900 mt-16 sm:mt-20">
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
          
          <div className="relative h-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
                {promos[currentSlide].title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary-400 mb-3 sm:mb-4 md:mb-6 px-2">
                {promos[currentSlide].subtitle}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-4">
                {promos[currentSlide].description}
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 sm:mt-6 md:mt-8"
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6 px-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-500 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm md:text-base text-gray-300 font-medium uppercase tracking-wide">
                  La oferta termina en
                </span>
              </div>
              
              <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center">
                <TimeBox value={timeLeft.days} label="Días" />
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-500 font-bold self-center -mb-6 sm:-mb-7 md:-mb-8">:</div>
                <TimeBox value={timeLeft.hours} label="Horas" />
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-500 font-bold self-center -mb-6 sm:-mb-7 md:-mb-8">:</div>
                <TimeBox value={timeLeft.minutes} label="Min" />
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-500 font-bold self-center -mb-6 sm:-mb-7 md:-mb-8">:</div>
                <TimeBox value={timeLeft.seconds} label="Seg" />
              </div>
            </motion.div>

            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-white text-dark-900 font-bold text-sm sm:text-base md:text-lg rounded-lg hover:bg-gray-100 transition-all shadow-2xl shadow-primary-900/50"
            >
              Ver Ofertas
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 md:p-3 bg-dark-900/50 backdrop-blur-sm border border-primary-600/30 rounded-full text-white hover:bg-dark-800 transition-all z-10 group"
      >
        <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 md:p-3 bg-dark-900/50 backdrop-blur-sm border border-primary-600/30 rounded-full text-white hover:bg-dark-800 transition-all z-10 group"
      >
        <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 md:gap-3 z-10">
        {promos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'w-8 sm:w-10 md:w-12 bg-primary-600' 
                : 'w-1.5 sm:w-2 bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;