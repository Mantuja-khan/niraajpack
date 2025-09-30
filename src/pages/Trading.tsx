import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, MessageSquare } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import angle_board from "../assets/angle_board.png";
import double_sided from "../assets/double_tap.png";
import shrink_film from "../assets/shrink_film_pof.png";
import self_locking from "../assets/self_looking_ploybag.png";
import pp_strip from "../assets/pp_strip.png";
import pet_strip from "../assets/pet_strip.png"
import world_map from "../assets/world_map.jpg"

const Trading = () => {
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    productName: '',
    productImage: '',
    productCategory: ''
  });

  const openEnquiryModal = (productName, productImage) => {
    setEnquiryModal({
      isOpen: true,
      productName,
      productImage,
      productCategory: 'Trading Products'
    });
  };

  const closeEnquiryModal = () => {
    setEnquiryModal({
      isOpen: false,
      productName: '',
      productImage: '',
      productCategory: ''
    });
  };

  const tradingProducts = [
    {
      name: 'Angle Board',
      description: 'Protective corner boards for secure packaging and edge protection.',
      image: angle_board,
      slug: 'angle-board',
      tag: 'Protection'
    },
    {
      name: 'Double Sided Tissue Tape',
      description: 'High-performance double-sided tissue tape for permanent mounting.',
      image: double_sided,
      slug: 'double-sided-tissue-tape',
      tag: 'Special Tape'
    },
    {
      name: 'Shrink Film',
      description: 'High-quality shrink wrap films for product bundling.',
      image: shrink_film,
      slug: 'shrink-film',
      tag: 'Film'
    },
    {
      name: 'Self-Locking Polybag',
      description: 'Convenient self-sealing polybags for easy packaging.',
      image: self_locking,
      slug: 'self-locking-polybag',
      tag: 'Bags'
    },
    {
      name: 'PET Strip',
      description: 'High-strength polyester strapping for heavy-duty packaging.',
      image: pet_strip,
      slug: 'pet-strip',
      tag: 'Strapping'
    },
    {
      name: 'PP Strip',
      description: 'Polypropylene strapping offering excellent strength.',
      image: pp_strip,
      slug: 'pp-strip',
      tag: 'Strapping'
    },
  ];

  // Function to get tag color
  const getTagColor = (tag) => {
    switch (tag) {
      case 'Special Tape':
        return 'bg-red-100 text-red-800';
      case 'Strapping':
        return 'bg-blue-100 text-blue-800';
      case 'Film':
        return 'bg-green-100 text-green-800';
      case 'Paper':
        return 'bg-yellow-100 text-yellow-800';
      case 'Bags':
        return 'bg-purple-100 text-purple-800';
      case 'Office':
        return 'bg-gray-100 text-gray-800';
      case 'Protection':
        return 'bg-orange-100 text-orange-800';
      case 'Cushioning':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-teal-100 text-teal-800';
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-teal-900 to-teal-700 text-white py-12 md:py-16 lg:py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${world_map})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/90"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trading Products
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-teal-100 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive range of specialized packaging and industrial products sourced from trusted suppliers to meet your diverse business needs.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Trading Products */}
      <motion.section 
        id="special-tapes" 
        className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {tradingProducts.map((product, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                layout
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="aspect-w-16 aspect-h-9"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
                    />
                  </motion.div>
                  
                  {/* Product Tag */}
                  <motion.div 
                    className="absolute top-2 left-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getTagColor(product.tag)}`}>
                      {product.tag}
                    </span>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-4 sm:p-5 lg:p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.h3 
                    className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3"
                    whileHover={{ color: '#0d9488' }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.name}
                  </motion.h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 lg:mb-5">
                    {product.description}
                  </p>

                  {/* Action Buttons - Horizontal Layout */}
                  <motion.div 
                    className="grid grid-cols-2 gap-2 sm:gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {/* View Details Button */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to={`/trading/${product.slug}`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transition-colors text-center flex items-center justify-center text-xs sm:text-sm"
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5 flex-shrink-0" />
                        <span className="truncate">View Details</span>
                      </Link>
                    </motion.div>
                    
                    {/* Send Enquiry Button */}
                    <motion.button
                      onClick={() => openEnquiryModal(product.name, product.image)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transition-colors text-center flex items-center justify-center text-xs sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5 flex-shrink-0" />
                      <span className="truncate">Enquiry</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative py-12 sm:py-16 md:py-20 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${world_map})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 bg-teal-700 bg-opacity-85"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are here to help you and Looking for Bulk Orders?
          </motion.h2>
          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get competitive pricing on bulk orders and enjoy dedicated customer support for all your trading needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center text-xs sm:text-sm lg:text-base"
            >
              Request Bulk Quote
              <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={closeEnquiryModal}
        productName={enquiryModal.productName}
        productImage={enquiryModal.productImage}
        productCategory={enquiryModal.productCategory}
      />
    </div>
  );
};

export default Trading;