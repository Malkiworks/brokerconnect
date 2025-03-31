import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/ui/floating-actions";
import ScrollManager from "@/components/ui/scroll-manager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradingEdu - brokerConnect",
  description: "Verified Brokers, Trusted Mentors, Prop Firm Funding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0a] text-white`}>
        {children}
        <FloatingActions />
        <ScrollManager />
      </body>
    </html>
  );
}
