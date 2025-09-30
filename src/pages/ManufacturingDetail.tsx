import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Truck, Shield, MessageSquare } from 'lucide-react';
import EnquiryModal from '../components/EnquiryModal';
import bopp_tape from "../assets/bopp_tape.jpg"
import bubble_bag from "../assets/bubble_bags.png"
import bubble_pouch from "../assets/air_bubble_pouch.png"
import bubble_roll from "../assets/bubble_roll.png"
import ld_sheet from "../assets/ld_sheet.png"
import ld_bags from "../assets/ld_bags.png"
import ep_foam from "../assets/ep_foam_sheet.png"
import ep_fitment from "../assets/ep_fitment.png"
import multi_bop_tap from "../assets/multi_printed_tap.png"
import self_seal_pouch from "../assets/self_seal_polybag.jpg"
import anti_static_polybag from "../assets/anti_static_pouch.webp"
import printed_pouch_polybag from "../assets/printed_poly_bag.jpg"
import vci_poly_bags from "../assets/vci_poly_bag.webp"
import epe_foam_bag from "../assets/epe_foam_bag.jpg"
import epe_foam_hmhd_pouch from "../assets/epe_foam_hmhd_pouch.webp"



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
                'Bubble Size': 'According to customer',
                'Thickness': '80-120 microns',
                'Sizes Available': 'According to cutomer',
                'Closure Type': 'Self-sealing adhesive',
            },
            details: [
                'Perfect for protecting electronics, glassware, and delicate items',
                'Provides superior cushioning compared to traditional packaging',
                'Easy to use with no additional sealing equipment required',
                'Reduces packaging time and labor costs',
                
            ]
        },
        'self-seal-pouch': {
            name: 'Self Seal Pouch',
            category: 'Polybags / Pouches',
            image: self_seal_pouch,
            description: 'Convenient resealable pouches designed for secure storage and packaging. Ideal for keeping products fresh, protected, and easy to access.',
            features: [
                'Easy-to-use resealable closure',
                'Strong and durable material',
                'Moisture and dust resistant',
                'Reusable and economical',
                'Available in multiple sizes and thicknesses'
            ],
            specifications: {
                'Material': 'Low Density Polyethylene (LDPE) / Polypropylene (PP)',
                'Size Range': 'According to customer"',
                'Closure Type': 'Self-seal / Zip lock',
                'Printing': 'Up to 2 colors available',
                'Finish Options': 'Glossy or matte'
            },
            details: [
                'Perfect for packaging food, electronics, and retail products',
                'Provides airtight sealing to maintain product freshness',
                'Easy open and close functionality for end users',
                'Custom sizes and printing available',
                'Meets food safety standards'
            ]
        },
        'anti-static-polybag': {
            name: 'Anti Static Pouch',
            category: 'Polybags / Protective Bags',
            image: anti_static_polybag,
            description: 'Specially designed polybags that protect sensitive electronic components from static electricity damage during storage and shipping.',
            features: [
                'Prevents static charge build-up',
                'Strong and durable material',
                'Transparent for easy product identification',
                'Lightweight yet protective',
                'Moisture and dust resistant',
                'Reusable and recyclable'
            ],
            specifications: {
                'Material': 'Polyethylene with anti-static additive',
                'Color': 'According to customer',
                'Thickness Range': '40-100 microns',
                'Size Range': 'According to customer"',
                'Closure Options': 'Open top, zip lock, self-seal',
                'Surface Resistance': '10^9 to 10^11 ohms/sq'
            },
            details: [
                'Ideal for packaging electronic components and PCBs',
                'Prevents electrostatic discharge (ESD) damage',
                'Custom printing available for branding and instructions',
                'Meets international ESD protection standards',
                'Suitable for export packaging of electronics',
                'Lightweight and economical solution'
            ]
        },
        'printed-pouch-polybag': {
            name: 'Printed pouch',
            category: 'Polybags / Pouches',
            image: printed_pouch_polybag,
            description: 'Custom printed poly pouches designed for attractive retail packaging and secure product storage.',
            features: [
                'High-quality custom printing',
                'Strong and durable construction',
                'Excellent product visibility',
                'Moisture and dust resistant',
                'Available in multiple sizes and thicknesses',
                'Supports branding and product information'
            ],
            specifications: {
                'Printing': 'Up to 4 colors (rotogravure/flexographic)',
                'Thickness Range': 'According to customer',
                'Size Range': 'According to customer"',
                'Finish Options': 'Glossy, matte, transparent, opaque'
            },
            details: [
                'Ideal for FMCG, food, retail, and export packaging',
                'Enhances shelf appeal with attractive printing',
                'Customizable with logos, designs, and product details',
                'Provides secure sealing and product protection',
                'Available with gussets for larger volume products',
            ]
        },
        'anti-static-poly-bags': {
    name: 'Anti Static Poly Bags',
    category: 'Protective Packaging / Poly Bags',
    image: anti_static_polybag, // make sure you import the image
    description: 'Anti Static Poly Bags are designed to protect sensitive electronic components from electrostatic discharge (ESD) damage. These bags provide a reliable and cost-effective packaging solution for semiconductors, printed circuit boards (PCBs), and other delicate electronic devices, ensuring safety during handling, shipping, and storage.',
    features: [
        'Prevents electrostatic discharge (ESD)',
        'Protects sensitive electronic components',
        'Durable and puncture-resistant material',
        'Lightweight and cost-effective',
        'Transparent or tinted for easy identification',
        'Available with open top or zip lock closure'
    ],
    specifications: {
        'Material': 'Polyethylene with anti-static additive',
        'Surface Resistance': '10^9 – 10^11 ohms/sq',
        'Color': 'Pink / Clear',
        'Closure': 'Open top / Zip lock',
        'Size Range': 'Custom sizes available',
        'Thickness Range': 'Varies as per requirement'
    },
    details: [
        'Ideal for packaging semiconductors, PCBs, and sensitive electronic devices',
        'Minimizes risk of static charge build-up during transport and handling',
        'Complies with ESD-safe packaging requirements',
        'Can be customized with print and branding',
        'Cost-effective solution for electronics industry packaging',
        'Widely used in manufacturing, assembly, and shipping applications'
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
                'Bubble Size': 'According to customer',
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
                'Bubble Sizes': 'According to customer',
                'Roll Width': 'According to customer',
                'Roll Length': 'According to customer',
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
                'Thickness Range': 'According to customer',
                'Width Options': 'According to customer',
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
        'vci-poly-bags': {
    name: 'VCI Poly Bags',
    category: 'Protective Packaging / Poly Bags',
    image: vci_poly_bags, // make sure you import the image
    description: 'SOur Kraft Paper Bubble Lined Bags, Paper Cushion Padded Envelopes, and Bubble Courier Bags are specially designed to provide superior protection and convenience for shipping and packaging applications. Combining durability, cushioning, and eco-friendly materials, these packaging solutions are ideal for businesses and individuals looking to ship products safely..',
    features: [
        'Prevents rust and corrosion on metals',
        'Durable and tear-resistant',
        'Moisture and dust barrier protection',
        'Available in multiple sizes and thicknesses',
        'Transparent for easy identification',
        'Environmentally friendly options available'
    ],
    specifications: {
        'Material': 'Polyethylene with VCI additive',
        'Thickness Range': 'According to customer',
        'Size Range': 'According to customer',
        'Color': 'Transparent / Semi-transparent',
        'Shelf Life': 'Up to 2 years in proper storage',
        'Temperature Range': '-20°C to 60°C'
    },
    details: [
        'Ideal for storing and transporting metal parts and components',
        'Prevents rust during shipping and storage',
        'Easy to use and seal',
        'Custom sizes available on request',
        'Compatible with industrial packaging and pallets',
        'Cost-effective corrosion protection solution'
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
                'Thickness Range': 'According to customer',
                'Size Range': 'According to customer',
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
                'Density Range': 'According to customer',
                'Thickness Options': 'According to customer',
                'Width Range': 'According to customer',
                'Compressive Strength': 'According to customer',
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
                'Density Range': 'According to customer',
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
        'epe-foam-bag': {
    name: 'EPE Foam Bag',
    category: 'EPE Foam / Pouch / Bag',
    image: epe_foam_bag, // make sure you import the image
    description: 'EPE Foam Bags are lightweight, flexible, and non-abrasive packaging solutions designed to protect delicate products from scratches, dust, and minor impacts. Ideal for electronics, glassware, and precision components, these bags provide reliable cushioning during storage and transit.',
    features: [
        'Excellent cushioning and shock absorption',
        'Scratch-resistant and non-abrasive surface',
        'Lightweight yet durable construction',
        'Moisture and dust resistant',
        'Available in multiple sizes and thicknesses',
        'Reusable and eco-friendly options available'
    ],
    specifications: {
        'Material': 'Expanded Polyethylene (EPE) Foam',
        'Thickness Range': '0.5mm – 5mm (customizable)',
        'Density': '18–35 kg/m³',
        'Sizes': 'Custom sizes available',
        'Color': 'White / Pink / Custom',
        'Closure Options': 'Open top / Self-seal'
    },
    details: [
        'Widely used for electronics, glassware, ceramics, and precision instruments',
        'Protects against scratches, abrasions, and light impacts',
        'Lightweight design reduces overall shipping costs',
        'Custom printing and branding available',
        'Reusable and recyclable for sustainable packaging',
        'Cost-effective solution for protective packaging needs'
    ]
},
'epe-foam-hmhd-pouch': {
    name: 'EPE Foam HMHD Pouch',
    category: 'EPE Foam / Pouch / Bag',
    image: epe_foam_hmhd_pouch, // make sure you import the image
    description: 'EPE Foam HMHD Pouches combine the cushioning benefits of EPE foam with the durability of HMHD film. These pouches are designed to provide dual-layer protection against impacts, scratches, moisture, and dust, making them ideal for packaging delicate and fragile items during storage and transportation.',
    features: [
        'Dual-layer construction with EPE foam and HMHD film',
        'Superior cushioning and shock absorption',
        'Scratch-resistant and non-abrasive surface',
        'Tear and puncture-resistant outer layer',
        'Moisture and dust protection',
        'Lightweight yet heavy-duty performance',
        'Custom sizes, thicknesses, and closures available'
    ],
    specifications: {
        'Material': 'Expanded Polyethylene (EPE) Foam laminated with HMHD Polyethylene Film',
        'Sizes': 'Custom sizes available',
        'Color': 'White / Pink / Transparent / Custom',
        'Closure Options': 'Open top / Self-seal / Heat seal',
        'Applications': 'Electronics, glassware, ceramics, precision instruments, industrial components'
    },
    details: [
        'Ideal for fragile and high-value product packaging',
        'Reduces transit damage with added cushioning',
        'Provides barrier protection against dust and moisture',
        'Customizable thickness, size, and closure options',
        'Reusable and recyclable material options available',
        'Cost-effective solution for protective industrial packaging'
    ]
},
        'bopp-tape': {
            name: 'BOPP Tape',
            category: 'BOPP Tape',
            image: bopp_tape,
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
                'Length Options': 'According to customer',
               
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
                'Enhanced brand visibility during shipping',
                'Multiple color printing capabilities',
                'Excellent print adhesion and durability',
                'Professional appearance'
            ],
            specifications: {
                'Material': 'BOPP Film + Acrylic Adhesive',
                'Printing Colors': 'Up to 6 colors',
                'Width Options': 'According to customer',
                'Print Quality': 'High resolution up to 150 LPI',
                'Print Durability': 'Fade resistant inks',
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