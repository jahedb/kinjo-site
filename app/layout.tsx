import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

const inter = Inter({
subsets: ["latin"],
weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
metadataBase: new URL("https://kinjo.co.za"),

title: {
default: "Kinjo — Private Neighbourhood Community Platform",
template: "%s | Kinjo",
},

description:
"Kinjo is an invite-only neighbourhood platform connecting verified residents, clubs and organisations through trusted local communities.",

keywords: [
"neighbourhood app",
"community platform",
"local community network",
"neighbourhood marketplace",
"South Africa community app",
"private neighbourhood social network",
],

authors: [{ name: "Kinjo" }],
creator: "Kinjo",
publisher: "Kinjo",

robots: {
index: true,
follow: true,
googleBot: {
index: true,
follow: true,
"max-image-preview": "large",
"max-snippet": -1,
"max-video-preview": -1,
},
},

openGraph: {
title: "Kinjo — Private Neighbourhood Community Platform",
description:
"A trusted neighbourhood platform connecting residents, clubs and organisations.",
url: "https://kinjo.co.za",
siteName: "Kinjo",
locale: "en_ZA",
type: "website",


images: [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Kinjo neighbourhood community platform",
  },
],


},

twitter: {
card: "summary_large_image",
title: "Kinjo — Private Neighbourhood Platform",
description: "Invite-only neighbourhood community platform.",
images: ["/og-image.png"],
},

alternates: {
canonical: "https://kinjo.co.za",
},

category: "technology",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {

const schema = {
"@context": "https://schema.org",
"@type": "SoftwareApplication",
name: "Kinjo",
applicationCategory: "SocialNetworkingApplication",
operatingSystem: "Web",
description:
"Kinjo is an invite-only neighbourhood platform connecting verified residents, clubs and organisations.",
url: "https://kinjo.co.za",
publisher: {
"@type": "Organization",
name: "Kinjo",
url: "https://kinjo.co.za",
},
};

return (
  <html lang="en">
    <body className={inter.className}>


    {/* Structured Data for SEO + AI */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />

    <Nav />
    {children}
    <Footer />

  </body>
</html>


);
}
