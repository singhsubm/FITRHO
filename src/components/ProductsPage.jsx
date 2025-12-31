import React, { useEffect, useState } from 'react';
import './Hero.css'; 
import { useCart } from '../context/CartContext';

// 1. Updated Data with Categories and 'isNew' flags
const allProducts = [
  {
    id: 1,
    name: "Whey Isolate Gold",
    category: "Protein",
    isNew: false,
    description: "Pure hydrolyzed whey protein for maximum muscle recovery.",
    price: 6499, // Changed to number for sorting logic
    discountedPrice: 5499,
    weight: "2.2 lbs (1kg)",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Pre-Workout Ignite",
    category: "Supplements",
    isNew: true,
    description: "High stimulant explosive energy for intense training sessions.",
    price: 2999,
    discountedPrice: 2499,
    weight: "300g",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Creatine Monohydrate",
    category: "Supplements",
    isNew: false,
    description: "Micronized creatine for strength, power, and muscle volume.",
    price: 1499,
    discountedPrice: 1299,
    weight: "250g",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Omega-3 Fish Oil",
    category: "Vitamins",
    isNew: false,
    description: "Double strength EPA & DHA for heart and joint health.",
    price: 999,
    discountedPrice: 799,
    weight: "60 Softgels",
    image: "https://images.unsplash.com/photo-1626027063238-1c44b93998f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Mass Gainer Pro",
    category: "Protein",
    isNew: true,
    description: "High calorie formula with complex carbs for bulking.",
    price: 4199,
    discountedPrice: 3699,
    weight: "6.6 lbs (3kg)",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Multivitamin Elite",
    category: "Vitamins",
    isNew: false,
    description: "Essential vitamins and minerals for daily immunity.",
    price: 899,
    discountedPrice: 749,
    weight: "60 Tablets",
    image: "https://images.unsplash.com/photo-1550572017-edcd829e2467?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Vegan Protein",
    category: "Protein",
    isNew: true,
    description: "Plant-based protein source for lean muscle building.",
    price: 3500,
    discountedPrice: 3100,
    weight: "1kg",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
  },
];

const ProductsPage = () => {
    const { addToCart } = useCart();
  // State for Filters
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Logic
  useEffect(() => {
    let result = [...allProducts];

    // 1. Filter by Category (All, New, Specific Categories)
    if (selectedCategory === 'New Collection') {
      result = result.filter(p => p.isNew);
    } else if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 2. Filter by Discount
    if (showDiscountedOnly) {
      // Assuming all items in your DB have a discount, but logic is here:
      result = result.filter(p => p.discountedPrice < p.price);
    }

    // 3. Sort Logic
    if (sortOrder === 'lowToHigh') {
      result.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortOrder === 'highToLow') {
      result.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortOrder, showDiscountedOnly]);

  return (
    <div className="min-h-screen w-full bg-brand-dark pt-24 pb-12 px-6 md:px-12">
      
      {/* Page Header */}
      <div className="text-center mb-12 m-auto relative z-10">
        <h2 className="text-stroke-style text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] tracking-tighter leading-none mb-[-2%]">
          SHOP
        </h2>
        <h3 className="signature-font text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-center drop-shadow-lg drop-shadow-amber-300">
          find your best
        </h3>
      </div>

      {/* MAIN CONTENT LAYOUT: Sidebar + Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 relative">
        
        {/* === LEFT SIDEBAR FILTERS === */}
        <div className="w-full  lg:w-1/4 space-y-8 sticky lg:fixed lg:left-40 lg:top-40 h-full z-10 ">
          
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-gray-400 text-sm">Sort by:</span>
            <select 
              className="bg-[#2a2b30] text-white text-sm border border-white/10 rounded px-2 py-1 focus:outline-none focus:border-brand-gold"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Popular</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          <div className='flex gap-10 justify-between w-full md:w-[50%] lg:flex-col'>
            {/* Collections Section */}
          <div>
            <h4 className="text-white font-longline text-xl mb-4">Collections</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-nunito">
              <li 
                onClick={() => setSelectedCategory('New Collection')}
                className={`cursor-pointer hover:text-amber-300 transition-colors ${selectedCategory === 'New Collection' ? 'text-amber-300 font-bold' : ''}`}
              >
                New Collection
              </li>
              <li 
                onClick={() => setSelectedCategory('All')}
                className={`cursor-pointer hover:text-amber-300 transition-colors ${selectedCategory === 'All' ? 'text-amber-300 font-bold' : ''}`}
              >
                All Products
              </li>
              <li 
                onClick={() => setShowDiscountedOnly(!showDiscountedOnly)}
                className={`cursor-pointer hover:text-amber-300 transition-colors flex items-center gap-2 ${showDiscountedOnly ? 'text-amber-300 font-bold' : ''}`}
              >
                Discounted Products
                {showDiscountedOnly && <span className="text-xs">✓</span>}
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="text-white font-longline text-xl mb-4">Category</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-nunito">
              {['Protein', 'Supplements', 'Vitamins'].map((cat) => (
                <li 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer hover:text-amber-300 transition-colors ${selectedCategory === cat ? 'text-amber-300 font-bold' : ''}`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          </div>

        </div>

        {/* === RIGHT PRODUCT GRID === */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-[#2a2b30] border border-white/10 rounded-2xl overflow-hidden hover:border-brand-gold/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="h-56 w-full overflow-hidden relative bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Badge Logic */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-brand-gold text-brand-dark text-[10px] font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                  )}
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                     {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-longline text-white group-hover:text-brand-gold transition-colors mb-1">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 text-xs font-nunito leading-relaxed mb-3 flex-grow">
                    {product.description}
                  </p>

                  <div className="w-full h-[1px] bg-white/10 my-2"></div>

                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider block">Price</span>
                      <span className="text-base font-bold text-amber-300">₹{product.discountedPrice}</span>
                      <span className="text-xs text-gray-500 line-through ml-2">₹{product.price}</span>
                    </div>
                    <div className="text-right">
                       <span className="text-xs text-gray-500 uppercase tracking-wider block">Weight</span>
                       <span className="text-xs text-white font-nunito">{product.weight}</span>
                    </div>
                  </div>

                  <button
                  onClick={() => addToCart(product)}
                   className="w-full bg-transparent border border-amber-300 text-white py-2 rounded-full font-bold text-xs tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-2">
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
               No products found in this category.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;