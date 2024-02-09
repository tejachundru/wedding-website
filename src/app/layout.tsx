import type { Metadata } from "next";
import { Parisienne } from "next/font/google";
import "./globals.css";

const inter = Parisienne({
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
    </html>
  );
}
