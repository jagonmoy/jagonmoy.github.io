import NavBar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import ProfileAndIntro from "@/components/ProfileAndIntro";

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jagonmoy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen`}>
        <NavBar />
        <div className="grid grid-cols-1 lg:grid-cols-4 pt-12">
          <div className="col-span-1 px-4 py-5">
            <ProfileAndIntro />
          </div>
          <div className="col-span-1 lg:col-span-3 px-8">
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
