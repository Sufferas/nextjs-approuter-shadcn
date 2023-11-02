import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react';
import Nav from './nav';
import Fooder from '../components/fooder';




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Resizer by Kühhas',
  description: 'On this page, you can scale images, change formats, and place logos within your pictures.',
    creator: 'Alexander Kühhas MSc',
    manifest: '/manifest.json',
    icons: {apple: '/icon.png'},
    themeColor: '#fff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }} >
      <body className={`${inter.className} dark custom-bg`}>
      <Suspense>
          <Nav />
      </Suspense>

      {children}
        <Fooder />
      </body>
    </html>
  )
}
