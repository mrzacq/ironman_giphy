'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';

import GiphyList from '@/app/iron-man-giphy/GiphyList';
import { giphyApiKey } from '@/constant/env';

export default function IronManGiphyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryDebounce] = useDebounce(searchQuery, 1000);

  const { data, error, isLoading } = useSWR(
    searchQueryDebounce
      ? `https://api.giphy.com/v1/gifs/search?q=${searchQueryDebounce}&api_key=${giphyApiKey}&limit=9`
      : null,
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-start gap-20 py-12 text-center'>
          <h1>SEARCH YOUR GIPHY</h1>

          <div className=''>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                className='w-[328px] lg:w-[600px]'
                type='search'
                placeholder='Search Giphy'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {isLoading && (
            <div className=''>
              <p className='animate-bounce py-6 text-center text-gray-400'>
                Loading {searchQueryDebounce} giphy...
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
