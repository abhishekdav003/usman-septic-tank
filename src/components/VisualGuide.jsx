import React from 'react';
import { FaHome, FaBuilding, FaIndustry, FaRuler, FaShieldAlt, FaClock, FaWeight } from 'react-icons/fa';

const VisualGuide = () => {
  const useCases = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "घर के लिए",
      description: "छोटे परिवार (4-5 लोग)",
      sizes: ["4×4 ft", "4×3 ft", "4×5 ft"],
      image: "/images/home-use.jpg"
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "दुकान/ऑफिस के लिए", 
      description: "रेस्तरां, छोटे होटल, दुकान",
      sizes: ["8×3 ft", "4×4 ft", "5×2.50 ft"],
      image: "/images/commercial-use.jpg"
    },
    {
      icon: <FaIndustry className="text-4xl" />,
      title: "फैक्ट्री के लिए",
      description: "बड़े उद्योग, फैक्ट्री, स्कूल",
      sizes: ["8×3 ft", "8×2.50 ft", "Custom Size"],
      image: "/images/industrial-use.jpg"
    }
  ];

  const advantages = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "30+ साल तक चलते हैं",
      benefit: "लंबी उम्र"
    },
    {
      icon: <FaWeight className="text-2xl" />,
      title: "भारी वजन सह सकते हैं", 
      benefit: "मजबूत"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "मौसम का असर नहीं",
      benefit: "टिकाऊ"
    },
    {
      icon: <FaRuler className="text-2xl" />,
      title: "सभी साइज उपलब्ध",
      benefit: "कस्टम"
    }
  ];

  return (
    <section id="guide" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">आपके लिए सही टैंक</h2>
          <p className="text-xl text-brown-600">
            आपकी जरूरत के हिसाब से सही साइज चुनें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-brown-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              {/* Icon */}
              <div className="w-20 h-20 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-brown-600">
                  {useCase.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-brown-900 mb-2">{useCase.title}</h3>
              <p className="text-brown-600 mb-4">{useCase.description}</p>
              
              {/* Sizes */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-brown-800 mb-2">सही साइज:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {useCase.sizes.map((size, idx) => (
                    <span key={idx} className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-sm">
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-brown-700 text-white py-3 rounded-lg hover:bg-brown-800 font-medium">
                और जानें
              </button>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="mt-16 bg-brown-100 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-brown-900 text-center mb-8">RCC टैंक के फायदे</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {advantage.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-brown-900 mb-2">{advantage.benefit}</h4>
                <p className="text-brown-700 text-sm">{advantage.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisualGuide;