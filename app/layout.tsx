import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

const siteUrl = "https://bergenallstars.com";
const siteDescription =
  "Bergen All-Stars is a New Jersey nonprofit offering free sports programs — swimming, equestrian, golf, and bowling — for young people with special needs, led by dedicated volunteer coaches.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bergen All-Stars",
    template: "%s | Bergen All-Stars",
  },
  description: siteDescription,
  applicationName: "Bergen All-Stars",
  keywords: [
    "Bergen All-Stars",
    "BergenAllStars",
    "BergenAllStars.com",
    "Bergen County nonprofit",
    "New Jersey nonprofit",
    "Special Olympics New Jersey",
    "special needs sports",
    "youth sports",
    "volunteer coaches",
    "swimming",
    "equestrian",
    "golf",
    "bowling",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Bergen All-Stars",
    title: "Bergen All-Stars",
    description: siteDescription,
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Bergen All-Stars",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Bergen All-Stars",
    description: siteDescription,
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Bergen All-Stars",
  alternateName: ["BergenAllStars", "BergenAllStars.com"],
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description: siteDescription,
  email: "info@bergenallstars.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40 Stevenson Lane",
    addressLocality: "Upper Saddle River",
    addressRegion: "NJ",
    postalCode: "07458",
    addressCountry: "US",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bergen All-Stars",
  alternateName: "BergenAllStars.com",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
