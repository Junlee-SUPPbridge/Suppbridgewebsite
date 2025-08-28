import React from 'react';
import { useLocale } from '../hooks/useLocale';

const PartnersSection: React.FC = () => {
  const { t } = useLocale();
  
  // 合作伙伴徽标数组
  const partners = [
    { name: 'Partner 1', logo: '/images/partners/partner-1.png' },
    { name: 'Partner 2', logo: '/images/partners/partner-2.png' },
    { name: 'Partner 3', logo: '/images/partners/partner-3.png' },
    { name: 'Partner 4', logo: '/images/partners/partner-4.png' },
    { name: 'Partner 5', logo: '/images/partners/partner-5.png' },
    { name: 'Partner 6', logo: '/images/partners/partner-6.png' }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.partners.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('home.partners.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;