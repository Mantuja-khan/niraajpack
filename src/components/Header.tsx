import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, ShoppingBag, Briefcase, Camera, Phone, Info } from 'lucide-react';
import logo from "../assets/logo_1.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const productCategories = [
    {
      name: 'Air Bubble Roll',
      slug: 'air-bubble-roll-packaging'
    },
    {
      name: 'Polybags / Rolls',
      slug: 'polybags-rolls'
    },
    {
      name: 'EP Foam / Fitment',
      slug: 'ep-foam-pouch-fitment'
    },
    {
      name: 'BOPP Tape',
      slug: 'bopp-tape'
    }
  ];

  const tradingItems = [
    { name: 'Angle Board', slug: 'angle-board' },
    { name: 'Double Sided Tissue Tape', slug: 'double-sided-tissue-tape' },
    { name: 'Shrink Film', slug: 'shrink-film' },
    { name: 'Self-Locking Polybag', slug: 'self-locking-polybag' },
    { name: 'PET Strip', slug: 'pet-strip' },
    { name: 'PP Strip', slug: 'pp-strip' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleProductClick = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            {/* Desktop Logo */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="relative">
                {/* Transparent Logo Image */}
                <img
                  src={logo}
                  alt="Niraaj Packaging Logo"
                  className="w-36 h-36 object-contain"
                />
              </div>
            </div>

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center space-x-2">
              <img
                src={logo}
                alt="Niraaj Packaging Logo"
                className="w-28 h-22 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" ref={dropdownRef}>
            <Link
              to="/"
              className={`text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors font-medium ${isActive('/') ? 'text-red-600 font-semibold' : ''
                }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors font-medium ${isActive('/about') ? 'text-red-600 font-semibold' : ''
                }`}
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <div className="flex items-center">
                <Link
                  to="/products"
                  className={`text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors font-medium ${location.pathname.startsWith('/products') ? 'text-red-600 font-semibold' : ''
                    }`}
                >
                  Manufacturing
                </Link>
                <button
                  onClick={() => toggleDropdown('products')}
                  className="ml-1 p-1"
                >
                  <ChevronDown className={`h-3 w-3 xl:h-4 xl:w-4 text-gray-700 hover:text-red-600 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-4">
                  {productCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/products/${category.slug}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      onClick={handleProductClick}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Trading Dropdown */}
            <div className="relative">
              <div className="flex items-center">
                <Link
                  to="/trading"
                  className={`text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors font-medium ${location.pathname.startsWith('/trading') ? 'text-red-600 font-semibold' : ''
                    }`}
                >
                  Trading
                </Link>
                <button
                  onClick={() => toggleDropdown('trading')}
                  className="ml-1 p-1"
                >
                  <ChevronDown className={`h-3 w-3 xl:h-4 xl:w-4 text-gray-700 hover:text-red-600 transition-transform ${activeDropdown === 'trading' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeDropdown === 'trading' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-4 max-h-80 overflow-y-auto">
                  {tradingItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/trading/${item.slug}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      onClick={handleProductClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className={`text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors font-medium ${isActive('/gallery') ? 'text-red-600 font-semibold' : ''
                }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`text-sm xl:text-base text-gray-700 hover:text-red-600 transition-colors font-medium ${isActive('/contact') ? 'text-red-600 font-semibold' : ''
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-red-500 to-red-600">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-none">Nirraj</span>
                <span className="text-xs text-red-100 font-medium">Packaging</span>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-red-600 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="p-4 h-full overflow-y-auto">
            <nav className="space-y-2">
              {/* Home */}
              <Link
                to="/"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive('/')
                    ? 'bg-red-50 text-red-700 border-l-4 border-red-700'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Home</span>
              </Link>

              {/* About */}
              <Link
                to="/about"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive('/about')
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="h-5 w-5" />
                <span className="font-medium">About</span>
              </Link>

              {/* Products */}
              <div>
                <Link
                  to="/products"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname.startsWith('/products')
                      ? 'bg-red-50 text-red-700 border-l-4 border-red-700'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="font-medium">Manufacturing</span>
                </Link>
                <div className="ml-8 mt-2 space-y-1">
                  {productCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/products/${category.slug}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      • {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trading */}
              <div>
                <Link
                  to="/trading"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname.startsWith('/trading')
                      ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-700'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">Trading</span>
                </Link>
                <div className="ml-8 mt-2 space-y-1 max-h-60 overflow-y-auto">
                  {tradingItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/trading/${item.slug}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      • {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <Link
                to="/gallery"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive('/gallery')
                    ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-700'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Camera className="h-5 w-5" />
                <span className="font-medium">Gallery</span>
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive('/contact')
                    ? 'bg-green-50 text-green-700 border-l-4 border-green-700'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;