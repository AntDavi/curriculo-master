import type { Metadata } from "next";
import { Nunito_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontTitle = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curriculo Master",
  description: "Gere seus curriculos de forma simples e rápida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", fontTitle.variable, fontSans.variable)}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
