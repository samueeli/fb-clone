import Image from 'next/image';
import React from 'react';

interface ContactProps {
  name: string;
  src: string;
  online?: boolean;
}

export const Contact = ({ name, src, online }: ContactProps) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2">
      <Image
        className="rounded-full"
        src={src}
        width={50}
        height={50}
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        alt={name}
      />
      <p>{name}</p>
      {online && (
        <div className="absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full shadow" />
      )}
    </div>
  );
};
