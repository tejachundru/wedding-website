import type { Metadata } from "next";
import { Great_Vibes, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

const lato = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
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
      <body className={` ${lato.className} ${inter.variable}`}>{children}</body>
      <Analytics />
    </html>
  );
}
