import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number (include country code without + sign)
    const phoneNumber = '919540900043'; // Example: Indian number
    const message = encodeURIComponent('Hello! I am interested in your packaging products. Please provide more information.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    // Replace with actual phone number
    const phoneNumber = '+91-9540900043';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-12 lg:bottom-6 right-4 lg:right-6 z-50">
      {/* Main Toggle Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
            isExpanded ? 'rotate-45' : ''
          }`}
        >
          {isExpanded ? (
            <X className="h-6 w-6 lg:h-7 lg:w-7" />
          ) : (
            <MessageCircle className="h-6 w-6 lg:h-7 lg:w-7 animate-pulse" />
          )}
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-20"></div>
        </button>

        {/* Contact Options */}
        <div className={`absolute bottom-16 lg:bottom-20 right-0 transition-all duration-300 ${
          isExpanded ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}>
          <div className="flex flex-col space-y-3">
            {/* WhatsApp Button */}
            <div className="relative group">
              <button
                onClick={handleWhatsAppClick}
                className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
              >
                <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6" />
              </button>
              
              {/* Tooltip */}
              <div className="absolute right-16 lg:right-18 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs lg:text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat on WhatsApp
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>

            {/* Call Button */}
            <div className="relative group">
              <button
                onClick={handleCallClick}
                className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
              >
                <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
              </button>
              
              {/* Tooltip */}
              <div className="absolute right-16 lg:right-18 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs lg:text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Call Us Now
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Badge */}
        {!isExpanded && (
          <div className="absolute -top-2 -left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
            Contact
          </div>
        )}
      </div>

      {/* Background overlay when expanded */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 -z-10"
          onClick={() => setIsExpanded(false)}
        ></div>
      )}
    </div>
  );
};

export default FloatingContactButtons;