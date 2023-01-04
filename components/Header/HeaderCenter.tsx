import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import React from 'react';
import { IconButton } from '../IconButton';

export const HeaderCenter = () => {
  return (
    <div className="flex justify-center flex-grow">
      <div className="flex space-x-6 md:space-x-2">
        <IconButton active Icon={HomeIcon} />
        <IconButton Icon={FlagIcon} />
        <IconButton Icon={PlayIcon} />
        <IconButton Icon={ShoppingCartIcon} />
        <IconButton Icon={UserGroupIcon} />
      </div>
    </div>
  );
};
