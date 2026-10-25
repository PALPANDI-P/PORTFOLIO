import type { Metadata } from "next";
import { Outfit, Bricolage_Grotesque, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palpandi P | AI/ML Developer & Software Developer",
  description:
    "Explore Palpandi P's projects in AI/ML, NLP, Python development, backend engineering, and modern web applications. Building practical solutions, one commit at a time.",
  keywords: [
    "Palpandi P",
    "AI/ML Developer",
    "Python Developer",
    "NLP Engineer",
    "Machine Learning",
    "FastAPI",
    "React",
    "Software Developer",
    "Chennai",
    "Tamil Nadu",
  ],
  authors: [{ name: "Palpandi P", url: "https://palpandiin.vercel.app" }],
  creator: "Palpandi P",
  openGraph: {
    title: "Palpandi P | AI/ML Developer & Software Developer",
    description:
      "Explore Palpandi P's projects in AI/ML, NLP, Python development, backend engineering, and modern web applications.",
    url: "https://palpandiin.vercel.app",
    siteName: "Palpandi P Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palpandi P | AI/ML Developer",
    description:
      "Explore Palpandi P's projects in AI/ML, NLP, Python development, backend engineering, and modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${bricolage.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
