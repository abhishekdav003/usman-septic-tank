import React from 'react';
import { FaPhone, FaUserCheck, FaTruck, FaTools, FaCheckCircle, FaHandPointer } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      icon: <FaPhone className="text-2xl" />,
      title: "कॉल करें",
      description: "हमें कॉल करें या फॉर्म भरें",
      details: "8534976439 पर कॉल करें"
    },
    {
      step: "2", 
      icon: <FaUserCheck className="text-2xl" />,
      title: "साइट विजिट",
      description: "मुफ्त साइट विजिट और सलाह",
      details: "हमारा एक्सपर्ट आपके पास आएगा"
    },
    {
      step: "3",
      icon: <FaTruck className="text-2xl" />,
      title: "टैंक डिलीवरी", 
      description: "आपके साइज का टैंक लगाएं",
      details: "2-3 दिन में डिलीवरी"
    },
    {
      step: "4",
      icon: <FaTools className="text-2xl" />,
      title: "इंस्टालेशन",
      description: "प्रोफेशनल इंस्टालेशन",
      details: "हमारी टीम लगा देगी"
    },
    {
      step: "5",
      icon: <FaCheckCircle className="text-2xl" />,
      title: "वारंटी मिलेगी",
      description: "10-20 साल की वारंटी",
      details: "किसी भी प्रॉब्लम में हेल्प"
    }
  ];

  const features = [
    {
      icon: <FaHandPointer className="text-xl" />,
      text: "कोई एडवांस पेमेंट नहीं"
    },
    {
      icon: <FaUserCheck className="text-xl" />,
      text: "मुफ्त साइट विजिट"
    },
    {
      icon: <FaTools className="text-xl" />,
      text: "प्रोफेशनल इंस्टालेशन"
    },
    {
      icon: <FaCheckCircle className="text-xl" />,
      text: "10-20 साल वारंटी"
    }
  ];

  return (
    <section id="process" className="py-20 bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">काम कैसे होता है?</h2>
          <p className="text-xl text-brown-600">सिर्फ 5 आसान स्टेप्स में पाएं अपना RCC सेप्टिक टैंक</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-brown-300"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Circle */}
                <div className="w-20 h-20 bg-brown-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <div className="text-white text-2xl font-bold">{step.step}</div>
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-brown-600 mb-3">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brown-900 mb-2">{step.title}</h3>
                  <p className="text-brown-700 mb-2">{step.description}</p>
                  <p className="text-brown-600 text-sm">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-brown-200">
          <h3 className="text-2xl font-bold text-brown-900 text-center mb-6">हमारी सुविधाएं</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-green-600">
                  {feature.icon}
                </div>
                <span className="text-brown-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Box */}
        <div className="mt-8 bg-brown-800 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">अभी कॉल करें और पाएं मुफ्त सलाह</h3>
          <div className="text-3xl font-bold mb-4">
            <FaPhone className="inline mr-3" />
            8534976439
          </div>
          <p className="text-brown-200 mb-6">24x7 - कोई भी समय कॉल कर सकते हैं</p>
          <a 
            href="tel:+918534976439"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-semibold text-lg"
          >
            अभी कॉल करें
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;