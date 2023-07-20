import Image from 'next/image';
import React from 'react';

export default function GiphyItem({ giphy }: unknown) {
  return (
    <div className='flex aspect-square items-center justify-center overflow-hidden border-2 border-black'>
      <Image
        src={giphy?.images?.original?.url}
        alt={giphy?.title}
        height={giphy?.images?.original?.height}
        width={giphy?.images?.original?.width}
      />
    </div>
  );
}
