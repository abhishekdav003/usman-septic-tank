import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Background scroll disable when sidebar opens
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // ✅ Correct navigation for HashRouter
  const navigateToPage = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  // ✅ Correct contact form navigation
  const navigateToContactForm = () => {
    navigate('/contact');
    setIsMenuOpen(false);
    // Scroll to form after navigation
    setTimeout(() => {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const socialLinks = [
    {
      icon: <FaWhatsapp className="text-lg" />,
      url: "https://wa.me/919012901312",
      label: "WhatsApp",
    },
    {
      icon: <FaFacebook className="text-lg" />,
      url: "#",
      label: "Facebook",
    },
    {
      icon: <FaInstagram className="text-lg" />,
      url: "#",
      label: "Instagram",
    },
  ];

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 gap-2 sm:gap-4">
            {/* Logo Section - Fully Responsive */}
            <div 
              className="flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 min-w-0"
              onClick={() => navigateToPage('/')}
            >
              {/* Logo Image - FIXED PATH */}
              <div className="flex-shrink-0">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.jpg`}
                  alt="Usman Septic Tanks Logo"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                />
              </div>

              {/* Company Name and Tagline - Now visible on all screens */}
              <div className="min-w-0 flex-shrink">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-gray-900 leading-tight truncate">
                  Usman Septic Tanks
                </h2>
                <p className="text-[10px] sm:text-xs md:text-sm text-amber-600 font-medium leading-tight truncate">
                  Premium RCC Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center flex-shrink-0">
              <button
                onClick={() => navigateToPage('/')}
                className="text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                Home
              </button>
              <button
                onClick={() => navigateToPage('/about')}
                className="text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                About Us
              </button>
              <button
                onClick={() => navigateToPage('/tank-selection-guide')}
                className="text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                TankGuide
              </button>
              <button
                onClick={() => navigateToPage('/gallery')}
                className="text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                Gallery
              </button>
              <button
                onClick={() => navigateToPage('/contact')}
                className="text-gray-700 hover:text-amber-700 hover:bg-amber-50 px-4 py-2 rounded-lg font-medium transition-all"
              >
                Contact Us
              </button>

              <button
                onClick={navigateToContactForm}
                className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-6 py-2.5 rounded-lg hover:from-amber-800 hover:to-amber-700 font-medium shadow-md hover:shadow-lg transition-all ml-4"
              >
                Get Quote
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="text-gray-700 w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white z-50 lg:hidden shadow-2xl animate-slideIn overflow-y-auto">
            <div className="p-4 sm:p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <img 
                    src={`${import.meta.env.BASE_URL}logo.jpg`}
                    alt="Usman Septic Tanks Logo"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Menu</h3>
                    <p className="text-xs text-gray-500">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                >
                  <FaTimes className="text-gray-700 w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 mb-6 sm:mb-8">
                <button
                  onClick={() => navigateToPage('/')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all text-sm sm:text-base"
                >
                  Home
                </button>
                <button
                  onClick={() => navigateToPage('/about')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all text-sm sm:text-base"
                >
                  About Us
                </button>
                <button
                  onClick={() => navigateToPage('/tank-selection-guide')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all text-sm sm:text-base"
                >
                  Tank Guide
                </button>
                <button
                  onClick={() => navigateToPage('/gallery')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all text-sm sm:text-base"
                >
                  Gallery
                </button>
                <button
                  onClick={() => navigateToPage('/contact')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </nav>

              {/* Contact Info */}
              <div className="space-y-3 mb-4 sm:mb-6 bg-amber-50 p-3 sm:p-4 rounded-xl">
                <a
                  href="tel:+919012901312"
                  className="flex items-center space-x-3 text-gray-700 hover:text-amber-700 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <FaPhone className="text-amber-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Call Us</p>
                    <span className="font-medium text-xs sm:text-sm truncate">+91 90129 01312</span>
                  </div>
                </a>
                <a
                  href="mailto:usmanseptiktankuk17@gmail.com"
                  className="flex items-center space-x-3 text-gray-700 hover:text-amber-700 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <FaEnvelope className="text-amber-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Email Us</p>
                    <span className="font-medium text-xs break-words">
                      usmanseptiktankuk17@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mb-4 sm:mb-6">
                <p className="text-xs text-gray-500 mb-3 font-medium">
                  FOLLOW US
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      title={social.label}
                      className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-amber-100 to-amber-200 hover:from-amber-600 hover:to-amber-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 text-amber-700 hover:text-white shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Enquiry Button */}
              <button
                onClick={navigateToContactForm}
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold mt-auto shadow-lg hover:shadow-xl hover:from-amber-800 hover:to-amber-700 transition-all text-sm sm:text-base"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;