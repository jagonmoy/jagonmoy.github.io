import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';
import './globals.css';
import ProfileAndIntro from 'components/ProfileAndIntro';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script';
import React from 'react';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jagonmoy | Software Engineer | ML Enthusiast',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="mcjs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/aca4c7de46a7986f85c39779c/82bcf1427bb90245d72a284b8.js");`,
          }}
        />
      </head>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      <body className={`${roboto.className} min-h-screen`}>
        <NavBar />
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 pt-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 px-2 py-5">
            <ProfileAndIntro />
          </div>
          <div className="col-span-1 md:col-span-3 lg:col-span-3 px-4 md:pl-2 md:pr-4 mb-8">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
