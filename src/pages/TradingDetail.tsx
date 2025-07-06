import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Truck, Shield, MessageSquare } from 'lucide-react';
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
    'machine-tape': {
      name: 'Machine Tape',
      image: machine_tap,
      description: 'Specialized tape designed for automated packaging machinery, ensuring consistent performance and reliable sealing in high-speed production environments.',
      features: [
        'Optimized for machine application',
        'Consistent unwind properties',
        'High-speed performance',
        'Reliable adhesion',
        'Minimal static buildup',
        'Excellent clarity'
      ],
      specifications: {
        'Type': 'Single Sided, Double Sided',
        'Usage/Application': 'Sealing',
        'Tape Length': '0-10m',
        'Tape Width': '0-20mm, 20-40mm, 40-60mm, 60-80mm, 80-100mm, >100mm',
        'Length(m)': '10 meter',
        'Width(mm)': '1-3 Inches'
      },
      details: [
        'Designed for carton sealing machines and automated packaging lines',
        'Consistent adhesive coating for reliable performance',
        'Low noise operation during application',
        'Excellent holding power on various surfaces',
        'Suitable for high-volume packaging operations',
        'Available in clear and printed versions'
      ]
    },
    'masking-tape': {
      name: 'Masking Tape',
      image: masking_tap,
      description: 'Premium masking tape for painting, surface protection, and general purpose applications with clean removal and excellent adhesion properties.',
      features: [
        'Clean removal without residue',
        'Excellent paint line definition',
        'UV resistant for outdoor use',
        'Conformable to curves',
        'Easy tear application',
        'Multiple adhesion levels'
      ],
      specifications: {
        'Color': 'White',
        'Type': 'Single Sided',
        'Size': '20 Mtr and 30 Mtr',
        'Usage': 'Decoration',
        'Thickness': '0.15mm',
        'Material': 'Crepe Tape'
      },
      details: [
        'Perfect for automotive painting and refinishing',
        'Ideal for home improvement and DIY projects',
        'Excellent for surface protection during construction',
        'Suitable for labeling and identification',
        'Available in various adhesion strengths',
        'Environmentally friendly paper backing'
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
    'butter-paper': {
      name: 'Butter Paper',
      image: butter_paper,
      description: 'Food-grade grease-resistant paper ideal for food packaging, wrapping, and cooking applications. Made from pure wood pulp with natural grease resistance.',
      features: [
        'Natural grease resistance',
        'Food-safe coating',
        'Biodegradable material',
        'Heat resistant',
        'Moisture barrier',
        'Freezer safe'
      ],
      specifications: {
        'Material': 'Wood Pulp with coating',
        'GSM': '25-40 GSM',
        'Size': '300mm x 400mm to 1000mm x 1200mm',
        'Temperature Range': '-18°C to +220°C',
        'Coating': 'Food-grade silicone'
      },
      details: [
        'Ideal for wrapping sandwiches, burgers, and baked goods',
        'Prevents grease and oil from seeping through',
        'Safe for direct food contact',
        'Microwave and oven safe for cooking applications',
        'Compostable and environmentally friendly',
        'Available in sheets, rolls, and custom die-cut shapes'
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
    'clean-film': {
      name: 'Clean Film',
      image: clean_film,
      description: 'Premium quality protective films for surface protection and document preservation. Crystal clear transparency with easy application and removal.',
      features: [
        'Crystal clear transparency',
        'Easy application and removal',
        'Surface protection',
        'Scratch resistant',
        'UV protection',
        'Residue-free removal'
      ],
      specifications: {
        'Material': 'Polyethylene film',
        'Thickness': '25-50 microns',
        'Width': '300mm to 1500mm',
        'Length': '50m to 500m',
        'Adhesion': 'Low tack removable'
      },
      details: [
        'Protective film for various surfaces including glass, metal, and plastic',
        'Ideal for protecting surfaces during construction and renovation',
        'Easy application without bubbles or wrinkles',
        'Leaves no residue upon removal',
        'Suitable for temporary and long-term protection',
        'Available in various thicknesses and adhesion levels'
      ]
    },
    'pet-strip': {
      name: 'PET Strip',
      image: "https://www.manglamsafpack.com/img/products/pet-strip.png",
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
    'plastic-strip': {
      name: 'Plastic Strip',
      image: plastic_strip,
      description: 'Versatile plastic strapping strips for general packaging and bundling applications. Lightweight yet strong for various securing needs.',
      features: [
        'Lightweight construction',
        'Good flexibility',
        'Easy to handle',
        'Corrosion resistant',
        'Multiple color options',
        'Economical solution'
      ],
      specifications: {
        'Material': 'Polypropylene (PP)',
        'Width': '6mm to 19mm',
        'Thickness': '0.4mm to 0.8mm',
        'Tensile Strength': '50-200 kg',
        'Operating Temperature': '-20°C to +80°C'
      },
      details: [
        'Perfect for light to medium-duty applications',
        'Excellent for bundling newspapers and magazines',
        'Suitable for carton and box strapping',
        'Easy to cut and handle manually',
        'Available in manual and machine grade',
        'Environmentally friendly and recyclable'
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
    'air-pillow': {
      name: 'Air Pillow',
      image: air_pillow,
      description: 'Inflatable air pillows for void fill and cushioning protection during shipping. Lightweight and efficient packaging solution.',
      features: [
        'Excellent void fill properties',
        'Lightweight packaging',
        'Puncture resistant',
        'Easy inflation',
        'Space-saving storage',
        'Recyclable material'
      ],
      specifications: {
        'Material': 'Polyethylene (PE)',
        'Size Range': '100mm x 160mm to 400mm x 300mm',
        'Film Thickness': '20-25 microns',
        'Air Retention': '6+ months',
        'Inflation Pressure': '0.5-1.0 PSI'
      },
      details: [
        'Perfect for filling empty spaces in packages',
        'Provides excellent cushioning for fragile items',
        'Reduces shipping costs due to lightweight nature',
        'Easy to use with manual or automatic inflation',
        'Environmentally friendly alternative to foam',
        'Available in various sizes and configurations'
      ]
    }
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