import React, { useState, useEffect } from 'react';

import { ArrowRight, Shield, Truck, Award, Star } from 'lucide-react';

// Mock Link component for demonstration

// Your original image imports
import polybag from "../assets/polybag_home.jpg"
import ep_foam_roll from "../assets/EP_foam_roll_home.jpg"
import bubble_roll from "../assets/air_bubble_home.jpg"
import tap from "../assets/bopp_tap_home.jpg"
import hero_background from "../assets/background_1.jpg"
import standupman from "../assets/standupman.png"
import hero_image from "../assets/hero_main.png"

const Link = ({ to, className, children, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const products = [
    {
      name: 'Air Bubble Roll ',
      description: 'Premium air bubble packaging solutions for secure shipping and storage.',
      image: bubble_roll,
      link: '/products/air-bubble-roll-packaging'
    },
    {
      name: 'Polybags & Rolls',
      description: 'High-quality polythene bags and rolls for various packaging needs.',
      image: polybag,
      link: '/products/polybags-rolls'
    },
    {
      name: 'EP Foams',
      description: 'Expandable polystyrene foam for lightweight and protective packaging.',
      image: ep_foam_roll,
      link: '/products/ep-foam-pouch-fitment'
    },
    {
      name: 'BOPP Tape',
      description: 'Durable adhesive tapes for secure packaging and sealing applications.',
      image: tap,
      link: '/products/bopp-tape'
    }
  ];

  const testimonials = [
    {
      name: 'Vikash Kumar',
      company: 'LogiTech Solutions',
      quote: 'Nirraj Packaging has been our reliable packaging partner for over 3 years. Their air bubble rolls provide excellent protection for our electronic components.',
      rating: 5
    },
    {
      name: 'Kamal Sharma',
      company: 'GreenEarth Exports',
      quote: 'Outstanding quality and timely delivery. Their EP foam solutions have significantly reduced our shipping damages.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Artisan Crafts Co.',
      quote: 'The custom polybags exceeded our expectations. Great customer service and competitive pricing.',
      rating: 5
    },
    {
      name: 'Manoj Kumar',
      company: 'TechFlow Industries',
      quote: 'Professional service and high-quality products. Nirraj understands our packaging requirements perfectly.',
      rating: 5
    }
  ];

  // Auto-scroll testimonials on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* Hero Section with Blur Background */}
      <section className="relative text-white min-h-screen flex items-center">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${hero_background})`
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                Premium Packaging Solutions for Every Industry
              </h1>
              <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-6 lg:mb-8 text-white/90">
                Leading manufacturer of high-quality packaging materials including air bubble rolls, polythene products, EP foam, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Link
                  to="/products"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
                >
                  View Our Products
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Hero Image - Enhanced Size */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={hero_image}
                  alt="Packaging Manufacturing"
                  className="w-full h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                About Nirraj Packaging
              </h2>
              <p className="text-sm lg:text-lg text-gray-600 mb-4 lg:mb-6">
                With over 15 years of experience in the packaging industry, Nirraj Packaging has established itself as a trusted manufacturer of premium packaging materials. We specialize in producing high-quality air bubble rolls, polythene products, EP foam solutions, and adhesive tapes.
              </p>
              <p className="text-sm lg:text-lg text-gray-600 mb-6 lg:mb-8">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for businesses across various industries including electronics, pharmaceuticals, food processing, and e-commerce.
              </p>
              
              {/* Features - Horizontal on all screens */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
                <div className="text-center">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-red-700 mx-auto mb-2" />
                  <h3 className="text-xs md:text-sm lg:text-base font-semibold text-gray-900">Quality Assured</h3>
                  <p className="text-xs lg:text-sm text-gray-600">ISO certified manufacturing</p>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-red-700 mx-auto mb-2" />
                  <h3 className="text-xs md:text-sm lg:text-base font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-xs lg:text-sm text-gray-600">Regional shipping</p>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-red-700 mx-auto mb-2" />
                  <h3 className="text-xs md:text-sm lg:text-base font-semibold text-gray-900">15+ Years</h3>
                  <p className="text-xs lg:text-sm text-gray-600">Industry experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={standupman}
                alt="Manufacturing facility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Our Product Range
            </h2>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive packaging solutions designed to meet diverse industry requirements with superior quality and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 lg:h-48 object-cover"
                  />
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">{product.name}</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">{product.description}</p>
                  <Link
                    to={product.link}
                    className="text-red-700 hover:text-red-900 font-medium inline-flex items-center text-sm lg:text-base"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our products and services.
            </p>
          </div>
          
          {/* Desktop and Tablet View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 lg:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3 lg:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-sm lg:text-base font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs lg:text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Auto-scrolling */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-gray-50 rounded-lg p-4 shadow-lg">
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-3 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-red-700' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section 
        className="relative py-12 lg:py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-red-700 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Contact us today for a custom quote or to learn more about our premium packaging solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
            >
              Get Quote Now
              <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
            </Link>
            <Link
              to="/products"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;