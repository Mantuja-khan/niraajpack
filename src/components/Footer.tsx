import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from "../assets/logo_1.png"
import world_map from "../assets/world_map.jpg"

const Footer = () => {
  return (
    <footer className="relative bg-green-900 text-black overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${world_map})`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }}
      ></div>


      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>

      {/* Content Layer - This stays sharp */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-[200px] h-[100px] rounded-lg overflow-hidden">
                <img
                  src={logo} // <-- Replace with your logo path
                  alt="Niraaj Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
              </div>
            </div>

            <p className="text-gray-800 mb-4">
              Leading manufacturer of high-quality packaging materials including polythene, air bubble rolls, EP foam, and more.
            </p>
            
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Manufacturing</h3>
            <ul className="space-y-2">
              <li><Link to="/products/air-bubble-roll-packaging" className="text-gray-800 hover:text-black transition-colors">Air Bubble Roll/pouch</Link></li>
              <li><Link to="/products/polybags-rolls" className="text-gray-800 hover:text-black transition-colors">Polybags/Rolls (LD) </Link></li>
              <li><Link to="/products/ep-foam-pouch-fitment" className="text-gray-800 hover:text-black transition-colors">EP Foam/Fitment</Link></li>
              <li><Link to="/products/bopp-tape" className="text-gray-800 hover:text-black transition-colors">BOPP Tape</Link></li>
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Trading</h3>
            <ul className="space-y-2">
              <li><Link to="/trading/angle-board" className="text-gray-800 hover:text-black transition-colors">Angle Board</Link></li>
              <li><Link to="/trading/machine-tape" className="text-gray-800 hover:text-black transition-colors">Special Tape</Link></li>
              <li><Link to="/trading/shrink-film" className="text-gray-800 hover:text-black transition-colors">Shrink Film</Link></li>
              <li><Link to="/trading/butter-paper" className="text-gray-800 hover:text-black transition-colors">Butter Paper</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-800"> Industrial Area Khuskhera</p>
                  <p className="text-sm text-gray-800">Bhiwadi , Alwar</p>
                  <p className="text-sm text-gray-800">Rajasthan , 301707</p>
                </div>
              </div>
              <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-sm text-black">+91 95402-00028</span>
              </div>
            </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="text-sm text-gray-800">pankajyadavniraaj@gmail.com</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;