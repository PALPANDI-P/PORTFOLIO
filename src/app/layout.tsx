import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Cursor } from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palpandi P - Full Stack AI Developer Portfolio",
  description: "A professional portfolio showcasing modern web development projects, AI solutions, and full-stack expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased selection:bg-white selection:text-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor />
          <div className="fixed inset-0 z-[9997] bg-scanlines opacity-[0.02] pointer-events-none" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
