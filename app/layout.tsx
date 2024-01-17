import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio01-theta.vercel.app/"
  ),
  title: "Tatenda Makandigona",
  description: "Developer Portfolio By Tatenda Makandigona",
  keywords: ["Developer", "Portfolio", "Developer Portfolio", "Tatenda Makandigona"],
  openGraph: {
    title: "Tatenda Makandigona",
    description: "Full Stack Developer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
