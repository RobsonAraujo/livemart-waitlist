import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import Header from "~/components/header";
import { ThemeProvider } from "~/providers/theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LiveMart — Plataforma de Leilões Online",
  description:
    "Junte-se à nossa lista de espera exclusiva do LiveMart, a plataforma inovadora de leilões online focada em cartas Pokémon e produtos colecionáveis. Anuncie, participe de leilões em tempo real e descubra um novo jeito de comprar e vender.",
  icons: {
    icon: "/favicon.svg?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${geistMono.variable} antialiased flex flex-col h-full`}
      >
        <ThemeProvider>
          <Header />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
