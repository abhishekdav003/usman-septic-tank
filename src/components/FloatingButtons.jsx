import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918534976439"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918534976439"
        className="w-14 h-14 bg-brown-700 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
      >
        <FaPhone className="text-xl" />
      </a>

    </div>
  );
};

export default FloatingButtons;