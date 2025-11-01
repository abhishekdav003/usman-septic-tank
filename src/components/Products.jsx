import React from 'react';
import { FaShieldAlt, FaRuler, FaWeight, FaClock, FaArrowRight, FaCheck } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "4×4 ft RCC Septic Tank",
      capacity: "1000 Liters",
      description: "Perfect for small families (4-5 members). Ideal for residential homes with limited space.",
      size: "4×4 ft",
      features: [
        "Ideal for 4-5 people",
        "Quick 1-day installation", 
        "10 years warranty",
        "Low maintenance"
      ],
      bestFor: "Small Families, Residential Homes"
    },
    {
      id: 2,
      name: "8×3 ft RCC Septic Tank", 
      capacity: "2000 Liters",
      description: "Medium capacity tank suitable for joint families or small commercial establishments.",
      size: "8×3 ft",
      features: [
        "Suitable for 6-8 people",
        "2-day installation",
        "15 years warranty", 
        "Heavy duty construction"
      ],
      bestFor: "Joint Families, Small Shops"
    },
    {
      id: 3,
      name: "4×3 ft RCC Septic Tank",
      capacity: "800 Liters", 
      description: "Compact design for small families or as additional tank. Space efficient solution.",
      size: "4×3 ft",
      features: [
        "Compact size",
        "Quick installation",
        "8 years warranty",
        "Cost effective"
      ],
      bestFor: "Small Families, Backup Tank"
    },
    {
      id: 4,
      name: "4×4 ft Commercial Tank",
      capacity: "1200 Liters",
      description: "Heavy duty version of 4x4 ft tank with reinforced construction for commercial use.",
      size: "4×4 ft", 
      features: [
        "Commercial grade",
        "Extra reinforcement",
        "12 years warranty",
        "Heavy usage capacity"
      ],
      bestFor: "Small Restaurants, Offices"
    },
    {
      id: 5,
      name: "8×3 ft Industrial Tank",
      capacity: "2500 Liters", 
      description: "Industrial grade tank for factories, workshops and medium commercial establishments.",
      size: "8×3 ft",
      features: [
        "Industrial grade",
        "3-day installation",
        "20 years warranty", 
        "Heavy load capacity"
      ],
      bestFor: "Factories, Workshops"
    },
    {
      id: 6,
      name: "4×5 ft RCC Septic Tank",
      capacity: "1500 Liters",
      description: "Tall design perfect for areas with height availability. Good capacity for medium families.",
      size: "4×5 ft",
      features: [
        "Tall design",
        "Good capacity", 
        "10 years warranty",
        "Space efficient"
      ],
      bestFor: "Medium Families, Limited Width Areas"
    },
    {
      id: 7,
      name: "5×2.50 ft RCC Septic Tank",
      capacity: "900 Liters",
      description: "Narrow design for specific space constraints. Perfect for tight spaces.",
      size: "5×2.50 ft",
      features: [
        "Narrow design",
        "Space efficient",
        "8 years warranty", 
        "Quick installation"
      ],
      bestFor: "Tight Spaces, Specific Layouts"
    },
    {
      id: 8,
      name: "8×2.50 ft RCC Septic Tank",
      capacity: "1800 Liters",
      description: "Long narrow design for areas with length availability but limited width.",
      size: "8×2.50 ft",
      features: [
        "Long narrow design",
        "Good capacity",
        "15 years warranty",
        "Custom installation"
      ],
      bestFor: "Long Narrow Areas, Commercial Use"
    }
  ];

  const scrollToEnquiry = (productName) => {
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">Our RCC Septic Tank Sizes</h2>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto">
            Available in multiple sizes to fit your specific requirements and space constraints
          </p>
        </div>

        {/* Products Grid - 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-brown-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              
              <div className="flex flex-col md:flex-row h-full">
                {/* Product Image Section */}
                <div className="md:w-2/5 bg-gradient-to-br from-brown-100 to-brown-200 flex items-center justify-center p-6">
                  <div className="text-center">
                    {/* Demo Tank Image */}
                    <div className="relative w-32 h-24 bg-brown-300 rounded-lg mx-auto mb-3 border-2 border-brown-400">
                      {/* Tank Structure */}
                      <div className="absolute inset-2 border border-brown-500 rounded"></div>
                      <div className="absolute inset-4 border border-brown-600 rounded-sm"></div>
                      {/* Size Label */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-brown-700 text-white text-xs px-2 py-1 rounded">
                        {product.size}
                      </div>
                    </div>
                    <p className="text-brown-700 font-semibold">{product.capacity}</p>
                    <p className="text-brown-600 text-sm">Capacity</p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="md:w-3/5 p-6 flex flex-col">
                  {/* Product Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-brown-900 mb-2">{product.name}</h3>
                    <div className="bg-brown-100 rounded-lg px-3 py-1 inline-block">
                      <p className="text-brown-700 text-sm font-medium">
                        {product.bestFor}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-brown-600 mb-4 text-sm leading-relaxed flex-grow">{product.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <FaCheck className="text-green-500 text-sm" />
                        <span className="text-brown-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="border-t border-brown-200 pt-4 mt-auto">
                    <button 
                      onClick={() => scrollToEnquiry(product.name)}
                      className="w-full bg-brown-700 text-white py-3 rounded-lg hover:bg-brown-800 transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-brown-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-brown-600 text-2xl" />
              </div>
              <h4 className="font-bold text-brown-800 mb-2">All Sizes Available</h4>
              <p className="text-brown-600 text-sm">Custom sizes also available on request</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-brown-600 text-2xl" />
              </div>
              <h4 className="font-bold text-brown-800 mb-2">Quick Delivery</h4>
              <p className="text-brown-600 text-sm">Most sizes available for immediate delivery</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWeight className="text-brown-600 text-2xl" />
              </div>
              <h4 className="font-bold text-brown-800 mb-2">Expert Installation</h4>
              <p className="text-brown-600 text-sm">Professional installation team available</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;