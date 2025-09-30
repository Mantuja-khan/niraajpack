import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Shield, Truck, Award, Star } from 'lucide-react';

// Mock Link component for demonstration

// Your original image imports
import polybag from "../assets/polybags.webp"
import ep_foam_roll from "../assets/EP_foam_roll_home.jpg"
import bubble_roll from "../assets/bubble_1.jpg"
import tap from "../assets/bopp_tap_home.jpg"
// import air_bubble from "../assets/air_bubble_1.jpg"
import map from "../assets/map.png"
import world_map from "../assets/world_map.jpg"
import hero_image from "../assets/hero_main.png"

const Link = ({ to, className, children, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

// Animation variants - Slower speeds
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.2, ease: "easeOut" }
};

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollYProgress } = useScroll();

  // Parallax effect for hero background
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const products = [
    {
      name: 'Air Bubble Roll ',
      description: 'Premium air bubble packaging solutions for secure shipping....',
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
      description: 'Expandable polystyrene foam for lightweight and protective...',
      image: ep_foam_roll,
      link: '/products/ep-foam-pouch-fitment'
    },
    {
      name: 'BOPP Tape',
      description: 'Durable adhesive tapes for secure packaging and sealing....',
      image: tap,
      link: '/products/bopp-tape'
    }
  ];

  const testimonials = [
    {
      name: 'Vikash Kumar',
      company: 'LogiTech Solutions',
      quote: 'Niraaj Packaging has been our reliable packaging partner for over 3 years. Their air bubble rolls provide excellent protection for our electronic components.',
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
      quote: 'Professional service and high-quality products. Niraaj understands our packaging requirements perfectly.',
      rating: 5
    }
  ];

  // Auto-scroll testimonials on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* Hero Section with Blur Background */}
      <section className="relative text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Blur and Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${world_map})`
          }}
        ></motion.div>

        {/* Overlay */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 bg-black/40"
        ></motion.div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, staggerChildren: 0.3 }}
            >
              <motion.h1
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight"
              >
                <span className="text-orange-600">NIRAAJ PACKAGING</span>{" "}
                <span className="text-black">PVT. LTD.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-6 lg:mb-8 text-black"
              >
                Leading manufacturer of high-quality packaging materials including air bubble rolls,
                polythene products, EP foam, and more with Niraaj Packaging Pvt. Ltd.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/products"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
                  >
                    View Our Products
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
                  >
                    Get Best Price
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Image - Enhanced Size */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={hero_image}
                  alt="Packaging Manufacturing"
                  className="w-full h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] object-cover rounded-lg "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8 leading-tight"
              >
                About Niraaj Packaging
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-600 mb-4 md:mb-6 lg:mb-8 leading-relaxed"
              >
                With over 15 years of experience in the packaging industry, Niraaj Packaging has established itself as a trusted manufacturer of premium packaging materials. We specialize in producing high-quality air bubble rolls, polythene products, EP foam solutions, and adhesive tapes.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-600 mb-6 md:mb-8 lg:mb-10 leading-relaxed"
              >
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for businesses across various industries including electronics, pharmaceuticals, food processing, and e-commerce.
              </motion.p>

              {/* Features - Responsive design */}
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-r from-red-50 to-red-100 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-lg w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-full"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 text-center">
                  Service Areas
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-gray-700 text-center mb-3 md:mb-4">
                  We provide packaging materials across
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                  <span className="bg-red-700 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-transform hover:scale-105">
                    Rajasthan
                  </span>
                  <span className="bg-red-700 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-transform hover:scale-105">
                    Haryana
                  </span>
                  <span className="bg-red-700 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-transform hover:scale-105">
                    Gujarat
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex flex-col items-center order-1 lg:order-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full mb-6 md:mb-8"
              >
                <img
                  src={map}
                  alt="Manufacturing facility"
                  className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] rounded-xl shadow-2xl object-cover transition-shadow duration-300 hover:shadow-3xl"
                />


              </motion.div>

              {/* Service Area Information */}

            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 lg:mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Our Product Range
            </h2>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive packaging solutions designed to meet diverse industry requirements with superior quality and reliability.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              staggerChildren: 0.2
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.0,
                  ease: "easeOut",
                  delay: index * 0.2
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.4 }
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
               <div className="aspect-w-16 aspect-h-9 overflow-hidden">
  <motion.img
    src={product.image}
    alt={product.name}
    className="w-full h-40 lg:h-48 object-cover scale-95"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  />
</div>

                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">{product.name}</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">{product.description}</p>
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={product.link}
                      className="text-red-700 hover:text-red-900 font-medium inline-flex items-center text-sm lg:text-base"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section with Background Image */}
      <section
        className="relative py-12 lg:py-20 text-white overflow-hidden"
        style={{
  backgroundImage: `url(${world_map})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-red-700 bg-opacity-85"></div>
        <motion.div
          className="relative container mx-auto px-4 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto"
          >
            Contact us today for a custom quote or to learn more about our premium packaging solutions.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
              >
                Get Quote Now
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
              >
                Browse Products
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;