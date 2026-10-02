import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import Script from "next/script";
import { getThemeModeScript } from "flowbite-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build Vault",
  description: "Create for the collection of all the projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <Script
          id="flowbite-theme-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: getThemeModeScript() }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
