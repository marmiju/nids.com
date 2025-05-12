// app/layout.tsx (or RootLayout.tsx)
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import ReduxProvider from "./redux/ReduxProvider"; // ✅ your new client wrapper
import { montserrat } from "@/lib/fonts/Alexandria";

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
      <body className={`antialiased ${montserrat.className} bg-black`}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
          <div className="text-center flex justify-center text-white bg-slate-300 ext-sm items-center">
            <p>Developed By Azizar Rahman | </p>
            <div className="flex justify-center gap-2">
              <a href="https://github.com/marmiju">
                <img
                  className="h-8 w-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="gh"
                />
              </a>
              <a href="https://github.com/marmiju">
                <img
                  className="h-8 w-8"
                  src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                  alt="fb"
                />
              </a>
              <a href="https://github.com/marmiju">
                <img
                  className="h-8 w-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                  alt="lkin"
                />
              </a>
              <a href="https://github.com/marmiju">
                <img
                  className="h-8 w-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="lkin"
                />
              </a>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
