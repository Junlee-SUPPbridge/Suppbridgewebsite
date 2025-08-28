import React from 'react';

interface MapSectionProps {
  address: string;
  mapUrl: string;
}

const MapSection: React.FC<MapSectionProps> = ({ address, mapUrl }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="h-96 w-full">
            <iframe
              title="SuppBridge Location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2">SuppBridge</h3>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;