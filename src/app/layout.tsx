import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gokul Housing — Building Your Future",
  description:
    "Gokul Housing is a premium housing development company specialising in sustainable architecture, community living, and high-end residential projects.",
  keywords: [
    "housing development",
    "premium homes",
    "real estate developer",
    "sustainable architecture",
    "custom home building",
    "Gokul Housing",
  ],
  openGraph: {
    title: "Gokul Housing — Building Your Future",
    description:
      "A premium real estate developer crafting sustainable, luxury communities and custom homes.",
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
