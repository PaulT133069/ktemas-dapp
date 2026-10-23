import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import GlowEffect from "@/components/ui/GlowEffect";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ktemas - Le coffre-fort numérique",
  description: "Déposez, stakez et gouvernez avec Ktemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("font-sans", geist.variable)}>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <GlowEffect />
        {children}
      </body>
    </html>
  );
}