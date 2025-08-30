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

          <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Neutral gradient base (slightly lighter than pure black) */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

            {/* Subtle diagonal light sweep */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/40 via-gray-700/20 to-transparent" />

            {/* Ambient glows (balanced, not overpowering) */}
            <div className="absolute w-[900px] h-[900px] rounded-full bg-primary/10 blur-[180px] top-[-20%] left-[-15%]" />
            <div className="absolute w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[200px] bottom-[-15%] right-[-10%]" />

            {/* Faint grid/texture overlay (Stripe-like subtle detail) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          <main className="pt-24 flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
