import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Function to handle navigation
  const handleNavigation = (id) => {
    // If we are on the Product page and click a Home section link
    if (location.pathname !== "/" && id !== "product" && id !== "contact") {
      navigate("/"); // Go to home first
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    // If we are already on Home
    else if (
      location.pathname === "/" &&
      id !== "product" &&
      id !== "contact"
    ) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg"></div>

      <div className="relative w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Links to Home */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-amber-300 uppercase font-longline cursor-pointer"
        >
          FITRHO
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-white">
          {/* Standard Scroll Links */}
          <button
            onClick={() => handleNavigation("home")}
            className="text-brand-gold/80 hover:text-brand-gold text-lg font-nunito font-semibold tracking-wide transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("story")}
            className="text-brand-gold/80 hover:text-brand-gold text-lg font-nunito font-semibold tracking-wide transition-colors"
          >
            Story
          </button>

          {/* THE NEW PRODUCT PAGE LINK */}
          <Link
            to="/product"
            className="text-brand-gold/80 hover:text-brand-gold text-lg font-nunito font-semibold tracking-wide transition-colors"
          >
            Products
          </Link>

          <button
            onClick={() => handleNavigation("team")}
            className="text-brand-gold/80 hover:text-brand-gold text-lg font-nunito font-semibold tracking-wide transition-colors"
          >
            Team
          </button>
        </div>

        <div className="flex gap-10 items-center">

        
        {/* {cart button} */}
        <Link to="/cart" className="relative group">
          <span className="text-2xl">🛒</span>
          {/* Badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-gold text-black bg-amber-300 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Reach Us Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-amber-300 text-brand-dark font-bold px-8 py-2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-105 transition-all duration-300"
        >
          Reach Us
        </Link>
        </div>

        {/* Mobile Menu Toggle (Simplified) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          <Hamburger
            isOpen={isMobileMenuOpen}
            toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full h-screen left-0 w-full bg-white border-b border-brand-gold p-6 flex flex-col items-center gap-6 md:hidden shadow-2xl">
          <button
            onClick={() => handleNavigation("home")}
            className=" hover:text-brand-gold text-xl"
          >
            Home
          </button>
          <Link
            to="/product"
            onClick={() => setIsMobileMenuOpen(false)}
            className=" hover:text-brand-gold text-xl"
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-brand-gold font-bold"
          >
            Reach Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
