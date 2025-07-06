import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Shield, Award } from 'lucide-react';
import bubble_roll from "../assets/air_bubble_category.jpg"
import ep_foam from "../assets/ep_foam_category.jpg"
import bp_tap from "../assets/bopp_tap_home.jpg"
import polybag from "../assets/polybag_catgory.jpg"
const Products = () => {
  const productCategories = [
    {
      name: 'Bubble Roll/pouch/bag ',
      description: 'Premium air bubble packaging solutions for secure shipping and storage protection with superior cushioning properties.',
      image: bubble_roll,
      slug: 'air-bubble-roll-packaging',
      productCount: 3,
      features: ['Multi-layer protection', 'Tear-resistant', 'Lightweight']
    },
    {
      name: 'Polybags (LD) ',
      description: 'High-quality polythene bags and rolls for various packaging and storage needs with excellent flexibility.',
      image: polybag,
      slug: 'polybags-rolls',
      productCount: 2,
      features: ['Chemical resistant', 'Flexible design', 'Multiple sizes']
    },
    {
      name: 'EP Foam/ Fitment',
      description: 'Expandable polystyrene foam solutions for lightweight and protective packaging applications.',
      image: ep_foam,
      slug: 'ep-foam-pouch-fitment',
      productCount: 2,
      features: ['Excellent insulation', 'Shock absorption', 'Custom molding']
    },
    {
      name: 'BOPP Tape',
      description: 'Durable adhesive tapes for secure packaging and sealing applications with superior adhesion.',
      image: bp_tap,
      slug: 'bopp-tape',
      productCount: 2,
      features: ['Strong adhesion', 'Weather resistant', 'Custom printing']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
     <section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 lg:py-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://media.istockphoto.com/id/1304681590/photo/product-showcase-with-spotlight-black-studio-room-background-use-as-montage-for-product.jpg?s=612x612&w=0&k=20&c=BdAqHE-XIlt-GUDooF-JNitKx1k94UfkUXeT-AHCbPE=')" }}
>
  <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div> {/* Optional overlay for better contrast */}
  <div className="relative container mx-auto px-4">
    <div className="text-center">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-6">Our Products</h1>
      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-blue-100 max-w-4xl mx-auto">
        Comprehensive range of premium packaging materials designed to meet diverse industry requirements with superior quality and reliability.
      </p>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="text-center">
              <Package className="h-8 w-8 lg:h-12 lg:w-12 text-blue-700 mx-auto mb-2 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">15+ Products</h3>
              <p className="text-sm lg:text-base text-gray-600">Comprehensive product range</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 lg:h-12 lg:w-12 text-blue-700 mx-auto mb-2 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">ISO Certified</h3>
              <p className="text-sm lg:text-base text-gray-600">Quality assured manufacturing</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 lg:h-12 lg:w-12 text-blue-700 mx-auto mb-2 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">15+ Years</h3>
              <p className="text-sm lg:text-base text-gray-600">Industry experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Product Categories
            </h2>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of packaging solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 lg:h-64 object-cover"
                  />
                </div>
                <div className="p-4 lg:p-8">
                  <div className="flex items-center justify-between mb-2 lg:mb-4">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900">{category.name}</h2>
                    <span className="bg-blue-100 text-blue-800 text-xs lg:text-sm px-2 lg:px-3 py-1 rounded-full font-medium">
                      {category.productCount} Products
                    </span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">{category.description}</p>
                  
                  <div className="mb-4 lg:mb-6">
                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">Key Features:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gray-100 text-gray-700 text-xs lg:text-sm px-2 lg:px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/products/${category.slug}`}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors inline-flex items-center text-sm lg:text-base"
                  >
                    View Products
                    <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section 
        className="relative py-12 lg:py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
            Need Custom Packaging Solutions?
          </h2>
          <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Our team of experts can help you find the perfect packaging solution for your specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center text-sm lg:text-base"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 h-3 w-3 lg:h-5 lg:w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;