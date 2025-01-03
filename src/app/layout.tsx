import type { Metadata } from "next";
import { Belleza } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const belleza = Belleza({ subsets: ["latin"], 
  weight: ['400']
});

export const metadata: Metadata = {
  title: "Blog-Faqeha",
  description: "Made using Sanity CMS headless",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={belleza.className}>
        <div className="fixex z-20 w-full top-0">
        <Navbar />
        </div>
       
        {children}
        <Footer />
      </body>
    </html>
  );
}
