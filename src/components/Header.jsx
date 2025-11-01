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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigateToPage('/')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Usman Septic Tanks
                </h2>
                <p className="text-xs text-amber-600 font-medium">
                  Premium RCC Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center">
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
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="text-gray-700 w-6 h-6" />
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
          <div className="fixed top-0 right-0 h-full w-80 bg-white z-50 lg:hidden shadow-2xl animate-slideIn overflow-y-auto">
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Menu</h3>
                    <p className="text-xs text-gray-500">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaTimes className="text-gray-700 w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                <button
                  onClick={() => navigateToPage('/')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all"
                >
                  Home
                </button>
                <button
                  onClick={() => navigateToPage('/about')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all"
                >
                  About Us
                </button>
                <button
                  onClick={() => navigateToPage('/tank-selection-guide')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all"
                >
                  Tank Guide
                </button>
                <button
                  onClick={() => navigateToPage('/gallery')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all"
                >
                  Gallery
                </button>
                <button
                  onClick={() => navigateToPage('/contact')}
                  className="block w-full text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all"
                >
                  Contact Us
                </button>
              </nav>

              {/* Contact Info */}
              <div className="space-y-3 mb-6 bg-amber-50 p-4 rounded-xl">
                <a
                  href="tel:+919012901312"
                  className="flex items-center space-x-3 text-gray-700 hover:text-amber-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <FaPhone className="text-amber-600 w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Call Us</p>
                    <span className="font-medium text-sm truncate">+91 90129 01312</span>
                  </div>
                </a>
                <a
                  href="mailto:usmanseptiktankuk17@gmail.com"
                  className="flex items-center space-x-3 text-gray-700 hover:text-amber-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <FaEnvelope className="text-amber-600 w-6 h-6" />
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
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-3 font-medium">
                  FOLLOW US
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      title={social.label}
                      className="w-11 h-11 bg-gradient-to-br from-amber-100 to-amber-200 hover:from-amber-600 hover:to-amber-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 text-amber-700 hover:text-white shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Enquiry Button */}
              <button
                onClick={navigateToContactForm}
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white py-3.5 rounded-xl font-semibold mt-auto shadow-lg hover:shadow-xl hover:from-amber-800 hover:to-amber-700 transition-all"
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