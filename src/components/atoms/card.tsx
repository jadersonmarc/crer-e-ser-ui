import React from 'react';
import Image from 'next/image';

interface CardProps {
  title?: string;
  description?: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title = '', description = '', imageUrl }) => {
  return (
      <div style={{height: '500px'}} className="w-full  cursor-pointer">
        <Image src={imageUrl} alt={title} className="w-full h-full object-cover " />
      </div>
  );
};


export default Card;