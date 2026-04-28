import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giaco Tattoo",
  description: "Página web oficial de Fran Giaco Tattoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="text-neutral-900 min-h-screen flex flex-col font-inter relative">
        
        {/* FONDO GLOBAL (Capa gris + Capa blanca semitransparente) */}
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-neutral-300"></div> 
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="w-full max-w-[1084px] mx-auto flex flex-col min-h-screen relative pt-6 md:pt-8">
          
          <Navbar />

          <div className="flex-1 flex flex-col">{children}</div>

          <footer className="bg-neutral-950 text-neutral-400 font-inter text-[10px] tracking-widest uppercase py-16 flex flex-col items-center gap-8 px-8 mt-auto rounded-t-3xl md:rounded-t-none">
            <div className="flex gap-8">
              <a className="text-neutral-500 hover:text-white transition-colors duration-300" href="#">EMAIL</a>
              <a className="text-neutral-500 hover:text-white transition-colors duration-300" href="#">INSTAGRAM</a>
              <a className="text-neutral-500 hover:text-white transition-colors duration-300" href="#">WHATSAPP</a>
            </div>
            <div className="text-neutral-600">
              © GIACO TATTOO. ALL RIGHTS RESERVED.
            </div>
          </footer>
        
        </div>
      </body>
    </html>
  );
}