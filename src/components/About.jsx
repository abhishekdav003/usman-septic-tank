import React, { useState, useEffect, useRef } from 'react';
import { FaAward, FaUsers, FaShieldAlt, FaCheckCircle, FaArrowRight, FaHome, FaBuilding, FaIndustry } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: <FaAward className="text-2xl" />,
      number: "15+",
      label: "Years Experience",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      number: "1000+", 
      label: "Happy Customers",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      number: "5000+",
      label: "Tanks Installed",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      number: "30+",
      label: "Years Lifespan",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const services = [
    {
      icon: <FaHome className="text-3xl" />,
      title: "For Homes",
      description: "Perfect for small & large families",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <FaBuilding className="text-3xl" />,
      title: "For Commercial", 
      description: "Restaurants, hotels, offices",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: "For Industrial",
      description: "Factories & industrial units",
      color: "from-gray-600 to-gray-700"
    }
  ];

  const getStaggerDelay = (index) => {
    return index * 100;
  };

  // Function to navigate to contact form
  const handleGetQuote = () => {
    window.location.href = '/#/contact#contact-form';
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted RCC Septic Tank Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With 15+ years of excellence in manufacturing durable and reliable RCC septic tanks
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}
            >
              <div className="relative mb-4 flex justify-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content - Services */}
          <div className="space-y-6">
            <div className={`bg-white rounded-3xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 hover:border-amber-300 transition-all duration-500 hover:scale-105 hover:shadow-md ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                    }`}
                    style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Features */}
            <div className={`bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-6 text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="font-bold text-lg mb-4">Why RCC Tanks?</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "30+ Years Lifespan",
                  "Heavy Weight Capacity", 
                  "Weather Resistant",
                  "All Sizes Available",
                  "Eco Friendly",
                  "Low Maintenance"
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-2 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}
                  >
                    <FaCheckCircle className="text-amber-200 text-sm flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Main Info */}
          <div className="space-y-6">
            <div className={`bg-white rounded-3xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About Usman Septic Tanks</h3>
              <div className="space-y-4 text-gray-600">
                <p className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                  For over 15 years, we've been the trusted name in RCC septic tank manufacturing, 
                  providing durable and reliable waste management solutions to residential, commercial, 
                  and industrial clients.
                </p>
                <p className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ transitionDelay: '300ms' }}>
                  Our commitment to quality craftsmanship, premium materials, and customer satisfaction 
                  has made us the preferred choice for thousands of customers across the region.
                </p>
                <p className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`} style={{ transitionDelay: '400ms' }}>
                  Every tank we build undergoes rigorous quality checks and is backed by comprehensive 
                  warranty, ensuring peace of mind for years to come.
                </p>
              </div>
              
              <div className={`mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-200 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`} style={{ transitionDelay: '500ms' }}>
                <h4 className="font-bold text-amber-800 mb-2">Our Promise</h4>
                <p className="text-amber-700 text-sm">
                  Premium quality materials • Expert installation • Comprehensive warranty • 
                  After-sales support • Custom sizes available
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <h4 className="text-xl font-bold mb-3">Ready to Get Started?</h4>
              <p className="text-gray-300 mb-6">
                Contact us for a free consultation and quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about" 
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-gray-900 font-semibold rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Know More
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
                <button
                  onClick={handleGetQuote}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;