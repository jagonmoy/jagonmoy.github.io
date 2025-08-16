import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';
import './globals.css';
import ProfileAndIntro from 'components/ProfileAndIntro';
import { ThemeProvider } from 'contexts/ThemeContext';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import React from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Jagonmoy | Software Engineer | ML Enthusiast',
  description: 'Modern portfolio showcasing software engineering and machine learning expertise',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/20">
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 pt-16 md:pt-18 lg:pt-20">
              <div className="col-span-1 md:col-span-2 lg:col-span-1 px-4 py-6">
                <ProfileAndIntro />
              </div>
              <div className="col-span-1 md:col-span-3 lg:col-span-3 px-6 md:pl-4 md:pr-6 mb-8">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
