// app/layout.tsx (or RootLayout.tsx)
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import ReduxProvider from "./redux/ReduxProvider"; // ✅ your new client wrapper
import { montserrat } from "@/lib/fonts/Alexandria";
import { Developer } from "./components/footer/Developer/Developer";


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
      <body className={`${montserrat.className}`}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
          <Developer />
        </ReduxProvider>
      </body>
    </html>
  );
}
