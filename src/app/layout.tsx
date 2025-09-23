import type { Metadata } from "next";
import { Lexend, Manrope, Epilogue } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interior AI - AI-Powered Room Design",
  description:
    "Transform empty or furnished spaces into stunning interiors with AI. Upload a picture of your room, choose a design style, and reimagine your interior space instantly.",
  keywords: [
    "AI interior design",
    "room design",
    "interior decoration",
    "AI design tool",
    "home design",
  ],
  authors: [{ name: "Interior AI Team" }],
  openGraph: {
    title: "Interior AI - AI-Powered Room Design",
    description: "Transform your space with AI-powered interior design",
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
      <body
        className={`${lexend.variable} ${manrope.variable} ${epilogue.variable} antialiased bg-[#000319] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
