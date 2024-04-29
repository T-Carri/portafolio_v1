import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./ui/navbar";



export const metadata: Metadata = {
  title: "Portafolio BMC v1",
  description: "Portafolio de trabajo Bryan Carrillo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-cover  bg-center bg-no-repeat bg-[url('/sky.jpg')] `} >
        
        {children}
    
      </body>
    </html>
  );
}
