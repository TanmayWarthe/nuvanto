import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500"] });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["300", "400", "500", "600"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Navunto",
  description: "Your business's first mile online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} antialiased selection:bg-gold-light selection:text-text-primary`}>
        <GrainOverlay />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
