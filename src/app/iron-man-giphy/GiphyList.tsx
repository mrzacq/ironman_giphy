import React from 'react';

import GiphyItem from '@/app/iron-man-giphy/GiphyItem';

export default function GiphyList({ data }: unknown) {
  return (
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
      {data?.map((giphy, i) => {
        return <GiphyItem giphy={giphy} key={i} />;
      })}
    </div>
  );
}