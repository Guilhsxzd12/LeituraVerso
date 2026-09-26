import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeituraVerso",
  description: "Seu acervo digital de e-books em EPUB e PDF.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
