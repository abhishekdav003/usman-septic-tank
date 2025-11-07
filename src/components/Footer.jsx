import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';


const Footer = () => {
  const navigateToPage = (path) => {
    window.location.href = `/#${path}`;
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Tank Sizes Guide', path: '/tank-selection-guide' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    'RCC Septic Tanks',
    'Commercial Tanks', 
    'Industrial Tanks',
    'Custom Size Tanks',
    'Installation Services',
    'Site Consultation'
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-lg" />,
      name: "Facebook",
      url: "#",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaInstagram className="text-lg" />,
      name: "Instagram",
      url: "#", 
      color: "hover:bg-pink-600"
    },
    {
      icon: <FaTwitter className="text-lg" />,
      name: "Twitter",
      url: "#",
      color: "hover:bg-blue-400"
    },
    {
      icon: <FaWhatsapp className="text-lg" />,
      name: "WhatsApp",
      url: "https://wa.me/919012901312",
      color: "hover:bg-green-600"
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      text: "+91 8534976439",
      link: "tel:+918534976439"
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      text: "+91 8534976439",
      link: "https://wa.me/918534976439"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      text: "usmanseptiktankuk17@gmail.com",
      link: "mailto:usmanseptiktankuk17@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      text: "Roorkee Railway Station, Paniyala Road",
      link: "#"
    }
  ];

  return (
    <footer className="bg-brown-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Usman Septic Tanks</h3>
            <p className="text-brown-200 mb-6 leading-relaxed">
              Leading manufacturers of high-quality RCC septic tanks in Roorkee. 
              Providing reliable and durable waste management solutions for over 15 years.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-brown-200">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-brown-200">1000+ Installations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-brown-200">Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigateToPage(link.path)}
                    className="text-brown-200 hover:text-white transition-colors flex items-center space-x-2 group"
                  >
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-brown-400 rounded-full"></div>
                  <span className="text-brown-200">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="flex items-center space-x-3 text-brown-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-brown-700 rounded-full flex items-center justify-center group-hover:bg-brown-600 transition-colors">
                    {contact.icon}
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 bg-brown-700 rounded-full flex items-center justify-center text-white transition-all ${social.color} hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brown-300 text-sm">
              © {new Date().getFullYear()} Usman Septic Tanks. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-brown-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;