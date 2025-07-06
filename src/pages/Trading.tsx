// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { ArrowRight, Package, Shield, Truck, Star, MessageSquare } from 'lucide-react';
// import angle_board from "../assets/angle_board.png"
// import double_sided from "../assets/double_tap.png"
// import machine_tap from "../assets/machine_tap.png"
// import masking_tap from "../assets/masking_tap.png"
// import shrink_film from "../assets/shrink_film_pof.png"
// import butter_paper from "../assets/butter_paper.png"
// import self_locking from "../assets/self_looking_ploybag.png"
// import clean_film from "../assets/clean_film.png"
// import plastic_strip from "../assets/plastic_strip.png"
// import pp_strip from "../assets/pp_strip.png"
// import air_pillow from "../assets/air_pillow.png"
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Package, Shield, Truck, Star, MessageSquare, Eye } from 'lucide-react';
// import EnquiryModal from '../components/EnquiryModal';

// const Trading = () => {
//   const [enquiryModal, setEnquiryModal] = useState({
//     isOpen: false,
//     productName: '',
//     productImage: '',
//     productCategory: ''
//   });

//   const openEnquiryModal = (productName: string, productImage: string) => {
//     setEnquiryModal({
//       isOpen: true,
//       productName,
//       productImage,
//       productCategory: 'Trading Products'
//     });
//   };

//   const closeEnquiryModal = () => {
//     setEnquiryModal({
//       isOpen: false,
//       productName: '',
//       productImage: '',
//       productCategory: ''
//     });
//   };

//   const tradingProducts = [
//     {
//       name: 'Angle Board',
//       description: 'Protective corner boards for secure packaging and edge protection during shipping.',
//       image: angle_board,
//       slug: 'angle-board',
//       features: ['High compression strength', 'Moisture resistant', 'Eco-friendly material'],
//       rating: 4.8,
//       tag: 'Protection',
//       details: [
//         'Made from recycled cardboard materials',
//         'Available in various sizes and thicknesses',
//         'Provides excellent corner protection'
//       ]
//     },
//     {
//       name: 'Double Sided Tissue Tape',
//       description: 'High-performance double-sided tissue tape for permanent mounting and assembly applications.',
//       image: double_sided,
//       slug: 'double-sided-tissue-tape',
//       features: ['Strong dual adhesion', 'Permanent bonding', 'Weather resistant'],
//       rating: 4.8,
//       tag: 'Special Tape',
//       details: [
//         'Color: White',
//         'Tape Length: 20-30m, 0-10m, 1-10m, 10-20m',
//         'Tape Width: 0-20mm',
//         'Thickness: 0.073mm',
//         'Adhesion Value: 950 N/m',
//         'Tensile Strength: 3.6 kN/m',
//         'Temperature Resistance: 70°C'
//       ]
//     },
//     {
//       name: 'Machine Tape',
//       description: 'Specialized tape designed for automated packaging machinery and high-speed operations.',
//       image: machine_tap,
//       slug: 'machine-tape',
//       features: ['Machine optimized', 'Consistent unwind', 'High-speed performance'],
//       rating: 4.7,
//       tag: 'Special Tape',
//       details: [
//         'Type: Single Sided, Double Sided',
//         'Usage/Application: Sealing',
//         'Tape Length: 0-10m',
//         'Tape Width: 0-20mm, 20-40mm, 40-60mm, 60-80mm, 80-100mm, >100mm',
//         'Length(m): 10 meter',
//         'Width(mm): 1-3 Inches'
//       ]
//     },
//     {
//       name: 'Masking Tape',
//       description: 'Premium masking tape for painting, surface protection, and general applications.',
//       image: masking_tap,
//       slug: 'masking-tape',
//       features: ['Clean removal', 'Paint line definition', 'UV resistant'],
//       rating: 4.6,
//       tag: 'Special Tape',
//       details: [
//         'Color: White',
//         'Type: Single Sided',
//         'Size: 20 Mtr and 30 Mtr',
//         'Usage: Decoration',
//         'Thickness: 0.15mm',
//         'Material: Crepe Tape'
//       ]
//     },
//     {
//       name: 'Shrink Film',
//       description: 'High-quality shrink wrap films for product bundling and protection.',
//       image: shrink_film,
//       slug: 'shrink-film',
//       features: ['Excellent clarity', 'High shrink ratio', 'Puncture resistant'],
//       rating: 4.7,
//       tag: 'Film',
//       details: [
//         'Available in PVC, POF, and PE materials',
//         'Excellent optical clarity',
//         'Consistent shrinkage properties'
//       ]
//     },
//     {
//       name: 'Butter Paper',
//       description: 'Food-grade grease-resistant paper for food packaging and wrapping.',
//       image: butter_paper,
//       slug: 'butter-paper',
//       features: ['Food safe', 'Grease resistant', 'Biodegradable'],
//       rating: 4.6,
//       tag: 'Paper',
//       details: [
//         'Made from pure wood pulp',
//         'Natural grease resistance',
//         'Food-grade silicone coating'
//       ]
//     },
//     {
//       name: 'Self-Locking Polybag',
//       description: 'Convenient self-sealing polybags for easy packaging and storage.',
//       image: self_locking,
//       slug: 'self-locking-polybag',
//       features: ['Easy self-sealing', 'Reusable', 'Transparent design'],
//       rating: 4.8,
//       tag: 'Bags',
//       details: [
//         'Integrated locking mechanism',
//         'Tamper-evident design',
//         'Available in multiple sizes'
//       ]
//     },
//      {
//       name: 'Clean Film',
//       description: 'Premium quality protective films for surface protection and document preservation.',
//       image: clean_film,
//       slug: 'clean-film',
//       features: ['Surface protection', 'Crystal clear', 'Easy application'],
//       rating: 4.5,
//       tag: 'Film',
//       details: [
//         'Protective film for various surfaces',
//         'Crystal clear transparency',
//         'Easy application and removal'
//       ]
//     },
//     {
//       name: 'PET Strip',
//       description: 'High-strength polyester strapping for heavy-duty packaging applications.',
//       image: "https://www.manglamsafpack.com/img/products/pet-strip.png",
//       slug: 'pet-strip',
//       features: ['High tensile strength', 'Weather resistant', 'Recyclable'],
//       rating: 4.8,
//       tag: 'Strapping',
//       details: [
//         'Excellent shock absorption',
//         'Safe handling with smooth edges',
//         'Suitable for automated machines'
//       ]
//     },
//     {
//       name: 'Plastic Strip',
//       description: 'Versatile plastic strapping for general packaging and bundling needs.',
//       image: plastic_strip,
//       slug: 'plastic-strip',
//       features: ['Lightweight', 'Good flexibility', 'Corrosion resistant'],
//       rating: 4.6,
//       tag: 'Strapping',
//       details: [
//         'Polypropylene construction',
//         'Easy to handle and cut',
//         'Multiple color options'
//       ]
//     },
//     {
//       name: 'PP Strip',
//       description: 'Polypropylene strapping offering excellent strength and cost-effectiveness.',
//       image: pp_strip,
//       slug: 'pp-strip',
//       features: ['Excellent strength-to-weight', 'UV stabilized', 'Easy splicing'],
//       rating: 4.7,
//       tag: 'Strapping',
//       details: [
//         'Superior elongation recovery',
//         'Chemical resistance',
//         'Available in embossed finish'
//       ]
//     },
//     {
//       name: 'Air Pillow',
//       description: 'Inflatable air pillows for void fill and cushioning protection during shipping.',
//       image: air_pillow,
//       slug: 'air-pillow',
//       features: ['Excellent void fill', 'Lightweight', 'Puncture resistant'],
//       rating: 4.9,
//       tag: 'Cushioning',
//       details: [
//         'Space-saving storage before inflation',
//         'Excellent air retention properties',
//         'Environmentally friendly alternative'
//       ]
//     }
//   ];

//   // Function to get tag color
//   const getTagColor = (tag: string) => {
//     switch (tag) {
//       case 'Special Tape':
//         return 'bg-red-100 text-red-800';
//       case 'Strapping':
//         return 'bg-blue-100 text-blue-800';
//       case 'Film':
//         return 'bg-green-100 text-green-800';
//       case 'Paper':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'Bags':
//         return 'bg-purple-100 text-purple-800';
//       case 'Office':
//         return 'bg-gray-100 text-gray-800';
//       case 'Protection':
//         return 'bg-orange-100 text-orange-800';
//       case 'Cushioning':
//         return 'bg-indigo-100 text-indigo-800';
//       default:
//         return 'bg-teal-100 text-teal-800';
//     }
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-12 lg:py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center">
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-6">Trading Products</h1>
//             <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-teal-100 max-w-4xl mx-auto">
//               Comprehensive range of specialized packaging and industrial products sourced from trusted suppliers to meet your diverse business needs.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-8 lg:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
//             <div className="text-center">
//               <Package className="h-8 w-8 lg:h-12 lg:w-12 text-teal-700 mx-auto mb-2 lg:mb-4" />
//               <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">Quality Assured</h3>
//               <p className="text-sm lg:text-base text-gray-600">All products undergo rigorous quality testing before delivery</p>
//             </div>
//             <div className="text-center">
//               <Shield className="h-8 w-8 lg:h-12 lg:w-12 text-teal-700 mx-auto mb-2 lg:mb-4" />
//               <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">Trusted Suppliers</h3>
//               <p className="text-sm lg:text-base text-gray-600">Sourced from certified and reliable manufacturing partners</p>
//             </div>
//             <div className="text-center">
//               <Truck className="h-8 w-8 lg:h-12 lg:w-12 text-teal-700 mx-auto mb-2 lg:mb-4" />
//               <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">Fast Delivery</h3>
//               <p className="text-sm lg:text-base text-gray-600">Efficient logistics network ensuring timely deliveries</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Special Tape CTA Section */}
//       <section 
//         className="relative py-12 lg:py-16 text-white"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=1200)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         <div className="absolute inset-0 bg-red-700 bg-opacity-85"></div>
//         <div className="relative container mx-auto px-4 text-center">
//           <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
//             Special Tape Collection
//           </h2>
//           <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
//             Discover our premium range of specialized adhesive tapes designed for industrial and commercial applications.
//           </p>
//           <Link
//             to="#special-tapes"
//             className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center text-sm lg:text-base"
//           >
//             View Special Tapes
//             <ArrowRight className="ml-2 h-3 w-3 lg:h-5 lg:w-5" />
//           </Link>
//         </div>
//       </section>

//       {/* Trading Products */}
//       <section id="special-tapes" className="py-12 lg:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8 lg:mb-16">
//             <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
//               Our Trading Portfolio
//             </h2>
//             <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
//               Discover our extensive range of trading products designed to complement your packaging requirements.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
//             {tradingProducts.map((product, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                 <div className="relative">
//                   <div className="aspect-w-16 aspect-h-9">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-32 md:h-40 lg:h-48 object-cover"
//                     />
//                   </div>
//                   {/* Product Tag */}
//                   <div className="absolute top-2 left-2">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(product.tag)}`}>
//                       {product.tag}
//                     </span>
//                   </div>
//                   {/* Rating */}
//                   <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1">
//                     <div className="flex items-center">
//                       <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
//                       <span className="text-xs lg:text-sm text-gray-600 ml-1">{product.rating}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-3 lg:p-6">
//                   <h3 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">{product.name}</h3>
//                   <p className="text-xs lg:text-base text-gray-600 mb-2 lg:mb-4">{product.description}</p>
                  
//                   <div className="mb-3 lg:mb-4">
//                     <h4 className="text-xs lg:text-sm font-semibold text-gray-900 mb-1 lg:mb-2">Key Features:</h4>
//                     <ul className="text-xs lg:text-sm text-gray-600 space-y-1">
//                       {product.features.map((feature, featureIndex) => (
//                         <li key={featureIndex} className="flex items-center">
//                           <ArrowRight className="h-2 w-2 lg:h-3 lg:w-3 text-teal-700 mr-2 flex-shrink-0" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mb-3 lg:mb-4">
//                     <h4 className="text-xs lg:text-sm font-semibold text-gray-900 mb-1 lg:mb-2">Product Details:</h4>
//                     <ul className="text-xs lg:text-sm text-gray-600 space-y-1">
//                       {product.details.slice(0, 2).map((detail, detailIndex) => (
//                         <li key={detailIndex} className="flex items-start">
//                           <span className="text-teal-700 mr-2">•</span>
//                           {detail}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Quality Badges - Responsive Layout */}
//                   <div className="grid grid-cols-3 gap-1 lg:gap-2 mb-3 lg:mb-4">
//                     <div className="text-center p-1 lg:p-2 bg-teal-50 rounded">
//                       <Package className="h-3 w-3 lg:h-4 lg:w-4 text-teal-700 mx-auto mb-1" />
//                       <p className="text-xs font-medium text-gray-900">Quality</p>
//                     </div>
//                     <div className="text-center p-1 lg:p-2 bg-teal-50 rounded">
//                       <Truck className="h-3 w-3 lg:h-4 lg:w-4 text-teal-700 mx-auto mb-1" />
//                       <p className="text-xs font-medium text-gray-900">Fast</p>
//                     </div>
//                     <div className="text-center p-1 lg:p-2 bg-teal-50 rounded">
//                       <Shield className="h-3 w-3 lg:h-4 lg:w-4 text-teal-700 mx-auto mb-1" />
//                       <p className="text-xs font-medium text-gray-900">Trusted</p>
//                     </div>
//                   </div>

//                   {/* Action Buttons - Three buttons layout */}
//                   <div className="grid grid-cols-1 gap-2">
//                     {/* View Details Button */}
//                     <Link
//                       to={`/trading/${product.slug}`}
//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-center flex items-center justify-center text-xs lg:text-sm"
//                     >
//                       <Eye className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
//                       View Details
//                     </Link>
                    
//                     {/* Send Enquiry and Get Quote buttons */}
//                     <div className="grid grid-cols-2 gap-2">
//                       <button
//                         onClick={() => openEnquiryModal(product.name, product.image)}
//                         className="bg-red-600 hover:bg-red-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-center flex items-center justify-center text-xs lg:text-sm"
//                       >
//                         <MessageSquare className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
//                         Enquiry
//                       </button>
//                       <Link
//                         to="/contact"
//                         className="bg-teal-700 hover:bg-teal-800 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-center inline-flex items-center justify-center text-xs lg:text-sm"
//                       >
//                         Quote
//                         <ArrowRight className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section with Background Image */}
//       <section 
//         className="relative py-12 lg:py-20 text-white"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/3985063/pexels-photo-3985063.jpeg?auto=compress&cs=tinysrgb&w=1200)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         <div className="absolute inset-0 bg-teal-700 bg-opacity-85"></div>
//         <div className="relative container mx-auto px-4 text-center">
//           <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
//             Looking for Bulk Orders?
//           </h2>
//           <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
//             Get competitive pricing on bulk orders and enjoy dedicated customer support for all your trading needs.
//           </p>
//           <Link
//             to="/contact"
//             className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center text-sm lg:text-base"
//           >
//             Request Bulk Quote
//             <ArrowRight className="ml-2 h-3 w-3 lg:h-5 lg:w-5" />
//           </Link>
//         </div>
//       </section>

//       {/* Enquiry Modal */}
//       <EnquiryModal
//         isOpen={enquiryModal.isOpen}
//         onClose={closeEnquiryModal}
//         productName={enquiryModal.productName}
//         productImage={enquiryModal.productImage}
//         productCategory={enquiryModal.productCategory}
//       />
//     </div>
//   );
// };

// export default Trading;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Shield, Truck, Star, MessageSquare, Eye } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
 import angle_board from "../assets/angle_board.png"
import double_sided from "../assets/double_tap.png"
import machine_tap from "../assets/machine_tap.png"
import masking_tap from "../assets/masking_tap.png"
import shrink_film from "../assets/shrink_film_pof.png"
import butter_paper from "../assets/butter_paper.png"
import self_locking from "../assets/self_looking_ploybag.png"
import clean_film from "../assets/clean_film.png"
import plastic_strip from "../assets/plastic_strip.png"
import pp_strip from "../assets/pp_strip.png"
import air_pillow from "../assets/air_pillow.png"

const Trading = () => {
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    productName: '',
    productImage: '',
    productCategory: ''
  });

  const openEnquiryModal = (productName: string, productImage: string) => {
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

  // UPDATED: Reduced data in trading products cards - showing less information
  const tradingProducts = [
    {
      name: 'Angle Board',
      description: 'Protective corner boards for secure packaging and edge protection.',
      image: angle_board,
      slug: 'angle-board',
      features: ['High compression strength', 'Moisture resistant'],
      rating: 4.8,
      tag: 'Protection'
    },
    {
      name: 'Double Sided Tissue Tape',
      description: 'High-performance double-sided tissue tape for permanent mounting.',
      image: double_sided,
      slug: 'double-sided-tissue-tape',
      features: ['Strong dual adhesion', 'Permanent bonding'],
      rating: 4.8,
      tag: 'Special Tape'
    },
    {
      name: 'Machine Tape',
      description: 'Specialized tape for automated packaging machinery.',
      image: machine_tap,
      slug: 'machine-tape',
      features: ['Machine optimized', 'High-speed performance'],
      rating: 4.7,
      tag: 'Special Tape'
    },
    {
      name: 'Masking Tape',
      description: 'Premium masking tape for painting and surface protection.',
      image: masking_tap,
      slug: 'masking-tape',
      features: ['Clean removal', 'UV resistant'],
      rating: 4.6,
      tag: 'Special Tape'
    },
    {
      name: 'Shrink Film',
      description: 'High-quality shrink wrap films for product bundling.',
      image: shrink_film,
      slug: 'shrink-film',
      features: ['Excellent clarity', 'High shrink ratio'],
      rating: 4.7,
      tag: 'Film'
    },
    {
      name: 'Butter Paper',
      description: 'Food-grade grease-resistant paper for food packaging.',
      image: butter_paper,
      slug: 'butter-paper',
      features: ['Food safe', 'Grease resistant'],
      rating: 4.6,
      tag: 'Paper'
    },
    {
      name: 'Self-Locking Polybag',
      description: 'Convenient self-sealing polybags for easy packaging.',
      image: self_locking,
      slug: 'self-locking-polybag',
      features: ['Easy self-sealing', 'Reusable'],
      rating: 4.8,
      tag: 'Bags'
    },
    {
      name: 'Clean Film',
      description: 'Premium quality protective films for surface protection.',
      image: clean_film,
      slug: 'clean-film',
      features: ['Surface protection', 'Crystal clear'],
      rating: 4.5,
      tag: 'Film'
    },
    {
      name: 'PET Strip',
      description: 'High-strength polyester strapping for heavy-duty packaging.',
      image: "https://media.istockphoto.com/id/182188530/photo/filamentbandrollen.jpg?s=612x612&w=0&k=20&c=-EDKA_6AlQFQWIyv-5h3WLV8txaRfDHSOoIDWOFiFAE=",
      slug: 'pet-strip',
      features: ['High tensile strength', 'Weather resistant'],
      rating: 4.8,
      tag: 'Strapping'
    },
    {
      name: 'Plastic Strip',
      description: 'Versatile plastic strapping for general packaging needs.',
      image: plastic_strip,
      slug: 'plastic-strip',
      features: ['Lightweight', 'Good flexibility'],
      rating: 4.6,
      tag: 'Strapping'
    },
    {
      name: 'PP Strip',
      description: 'Polypropylene strapping offering excellent strength.',
      image: pp_strip,
      slug: 'pp-strip',
      features: ['Excellent strength-to-weight', 'UV stabilized'],
      rating: 4.7,
      tag: 'Strapping'
    },
    {
      name: 'Air Pillow',
      description: 'Inflatable air pillows for void fill and cushioning protection.',
      image: air_pillow,
      slug: 'air-pillow',
      features: ['Excellent void fill', 'Lightweight'],
      rating: 4.9,
      tag: 'Cushioning'
    }
  ];

  // Function to get tag color
  const getTagColor = (tag: string) => {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-6">Trading Products</h1>
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-teal-100 max-w-4xl mx-auto">
              Comprehensive range of specialized packaging and industrial products sourced from trusted suppliers to meet your diverse business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive Layout */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
            <div className="text-center">
              <Package className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 text-teal-700 mx-auto mb-1 md:mb-2 lg:mb-4" />
              <h3 className="text-xs md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">Quality Assured</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600 hidden md:block">All products undergo rigorous quality testing before delivery</p>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 text-teal-700 mx-auto mb-1 md:mb-2 lg:mb-4" />
              <h3 className="text-xs md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">Trusted Suppliers</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600 hidden md:block">Sourced from certified and reliable manufacturing partners</p>
            </div>
            <div className="text-center">
              <Truck className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 text-teal-700 mx-auto mb-1 md:mb-2 lg:mb-4" />
              <h3 className="text-xs md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">Fast Delivery</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600 hidden md:block">Efficient logistics network ensuring timely deliveries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Tape CTA Section - UPDATED: Added background image */}
      <section 
        className="relative py-12 lg:py-16 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-red-700 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
            Special Tape Collection
          </h2>
          <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Discover our premium range of specialized adhesive tapes designed for industrial and commercial applications.
          </p>
          
        </div>
      </section>

      {/* Trading Products - UPDATED: Reduced card data */}
      <section id="special-tapes" className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Our Trading Portfolio
            </h2>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our extensive range of trading products designed to complement your packaging requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {tradingProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 md:h-40 lg:h-48 object-cover"
                    />
                  </div>
                  {/* Product Tag */}
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(product.tag)}`}>
                      {product.tag}
                    </span>
                  </div>
                  {/* Rating */}
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
                      <span className="text-xs lg:text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 lg:p-6">
                  <h3 className="text-base lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">{product.name}</h3>
                  <p className="text-xs lg:text-base text-gray-600 mb-2 lg:mb-4">{product.description}</p>
                  
                  {/* UPDATED: Show only 2 features instead of detailed lists */}
                  <div className="mb-3 lg:mb-4">
                    <h4 className="text-xs lg:text-sm font-semibold text-gray-900 mb-1 lg:mb-2">Key Features:</h4>
                    <ul className="text-xs lg:text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <ArrowRight className="h-2 w-2 lg:h-3 lg:w-3 text-teal-700 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quality Badges - Responsive Layout */}
                  <div className="grid grid-cols-3 gap-1 lg:gap-2 mb-3 lg:mb-4">
                    <div className="text-center p-1 lg:p-2 bg-teal-50 rounded">
                      <Package className="h-3 w-3 lg:h-4 lg:w-4 text-teal-700 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-900">Quality</p>
                    </div>
                    <div className="text-center p-1 lg:p-2 bg-teal-50 rounded">
                      <Truck className="h-3 w-3 lg:h-4 lg:w-4 text-teal-700 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-900">Fast</p>
                    </div>
                    <div className="text-center p-1 lg:p-2 bg-teal-50 rounded">
                      <Shield className="h-3 w-3 lg:h-4 lg:w-4 text-teal-700 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-900">Trusted</p>
                    </div>
                  </div>

                  {/* Action Buttons - Three buttons layout */}
                  <div className="grid grid-cols-1 gap-2">
                    {/* View Details Button */}
                    <Link
                      to={`/trading/${product.slug}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-center flex items-center justify-center text-xs lg:text-sm"
                    >
                      <Eye className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                      View Details
                    </Link>
                    
                    {/* Send Enquiry and Get Quote buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => openEnquiryModal(product.name, product.image)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-center flex items-center justify-center text-xs lg:text-sm"
                      >
                        <MessageSquare className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                        Enquiry
                      </button>
                      <Link
                        to="/contact"
                        className="bg-teal-700 hover:bg-teal-800 text-white px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-center inline-flex items-center justify-center text-xs lg:text-sm"
                      >
                        Quote
                        <ArrowRight className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPDATED: Added background image to trading CTA section (green part) */}
      <section 
        className="relative py-12 lg:py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3985063/pexels-photo-3985063.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-teal-700 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
            Looking for Bulk Orders?
          </h2>
          <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Get competitive pricing on bulk orders and enjoy dedicated customer support for all your trading needs.
          </p>
          <Link
            to="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center text-sm lg:text-base"
          >
            Request Bulk Quote
            <ArrowRight className="ml-2 h-3 w-3 lg:h-5 lg:w-5" />
          </Link>
        </div>
      </section>

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