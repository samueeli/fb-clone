import Image from 'next/image';
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const HeaderLeft = () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://links.papareact.com/5me"
        width={40}
        height={40}
        alt="fb-logo"
      />
      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <MagnifyingGlassIcon className="h-6 text-gray-600" />
        <input
          className="flex ml-2 items-center bg-transparent
          outline-none placeholder-gray-500"
          type="text"
          placeholder="Search Facebook"
        />
      </div>
    </div>
  );
};
