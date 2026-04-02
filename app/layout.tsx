import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
// Not supposed to work in production for now.
// import { ClerkProvider } from "@clerk/nextjs";
// <ClerkProvider>{children}</ClerkProvider>;
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Anarchist",
  description: "An anarchist newspaper written by the people, for the people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <head></head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
