import React from 'react';
import { Percent, Gift, Clock, Star } from 'lucide-react';

const Offers = () => {
  const offers = [
    {
      id: '1',
      title: 'First Trip Discount',
      description: 'Get 25% off on your first booking with GoRide',
      discount: '25% OFF',
      validUntil: '2024-12-31',
      code: 'FIRST25',
      type: 'percentage',
      featured: true
    },
    {
      id: '2',
      title: 'Weekend Special',
      description: 'Flat $15 off on weekend bookings',
      discount: '$15 OFF',
      validUntil: '2024-11-30',
      code: 'WEEKEND15',
      type: 'flat'
    },
    {
      id: '3',
      title: 'Group Booking',
      description: 'Book 4+ seats and save 30% on total fare',
      discount: '30% OFF',
      validUntil: '2024-12-15',
      code: 'GROUP30',
      type: 'percentage'
    },
    {
      id: '4',
      title: 'Student Discount',
      description: 'Special rates for students with valid ID',
      discount: '20% OFF',
      validUntil: '2024-12-31',
      code: 'STUDENT20',
      type: 'special'
    }
  ];

  const getOfferIcon = (type) => {
    switch (type) {
      case 'percentage': return <Percent className="w-6 h-6" />;
      case 'flat': return <Gift className="w-6 h-6" />;
      case 'special': return <Star className="w-6 h-6" />;
      default: return <Gift className="w-6 h-6" />;
    }
  };

  return (
    <section id="offers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save more on your travels with our exclusive deals and discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 ${
                offer.featured
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white border border-gray-200 shadow hover:shadow-lg'
              }`}
            >
              {offer.featured && (
                <div className="absolute top-4 right-4 bg-white/20 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Featured
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    offer.featured
                      ? 'bg-white/20 text-white'
                      : 'bg-indigo-100 text-indigo-500'
                  }`}
                >
                  {getOfferIcon(offer.type)}
                </div>

                {/* Discount Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${
                    offer.featured
                      ? 'bg-white/20 text-white'
                      : 'bg-indigo-200 text-indigo-800'
                  }`}
                >
                  {offer.discount}
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    offer.featured ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {offer.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    offer.featured ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {offer.description}
                </p>

                {/* Validity */}
                <div
                  className={`flex items-center gap-2 text-xs mb-4 ${
                    offer.featured ? 'text-white/70' : 'text-gray-500'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                </div>

                {/* Code & Button */}
                <div className="space-y-3">
                  <div
                    className={`text-center p-2 rounded-lg border-2 border-dashed ${
                      offer.featured
                        ? 'border-white/30 bg-white/10 text-white'
                        : 'border-gray-300 bg-gray-100 text-gray-800'
                    }`}
                  >
                    <span className="text-sm font-mono font-semibold">
                      Code: {offer.code}
                    </span>
                  </div>
                  <button
                    className={`w-full py-2 rounded-md font-semibold transition-colors duration-300 ${
                      offer.featured
                        ? 'bg-white/20 text-white hover:bg-white/30'
                        : 'bg-indigo-500 text-white hover:bg-indigo-600'
                    }`}
                  >
                    {offer.featured ? 'Claim Offer' : 'Use Code'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            More exclusive offers available for registered users
          </p>
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition-colors">
            View All Offers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
