import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

interface HeaderRightProps {
  imgSource: any;
  userName: string | null | undefined;
}

const handleSignout = () => {
  console.log('samulin signout');
  signOut();
};

export const HeaderRight = ({ imgSource, userName }: HeaderRightProps) => {
  return (
    <div className="flex items-center sm:space-x-2 justify-end">
      <Image
        onClick={handleSignout}
        className="rounded-full cursor-pointer"
        src={imgSource}
        width={40}
        height={40}
        alt="Sign out"
      />
      <p className="hidden sm:inline-flex whitespace-nowrap font-semibold pr-3">
        {userName}
      </p>
      <Squares2X2Icon className="icon" />
      <ChatBubbleOvalLeftIcon className="icon" />
      <BellIcon className="icon" />
      <ChevronDownIcon className="icon" />
    </div>
  );
};
