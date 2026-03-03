import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kinjo — Your Suburb. Not the Internet.",
  description:
    "Kinjo is an invite-only neighbourhood community platform for South Africa. Private, trusted, suburb-based.",
  openGraph: {
    title: "Kinjo — Your Suburb. Not the Internet.",
    description:
      "Private, invite-only neighbourhood platform for real communities.",
    url: "https://kinjo.co.za",
    siteName: "Kinjo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_ZA",
    type: "website",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
	<Footer />
      </body>
    </html>
  );
}
