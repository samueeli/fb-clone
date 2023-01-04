import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import React from 'react';

export const HeaderRight = () => {
  return (
    <div className="flex items-center sm:space-x-2 justify-end">
      {/* Profile pic */}
      <p className="whitespace-nowrap font-semibold pr-3">User Name</p>
      <Squares2X2Icon className="icon" />
      <ChatBubbleOvalLeftIcon className="icon" />
      <BellIcon className="icon" />
      <ChevronDownIcon className="icon" />
    </div>
  );
};
