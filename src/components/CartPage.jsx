import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Global.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, discountedPrice, OriginalTotal } = useCart();

  // Scroll to top on load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-longline text-white mb-4">Your Cart is Empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't added any gear yet.</p>
        <Link to="/product">
          <button className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold uppercase bg-amber-300 tracking-widest hover:bg-white transition-all">
            Go to Shop
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-brand-dark pt-24 pb-12 px-6 md:px-12">
      
      <div className="text-center mb-12">
        <h2 className="text-stroke-style text-[4rem] md:text-[6rem] tracking-tighter leading-none">CART</h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: Cart Items List */}
        <div className="w-full lg:w-2/3 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center bg-[#2a2b30] border border-white/10 rounded-2xl p-4 gap-6">
              
              {/* Image */}
              <div className="w-24 h-24 bg-white rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Details */}
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-xl font-longline text-white">{item.name}</h3>
                <p className="text-gray-400 text-xs font-nunito">{item.weight}</p>
                <div className="text-brand-gold font-bold mt-1">₹{item.discountedPrice} </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-brand-dark/50 rounded-full px-4 py-2 border border-white/5">
                <button onClick={() => updateQuantity(item.id, -1)} className="text-white hover:text-brand-gold px-2">-</button>
                <span className="text-white font-mono text-sm">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="text-white hover:text-brand-gold px-2">+</button>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 transition-colors p-2 bg-white rounded-full"
              >
                ❌
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-[#2a2b30] border border-white/10 rounded-2xl p-8 sticky top-24">
            <h3 className="text-2xl font-longline text-white mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6 border-b border-white/10 pb-6">
              <div className="flex justify-between text-gray-400 font-nunito">
                <span>Subtotal</span>
                <span className="text-white">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-gray-400 font-nunito">
                <span>Discount</span>
                <span className="text-brand-gold">₹{discountedPrice}</span>
              </div>
              <div className="flex justify-between text-gray-400 font-nunito">
                <span>Shipping</span>
                <span className="text-brand-gold">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-white">Total</span>
              <span className="text-2xl font-bold text-brand-gold">₹{cartTotal}</span>
            </div>

            <button className="w-full bg-amber-300 text-brand-dark py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.02] transition-all shadow-lg shadow-brand-gold/20">
              Proceed to Checkout
            </button>
            
            <p className="text-center text-gray-500 text-xs mt-4">
              Secure Checkout • 100% Satisfaction Guarantee
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;