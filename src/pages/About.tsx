import React from 'react';
import { Shield, Award, Users, Factory, Truck, CheckCircle } from 'lucide-react';
import about_ct from "../assets/about_background.jpg"
import manufacturing from "../assets/manufacturing_excellance.jpg"

const About = () => {
  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Nirraj Packaging was established with a vision to provide premium packaging solutions.'
    },
    {
      year: '2012',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management systems.'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded operations to serve Gujarat, Haryana, and Rajasthan markets.'
    },
    {
      year: '2020',
      title: 'Modern Facility',
      description: 'Upgraded to state-of-the-art manufacturing facility with advanced machinery.'
    },
    {
      year: '2024',
      title: 'Market Leader',
      description: 'Established as a trusted leader in packaging materials across North and West India.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We build lasting relationships through exceptional service.'
    },
    {
      icon: Factory,
      title: 'Innovation',
      description: 'We continuously invest in new technologies and processes to deliver cutting-edge packaging solutions.'
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Consistent quality, on-time delivery, and dependable service make us a trusted partner for businesses.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Product Variants' },
    { number: '3', label: 'States Served' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-900/90 to-blue-700/90 text-white py-12 lg:py-20"
        style={{
          backgroundImage: `url(${"https://media.istockphoto.com/id/1388184241/photo/modern-abstract-wavy-black-empty-space-round-pedestal-background-black-friday-3d-illustration.jpg?s=612x612&w=0&k=20&c=HZO36DU9EhrG5KxbmayWJzuFBT4CxH8ZEQicwt_NsgQ="})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
              About Nirraj Packaging
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for premium packaging solutions across Gujarat, Haryana, and Rajasthan. 
              With over 15 years of experience, we deliver quality that protects and performance that exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-4xl font-bold text-blue-700 mb-1 lg:mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Story
              </h2>
              <p className="text-sm lg:text-lg text-gray-600 mb-4 lg:mb-6">
                Founded in 2008, Nirraj Packaging began as a small family business with a big vision: to provide 
                high-quality packaging materials that businesses could rely on. What started in a modest facility 
                has grown into a modern manufacturing operation serving hundreds of satisfied customers.
              </p>
              <p className="text-sm lg:text-lg text-gray-600 mb-4 lg:mb-6">
                Our journey has been marked by continuous growth, technological advancement, and an unwavering 
                commitment to quality. Today, we're proud to be a trusted name in packaging across Gujarat, 
                Haryana, and Rajasthan.
              </p>
              <p className="text-sm lg:text-lg text-gray-600">
                From air bubble packaging to specialized tapes, every product we manufacture reflects our 
                dedication to excellence and our understanding of what businesses need to succeed.
              </p>
            </div>
            <div className="relative">
              <img
                src={"https://media.istockphoto.com/id/638961286/vector/about-us-website-banner-concept-with-thin-line-flat-design.jpg?s=612x612&w=0&k=20&c=jaRsalcmBD0yZT7OpZpXpl3kfn3UtT01-Ph0sDdbMt0="}
                alt="Manufacturing facility"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Values */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Our Values
            </h2>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Nirraj Packaging.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-4 lg:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full p-3 lg:p-4 w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                  <value.icon className="h-6 w-6 lg:h-8 lg:w-8 text-blue-700" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2 lg:mb-3">{value.title}</h3>
                <p className="text-xs lg:text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <img
                src={manufacturing}
                alt="Quality control process"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Manufacturing Excellence
              </h2>
              <p className="text-sm lg:text-lg text-gray-600 mb-4 lg:mb-6">
                Our state-of-the-art manufacturing facility is equipped with the latest technology and operated 
                by skilled professionals who understand the importance of precision in packaging.
              </p>
              
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-600 mr-2 lg:mr-3 mt-0.5" />
                  <span className="text-sm lg:text-base text-gray-700">ISO 9001:2015 certified quality management system</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-600 mr-2 lg:mr-3 mt-0.5" />
                  <span className="text-sm lg:text-base text-gray-700">Advanced machinery for consistent product quality</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-600 mr-2 lg:mr-3 mt-0.5" />
                  <span className="text-sm lg:text-base text-gray-700">Rigorous testing at every stage of production</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-green-600 mr-2 lg:mr-3 mt-0.5" />
                  <span className="text-sm lg:text-base text-gray-700">Environmentally responsible manufacturing processes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-12 lg:py-20 text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-85"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">
            Ready to Experience the Nirraj Difference?
          </h2>
          <p className="text-sm lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Nirraj Packaging for their packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <a
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
            >
              Get in Touch
            </a>
            <a
              href="/products"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm lg:text-base"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;