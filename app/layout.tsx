import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "TestoCapital",
  description: "Plataforma moderna de inversión y economía",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${GeistSans.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}