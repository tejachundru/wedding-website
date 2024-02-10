import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
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
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
