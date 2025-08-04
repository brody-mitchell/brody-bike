import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brody's Mountain Biking Journey",
  description: "Age is just a number. At 13, I'm already conquering trails that challenge riders twice my age. This is my journey through the world of mountain biking.",
  keywords: ["mountain biking", "trail riding", "youth rider", "adventure", "cycling"],
  authors: [{ name: "Brody" }],
  creator: "Brody",
  openGraph: {
    title: "Brody's Mountain Biking Journey",
    description: "Age is just a number. At 13, I'm already conquering trails that challenge riders twice my age.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brody's Mountain Biking Journey",
    description: "Age is just a number. At 13, I'm already conquering trails that challenge riders twice my age.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
