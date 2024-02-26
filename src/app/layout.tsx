import type { Metadata } from "next";
import { Great_Vibes, Tangerine, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

const tangerine = Tangerine({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

const poppins = Outfit({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Teja | Vishnu Priya",
  description: "Made with ❤️ by Teja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${tangerine.className} ${inter.variable} ${poppins.variable}`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
