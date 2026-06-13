import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageLoadIntro from "@/components/PageLoadIntro";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivani-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shivani Sheetal Palivela — AI Engineer & Founder of Voxinta",
    template: "%s | Shivani Sheetal Palivela",
  },
  description:
    "Co-Founder & CEO of Voxinta. AI Engineer, Data Scientist, Full Stack Developer, and Entrepreneur building AI-powered companies.",
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "Voxinta",
    "Shivani Sheetal Palivela",
    "Entrepreneur",
    "Next.js Developer",
    "Machine Learning",
    "Python Developer",
    "AI Startup",
    "AI Automation Developer",
  ],
  authors: [{ name: "Shivani Sheetal Palivela" }],
  creator: "Shivani Sheetal Palivela",
  publisher: "Shivani Sheetal Palivela",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Shivani Sheetal Palivela — AI Engineer & Founder",
    description:
      "Co-Founder & CEO of Voxinta. Building AI voice agents, chatbots, and intelligent business solutions.",
    siteName: "Shivani Sheetal Palivela",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shivani Sheetal Palivela — AI Engineer & Founder of Voxinta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivani Sheetal Palivela — AI Engineer & Founder",
    description: "Co-Founder & CEO of Voxinta. AI Engineer and Entrepreneur.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c3aed",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <PageLoadIntro />
        <ScrollProgressBar />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
