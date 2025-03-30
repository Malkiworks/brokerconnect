"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal backdrop-blur-lg border-b border-light-blue/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-ghost-white">
                brokerConnect
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-ghost-white hover:text-light-blue px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/brokers" className="text-ghost-white hover:text-light-blue px-3 py-2 rounded-md text-sm font-medium">
                  Brokers
                </Link>
                <Link href="/mentors" className="text-ghost-white hover:text-light-blue px-3 py-2 rounded-md text-sm font-medium">
                  Mentors
                </Link>
                <Link href="/prop-firms" className="text-ghost-white hover:text-light-blue px-3 py-2 rounded-md text-sm font-medium">
                  Prop Firms
                </Link>
                <Link href="/about" className="text-ghost-white hover:text-light-blue px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-ghost-white hover:text-light-blue px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="/faq" className="text-ghost-white hover:text-light-blue px-3 py-2 rounded-md text-sm font-medium">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="/contact">
                <Button
                  containerClassName="w-36 h-9"
                  className="bg-light-blue hover:bg-paynes-gray border-none text-charcoal font-medium"
                >
                  Report Scam
                </Button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ghost-white hover:text-light-blue hover:bg-paynes-gray focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-charcoal">
          <Link href="/" className="text-ghost-white hover:text-light-blue block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/brokers" className="text-ghost-white hover:text-light-blue block px-3 py-2 rounded-md text-base font-medium">
            Brokers
          </Link>
          <Link href="/mentors" className="text-ghost-white hover:text-light-blue block px-3 py-2 rounded-md text-base font-medium">
            Mentors
          </Link>
          <Link href="/prop-firms" className="text-ghost-white hover:text-light-blue block px-3 py-2 rounded-md text-base font-medium">
            Prop Firms
          </Link>
          <Link href="/about" className="text-ghost-white hover:text-light-blue block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="/contact" className="text-ghost-white hover:text-light-blue block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          <Link href="/faq" className="text-ghost-white hover:text-light-blue block px-3 py-2 rounded-md text-base font-medium">
            FAQ
          </Link>
          <div className="mt-4">
            <Link href="/contact">
              <Button
                containerClassName="w-full h-10"
                className="bg-light-blue hover:bg-paynes-gray border-none text-charcoal font-medium"
              >
                Report Scam
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 