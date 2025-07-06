import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Nirraj</span>
                <span className="text-xs text-red-400 font-medium">Packaging</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading manufacturer of high-quality packaging materials including polythene, air bubble rolls, EP foam, and more.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Manufacturing</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Air Bubble Roll/pouch</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Polybags/Rolls (LD) </Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">EP Foam/Fitment</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">BOPP Tape</Link></li>
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trading</h3>
            <ul className="space-y-2">
              <li><Link to="/trading" className="text-gray-300 hover:text-white transition-colors">Angle Board</Link></li>
              <li><Link to="/trading" className="text-gray-300 hover:text-white transition-colors">Special Tape</Link></li>
              <li><Link to="/trading" className="text-gray-300 hover:text-white transition-colors">Shrink Film</Link></li>
              <li><Link to="/trading" className="text-gray-300 hover:text-white transition-colors">Butter Paper</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300"> Industrial Area Bawal</p>
                  <p className="text-sm text-gray-300">Bhiwadi , Alwar</p>
                  <p className="text-sm text-gray-300">Rajasthan , 301019</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-sm text-gray-300">nirrajpackaging@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Nirraj Packaging. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;