import React from 'react';

interface IconButtonProps {
  Icon: any;
  active?: boolean;
}

export const IconButton = ({ Icon, active }: IconButtonProps) => {
  return (
    <div
      className="flex items-center cursor-pointer md:px-2 lg:px-10 md:h-14
    hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500
    group"
    >
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx-auto 
        group-hover:text-blue-500 ${active && 'text-blue-500'}`}
      />
    </div>
  );
};
