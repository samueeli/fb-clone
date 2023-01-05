import Image from 'next/image';
import React from 'react';

interface SidebarRowProps {
  src?: string | null | undefined;
  Icon?: any;
  title: string | null | undefined;
}

export const SidebarRow = ({ src, Icon, title }: SidebarRowProps) => {
  return (
    <div
      className="flex items-center space-x-2
    p-4 hover:bg-gray-200 rounded-xl cursor-pointer"
    >
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          alt="user image"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};
