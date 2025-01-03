import React from 'react';

export default function Offer() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Special Offers
        </h1>
        <ul className="space-y-8 text-lg">
          <li className="p-4 bg-white bg-opacity-50 rounded-lg shadow-md hover:bg-opacity-75 transition">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">
              Exclusive Perfume Discount
            </h2>
            <p className="text-gray-800">
              Get 20% off on our best-selling perfumes. Limited time only!
            </p>
          </li>

          <li className="p-4 bg-white bg-opacity-50 rounded-lg shadow-md hover:bg-opacity-75 transition">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">
              Buy One Get One Free
            </h2>
            <p className="text-gray-800">
              Purchase any perfume and get another one absolutely free!
            </p>
          </li>

          <li className="p-4 bg-white bg-opacity-50 rounded-lg shadow-md hover:bg-opacity-75 transition">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">
              Seasonal Sale
            </h2>
            <p className="text-gray-800">
              Enjoy up to 50% off on selected fragrances. Don't miss out!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
