import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Truck, Shield, MessageSquare } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import angle_board from "../assets/angle_board.png"
import double_sided from "../assets/double_tap.png"
import shrink_film from "../assets/shrink_film_pof.png"
import self_locking from "../assets/self_looking_ploybag.png"
import pp_strip from "../assets/pp_strip.png"
import pet_strip from "../assets/pet_strip.png"



const TradingDetail = () => {
  const { product } = useParams();
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

  const tradingData: { [key: string]: any } = {
    'angle-board': {
      name: 'Angle Board',
      image: angle_board,
      description: 'High-strength angle boards designed to provide superior corner protection for packages during shipping and storage. Made from recycled materials, these boards offer excellent compression strength and durability.',
      features: [
        'High compression strength up to 8000 N',
        'Moisture resistant coating',
        'Eco-friendly recycled materials',
        'Stackable design for easy storage',
        'Various sizes available',
        'Cost-effective protection solution'
      ],
      specifications: {
        'Material': 'Recycled Cardboard',
        'Thickness': '2.5mm to 6mm',
        'Length': '1000mm to 6000mm',
        'Width': '35mm to 100mm',
        'Compression Strength': '6000-8000 N'
      },
      details: [
        'Provides excellent corner and edge protection during shipping',
        'Prevents damage from strapping and handling',
        'Reduces product damage and returns',
        'Environmentally friendly and recyclable',
        'Available in custom sizes and specifications',
        'Suitable for various industries including furniture, appliances, and electronics'
      ]
    },
    'double-sided-tissue-tape': {
      name: 'Double Sided Tissue Tape',
      image: double_sided,
      description: 'High-performance double-sided tissue tape providing strong bonding on both surfaces for permanent mounting and assembly applications.',
      features: [
        'Strong adhesion on both sides',
        'Permanent bonding capability',
        'Excellent conformability',
        'Weather resistant',
        'Clean application',
        'Various thickness options'
      ],
      specifications: {
        'Color': 'White',
        'Tape Length': '20-30m, 0-10m, 1-10m, 10-20m',
        'Tape Width': '0-20mm',
        'Thickness': '0.073mm',
        'Adhesion Value': '950 N/m',
        'Tensile Strength': '3.6 kN/m',
        'Temperature Resistance': '70°C'
      },
      details: [
        'Perfect for mounting signs, mirrors, and decorative elements',
        'Ideal for automotive trim and badge attachment',
        'Excellent for electronic component assembly',
        'Provides vibration dampening properties',
        'Suitable for indoor and outdoor applications',
        'Available in clear and colored options'
      ]
    },
    'shrink-film': {
      name: 'Shrink Film',
      image: shrink_film,
      description: 'High-quality shrink films providing excellent clarity, strength, and shrinkage properties for product bundling and protection applications.',
      features: [
        'Excellent optical clarity',
        'High shrink ratio',
        'Strong puncture resistance',
        'Consistent shrinkage',
        'Food-grade options available',
        'Environmentally friendly'
      ],
      specifications: {
        'Material': 'PVC, POF, PE',
        'Thickness': '12-25 microns',
        'Shrink Ratio': '40-60%',
        'Width': '200mm to 1500mm',
        'Shrink Temperature': '120-160°C'
      },
      details: [
        'Perfect for bundling multiple products together',
        'Provides tamper-evident packaging',
        'Excellent product visibility and presentation',
        'Reduces packaging costs compared to rigid containers',
        'Suitable for food, beverage, and consumer goods',
        'Available in various colors and printed options'
      ]
    },
    'self-locking-polybag': {
      name: 'Self-Locking Polybag',
      image: self_locking,
      description: 'Convenient self-sealing polybags with integrated locking mechanism for secure and easy packaging without the need for additional sealing equipment.',
      features: [
        'Easy self-sealing mechanism',
        'Tamper-evident design',
        'Reusable closure',
        'Transparent material',
        'Leak-proof sealing',
        'Various sizes available'
      ],
      specifications: {
        'Material': 'LDPE/HDPE',
        'Thickness': '50-100 microns',
        'Sizes': '4"x6" to 18"x24"',
        'Closure Type': 'Zip lock, press seal',
        'Colors': 'Clear, white, colored'
      },
      details: [
        'Perfect for retail packaging and product protection',
        'No heat sealing equipment required',
        'Excellent for sample packaging and small parts storage',
        'Moisture and dust protection',
        'Easy opening and closing for end users',
        'Available with custom printing and branding options'
      ]
    },
    'pet-strip': {
      name: 'PET Strip',
      image: pet_strip,
      description: 'High-strength polyester (PET) strapping strips for heavy-duty packaging and securing applications. Excellent tensile strength and durability.',
      features: [
        'High tensile strength',
        'Excellent elongation properties',
        'Weather resistant',
        'Chemical resistant',
        'Recyclable material',
        'Cost-effective alternative to steel'
      ],
      specifications: {
        'Material': 'Polyethylene Terephthalate (PET)',
        'Width': '9mm to 32mm',
        'Thickness': '0.5mm to 1.3mm',
        'Tensile Strength': '200-700 kg',
        'Elongation': '12-18%'
      },
      details: [
        'Ideal for securing heavy pallets and large packages',
        'Excellent shock absorption during transport',
        'Safe handling with smooth edges',
        'Suitable for automated strapping machines',
        'Maintains tension over long periods',
        'Available in various colors for identification'
      ]
    },
    'pp-strip': {
      name: 'PP Strip',
      image: pp_strip,
      description: 'Polypropylene strapping strips offering excellent balance of strength, flexibility, and cost-effectiveness for packaging applications.',
      features: [
        'Excellent strength-to-weight ratio',
        'Superior elongation recovery',
        'UV stabilized options',
        'Chemical resistance',
        'Easy splicing',
        'Consistent quality'
      ],
      specifications: {
        'Material': 'Polypropylene (PP)',
        'Width': '9mm to 19mm',
        'Thickness': '0.5mm to 1.0mm',
        'Tensile Strength': '100-350 kg',
        'Elongation': '15-20%'
      },
      details: [
        'Ideal for medium-duty packaging applications',
        'Excellent for securing boxes and cartons',
        'Suitable for both manual and machine application',
        'Good retention properties under stress',
        'Available in embossed and smooth finishes',
        'Cost-effective alternative to other strapping materials'
      ]
    },
  };

  const currentProduct = tradingData[product || ''];

  if (!currentProduct) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link to="/trading" className="text-blue-700 hover:text-blue-900">
          Return to Trading
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-700 hover:text-blue-900">Home</Link>
            <span className="text-gray-500">/</span>
            <Link to="/trading" className="text-blue-700 hover:text-blue-900">Trading</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-medium">{currentProduct.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div>
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <Link
                  to="/trading"
                  className="inline-flex items-center text-teal-700 hover:text-teal-900 mb-4"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Trading
                </Link>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {currentProduct.name}
                </h1>
                <p className="text-base lg:text-lg text-gray-600">Trading Product</p>
              </div>

              <div className="prose max-w-none mb-6 lg:mb-8">
                <p className="text-sm lg:text-lg text-gray-700">{currentProduct.description}</p>
              </div>

              {/* Quality Badges - Responsive Layout */}
              <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-6 lg:mb-8">
                <div className="text-center p-2 lg:p-4 bg-teal-50 rounded-lg">
                  <Package className="h-6 w-6 lg:h-8 lg:w-8 text-teal-700 mx-auto mb-1 lg:mb-2" />
                  <h3 className="text-xs lg:text-sm font-semibold text-gray-900">Quality Assured</h3>
                  <p className="text-xs text-gray-600 hidden lg:block">Tested products</p>
                </div>
                <div className="text-center p-2 lg:p-4 bg-teal-50 rounded-lg">
                  <Truck className="h-6 w-6 lg:h-8 lg:w-8 text-teal-700 mx-auto mb-1 lg:mb-2" />
                  <h3 className="text-xs lg:text-sm font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-xs text-gray-600 hidden lg:block">Quick shipping</p>
                </div>
                <div className="text-center p-2 lg:p-4 bg-teal-50 rounded-lg">
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-teal-700 mx-auto mb-1 lg:mb-2" />
                  <h3 className="text-xs lg:text-sm font-semibold text-gray-900">Reliable</h3>
                  <p className="text-xs text-gray-600 hidden lg:block">Trusted suppliers</p>
                </div>
              </div>

              {/* Action Buttons - Responsive Layout */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openEnquiryModal(currentProduct.name, currentProduct.image)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm lg:text-base"
                >
                  <MessageSquare className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                  Send Enquiry
                </button>
                <Link
                  to="/contact"
                  className="flex-1 bg-teal-700 hover:bg-teal-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors text-center text-sm lg:text-base"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Product Features */}
          <div className="mt-12 lg:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Key Features</h2>
                <ul className="space-y-2 lg:space-y-3">
                  {currentProduct.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 lg:h-5 lg:w-5 text-green-600 mr-2 lg:mr-3 mt-0.5" />
                      <span className="text-sm lg:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-1">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Specifications</h2>
                <div className="space-y-2 lg:space-y-3">
                  {Object.entries(currentProduct.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-sm lg:text-base font-medium text-gray-900">{key}:</span>
                      <span className="text-sm lg:text-base text-gray-700 text-right ml-2">
                        {
                          value === null || value === undefined
                            ? "-"
                            : typeof value === 'object'
                              ? JSON.stringify(value)
                              : String(value)
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>


              <div className="lg:col-span-1">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Product Details</h2>
                <ul className="space-y-2 lg:space-y-3">
                  {currentProduct.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 lg:h-5 lg:w-5 text-teal-600 mr-2 lg:mr-3 mt-0.5" />
                      <span className="text-sm lg:text-base text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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

export default TradingDetail;