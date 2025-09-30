import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import world_map from "../assets/world_map.jpg"
import map from "../assets/map.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://Niraajpackaging-1.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Industrial Area Khuskhera Bhiwadi\nAlwar, Rajasthan, 301707'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 95409-00043'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'pankajyadavniraaj@gmail.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  const serviceAreas = [
    {
      state: 'Gujarat',
    },
    {
      state: 'Haryana',
    },
    {
      state: 'Rajasthan',
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-green-900/90 to-green-700/90 text-white py-12 lg:py-20"
        style={{
  backgroundImage: `url(${world_map})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundBlendMode: 'overlay'
}}

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-85"></div>
        <motion.div 
          className="relative container mx-auto px-4"
          {...fadeInUp}
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-sm md:text-lg lg:text-xl xl:text-2xl text-green-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in touch with our team for quotes, product information, or any questions about our packaging solutions.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Information */}
      <motion.section 
        className="py-8 lg:py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="bg-green-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="h-6 w-6 lg:h-8 lg:w-8 text-green-700" />
                </motion.div>
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">{info.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 whitespace-pre-line">{info.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form and Image */}
      <motion.section 
        className="py-12 lg:py-18 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              {...fadeInLeft}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Send us a Message
              </motion.h2>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    </motion.div>
                    <p className="text-green-800">{statusMessage}</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                    </motion.div>
                    <p className="text-red-800">{statusMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4 lg:space-y-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Enter your full name', required: true },
                  { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'Enter your email address', required: true },
                  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', required: false }
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <label htmlFor={field.name} className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      disabled={isSubmitting}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base disabled:bg-gray-100 transition-all duration-200"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base disabled:bg-gray-100 transition-all duration-200"
                    placeholder="Tell us about your packaging needs..."
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm lg:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Send className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Image and Service Areas */}
            <motion.div
              {...fadeInRight}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Visit Our Facility
              </motion.h2>

              {/* Image Container */}
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-lg mb-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
               <img
  src={map}
  alt="Niraaj Packaging Facility"
  className="w-full h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] object-contain"
/>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Niraaj Packaging Pvt. Ltd.</h3>
                  <p className="text-gray-600 text-sm lg:text-base flex items-start">
                    <MapPin className="h-5 w-5 text-green-700 mr-2 flex-shrink-0 mt-0.5" />
                    Industrial Area Khuskhera Bhiwadi, Alwar, Rajasthan, 301707
                  </p>
                </div>
              </motion.div>

              
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;