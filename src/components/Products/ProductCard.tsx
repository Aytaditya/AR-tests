import React from 'react';
import { View } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProductCard = ({ title, description, imageUrl }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors">
          <View className="h-5 w-5 text-indigo-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          View in AR
        </button>
      </div>
    </div>
  );
};