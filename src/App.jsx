import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Signature from './components/Signature';
import Schedule from './components/Schedule';
import Discover from './components/Discover';
import Commitment from './components/Commitment';
import Team from './components/Team';
import Footer from './components/Footer';
import Faq from './components/Faq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import StoryPage from './components/StoryPage';
import { CartProvider } from './context/CartContext';
import CartPage from './components/CartPage';
import FlavoursPage from './components/FlavoursPage';
import BrandMarquee from './components/BrandMarquee';


const Home = () => {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="story"><Signature /></section>
      <section id="flavour"><FlavoursPage /></section>
      <section id="quality"><Commitment /></section>
      <section id="commitment"><Schedule /></section>
      <section id="brand"><BrandMarquee /></section>
      <section id="team"><Team /></section>
    </>
  );
};
function App() {
  // bg-[#020618]

  return (
    <CartProvider>
    <Router>
      <div className="bg-black min-h-screen text-brand-gold font-nunito overflow-x-hidden selection:bg-brand-gold selection:text-brand-dark">
        {/* Navbar is outside Routes so it shows on ALL pages */}
        <Navbar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* New Product Page */}
          <Route path="/product" element={<ProductsPage />} />

          <Route path="/contact" element={<ContactPage />}/>

          <Route path="/story" element={<StoryPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/faq" element={<Faq />} />
        </Routes>

        {/* Footer shows on all pages */}
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
};



export default App
