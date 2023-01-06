import React from 'react';
import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';

interface PostProps {
  name?: string;
  message?: string;
  email?: string;
  timestamp?: string;
  image?: string;
}

export const Post = ({ ...props }: PostProps) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={props.image}
            width={40}
            height={40}
            alt="users head image"
          />
          <div>
            <p className="font-medium">{props.name}</p>
            <p className="text-xs text-gray-400">{props.timestamp}</p>
          </div>
        </div>

        <p className="pt-4">{props.message}</p>
      </div>
      <div
        className="flex justify-between items-center rounded-b-2xl
      bg-white shadow-md text-gray-400 border-t overflow-hidden"
      >
        <div className="inputIcon rounded-none">
          <HandThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatBubbleBottomCenterIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};
