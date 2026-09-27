import type { Metadata } from "next";
import { Big_Shoulders, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaming Reachout — Connect. Collaborate. Conquer.",
  description: "Gaming Reachout connects game developers with top streamers worldwide.",
  icons: { icon: "/images/logo.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
