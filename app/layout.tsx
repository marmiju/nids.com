// app/layout.tsx (or RootLayout.tsx)
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/footer/Footer";
import ReduxProvider from "./redux/ReduxProvider"; // ✅ your new client wrapper
import { montserrat } from "@/lib/fonts/Alexandria";
import { Developer } from "./components/footer/Developer/Developer";
import { Header } from "./components/header/Header";


// app/layout.tsx
export const metadata:Metadata = {
  title: "Best Colleges in Rangpur | CSE & BBA | NIDS",
  description:
    "Looking for the best college in Rangpur? NIDS offers top-ranked CSE and BBA programs with expert faculty, modern labs, and career-focused education. Discover why NIDS is the No.1 choice for students in Rangpur.",
  keywords: [
    "best CSE college in Rangpur",
    "best BBA college in Rangpur",
    "top CSE college in Rangpur",
    "professional college in Rangpur",
    "honors college in Rangpur",
    "college in Rangpur",
    "CSE college Rangpur",
    "BBA college Rangpur",
    "best college for CSE in Rangpur",
    "top engineering college Rangpur"
  ],
  openGraph: {
    title: "Best Colleges in Rangpur | CSE & BBA | NIDS",
    description:
      "NIDS is the leading college in Rangpur for CSE, BBA, and professional programs. With world-class faculty and modern facilities, we are the No.1 choice for higher education in Rangpur.",
    url: "https://yourdomain.com",
    siteName: "NIDS",
    type: "website"
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="KQ5MsI6-L1eux3fa4ML6VPeRY-lH_D6HZwqXmCSr7N0"
        />
      </head>
      <body className={montserrat.className}>
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

