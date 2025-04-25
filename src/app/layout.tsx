import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

// Font setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prijun Koirala - Creative Designer",
  description: "Portfolio of Prijun Koirala - Creative Designer specializing in UI/UX, branding, and interactive experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} bg-neutral-50 text-neutral-900 antialiased`}>
        <CustomCursor />
        <div className="selection:bg-neutral-900 selection:text-white">
          {children}
        </div>
      </body>
    </html>
  );
}