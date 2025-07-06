// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, Check, Package, Truck, Shield, Star, MessageSquare } from 'lucide-react';
// import EnquiryModal from '../components/EnquiryModal';
// import bubble_bag from "../assets/bubble_bags.png"
// import bubble_pouch from "../assets/air_bubble_pouch.png"
// import bubble_roll from "../assets/bubble_roll.png"
// import ld_sheet from "../assets/ld_sheet.png"
// import ld_bags from "../assets/ld_bags.png"
// import ep_foam from "../assets/ep_foam_sheet.png"
// import ep_fitment from "../assets/ep_fitment.png"
// import bopp_tap from "../assets/bop_tap.png"
// import multi_bop_tap from "../assets/multi_printed_tap.png"
// const ProductCategory = () => {
//   const { category } = useParams();
//   const [enquiryModal, setEnquiryModal] = useState({
//     isOpen: false,
//     productName: '',
//     productImage: '',
//     productCategory: ''
//   });

//   const openEnquiryModal = (productName: string, productImage: string, categoryName: string) => {
//     setEnquiryModal({
//       isOpen: true,
//       productName,
//       productImage,
//       productCategory: categoryName
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

//   const categoryData: { [key: string]: any } = {
//     'air-bubble-roll-packaging': {
//       name: 'Bubble Roll ',
//       description: 'Premium air bubble packaging solutions designed for maximum protection during shipping and storage. Our advanced manufacturing process ensures consistent bubble formation and superior cushioning properties.',
//       backgroundImage: "https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=",
//       products: [
//         {
//           name: 'Air Bubble Bag',
//           image: bubble_bag,
//           description: 'Self-sealing air bubble bags with superior cushioning for fragile items.',
//           features: [
//             'Multi-layer bubble construction',
//             'Tear-resistant material',
//             'Self-sealing adhesive strip',
//             'Lightweight yet durable'
//           ],
//           specifications: {
//             'Material': 'Polyethylene',
//             'Bubble Size': '10mm diameter',
//             'Thickness': '80-120 microns',
//             'Sizes': '100mm to 600mm width'
//           }
//         },
//         {
//           name: 'Laminated Bubble Pouch',
//           image: bubble_pouch,
//           description: 'Advanced laminated pouches combining bubble protection with barrier properties.',
//           features: [
//             'Laminated barrier protection',
//             'Superior cushioning',
//             'Moisture and dust proof',
//             'Tamper-evident sealing'
//           ],
//           specifications: {
//             'Material': 'Laminated PE/AL/PE',
//             'Bubble Size': '12mm diameter',
//             'Thickness': '100-150 microns',
//             'Barrier': 'Oxygen, moisture, light'
//           }
//         },
//         {
//           name: 'Air Bubble Roll',
//           image: bubble_roll,
//           description: 'Versatile bubble rolls for wrapping and protecting various items.',
//           features: [
//             'Consistent bubble formation',
//             'High puncture resistance',
//             'Excellent shock absorption',
//             'Easy to cut and wrap'
//           ],
//           specifications: {
//             'Material': 'Virgin Polyethylene',
//             'Bubble Size': '8mm, 10mm, 12mm',
//             'Roll Width': '300mm to 1500mm',
//             'Roll Length': '50m to 300m'
//           }
//         }
//       ]
//     },
//     'polybags-rolls': {
//       name: 'Polybags / Rolls',
//       description: 'High-quality polythene products offering excellent flexibility and durability for various packaging applications. Our polybags and rolls are manufactured using premium grade materials.',
//       backgroundImage: 'https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=',
//       products: [
//         {
//           name: 'LD Sheet',
//           image: ld_sheet,
//           description: 'Low-density polyethylene sheets with excellent flexibility and chemical resistance.',
//           features: [
//             'High flexibility',
//             'Excellent chemical resistance',
//             'Good impact strength',
//             'UV stabilized variants'
//           ],
//           specifications: {

//             'Material': 'Low Density Polyethylene',
//             'Thickness': '25-200 microns',
//             'Width': '100mm to 6000mm',
//             'Colors': 'Natural, Black, Blue, Red'
//           }
//         },
//         {
//           name: 'LD Bags',
//           image: ld_bags,
//           description: 'Versatile low-density polyethylene bags for packaging and storage.',
//           features: [
//             'Flexible and stretchable',
//             'Leak-proof sealing',
//             'Chemical resistant',
//             'Various closure options'
//           ],
//           specifications: {
//             'Material': 'Low Density Polyethylene',
//             'Thickness': '25-150 microns',
//             'Sizes': '4"x6" to 24"x36"',
//             'Closure': 'Heat seal, zip lock'
//           }
//         }
//       ]
//     },
//     'ep-foam-pouch-fitment': {
//       name: 'EP Foam / Fitment',
//       description: 'Expanded polystyrene foam solutions providing excellent insulation and cushioning properties. Our EP foam products are lightweight yet highly protective.',
//       backgroundImage: 'https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=',
//       products: [
//         {
//           name: 'EP Foam Sheet Roll',
//           image: ep_foam,
//           description: 'Expanded polystyrene foam sheets for insulation and cushioning.',
//           features: [
//             'Excellent insulation',
//             'Lightweight construction',
//             'Shock absorption',
//             'Moisture resistant'
//           ],
//           specifications: {
//             'Material': 'Expanded Polystyrene',
//             'Density': '15-30 kg/m³',
//             'Thickness': '5mm to 100mm',
//             'Width': '600mm to 2000mm'
//           }
//         },
//         {
//           name: 'EP Fitment',
//           image: ep_fitment,
//           description: 'Custom-molded expanded polystyrene fitments for specific products.',
//           features: [
//             'Custom molded design',
//             'Perfect fit guarantee',
//             'Superior protection',
//             'Cost-effective tooling'
//           ],
//           specifications: {
//             'Material': 'Expanded Polystyrene',
//             'Density': '20-35 kg/m³',
//             'Molding': 'Custom shapes',
//             'Tolerance': '±0.5mm'
//           }
//         }
//       ]
//     },
//     'bopp-tape': {
//       name: 'BOPP Tape',
//       description: 'High-quality biaxially oriented polypropylene tapes with excellent adhesion properties for sealing and packaging applications. Our BOPP tapes offer superior performance.',
//       backgroundImage: 'https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=',
//       products: [
//         {
//           name: 'BOPP Tape',
//           image: bopp_tap,
//           description: 'Standard BOPP tape with strong adhesion for general packaging needs.',
//           features: [
//             'Strong adhesion',
//             'High tensile strength',
//             'Clear transparency',
//             'Weather resistant'
//           ],
//           specifications: {
//             'Material': 'BOPP Film + Acrylic Adhesive',
//             'Width': '12mm to 72mm',
//             'Length': '40m to 1000m',
//             'Thickness': '40-65 microns'
//           }
//         },
//         {
//           name: 'Multi-Printed BOPP Tapes',
//           image: multi_bop_tap,
//           description: 'Customizable printed BOPP tapes for branding and promotional needs.',
//           features: [
//             'Custom printing available',
//             'High-quality graphics',
//             'Brand visibility',
//             'Multiple color printing'
//           ],
//           specifications: {
//             'Material': 'BOPP Film + Acrylic Adhesive',
//             'Printing': 'Up to 6 colors',
//             'Width': '25mm to 72mm',
//             'Print Quality': 'High resolution'
//           }
//         }
//       ]
//     }
//   };

//   const currentCategory = categoryData[category || ''];

//   if (!currentCategory) {
//     return (
//       <div className="py-12 lg:py-20 text-center">
//         <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
//         <Link to="/products" className="text-blue-700 hover:text-blue-900">
//           Return to Products
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Hero Section with Background Image */}
//       <section
//         className="relative bg-gradient-to-r from-blue-900/90 to-blue-700/90 text-white py-12 lg:py-20"
//         style={{
//           backgroundImage: `url(${currentCategory.backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundBlendMode: 'overlay'
//         }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl">
//             <Link
//               to="/products"
//               className="inline-flex items-center text-blue-200 hover:text-white mb-4 lg:mb-6 text-sm lg:text-base"
//             >
//               <ArrowLeft className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
//               Back to Products
//             </Link>
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
//               {currentCategory.name}
//             </h1>
//             <p className="text-sm md:text-lg lg:text-xl text-blue-100 max-w-3xl">
//               {currentCategory.description}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-12 lg:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
//             {currentCategory.products.map((product: any, index: number) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                 <div className="aspect-w-16 aspect-h-9">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 lg:h-56 object-cover"
//                   />
//                 </div>
//                 <div className="p-4 lg:p-6">
//                   <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
//                     {product.name}
//                   </h3>
//                   <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
//                     {product.description}
//                   </p>

//                   {/* Features */}
//                   <div className="mb-4 lg:mb-6">
//                     <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">
//                       Key Features:
//                     </h4>
//                     <ul className="space-y-1 lg:space-y-2">
//                       {product.features.slice(0, 3).map((feature: string, featureIndex: number) => (
//                         <li key={featureIndex} className="flex items-start text-xs lg:text-sm">
//                           <Check className="h-3 w-3 lg:h-4 lg:w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Specifications */}
//                   <div className="mb-4 lg:mb-6">
//                     <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-2 lg:mb-3">
//                       Specifications:
//                     </h4>
//                     <div className="space-y-1 lg:space-y-2">
//                       {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
//                         <div key={key} className="flex justify-between text-xs lg:text-sm border-b border-gray-100 pb-1">
//                           <span className="font-medium text-gray-900">{key}:</span>
//                           <span className="text-gray-700 text-right ml-2">
//                             {typeof value === 'object' ? JSON.stringify(value) : String(value)}
//                           </span>
//                         </div>
//                       ))}
//                     </div>


//                   </div>

//                   {/* Quality Badges */}
//                   <div className="grid grid-cols-3 gap-2 lg:gap-3 mb-4 lg:mb-6">
//                     <div className="text-center p-2 lg:p-3 bg-blue-50 rounded-lg">
//                       <Package className="h-4 w-4 lg:h-6 lg:w-6 text-blue-700 mx-auto mb-1" />
//                       <p className="text-xs lg:text-sm font-medium text-gray-900">Quality</p>
//                     </div>
//                     <div className="text-center p-2 lg:p-3 bg-blue-50 rounded-lg">
//                       <Truck className="h-4 w-4 lg:h-6 lg:w-6 text-blue-700 mx-auto mb-1" />
//                       <p className="text-xs lg:text-sm font-medium text-gray-900">Fast Ship</p>
//                     </div>
//                     <div className="text-center p-2 lg:p-3 bg-blue-50 rounded-lg">
//                       <Shield className="h-4 w-4 lg:h-6 lg:w-6 text-blue-700 mx-auto mb-1" />
//                       <p className="text-xs lg:text-sm font-medium text-gray-900">Reliable</p>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
//                     <button
//                       onClick={() => openEnquiryModal(product.name, product.image, currentCategory.name)}
//                       className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors text-center flex items-center justify-center text-sm lg:text-base"
//                     >
//                       <MessageSquare className="h-4 w-4 mr-2" />
//                       Send Enquiry
//                     </button>
//                     <Link
//                       to="/contact"
//                       className="flex-1 bg-blue-700 hover:bg-blue-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors text-center block text-sm lg:text-base"
//                     >
//                       Get Quote
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-12 lg:py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8 lg:mb-16">
//             <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
//               Why Choose Our {currentCategory.name}?
//             </h2>
//             <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
//               Industry-leading quality and performance you can trust
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
//             <div className="text-center p-4 lg:p-6">
//               <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
//                 <Star className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
//               </div>
//               <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
//               <p className="text-xs lg:text-sm text-gray-600">ISO certified manufacturing with rigorous quality control</p>
//             </div>
//             <div className="text-center p-4 lg:p-6">
//               <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
//                 <Package className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
//               </div>
//               <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
//               <p className="text-xs lg:text-sm text-gray-600">Tailored products to meet your specific requirements</p>
//             </div>
//             <div className="text-center p-4 lg:p-6">
//               <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
//                 <Truck className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
//               </div>
//               <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
//               <p className="text-xs lg:text-sm text-gray-600">Nationwide shipping with quick turnaround times</p>
//             </div>
//             <div className="text-center p-4 lg:p-6">
//               <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
//                 <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
//               </div>
//               <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
//               <p className="text-xs lg:text-sm text-gray-600">Trusted by thousands of satisfied customers</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section with Background Image */}
//       <section
//         className="relative py-12 lg:py-20 text-white"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/4226929/pexels-photo-4226929.jpeg?auto=compress&cs=tinysrgb&w=1200)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         <div className="absolute inset-0 bg-blue-700 bg-opacity-85"></div>
//         <div className="relative container mx-auto px-4 text-center">
//           <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
//             Ready to Order {currentCategory.name}?
//           </h2>
//           <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
//             Contact our experts for custom quotes and technical specifications
//           </p>
//           <Link
//             to="/contact"
//             className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-block text-sm lg:text-base"
//           >
//             Get Custom Quote
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

// export default ProductCategory;



import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Truck, Shield, Star, MessageSquare, Eye } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import bubble_bag from "../assets/bubble_bags.png"
import bubble_pouch from "../assets/air_bubble_pouch.png"
import bubble_roll from "../assets/bubble_roll.png"
import ld_sheet from "../assets/ld_sheet.png"
import ld_bags from "../assets/ld_bags.png"
import ep_foam from "../assets/ep_foam_sheet.png"
import ep_fitment from "../assets/ep_fitment.png"
import bopp_tap from "../assets/bop_tap.png"
import multi_bop_tap from "../assets/multi_printed_tap.png"

const ProductCategory = () => {
  const { category } = useParams();
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    productName: '',
    productImage: '',
    productCategory: ''
  });

  const openEnquiryModal = (productName: string, productImage: string, categoryName: string) => {
    setEnquiryModal({
      isOpen: true,
      productName,
      productImage,
      productCategory: categoryName
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

  const categoryData: { [key: string]: any } = {
    'air-bubble-roll-packaging': {
      name: 'Air Bubble Roll/pouch/Bag',
      description: 'Premium air bubble packaging solutions designed for maximum protection during shipping and storage. Our advanced manufacturing process ensures consistent bubble formation and superior cushioning properties.',
      backgroundImage: 'https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=',
      products: [
        {
          name: 'Air Bubble Bag',
          slug: 'air-bubble-bag',
          image: bubble_bag,
          description: 'Self-sealing air bubble bags with superior cushioning for fragile items.',
          features: [
            'Multi-layer bubble construction',
            'Tear-resistant material',
            'Self-sealing adhesive strip',
            'Lightweight yet durable'
          ],
          specifications: {
            'Material': 'Polyethylene',
            'Bubble Size': '10mm diameter',
            'Thickness': '80-120 microns',
            'Sizes': '100mm to 600mm width'
          }
        },
        {
          name: 'Laminated Air Bubble Pouch',
          slug: 'laminated-air-bubble-pouch',
          image: bubble_pouch,
          description: 'Advanced laminated pouches combining bubble protection with barrier properties.',
          features: [
            'Laminated barrier protection',
            'Superior cushioning',
            'Moisture and dust proof',
            'Tamper-evident sealing'
          ],
          specifications: {
            'Material': 'Laminated PE/AL/PE',
            'Bubble Size': '12mm diameter',
            'Thickness': '100-150 microns',
            'Barrier': 'Oxygen, moisture, light'
          }
        },
        {
          name: 'Air Bubble Roll',
          slug: 'air-bubble-roll',
          image: bubble_roll,
          description: 'Versatile bubble rolls for wrapping and protecting various items.',
          features: [
            'Consistent bubble formation',
            'High puncture resistance',
            'Excellent shock absorption',
            'Easy to cut and wrap'
          ],
          specifications: {
            'Material': 'Virgin Polyethylene',
            'Bubble Size': '8mm, 10mm, 12mm',
            'Roll Width': '300mm to 1500mm',
            'Roll Length': '50m to 300m'
          }
        }
      ]
    },
    'polybags-rolls': {
      name: 'Polybags / Rolls',
      description: 'High-quality polythene products offering excellent flexibility and durability for various packaging applications. Our polybags and rolls are manufactured using premium grade materials.',
      backgroundImage: 'https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=',
      products: [
        {
          name: 'LD Sheet',
          slug: 'ld-sheet',
          image: ld_sheet,
          description: 'Low-density polyethylene sheets with excellent flexibility and chemical resistance.',
          features: [
            'High flexibility',
            'Excellent chemical resistance',
            'Good impact strength',
            'UV stabilized variants'
          ],
          specifications: {
            'Material': 'Low Density Polyethylene',
            'Thickness': '25-200 microns',
            'Width': '100mm to 6000mm',
            'Colors': 'Natural, Black, Blue, Red'
          }
        },
        {
          name: 'LD Bags',
          slug: 'ld-bags',
          image: ld_bags,
          description: 'Versatile low-density polyethylene bags for packaging and storage.',
          features: [
            'Flexible and stretchable',
            'Leak-proof sealing',
            'Chemical resistant',
            'Various closure options'
          ],
          specifications: {
            'Material': 'Low Density Polyethylene',
            'Thickness': '25-150 microns',
            'Sizes': '4"x6" to 24"x36"',
            'Closure': 'Heat seal, zip lock'
          }
        }
      ]
    },
    'ep-foam-pouch-fitment': {
      name: 'EP Foam / Pouch / Fitment',
      description: 'Expanded polystyrene foam solutions providing excellent insulation and cushioning properties. Our EP foam products are lightweight yet highly protective.',
      backgroundImage: 'https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=',
      products: [
        {
          name: 'EP Foam Sheet Roll',
          slug: 'ep-foam-sheet-roll',
          image: ep_foam,
          description: 'Expanded polystyrene foam sheets for insulation and cushioning.',
          features: [
            'Excellent insulation',
            'Lightweight construction',
            'Shock absorption',
            'Moisture resistant'
          ],
          specifications: {
            'Material': 'Expanded Polystyrene',
            'Density': '15-30 kg/m³',
            'Thickness': '5mm to 100mm',
            'Width': '600mm to 2000mm'
          }
        },
        {
          name: 'EP Fitment',
          slug: 'ep-fitment',
          image: ep_fitment,
          description: 'Custom-molded expanded polystyrene fitments for specific products.',
          features: [
            'Custom molded design',
            'Perfect fit guarantee',
            'Superior protection',
            'Cost-effective tooling'
          ],
          specifications: {
            'Material': 'Expanded Polystyrene',
            'Density': '20-35 kg/m³',
            'Molding': 'Custom shapes',
            'Tolerance': '±0.5mm'
          }
        }
      ]
    },
    'bopp-tape': {
      name: 'BOPP Tape',
      description: 'High-quality biaxially oriented polypropylene tapes with excellent adhesion properties for sealing and packaging applications. Our BOPP tapes offer superior performance.',
      backgroundImage: 'https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=',
      products: [
        {
          name: 'BOPP Tape',
          slug: 'bopp-tape',
          image: bopp_tap,
          description: 'Standard BOPP tape with strong adhesion for general packaging needs.',
          features: [
            'Strong adhesion',
            'High tensile strength',
            'Clear transparency',
            'Weather resistant'
          ],
          specifications: {
            'Material': 'BOPP Film + Acrylic Adhesive',
            'Width': '12mm to 72mm',
            'Length': '40m to 1000m',
            'Thickness': '40-65 microns'
          }
        },
        {
          name: 'Multi-Printed BOPP Tapes',
          slug: 'multi-printed-bopp-tapes',
          image: multi_bop_tap,
          description: 'Customizable printed BOPP tapes for branding and promotional needs.',
          features: [
            'Custom printing available',
            'High-quality graphics',
            'Brand visibility',
            'Multiple color printing'
          ],
          specifications: {
            'Material': 'BOPP Film + Acrylic Adhesive',
            'Printing': 'Up to 6 colors',
            'Width': '25mm to 72mm',
            'Print Quality': 'High resolution'
          }
        }
      ]
    }
  };

  const currentCategory = categoryData[category || ''];

  if (!currentCategory) {
    return (
      <div className="py-12 lg:py-20 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <Link to="/products" className="text-blue-700 hover:text-blue-900">
          Return to Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-gradient-to-r from-blue-900/90 to-blue-700/90 text-white py-12 lg:py-20"
        style={{
          backgroundImage: `url(${currentCategory.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-200 hover:text-white mb-4 lg:mb-6 text-sm lg:text-base"
            >
              <ArrowLeft className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
              Back to Products
            </Link>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
              {currentCategory.name}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-blue-100 max-w-3xl">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid - UPDATED: Smaller cards with less data */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {currentCategory.products.map((product: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 lg:h-48 object-cover"
                  />
                </div>
                <div className="p-4 lg:p-5">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  {/* Features - UPDATED: Show only 2 features */}
                  <div className="mb-4">
                    <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start text-xs lg:text-sm">
                          <Check className="h-3 w-3 lg:h-4 lg:w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quality Badges - UPDATED: Smaller badges */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <Package className="h-4 w-4 text-blue-700 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-900">Quality</p>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <Truck className="h-4 w-4 text-blue-700 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-900">Fast Ship</p>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <Shield className="h-4 w-4 text-blue-700 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-900">Reliable</p>
                    </div>
                  </div>

                  {/* Action Buttons - UPDATED: Added View Details button */}
                  <div className="grid grid-cols-1 gap-2">
                    {/* View Details Button - UPDATED: Links to new manufacturing detail page */}
                    <Link
                      to={`/manufacturing/${product.slug}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center flex items-center justify-center text-sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                    
                    {/* Send Enquiry and Get Quote buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => openEnquiryModal(product.name, product.image, currentCategory.name)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center flex items-center justify-center text-sm"
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Enquiry
                      </button>
                      <Link
                        to="/contact"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center block text-sm"
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Why Choose Our {currentCategory.name}?
            </h2>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading quality and performance you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="text-center p-4 lg:p-6">
              <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <Star className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-xs lg:text-sm text-gray-600">ISO certified manufacturing with rigorous quality control</p>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <Package className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-xs lg:text-sm text-gray-600">Tailored products to meet your specific requirements</p>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <Truck className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-xs lg:text-sm text-gray-600">Nationwide shipping with quick turnaround times</p>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
              <p className="text-xs lg:text-sm text-gray-600">Trusted by thousands of satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image - UPDATED: Added background image */}
      <section 
        className="relative py-12 lg:py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4226929/pexels-photo-4226929.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
            Ready to Order {currentCategory.name}?
          </h2>
          <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Contact our experts for custom quotes and technical specifications
          </p>
          <Link
            to="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-block text-sm lg:text-base"
          >
            Get Custom Quote
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

export default ProductCategory;