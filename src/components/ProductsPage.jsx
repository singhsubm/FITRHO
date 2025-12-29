import React, { useEffect } from 'react';
import './Hero.css'; // Reusing your text styles

const allProducts = [
  {
    id: 1,
    name: "Whey Isolate Gold",
    description: "Pure hydrolyzed whey protein for maximum muscle recovery.",
    price: "₹6,499",
    discountedPrice: "₹5,499",
    weight: "2.2 lbs (1kg)",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Pre-Workout Ignite",
    description: "High stimulant explosive energy for intense training sessions.",
    price: "₹2,999",
    discountedPrice: "₹2,499",
    weight: "300g",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Creatine Monohydrate",
    description: "Micronized creatine for strength, power, and muscle volume.",
    price: "₹1,499",
    discountedPrice: "₹1,299",
    weight: "250g",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Omega-3 Fish Oil",
    description: "Double strength EPA & DHA for heart and joint health.",
    price: "₹999",
    discountedPrice: "₹799",
    weight: "60 Softgels",
    image: "https://images.unsplash.com/photo-1626027063238-1c44b93998f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Mass Gainer Pro",
    description: "High calorie formula with complex carbs for bulking.",
    price: "₹4,199",
    discountedPrice: "₹3,699",
    weight: "6.6 lbs (3kg)",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
  },

  {
    id: 6,
    name: "Multivitamin Elite",
    description: "Essential vitamins and minerals for daily immunity.",
    price: "₹899",
    discountedPrice: "₹749",
    weight: "60 Tablets",
    image: "https://images.unsplash.com/photo-1550572017-edcd829e2467?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Mass Gainer Pro",
    description: "High calorie formula with complex carbs for bulking.",
    price: "₹4,199",
    discountedPrice: "₹3,699",
    weight: "6.6 lbs (3kg)",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
  },
];

const ProductsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen w-full bg-brand-dark pt-24 pb-12 px-6 md:px-12">
      
      {/* Page Header */}
      <div className="text-center mb-16 m-auto relative z-10">
        <h2 className="text-stroke-style
      text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[9rem]
      tracking-tighter leading-none
      mb-[-5%] md:mb-[-3%]">
          SHOP
        </h2>
        <h3 className="signature-font text-white
      text-3xl sm:text-4xl md:text-6xl lg:text-7xl
      mt-1 md:mt-0
      md:ml-50
      tracking-wide
      text-center
      drop-shadow-lg drop-shadow-amber-300">
          find your best
        </h3>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {allProducts.map((product) => (
          <div 
            key={product.id} 
            className="group bg-[#2a2b30] border border-white/10 rounded-2xl overflow-hidden hover:border-brand-gold/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300 flex flex-col"
          >
            
            {/* 1. Product Image */}
            <div className="h-54 w-full overflow-hidden relative bg-white">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Optional Badge */}
              <div className="absolute top-3 right-3 bg-brand-gold text-brand-dark text-xs font-bold px-2 py-1 rounded">
                PREMIUM
              </div>
            </div>

            {/* Content Body */}
            <div className="p-2 flex flex-col flex-grow">
              
              {/* 2. Product Name */}
              <h3 className="text-xl font-longline text-white group-hover:text-brand-gold transition-colors mb-1">
                {product.name}
              </h3>

              {/* 3. Description */}
              <p className="text-gray-400 text-xs font-nunito leading-relaxed mb-2 flex-grow">
                {product.description}
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10 my-3"></div>

              {/* 4. Price & 5. Weight Row */}
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0">Price</span>
                  <span className="text-sm font-bold text-amber-300">{product.discountedPrice}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{product.price}</span>
                </div>
                <div className="text-right">
                   <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Weight</span>
                   <span className="text-sm text-white font-nunito">{product.weight}</span>
                </div>
              </div>

              {/* 6. Add to Cart Button */}
              <button className="w-full bg-transparent border border-amber-300 text-white py-2 rounded-3xl font-bold uppercase text-sm tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-2">
                Add 🛒
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;