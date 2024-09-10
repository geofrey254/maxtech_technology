import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://maxtechtechnologysolutions.vercel.app/"),

  title:
    "MaxTech Technology Solutions | Robotics, Automation, Software Development, PCB Design & Fabrication in Nairobi, Kenya",
  description:
    "MaxTech Technology Solutions offers expert services in robotics & automation, software development, and PCB design & fabrication. Serving Nairobi and Kenya with cutting-edge technology solutions.",
  keywords: [
    "Robotics in Nairobi",
    "Automation solutions in Kenya",
    "PCB design Kenya",
    "Software Development Nairobi",
    "PCB fabrication Nairobi",
    "tech solutions Kenya",
    "MaxTech Technology Solutions",
    "Robotics Kenya",
    "Automation Nairobi",
    "PCB design services Kenya",
    "tech company Nairobi",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title:
      "MaxTech Technology Solutions | Robotics, Software Development & PCB Design in Nairobi",
    description:
      "MaxTech provides top-tier robotics, automation, software development, and PCB design & fabrication services for businesses in Nairobi and Kenya.",
    url: "https://www.maxtechsolutions.co.ke",
    images: "/logo.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MaxTech Technology Solutions | Robotics, Software Development, PCB Fabrication",
    description:
      "Providing innovative tech solutions in robotics & automation, software development, and PCB design & fabrication for companies in Nairobi and Kenya.",
    images: "/logo.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = { width: 1, initialScale: 1 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
