import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interior Zone — Transforming Spaces Into Experiences",
  description:
    "Interior Zone is a luxury interior design studio specialising in quiet luxury, minimalist aesthetics and timeless spaces for homes and businesses.",
  keywords: [
    "interior design",
    "luxury interiors",
    "minimalist design",
    "home interiors",
    "commercial interiors",
    "Interior Zone",
  ],
  openGraph: {
    title: "Interior Zone — Transforming Spaces Into Experiences",
    description:
      "A high-end interior design studio crafting minimalist, luxury spaces for discerning clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
