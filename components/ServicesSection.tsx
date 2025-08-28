import React from 'react';
import Link from 'next/link';
import { useLocale } from '../hooks/useLocale';

const ServicesSection: React.FC = () => {
  const { t } = useLocale();
  
  const services = [
    {
      image: '/images/services/product-development.jpg',
      title: t('home.services.items.0.title'),
      description: t('home.services.items.0.description'),
      link: '/services/product-development'
    },
    {
      image: '/images/services/manufacturing.jpg',
      title: t('home.services.items.1.title'),
      description: t('home.services.items.1.description'),
      link: '/services/manufacturing'
    },
    {
      image: '/images/services/packaging-design.jpg',
      title: t('home.services.items.2.title'),
      description: t('home.services.items.2.description'),
      link: '/services/packaging-design'
    },
    {
      image: '/images/services/logistics.jpg',
      title: t('home.services.items.3.title'),
      description: t('home.services.items.3.description'),
      link: '/services/logistics'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.services.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t('home.services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <a className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/services">
            <a className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors">
              {t('home.services.viewAll')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;