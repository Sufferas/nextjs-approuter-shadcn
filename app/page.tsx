// "use client"; // This is a client component 👈🏽
// import React, {useState, ChangeEvent} from 'react';
import Image from 'next/image';

import React from 'react';
import ImageUpload from '../components/ImageUpload'; // Pfad entsprechend anpassen

const Page: React.FC = () => {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  ResizeRover
              </p>


              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                  <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 mylogourl"
                     href="https://kuehhas.info"
                     target="_blank"
                     rel="noopener noreferrer">
                      <Image src="/logo_info.webp" alt="Vercel Logo" className="mylogo"  width={160} height={105} priority />
                  </a>
                  <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
                      <Image src="/next.svg" alt="Vercel Logo" className="dark:invert" width={150} height={48} priority />
                  </a>

              </div>
          </div>
        <ImageUpload />
        {/* Rest des Codes ... */}
      </main>
  );
};

export default Page;
