import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kinjo-site.vercel.app"), // change to your real domain

  title: {
    default: "Kinjo",
    template: "%s | Kinjo",
  },

  description:
    "Kinjo is a private neighbourhood app connecting verified residents within the same suburb.",

  openGraph: {
    title: "Kinjo",
    description:
      "A private community app for your neighbourhood.",
    url: "https://kinjo-site.vercel.app",
    siteName: "Kinjo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kinjo",
    description:
      "A private community app for your neighbourhood.",
    images: ["/og-image.png"],
  },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Nav />
        {children}
	<Footer />
      </body>
    </html>
  );
}
