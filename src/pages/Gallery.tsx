import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://media.istockphoto.com/id/2220714973/photo/air-cushion-machines-for-bubble-wrap.jpg?s=612x612&w=0&k=20&c=AeYq1dWcbchrhFgq6E8mGPzCgNbt_QO4CK4Q8Js90dw=',
      alt: 'Manufacturing facility overview',
      category: 'Manufacturing'
    },
    {
      src: 'https://media.istockphoto.com/id/1237400536/photo/warehouse-worker-holding-clipboard-writing-on-paper-for-shipment-goods.jpg?s=612x612&w=0&k=20&c=7FpoeH1eL8-2xCd4n4Xe877ALiDA6aASSem65VJLCB8=',
      alt: 'Air bubble roll production line',
      category: 'Production'
    },
    {
      src: 'https://media.istockphoto.com/id/1448788392/photo/table-with-laptop-boxes-and-bubble-wrap-in-warehouse.jpg?s=612x612&w=0&k=20&c=HJ2gz9hEtnPF-P5uz5r3Gz8xYXG_8slhycZaNpiTJMM=',
      alt: 'Air bubble packaging products',
      category: 'Products'
    },
    {
      src: 'https://media.istockphoto.com/id/926515138/photo/plastic-factory.jpg?s=612x612&w=0&k=20&c=P3ATgM-klw7lEsE5BdpTXUB0wPmt90iuUZmS9vxVOUc=',
      alt: 'Polybag manufacturing process',
      category: 'Production'
    },
    {
      src: 'https://media.istockphoto.com/id/120995691/vector/paper-machine.jpg?s=612x612&w=0&k=20&c=3KTjdwroPRmsy-Jw-FA3hSxRPprtv_cMEGIda2XTqzE=',
      alt: 'EP foam production',
      category: 'Manufacturing'
    },
    {
      src: 'https://media.istockphoto.com/id/1438137939/photo/the-production-workshop-of-woven-belt-a-factory-workshop-where-textile-belts-are-produced.jpg?s=612x612&w=0&k=20&c=VABSDOvtS1l8mHR_tWsAUuM4WEodfAAhiL5gaXaWe4g=',
      alt: 'BOPP tape production',
      category: 'Production'
    },
    {
      src: 'https://media.istockphoto.com/id/584772686/photo/looking-for-a-specific-item.jpg?s=612x612&w=0&k=20&c=bycolZKCy-iPbwzABi_zS7XcrCCSJmy2J9dS5272aHI=',
      alt: 'Quality control process',
      category: 'Quality Control'
    },
    {
      src: 'https://media.istockphoto.com/id/1002113164/photo/transport-for-delivery-on-a-warehouse-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=sjRl5-T6LwNivqhIQtBUlU426sr48Z0dGn7eUjCWC1I=',
      alt: 'Packaging and shipping',
      category: 'Shipping'
    },
    {
      src: 'https://media.istockphoto.com/id/2197655235/photo/close-up-of-three-people-looking-at-financial-data-with-graphs-and-charts.jpg?s=612x612&w=0&k=20&c=rOX0dS9sbA5EaYkcj-UdjeboXoopcu4-dy6qp0XJy_c=',
      alt: 'Client project showcase',
      category: 'Client Work'
    },
    {
      src: 'https://media.istockphoto.com/id/1147956953/photo/large-textile-industry-factory.jpg?s=612x612&w=0&k=20&c=17cdqZGXR2ql-1QH2xGWhWoTh7MNRySogVaxdW_fhNM=',
      alt: 'Industrial machinery',
      category: 'Manufacturing'
    },
    {
      src: 'https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=',
      alt: 'Team at work',
      category: 'Team'
    },
    
  ];

  const categories = ['All', 'Manufacturing', 'Production', 'Products', 'Quality Control', 'Shipping', 'Client Work', 'Team'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div>
      {/* Hero Section - UPDATED: Added background image */}
      <section 
        className="relative bg-gradient-to-r from-purple-900/90 to-black-700/90 text-white py-20"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ=)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-purple-900 bg-opacity-75"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Take a behind-the-scenes look at our manufacturing processes, quality control procedures, and the dedicated team that makes it all possible.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-purple-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium text-center px-4">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-purple-700 text-white text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - UPDATED: Added background image */}
      <section 
        className="relative py-12 lg:py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4226929/pexels-photo-4226929.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-purple-700 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
            Want to Visit Our Facility?
          </h2>
          <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Schedule a tour of our manufacturing facility and see our quality processes in action.
          </p>
          <a
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-block text-sm lg:text-base"
          >
            Schedule a Visit
          </a>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;