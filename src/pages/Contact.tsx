import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import map from "../assets/map.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section with New Background */}
      <section 
        className="relative bg-gradient-to-r from-green-900/90 to-green-700/90 text-white py-12 lg:py-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-6">Contact Us</h1>
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-green-100 max-w-3xl mx-auto">
              Get in touch with our team for quotes, product information, or any questions about our packaging solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <MapPin className="h-6 w-6 lg:h-8 lg:w-8 text-green-700" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Address</h3>
              <p className="text-sm lg:text-base text-gray-600">Industrial Area Bawal Bhiwadi<br />Alwar, Rajasthan, 301019</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <Phone className="h-6 w-6 lg:h-8 lg:w-8 text-green-700" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Phone</h3>
              <p className="text-sm lg:text-base text-gray-600">+91 766-5556-786</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <Mail className="h-6 w-6 lg:h-8 lg:w-8 text-green-700" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Email</h3>
              <p className="text-sm lg:text-base text-gray-600">nirrajpackaging@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-green-700" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Hours</h3>
              <p className="text-sm lg:text-base text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 lg:py-18 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">Send us a Message</h2>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <p className="text-green-800">{statusMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                  <p className="text-red-800">{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base disabled:bg-gray-100"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base disabled:bg-gray-100"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base disabled:bg-gray-100"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm lg:text-base disabled:bg-gray-100"
                    placeholder="Tell us about your packaging needs..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm lg:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* India Map and Info */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">Our Locations</h2>

              {/* Actual India Map Image with highlighted states */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 lg:mb-6 p-4">
                <div className="relative">
                  <img
                    src={map}
                    alt="India Map"
                    className="w-full h-[450px] lg:h-[600px] object-contain rounded-lg" // Increased height
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    We serve customers across Gujarat, Haryana, and Rajasthan with our premium packaging solutions.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;