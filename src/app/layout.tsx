import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athletica-AI",
  description: "A Modern Fitness AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          {/* Athletica-AI Premium Background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Deep base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

            {/* Strong diagonal gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-transparent"></div>

            {/* Soft ambient glow (depth, not just middle blob) */}
            <div className="absolute w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-[150px] top-[-10%] left-[-10%]"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] bottom-[-10%] right-[-5%]"></div>
          </div>

          <main className="pt-24 flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
