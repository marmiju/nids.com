import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

const poppins = Poppins({
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: "NIDS",
  description: "Nids Rangpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className} bg-black`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
