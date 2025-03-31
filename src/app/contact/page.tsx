"use client";

import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { SectionHeader } from "@/components/ui/section-header";
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaInstagram, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Get in Touch"
            icon={<FaEnvelope />}
            subtitle="Have questions about our services or need support with your trading journey? Our team is here to help."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-light-blue text-4xl mb-4 flex justify-center">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Email Us</h3>
              <p className="text-paynes-gray dark:text-light-blue mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:support@brokerconnect.com" className="text-light-blue hover:text-paynes-gray transition-colors duration-300 font-medium text-lg flex items-center justify-center">
                <FaEnvelope className="mr-2" /> support@brokerconnect.com
              </a>
            </div>
            
            <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-light-blue text-4xl mb-4 flex justify-center">
                <FaPhone />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Call Us</h3>
              <p className="text-paynes-gray dark:text-light-blue mb-4">
                Speak directly with our support team during business hours.
              </p>
              <a href="tel:+18001234567" className="text-light-blue hover:text-paynes-gray transition-colors duration-300 font-medium text-lg flex items-center justify-center">
                <FaPhone className="mr-2" /> +1 (800) 123-4567
              </a>
            </div>
            
            <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-light-blue text-4xl mb-4 flex justify-center">
                <FaTwitter />
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Follow Us</h3>
              <p className="text-paynes-gray dark:text-light-blue mb-4">
                Connect with us on social media for updates and trading tips.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-light-blue hover:text-paynes-gray transition-colors duration-300 flex items-center">
                  <FaTwitter className="mr-1" /> Twitter
                </a>
                <a href="#" className="text-light-blue hover:text-paynes-gray transition-colors duration-300 flex items-center">
                  <FaLinkedin className="mr-1" /> LinkedIn
                </a>
                <a href="#" className="text-light-blue hover:text-paynes-gray transition-colors duration-300 flex items-center">
                  <FaInstagram className="mr-1" /> Instagram
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mt-12 text-center">
              <p className="text-paynes-gray dark:text-light-blue mb-4">
                Want to learn more about our services before reaching out?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about">
                  <Button 
                    icon={<FaInfoCircle />}
                    variant="outline"
                    containerClassName="w-auto h-14"
                    className="border-light-blue text-charcoal dark:text-ghost-white hover:bg-light-blue/10"
                  >
                    About Us
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button 
                    icon={<FaQuestionCircle />}
                    variant="outline"
                    containerClassName="w-auto h-14"
                    className="border-light-blue text-charcoal dark:text-ghost-white hover:bg-light-blue/10"
                  >
                    FAQs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 