import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
      <div style={{height: '500px'}} className="relative w-full">
        <Image src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="font-mono text-yellow-600 font-bold text-center p-4">{description}</p>
        </div>
      </div>
  );
};


export default Card;