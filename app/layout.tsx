import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import localFont from "next/font/local";
import { MouseClick } from "./components/click";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const nbArchitect = localFont({
  src: [
    {
      path: "../public/fonts/NBArchitektStd/NBArchitektStd-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NBArchitektStd/NBArchitektStd-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NBArchitektStd/NBArchitektStd-Light.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nb-architect",
});

const nbArchitectNeue = localFont({
  src: [
    {
      path: "../public/fonts/NBArchitektStd/NBArchitektStdNeue-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NBArchitektStd/NBArchitektStdNeue-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NBArchitektStd/NBArchitektStdNeue-Light.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nb-architect-neue",
});

const mondwest = localFont({
  src: [
    {
      path: "../public/fonts/Mondwest/PPMondwest-Regular.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mondwest",
});

const neueBit = localFont({
  src: [
    {
      path: "../public/fonts/Mondwest/PPNeueBit-Bold.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neuebit",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Trevor's world",
    template: "%s | Trevor's world",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "Trevor's world",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "Trevor's world",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          inter.variable,
          nbArchitect.variable,
          nbArchitectNeue.variable,
          neueBit.variable,
          mondwest.variable,
          "bg-primary-100 text-gray-950 ",
        )}
      >
        <main className="flex relative flex-col min-h-screen antialiased tracking-wide cursor-default selection:bg-gray-600/30">
          <div className="flex-1 flex-grow w-full">
            <div className="flex-col p-4 mx-auto w-full max-w-screen-2xl min-h-screen">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
          <Analytics />
          <SpeedInsights />
          <div className="fixed inset-0 z-50 w-full h-screen opacity-30 pointer-events-none mix-blend-overlay crt-line" />
          <div className="absolute inset-x-0 bottom-0 z-0 w-full bg-repeat-x sm:opacity-70 h-[8rem] bg-[length:10px_240px] bg-[url('/bg-gradient.svg')] pointer-events-none" />
          <Suspense fallback={null}>
            <MouseClick />
          </Suspense>
        </main>
      </body>
    </html>
  );
}
