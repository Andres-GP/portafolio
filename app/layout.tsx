import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import React, { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import LoaderScreen from "../components/loader-screen";

export const metadata: Metadata = {
  title: "Andrés García - Fullstack Engineer",
  description:
    "I'm a Software Engineer with 5+ years of experience designing and building scalable web applications. Focused on clean architecture, cross‑functional collaboration, and mentoring engineering teams. Fluent across the full frontend stack (React, Next.js, Javascript, Typescript) with hands‑on backend and cloud experience (Node.js, Express, Python, FastAPI, AWS, OCI). Open to new collaborations and opportunities.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider>
          <Suspense fallback={<LoaderScreen />}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
