import Image from 'next/image';
import React from 'react';

export const StoryCard = ({ name, src, profile }) => {
  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20
    lg:h-56 lg:w-32 cursor-pointer overflow-x p-3
    transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
    >
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-3"
        src={profile}
        width={40}
        height={40}
        style={{ height: '40px', width: '40px', objectFit: 'cover' }}
        alt="profile image"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        alt="src image"
        fill
      />
      <h1 className="hidden lg:block w-24 absolute text-white z-50 bottom-3 whitespace-nowrap text-ellipsis overflow-hidden">
        {name}
      </h1>
    </div>
  );
};
