import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gokulhousing.vercel.app"),
  title: "Gokul Housing — Luxury Real Estate Developer in Chandannagar",
  description:
    "Gokul Housing is a premium real estate developer crafting sustainable, luxury communities and residential projects like Choturborgho, Urvi, and Hainabiti in prime Chandannagar, West Bengal.",
  keywords: [
    "Gokul Housing",
    "Gokul Housing Chandannagar",
    "real estate developer Chandannagar",
    "luxury residential development Chandannagar",
    "premium homes Chandannagar",
    "apartments in Chandannagar",
    "flats in Chandannagar West Bengal",
    "Choturborgho Chandannagar",
    "Urvi Chandannagar",
    "Hainabiti Chandannagar",
    "custom home building Chandannagar",
    "property investment Chandannagar",
    "sustainable architecture West Bengal",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gokul Housing — Luxury Real Estate Developer in Chandannagar",
    description:
      "Explore prestigious ongoing developments (Choturborgho, Urvi, Hainabiti) in prime Chandannagar, West Bengal. Crafting sustainable luxury residences.",
    url: "https://gokulhousing.vercel.app",
    siteName: "Gokul Housing",
    images: [
      {
        url: "/Choturborgho.jpeg",
        width: 1200,
        height: 630,
        alt: "Gokul Housing Luxury Developments in Chandannagar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokul Housing — Luxury Real Estate Developer in Chandannagar",
    description:
      "Explore prestigious ongoing developments in prime Chandannagar, West Bengal.",
    images: ["/Choturborgho.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Gokul Housing",
  image: "https://gokulhousing.vercel.app/Choturborgho.jpeg",
  url: "https://gokulhousing.vercel.app",
  telephone: "+91-7001017605",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chandannagar",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.8671,
    longitude: 88.3551,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  founder: {
    "@type": "Person",
    name: "Mr. Monoj Manna",
  },
  description:
    "Gokul Housing is a premier luxury real estate developer based in Chandannagar, West Bengal, specializing in high-end residential developments including Choturborgho, Urvi, and Hainabiti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

