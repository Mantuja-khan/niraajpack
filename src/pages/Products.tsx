import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Shield, Award } from 'lucide-react';
import bubble_roll from "../assets/air_bubble_category.jpg"
import ep_foam from "../assets/ep_fitment.png"
import bp_tap from "../assets/bopp_tap_home.jpg"
import polybag from "../assets/polybag_catgory.jpg"
import wordl_map from "../assets/world_map.jpg"

const Products = () => {
  const productCategories = [
    {
      name: 'Air Bubble Roll & Bags ',
      description: 'Air bubble packaging solutions for secure shipping and storage protection with superior cushioning properties.',
      image: bubble_roll,
      slug: 'air-bubble-roll-packaging',
      productCount: 4
    },
    {
      name: 'Polybags (LD) ',
      description: 'High-quality polythene bags and rolls for various packaging and storage needs with excellent flexibility.',
      image: polybag,
      slug: 'polybags-rolls',
      productCount: 5
    },
    {
      name: 'EP Foam/ Fitment',
      description: 'Expandable polystyrene foam solutions for lightweight and protective packaging applications.',
      image: ep_foam,
      slug: 'ep-foam-pouch-fitment',
      productCount: 4
    },
    {
      name: 'BOPP Tape',
      description: 'Durable adhesive tapes for secure packaging and sealing applications with superior adhesion.',
      image: bp_tap,
      slug: 'bopp-tape',
      productCount: 2
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${wordl_map})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6">
              Our Products
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-4xl mx-auto px-4">
              Comprehensive range of premium packaging materials designed to meet diverse industry requirements with superior quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4">
              <Package className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-700 mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">15+ Products</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Comprehensive product range</p>
            </div>
            <div className="text-center p-4">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-700 mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">ISO Certified</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Quality assured manufacturing</p>
            </div>
            <div className="text-center p-4">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-700 mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">15+ Years</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Industry experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - 3 columns on large screens */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 px-4">
              Product Categories
            </h2>
            <p className="text-xs sm:text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore our comprehensive range of packaging solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-2 lg:mb-3">
                    <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 flex-1 pr-2">
                      {category.name}
                    </h2>
                    <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium whitespace-nowrap">
                      {category.productCount} Products
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 lg:mb-5">
                    {category.description}
                  </p>
                  
                  <Link
                    to={`/products/${category.slug}`}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-xs sm:text-sm lg:text-base"
                  >
                    View Products
                    <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${wordl_map})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 px-4">
            Need Custom Packaging Solutions?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Our team of experts can help you find the perfect packaging solution for your specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center text-xs sm:text-sm lg:text-base"
          >
            Get Custom Quote
            <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;