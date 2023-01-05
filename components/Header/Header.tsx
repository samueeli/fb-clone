import React from 'react';
import { useSession } from 'next-auth/react';
import { HeaderCenter } from './HeaderCenter';
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';

const Header = ({ imgSource }) => {
  const { data: session } = useSession();

  return (
    <div
      className="sticky top-0 z-50 bg-white flex items-center 
      p-2 lg:px-5 shadow-md"
    >
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight imgSource={session?.user?.image} />
    </div>
  );
};

export default Header;
