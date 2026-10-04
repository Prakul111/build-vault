import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import Script from "next/script";
import { getThemeModeScript } from "flowbite-react";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans transition-colors duration-200">
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
