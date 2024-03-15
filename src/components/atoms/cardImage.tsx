import React from 'react';
import Image from 'next/image';

interface CardProps {
  title?: string;
  description?: string;
  imageUrl: string;
}

const ImageCard: React.FC<CardProps> = ({ title = '', description = '', imageUrl }) => {
  return (
      <div  className="w-full h-full cursor-pointer rounded-md">
        <Image src={imageUrl} alt={title} width={500} height={500} className="w-full h-full object-cover rounded-md" />
      </div>
  );
};


export default ImageCard;