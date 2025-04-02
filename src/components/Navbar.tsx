"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaHome, FaChartLine, FaUserTie, FaBuilding, FaInfoCircle, FaEnvelope, FaQuestion, FaExclamationTriangle } from "react-icons/fa";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neo-black backdrop-blur-lg border-b border-cyber-blue/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo-transparent.png"
                  alt="brokerConnect Logo"
                  width={893}
                  height={124}
                  className="h-10 w-auto object-contain"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-ghost-white hover:text-cyber-blue px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FaHome className="mr-1" /> Home
                </Link>
                <Link href="/brokers" className="text-ghost-white hover:text-neon-purple px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FaChartLine className="mr-1" /> Brokers
                </Link>
                <Link href="/mentors" className="text-ghost-white hover:text-cyber-blue px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FaUserTie className="mr-1" /> Mentors
                </Link>
                <Link href="/prop-firms" className="text-ghost-white hover:text-neon-pink px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FaBuilding className="mr-1" /> Prop Firms
                </Link>
                <Link href="/about" className="text-ghost-white hover:text-electric-indigo px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FaInfoCircle className="mr-1" /> About
                </Link>
                <Link href="/contact" className="text-ghost-white hover:text-cyber-blue px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FaEnvelope className="mr-1" /> Contact
                </Link>
                <Link href="/faq" className="text-ghost-white hover:text-cyber-teal px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <FaQuestion className="mr-1" /> FAQ
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="/contact">
                <Button
                  containerClassName="w-36 h-9"
                  className="bg-neon-pink hover:bg-deep-purple border-none text-ghost-white font-medium flex items-center justify-center shadow-pink-glow"
                >
                  <FaExclamationTriangle className="mr-1" /> Report Scam
                </Button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ghost-white hover:text-cyber-blue hover:bg-midnight focus:outline-none"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neo-black">
          <Link href="/" className="text-ghost-white hover:text-cyber-blue block px-3 py-2 rounded-md text-base font-medium flex items-center">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link href="/brokers" className="text-ghost-white hover:text-neon-purple block px-3 py-2 rounded-md text-base font-medium flex items-center">
            <FaChartLine className="mr-2" /> Brokers
          </Link>
          <Link href="/mentors" className="text-ghost-white hover:text-cyber-blue block px-3 py-2 rounded-md text-base font-medium flex items-center">
            <FaUserTie className="mr-2" /> Mentors
          </Link>
          <Link href="/prop-firms" className="text-ghost-white hover:text-neon-pink block px-3 py-2 rounded-md text-base font-medium flex items-center">
            <FaBuilding className="mr-2" /> Prop Firms
          </Link>
          <Link href="/about" className="text-ghost-white hover:text-electric-indigo block px-3 py-2 rounded-md text-base font-medium flex items-center">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link href="/contact" className="text-ghost-white hover:text-cyber-blue block px-3 py-2 rounded-md text-base font-medium flex items-center">
            <FaEnvelope className="mr-2" /> Contact
          </Link>
          <Link href="/faq" className="text-ghost-white hover:text-cyber-teal block px-3 py-2 rounded-md text-base font-medium flex items-center">
            <FaQuestion className="mr-2" /> FAQ
          </Link>
          <div className="mt-4">
            <Link href="/contact">
              <Button
                containerClassName="w-full h-10"
                className="bg-neon-pink hover:bg-deep-purple border-none text-ghost-white font-medium flex items-center justify-center shadow-pink-glow"
              >
                <FaExclamationTriangle className="mr-2" /> Report Scam
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 