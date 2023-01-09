import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';
import React from 'react';
import { Contact } from './Contact';

const data = [
  { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz', online: true },
  { src: 'https://links.papareact.com/kxk', name: 'Elon Musk', online: true },
  { src: 'https://links.papareact.com/zvy', name: 'Bill Gates', online: true },
  {
    src: 'https://links.papareact.com/snf',
    name: 'Mark Zuckerberg',
    online: true,
  },
  {
    src: 'https://links.papareact.com/d0c',
    name: 'Harry Potter',
    online: false,
  },
  { src: 'https://links.papareact.com/6gg', name: 'The Queen', online: false },
  { src: 'https://links.papareact.com/r57', name: 'James Bond', online: false },
];

export const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>
      {data.map((contact) => (
        <Contact
          key={contact.src}
          src={contact.src}
          name={contact.name}
          online={contact.online}
        />
      ))}
    </div>
  );
};
