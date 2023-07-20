'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

import GiphyImage from '~/images/giphy.png';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='mt-4'>WELCOME TO YOUR GIPHY</h1>

          <div className='mb-16 mt-8'>
            <Image
              src={GiphyImage}
              width={346}
              height={100}
              alt='giphy image'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <Link
              className='text-indigo-600 underline underline-offset-4'
              href='/iron-man-giphy'
            >
              IRON MAN GIPHY
            </Link>
            <Link
              className='text-indigo-600 underline underline-offset-4'
              href='/search-giphy'
            >
              SEARCH YOUR GIPHY
            </Link>
          </div>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://ananhartanto.com/en'>
              Anan Hartanto
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
