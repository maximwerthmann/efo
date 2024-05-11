import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "EFO - Eisenbahnfreunde-Ostbelgien",
  description: "Die offizielle webseite der Eisenbahnfreunde-Ostbelgien VoG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col flex-1`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
