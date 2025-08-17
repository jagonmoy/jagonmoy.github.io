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
  title: 'Jagonmoy | Software Engineer | Gen AI Enthusiast',
  description: "Showcasing Jagonmoy's education, work experience, and projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/20">
            <NavBar />
            <div className="flex flex-col lg:grid lg:grid-cols-4 pt-16 md:pt-18 lg:pt-20">
              <div className="w-full lg:col-span-1 px-4 sm:px-6 lg:px-4 py-4 sm:py-6">
                <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:scrollbar-hide">
                  <ProfileAndIntro />
                </div>
              </div>
              <div className="w-full lg:col-span-3 px-4 sm:px-6 lg:px-6 mb-6 sm:mb-8">
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
