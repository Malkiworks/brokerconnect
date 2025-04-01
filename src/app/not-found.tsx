"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle, FaSearch, FaMap } from "react-icons/fa";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-light-blue text-8xl mb-8 flex justify-center">
              <FaExclamationTriangle />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal dark:text-ghost-white">
              404 - Page Not Found
            </h1>
            
            <p className="text-lg text-paynes-gray dark:text-light-blue max-w-3xl mx-auto mb-8">
              Sorry, the page you are looking for does not exist.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Button
                icon={<FaHome />}
                containerClassName="w-full sm:w-auto h-14"
                className="bg-light-blue hover:bg-paynes-gray text-charcoal dark:text-ghost-white font-medium px-8"
              >
                <Link href="/">Return to Home</Link>
              </Button>
              
              <Button
                icon={<FaSearch />}
                containerClassName="w-full sm:w-auto h-14"
                className="bg-charcoal hover:bg-paynes-gray text-ghost-white border border-light-blue/30 font-medium px-8"
              >
                <Link href="/brokers">Find Brokers</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center text-paynes-gray dark:text-light-blue">
              <FaMap className="mr-2" /> 
              <span>Lost? Check out our <Link href="/sitemap" className="text-light-blue hover:underline">sitemap</Link> for navigation.</span>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
} 