// ============================================
// ABOUT PAGE - AboutPage.jsx
// ============================================

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaAward, 
  FaUsers, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaHome, 
  FaBuilding, 
  FaIndustry,
  FaPhone,
  FaWhatsapp,
  FaArrowLeft,
  FaImages,
  FaRuler
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [visibleElements, setVisibleElements] = useState({});

  // Enhanced scroll observer - tracks individual elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with data-animate attribute
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach((el) => {
      observer.observe(el);
      // Set initial state - check if already in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisibleElements(prev => ({
          ...prev,
          [el.id]: true
        }));
      }
    });

    return () => {
      animateElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const isElementVisible = (elementId) => {
    return visibleElements[elementId] || false;
  };

  const stats = [
    { number: "15+", label: "Years Experience", color: "from-amber-500 to-orange-600" },
    { number: "1000+", label: "Happy Customers", color: "from-blue-500 to-blue-600" },
    { number: "5000+", label: "Tanks Installed", color: "from-green-500 to-green-600" },
    { number: "30+", label: "Years Lifespan", color: "from-purple-500 to-purple-600" }
  ];

  const services = [
    {
      icon: <FaHome className="text-3xl" />,
      title: "Residential Tanks",
      description: "Perfect for homes, villas, and apartments with customized sizes",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <FaBuilding className="text-3xl" />,
      title: "Commercial Tanks", 
      description: "For hotels, hospitals, schools, and commercial complexes",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: "Industrial Tanks",
      description: "Heavy-duty tanks for factories and industrial units",
      color: "from-gray-600 to-gray-700"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every tank undergoes 15+ quality checks.",
      points: ["Premium materials", "ISO standards", "Rigorous testing"],
      color: "from-green-400 to-green-500"
    },
    {
      title: "Customer Trust",
      description: "Building long-term relationships through transparent practices.",
      points: ["Honest pricing", "Timely service", "After-sales support"],
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Innovation",
      description: "Continuous improvement in design and manufacturing processes.",
      points: ["Modern techniques", "Eco-friendly", "Efficient designs"],
      color: "from-purple-400 to-purple-500"
    }
  ];

  const getStaggerDelay = (index) => {
    return index * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      
      {/* Hero Section */}
      <section 
        id="hero-section"
        data-animate="true"
        className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 py-32 pt-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <div className={`text-center transition-all duration-700 ${
            isElementVisible('hero-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Usman Septic Tanks</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Leading the way in RCC septic tank manufacturing with 15+ years of excellence, 
              trust, and customer satisfaction
            </p>
            
            {/* Additional Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                to="/tank-selection-guide"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105"
              >
                <FaRuler className="mr-2" />
                Tank Sizes Guide
              </Link>
              <Link 
                to="/gallery"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105"
              >
                <FaImages className="mr-2" />
                View Gallery
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-all duration-300 border border-amber-400 hover:scale-105"
              >
                <FaPhone className="mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                id={`stat-${index}`}
                data-animate="true"
                className={`text-center group transition-all duration-700 ${
                  isElementVisible(`stat-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}
              >
                <div className="relative mb-4 flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-3xl font-bold">
                      {stat.number}
                    </div>
                  </div>
                </div>
                <div className="text-gray-800 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              id="story-content"
              data-animate="true"
              className={`transition-all duration-700 ${
              isElementVisible('story-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2008, Usman Septic Tanks began with a simple mission: to provide 
                  reliable and durable waste management solutions to our community. What started 
                  as a small family business has grown into a trusted name in RCC septic tank 
                  manufacturing.
                </p>
                <p>
                  Over the past 15+ years, we've installed more than 5000 septic tanks across 
                  residential, commercial, and industrial sectors. Our commitment to quality 
                  and customer satisfaction has been the cornerstone of our success.
                </p>
                <p>
                  Today, we continue to innovate and improve our products while maintaining 
                  the traditional values of honesty, reliability, and excellent craftsmanship 
                  that our customers have come to trust.
                </p>
              </div>
            </div>
            <div 
              id="why-choose-us"
              data-animate="true"
              className={`bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border border-amber-200 transition-all duration-700 ${
              isElementVisible('why-choose-us') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} style={{ transitionDelay: '500ms' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                {[
                  "15+ years of proven expertise",
                  "1000+ satisfied customers",
                  "Premium quality materials",
                  "Expert engineering team",
                  "Quick and professional installation",
                  "Comprehensive warranty",
                  "Custom sizes available",
                  "Eco-friendly construction",
                  "Competitive pricing",
                  "After-sales support"
                ].map((item, index) => (
                  <div 
                    key={index}
                    id={`why-item-${index}`}
                    data-animate="true"
                    className={`flex items-center space-x-3 transition-all duration-500 ${
                      isElementVisible(`why-item-${index}`) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${getStaggerDelay(index) + 600}ms` }}
                  >
                    <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="services-heading"
            data-animate="true"
            className={`text-center mb-12 transition-all duration-700 ${
            isElementVisible('services-heading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive septic tank solutions for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                id={`service-${index}`}
                data-animate="true"
                className={`bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-100 group ${
                  isElementVisible(`service-${index}`) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="values-heading"
            data-animate="true"
            className={`text-center mb-12 transition-all duration-700 ${
            isElementVisible('values-heading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                id={`value-${index}`}
                data-animate="true"
                className={`bg-gradient-to-br from-gray-50 to-amber-50 rounded-3xl p-6 border border-amber-200 group hover:shadow-lg transition-all duration-500 ${
                  isElementVisible(`value-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white text-xl">
                    {index === 0 && <FaShieldAlt />}
                    {index === 1 && <FaUsers />}
                    {index === 2 && <FaAward />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 mb-4">{value.description}</p>
                <ul className="space-y-2">
                  {value.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      id={`value-point-${index}-${pointIndex}`}
                      data-animate="true"
                      className={`flex items-center space-x-2 text-gray-700 transition-all duration-500 ${
                        isElementVisible(`value-point-${index}-${pointIndex}`) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${getStaggerDelay(pointIndex) + 300}ms` }}
                    >
                      <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta-section"
        data-animate="true"
        className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${
            isElementVisible('cta-section') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-amber-100 mb-8 text-lg">
              Contact us today for a free consultation and quote for your septic tank needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:+919012901312" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-amber-700 transition-all duration-300"
              >
                <FaPhone className="mr-2" />
                Call Now
              </a>
              <a 
                href="https://wa.me/919012901312" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-amber-700 transition-all duration-300"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </a>
            </div>
            
            {/* Additional Page Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                to="/tank-selection-guide"
                className="inline-flex items-center px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                <FaRuler className="mr-2" />
                Tank Sizes
              </Link>
              <Link 
                to="/gallery"
                className="inline-flex items-center px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                <FaImages className="mr-2" />
                Our Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;