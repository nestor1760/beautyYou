import type { Metadata } from "next";
import { Rasa } from "next/font/google";
import "./globals.css";

const inter = Rasa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beauty You",
  description: "This is portfolio page for This is a portfolio page for a girl who specializes in eyelash care, created using TypeScript, React, Next.js, and FirebaseGenerated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
