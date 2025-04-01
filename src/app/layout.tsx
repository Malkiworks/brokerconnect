import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/ui/floating-actions";
import ScrollManager from "@/components/ui/scroll-manager";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brokerConnect - find your broker",
  description: "Verified Brokers, Trusted Mentors, Prop Firm Funding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative bg-neutral-950 text-neutral-300 overflow-x-hidden min-h-screen w-screen`}>
        <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden">
          <BackgroundBeams className="w-full h-full" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
        <FloatingActions />
        <ScrollManager />
      </body>
    </html>
  );
}
