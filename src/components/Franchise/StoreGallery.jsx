import React from "react";
import franchise1 from "../../assets/franchise/f1.png";
import franchise2 from "../../assets/franchise/franchise2.png";
import franchise4 from "../../assets/franchise/franchise4.png";
export default function StoreGallery() {
  const storeTypes = [
    {
      id: 1,
      name: "Grab & Go",
      type: "Express Kiosk",
      image: franchise1,
      description: "Compact kiosk for high-traffic locations"
    },
    {
      id: 2,
      name: "Urban Junction",
      type: "Premium Café",
      image: franchise2,
      description: "Modern urban café with dine-in experience"
    },
    {
      id: 3,
      name: "Metro Junction",
      type: "Flagship Store",
      image: franchise4,
      description: "Premium flagship with extensive amenities"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Store Formats</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three distinct models designed for different market segments and investment levels
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storeTypes.map((store) => (
            <div key={store.id} className="text-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-4">
                <img 
                  src={store.image} 
                  alt={store.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">{store.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{store.type}</p>
              <p className="text-sm text-gray-500">{store.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}