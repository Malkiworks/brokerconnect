"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal dark:text-ghost-white">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-paynes-gray dark:text-light-blue max-w-3xl mx-auto mb-8">
            Sorry, the page you are looking for does not exist.
          </p>
          <Button
            containerClassName="w-auto h-14"
            className="bg-light-blue hover:bg-paynes-gray text-charcoal dark:text-ghost-white font-medium px-8"
          >
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </>
  );
} 