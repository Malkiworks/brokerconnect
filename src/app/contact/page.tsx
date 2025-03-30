"use client";

import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-8 text-charcoal dark:text-ghost-white">
            Get in <FlipWords words={["Touch", "Contact", "Connection", "Communication"]} className="text-light-blue" />
          </h1>
          <p className="text-center text-paynes-gray dark:text-light-blue text-lg max-w-3xl mx-auto mb-12">
            Have questions about our services or need support with your trading journey? Our team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 text-center">
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Email Us</h3>
              <p className="text-paynes-gray dark:text-light-blue mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:support@brokerconnect.com" className="text-light-blue hover:text-paynes-gray transition-colors duration-300">
                support@brokerconnect.com
              </a>
            </div>
            
            <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 text-center">
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Live Chat</h3>
              <p className="text-paynes-gray dark:text-light-blue mb-4">
                Chat with our support team during business hours for immediate assistance.
              </p>
              <Button 
                containerClassName="w-auto h-14"
                className="bg-light-blue hover:bg-paynes-gray text-charcoal font-medium"
              >
                Start Chat
              </Button>
            </div>
            
            <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 text-center">
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Follow Us</h3>
              <p className="text-paynes-gray dark:text-light-blue mb-4">
                Connect with us on social media for updates and trading tips.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-light-blue hover:text-paynes-gray transition-colors duration-300">Twitter</a>
                <a href="#" className="text-light-blue hover:text-paynes-gray transition-colors duration-300">LinkedIn</a>
                <a href="#" className="text-light-blue hover:text-paynes-gray transition-colors duration-300">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20">
            <h2 className="text-2xl font-bold mb-6 text-charcoal dark:text-ghost-white text-center">Send Us a Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-paynes-gray dark:text-light-blue mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-paynes-gray/20 bg-ghost-white dark:bg-charcoal text-charcoal dark:text-ghost-white focus:outline-none focus:ring-2 focus:ring-light-blue"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-paynes-gray dark:text-light-blue mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-paynes-gray/20 bg-ghost-white dark:bg-charcoal text-charcoal dark:text-ghost-white focus:outline-none focus:ring-2 focus:ring-light-blue"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-paynes-gray dark:text-light-blue mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg border border-paynes-gray/20 bg-ghost-white dark:bg-charcoal text-charcoal dark:text-ghost-white focus:outline-none focus:ring-2 focus:ring-light-blue"
                placeholder="Message subject"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-paynes-gray dark:text-light-blue mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-paynes-gray/20 bg-ghost-white dark:bg-charcoal text-charcoal dark:text-ghost-white focus:outline-none focus:ring-2 focus:ring-light-blue"
                placeholder="Your message"
              />
            </div>
            <div className="text-center">
              <Button 
                containerClassName="w-auto h-14"
                className="bg-light-blue hover:bg-paynes-gray text-charcoal font-medium px-8"
              >
                Send Message
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-paynes-gray dark:text-light-blue mb-4">
              Want to learn more about our services before reaching out?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about">
                <Button 
                  variant="outline"
                  containerClassName="w-auto h-14"
                  className="border-light-blue text-charcoal dark:text-ghost-white hover:bg-light-blue/10"
                >
                  About Us
                </Button>
              </Link>
              <Link href="/faq">
                <Button 
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
      </main>
    </>
  );
} 