import Image from 'next/image';
import React from 'react';
import { HeaderCenter } from './HeaderCenter';
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';

const Header = () => {
  return (
    <div>
      <h1>header</h1>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
};

export default Header;
