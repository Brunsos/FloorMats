import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FloorMats | Safety Matting & Loss Prevention Consulting",
  description:
    "Professional floor matting distribution and loss prevention consulting. Reduce slip-and-fall incidents, protect your floors, and improve workplace safety.",
  openGraph: {
    title: "FloorMats | Safety Matting & Loss Prevention Consulting",
    description:
      "Professional floor matting distribution and loss prevention consulting. Reduce slip-and-fall incidents, protect your floors, and improve workplace safety.",
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
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
