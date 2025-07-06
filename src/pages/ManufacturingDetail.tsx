import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Truck, Shield, MessageSquare } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import bopp_tap from "../assets/bop_tap.png"
import bubble_bag from "../assets/bubble_bags.png"
import bubble_pouch from "../assets/air_bubble_pouch.png"
import bubble_roll from "../assets/bubble_roll.png"
import ld_sheet from "../assets/ld_sheet.png"
import ld_bags from "../assets/ld_bags.png"
import ep_foam from "../assets/ep_foam_sheet.png"
import ep_fitment from "../assets/ep_fitment.png"
import multi_bop_tap from "../assets/multi_printed_tap.png"


const ManufacturingDetail = () => {
    const { product } = useParams();
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

    // Manufacturing product data with detailed information
    const manufacturingData: { [key: string]: any } = {
        'air-bubble-bag': {
            name: 'Air Bubble Bag',
            category: 'Air Bubble Roll Packaging',
            image: bubble_bag,
            description: 'Self-sealing air bubble bags with superior cushioning properties for fragile items. Our advanced manufacturing process ensures consistent bubble formation and maximum protection during shipping and storage.',
            features: [
                'Multi-layer bubble construction for enhanced protection',
                'Tear-resistant material with high puncture strength',
                'Self-sealing adhesive strip for easy closure',
                'Lightweight yet durable design',
                'Excellent shock absorption properties',
                'Moisture and dust resistant'
            ],
            specifications: {
                'Material': 'Polyethylene (PE)',
                'Bubble Size': '10mm diameter',
                'Thickness': '80-120 microns',
                'Sizes Available': '100mm to 600mm width',
                'Closure Type': 'Self-sealing adhesive',
                'Temperature Range': '-40°C to +80°C'
            },
            details: [
                'Perfect for protecting electronics, glassware, and delicate items',
                'Provides superior cushioning compared to traditional packaging',
                'Easy to use with no additional sealing equipment required',
                'Reduces packaging time and labor costs',
                'Available in custom sizes and specifications',
                'Environmentally friendly and recyclable materials'
            ]
        },
        'laminated-air-bubble-pouch': {
            name: 'Laminated Air Bubble Pouch',
            category: 'Air Bubble Roll Packaging',
            image: bubble_pouch,
            description: 'Advanced laminated pouches combining bubble protection with barrier properties. These pouches offer superior protection against moisture, dust, and static electricity.',
            features: [
                'Laminated barrier protection against moisture and dust',
                'Superior cushioning with consistent bubble formation',
                'Anti-static properties for electronic components',
                'Tamper-evident sealing for security',
                'Excellent optical clarity for product visibility',
                'Chemical resistant construction'
            ],
            specifications: {
                'Material': 'Laminated PE/AL/PE',
                'Bubble Size': '12mm diameter',
                'Thickness': '100-150 microns',
                'Barrier Properties': 'Oxygen, moisture, light protection',
                'Static Protection': 'Anti-static coating available',
                'Seal Strength': 'Heat sealable up to 200°C'
            },
            details: [
                'Ideal for pharmaceutical and electronic component packaging',
                'Provides complete barrier protection for sensitive products',
                'Maintains product integrity during long-term storage',
                'Suitable for cleanroom environments',
                'Custom printing and branding options available',
                'Meets international packaging standards'
            ]
        },
        'air-bubble-roll': {
            name: 'Air Bubble Roll',
            category: 'Air Bubble Roll Packaging',
            image: bubble_roll,
            description: 'Versatile bubble rolls for wrapping and protecting various items. Our bubble rolls feature consistent bubble formation and excellent puncture resistance for reliable protection.',
            features: [
                'Consistent bubble formation across entire roll',
                'High puncture resistance for durability',
                'Excellent shock absorption capabilities',
                'Easy to cut and wrap around items',
                'Lightweight design reduces shipping costs',
                'Available in perforated options'
            ],
            specifications: {
                'Material': 'Virgin Polyethylene',
                'Bubble Sizes': '8mm, 10mm, 12mm diameter',
                'Roll Width': '300mm to 1500mm',
                'Roll Length': '50m to 300m',
                'Perforation': 'Available every 300mm',
                'Core Size': '76mm (3 inch) standard'
            },
            details: [
                'Perfect for wrapping furniture, artwork, and fragile items',
                'Provides excellent void fill for shipping boxes',
                'Easy dispensing from roll format',
                'Reduces packaging material waste',
                'Available in clear and colored options',
                'Custom widths and lengths available on request'
            ]
        },
        'ld-sheet': {
            name: 'LD Sheet',
            category: 'Polybags / Rolls',
            image: ld_sheet,
            description: 'Low-density polyethylene sheets with excellent flexibility and chemical resistance. Our LD sheets are manufactured using premium grade materials for superior performance.',
            features: [
                'High flexibility and stretchability',
                'Excellent chemical resistance properties',
                'Good impact strength and durability',
                'UV stabilized variants available',
                'Food-grade options for food packaging',
                'Excellent heat sealing properties'
            ],
            specifications: {
                'Material': 'Low Density Polyethylene (LDPE)',
                'Thickness Range': '25-200 microns',
                'Width Options': '100mm to 6000mm',
                'Color Options': 'Natural, Black, Blue, Red, Custom',
                'Additives': 'UV stabilizers, Anti-static, Anti-block',
                'Compliance': 'FDA approved grades available'
            },
            details: [
                'Ideal for agricultural applications and greenhouse covers',
                'Excellent for construction and industrial applications',
                'Provides moisture barrier protection',
                'Easy to weld and fabricate',
                'Available in various grades for specific applications',
                'Environmentally friendly and recyclable'
            ]
        },
        'ld-bags': {
            name: 'LD Bags',
            category: 'Polybags / Rolls',
            image: ld_bags,
            description: 'Versatile low-density polyethylene bags for packaging and storage applications. Our LD bags offer excellent flexibility and leak-proof sealing.',
            features: [
                'Flexible and stretchable material',
                'Leak-proof sealing capabilities',
                'Chemical resistant construction',
                'Various closure options available',
                'Excellent clarity for product visibility',
                'Strong seal strength'
            ],
            specifications: {
                'Material': 'Low Density Polyethylene (LDPE)',
                'Thickness Range': '25-150 microns',
                'Size Range': '4"x6" to 24"x36"',
                'Closure Types': 'Heat seal, zip lock, drawstring',
                'Gusset Options': 'Side gusset, bottom gusset',
                'Printing': 'Up to 8 colors available'
            },
            details: [
                'Perfect for retail packaging and product protection',
                'Excellent for food packaging applications',
                'Provides moisture and dust protection',
                'Easy to open and close for end users',
                'Available with custom printing and branding',
                'Meets food safety standards'
            ]
        },
        'ep-foam-sheet-roll': {
            name: 'EP Foam Sheet Roll',
            category: 'EP Foam / Pouch / Fitment',
            image: ep_foam,
            description: 'Expanded polystyrene foam sheets for insulation and cushioning applications. Our EP foam provides excellent thermal insulation and shock absorption.',
            features: [
                'Excellent thermal insulation properties',
                'Lightweight construction for easy handling',
                'Superior shock absorption capabilities',
                'Moisture resistant material',
                'Easy to cut and shape',
                'Chemical resistant properties'
            ],
            specifications: {
                'Material': 'Expanded Polystyrene (EPS)',
                'Density Range': '15-30 kg/m³',
                'Thickness Options': '5mm to 100mm',
                'Width Range': '600mm to 2000mm',
                'Compressive Strength': '100-300 kPa',
                'Thermal Conductivity': '0.032-0.038 W/mK'
            },
            details: [
                'Ideal for building insulation and construction applications',
                'Perfect for packaging temperature-sensitive products',
                'Provides excellent cushioning for fragile items',
                'Environmentally friendly and recyclable',
                'Available in various densities for specific applications',
                'Custom cutting and shaping services available'
            ]
        },
        'ep-fitment': {
            name: 'EP Fitment',
            category: 'EP Foam / Pouch / Fitment',
            image: ep_fitment,
            description: 'Custom-molded expanded polystyrene fitments for specific products. Our EP fitments provide perfect fit and superior protection for your products.',
            features: [
                'Custom molded design for perfect fit',
                'Perfect fit guarantee for your products',
                'Superior protection against impacts',
                'Cost-effective tooling solutions',
                'Lightweight yet strong construction',
                'Excellent surface finish'
            ],
            specifications: {
                'Material': 'Expanded Polystyrene (EPS)',
                'Density Range': '20-35 kg/m³',
                'Molding Capability': 'Custom shapes and sizes',
                'Dimensional Tolerance': '±0.5mm',
                'Surface Finish': 'Smooth, textured options',
                'Tooling Lead Time': '2-4 weeks'
            },
            details: [
                'Perfect for electronics and appliance packaging',
                'Provides secure positioning during transport',
                'Reduces product damage and returns',
                'Custom design service available',
                'Rapid prototyping capabilities',
                'Cost-effective for medium to high volume production'
            ]
        },
        'bopp-tape': {
            name: 'BOPP Tape',
            category: 'BOPP Tape',
            image: bopp_tap,
            description: 'Standard BOPP tape with strong adhesion for general packaging needs. Our BOPP tapes offer excellent performance and reliability for sealing applications.',
            features: [
                'Strong adhesion to various surfaces',
                'High tensile strength for secure sealing',
                'Crystal clear transparency',
                'Weather resistant properties',
                'Easy unwind and application',
                'Consistent adhesive coating'
            ],
            specifications: {
                'Material': 'BOPP Film + Acrylic Adhesive',
                'Width Options': '12mm to 72mm',
                'Length Options': '40m to 1000m',
                'Total Thickness': '40-65 microns',
                'Adhesion Strength': '8-12 N/25mm',
                'Tensile Strength': '150-200 N/25mm'
            },
            details: [
                'Perfect for carton sealing and packaging applications',
                'Excellent for both manual and machine application',
                'Provides secure seal for shipping boxes',
                'Resistant to aging and temperature variations',
                'Available in clear and colored options',
                'Custom printing available for branding'
            ]
        },
        'multi-printed-bopp-tapes': {
            name: 'Multi-Printed BOPP Tapes',
            category: 'BOPP Tape',
            image: multi_bop_tap,
            description: 'Customizable printed BOPP tapes for branding and promotional needs. Our printed tapes combine functionality with marketing appeal.',
            features: [
                'Custom printing available up to 6 colors',
                'High-quality graphics and text',
                'Enhanced brand visibility during shipping',
                'Multiple color printing capabilities',
                'Excellent print adhesion and durability',
                'Professional appearance'
            ],
            specifications: {
                'Material': 'BOPP Film + Acrylic Adhesive',
                'Printing Colors': 'Up to 6 colors',
                'Width Options': '25mm to 72mm',
                'Print Quality': 'High resolution up to 150 LPI',
                'Print Durability': 'Fade resistant inks',
                'Minimum Order': '1000 rolls per design'
            },
            details: [
                'Perfect for brand promotion and marketing',
                'Provides tamper-evident security features',
                'Excellent for e-commerce and retail packaging',
                'Custom logo and message printing available',
                'Professional design service available',
                'Quick turnaround time for custom orders'
            ]
        }
    };

    const currentProduct = manufacturingData[product || ''];

    if (!currentProduct) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                <Link to="/products" className="text-blue-700 hover:text-blue-900">
                    Return to Products
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
                        <Link to="/products" className="text-blue-700 hover:text-blue-900">Manufacturing</Link>
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
                                    to="/products"
                                    className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-4"
                                >
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back to Manufacturing
                                </Link>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                    {currentProduct.name}
                                </h1>
                                <p className="text-base lg:text-lg text-blue-600 font-medium">{currentProduct.category}</p>
                            </div>

                            <div className="prose max-w-none mb-6 lg:mb-8">
                                <p className="text-sm lg:text-lg text-gray-700">{currentProduct.description}</p>
                            </div>

                            {/* Quality Badges - Responsive Layout */}
                            <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-6 lg:mb-8">
                                <div className="text-center p-2 lg:p-4 bg-blue-50 rounded-lg">
                                    <Package className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700 mx-auto mb-1 lg:mb-2" />
                                    <h3 className="text-xs lg:text-sm font-semibold text-gray-900">Quality Assured</h3>
                                    <p className="text-xs text-gray-600 hidden lg:block">ISO certified</p>
                                </div>
                                <div className="text-center p-2 lg:p-4 bg-blue-50 rounded-lg">
                                    <Truck className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700 mx-auto mb-1 lg:mb-2" />
                                    <h3 className="text-xs lg:text-sm font-semibold text-gray-900">Fast Delivery</h3>
                                    <p className="text-xs text-gray-600 hidden lg:block">Quick shipping</p>
                                </div>
                                <div className="text-center p-2 lg:p-4 bg-blue-50 rounded-lg">
                                    <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700 mx-auto mb-1 lg:mb-2" />
                                    <h3 className="text-xs lg:text-sm font-semibold text-gray-900">Reliable</h3>
                                    <p className="text-xs text-gray-600 hidden lg:block">15+ years experience</p>
                                </div>
                            </div>

                            {/* Action Buttons - Responsive Layout */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => openEnquiryModal(currentProduct.name, currentProduct.image, currentProduct.category)}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm lg:text-base"
                                >
                                    <MessageSquare className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                                    Send Enquiry
                                </button>
                                <Link
                                    to="/contact"
                                    className="flex-1 bg-blue-700 hover:bg-blue-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-colors text-center text-sm lg:text-base"
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
                                                {typeof value === 'object' ? JSON.stringify(value) : String(value)}
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
                                            <Check className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600 mr-2 lg:mr-3 mt-0.5" />
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

export default ManufacturingDetail;