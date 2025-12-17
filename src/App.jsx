import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PromoCarousel from './components/PromoCarousel';
import { CocinasIndustriales, EquiposFrio } from './components/ProductGrid';
import AboutUs from './components/AboutUs';
import Sucursales from './components/Sucursales';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';

// Home Page Component - Solo productos
const HomePage = () => {
  return (
    <>
      <PromoCarousel />
      <CocinasIndustriales />
      <EquiposFrio />
      <ContactMap />
    </>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="pt-20">
      <AboutUs />
    </div>
  );
};

// Sucursales Page Component
const SucursalesPage = () => {
  return (
    <div className="pt-20">
      <Sucursales />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/sucursales" element={<SucursalesPage />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;