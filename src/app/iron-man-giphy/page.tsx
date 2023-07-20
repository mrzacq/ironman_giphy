'use client';
import React from 'react';
import useSWR from 'swr';

import GiphyList from '@/app/iron-man-giphy/GiphyList';
import { giphyApiKey } from '@/constant/env';

export default function IronManGiphyPage() {
  const { data, error, isLoading } = useSWR(
    `https://api.giphy.com/v1/gifs/search?q=ironman&api_key=${giphyApiKey}&limit=9`,
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-start gap-20 py-12 text-center'>
          <h1>IRON MAN GIPHY</h1>

          {isLoading && (
            <div className=''>
              <p className='animate-bounce py-6 text-center text-gray-400'>
                Loading ironman giphy...
              </p>
            </div>
          )}

          {data?.data?.length > 0 && <GiphyList data={data?.data} />}

          {error && <div className=''>{JSON.stringify(error)}</div>}
        </div>
      </section>
    </main>
  );
}
