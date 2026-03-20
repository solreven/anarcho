import type { Metadata } from "next";
import { Figtree, Open_Sans } from "next/font/google";
import "./globals.css";

const figTree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Anarchist",
  description: "An anarchist newspapers written by the people, for the people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figTree.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
