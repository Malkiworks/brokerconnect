"use client";

import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredList } from "@/components/ui/scroll-animations";
import { FaEnvelope, FaPhone, FaInstagram, FaDiscord, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-neo-black">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade" className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Get in Touch"
              icon={<FaEnvelope className="text-cyber-blue" />}
              subtitle="Have questions about our services or need support with your trading journey? Our team is here to help."
              titleClassName="text-ghost-white"
              subtitleClassName="text-tech-silver"
            />
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
              <div className="bg-midnight p-8 rounded-xl border border-cyber-blue/20 text-center shadow-blue-glow hover:shadow-neon-glow transition-all duration-300">
                <div className="text-cyber-blue text-4xl mb-4 flex justify-center">
                  <FaEnvelope />
                </div>
                <h3 className="text-xl font-bold mb-4 text-ghost-white">Email Us</h3>
                <p className="text-tech-silver mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:rxtchet@therxtchetbrand.com" className="text-cyber-blue hover:text-electric-indigo transition-colors duration-300 font-medium text-lg flex items-center justify-center">
                  <FaEnvelope className="mr-2" /> rxtchet@therxtchetbrand.com
                </a>
              </div>
              
              <div className="bg-midnight p-8 rounded-xl border border-neon-purple/20 text-center shadow-purple-glow hover:shadow-neon-glow transition-all duration-300">
                <div className="text-neon-purple text-4xl mb-4 flex justify-center">
                  <FaPhone />
                </div>
                <h3 className="text-xl font-bold mb-4 text-ghost-white">Call Us</h3>
                <p className="text-tech-silver mb-4">
                  Speak directly with our support team during business hours.
                </p>
                <a href="tel:+27645019037" className="text-neon-purple hover:text-electric-indigo transition-colors duration-300 font-medium text-lg flex items-center justify-center">
                  <FaPhone className="mr-2" /> +27 064 501 9037
                </a>
              </div>
              
              <div className="bg-midnight p-8 rounded-xl border border-neon-pink/20 text-center shadow-pink-glow hover:shadow-neon-glow transition-all duration-300">
                <div className="text-neon-pink text-4xl mb-4 flex justify-center">
                  <FaInstagram />
                </div>
                <h3 className="text-xl font-bold mb-4 text-ghost-white">Follow Us</h3>
                <p className="text-tech-silver mb-4">
                  Connect with us on social media for updates and trading tips.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.instagram.com/capitalbulls_za" className="text-neon-pink hover:text-electric-indigo transition-colors duration-300 flex items-center">
                    <FaInstagram className="mr-1" /> Instagram
                  </a>
                  <a href="https://discord.com/invite/KqyjCFGMwV" className="text-cyber-blue hover:text-electric-indigo transition-colors duration-300 flex items-center">
                    <FaDiscord className="mr-1" /> Discord
                  </a>
                </div>
              </div>
            </StaggeredList>
            
            <AnimatedSection animation="slide" direction="up" delay={0.3} className="">
              <div className="mt-12 text-center">
                <p className="text-tech-silver mb-4">
                  Want to learn more about our services before reaching out?
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/about">
                    <Button 
                      icon={<FaInfoCircle />}
                      variant="outline"
                      containerClassName="w-auto h-14"
                      className="border-cyber-blue text-ghost-white hover:bg-cyber-blue/10 shadow-blue-glow"
                    >
                      About Us
                    </Button>
                  </Link>
                  <Link href="/faq">
                    <Button 
                      icon={<FaQuestionCircle />}
                      variant="outline"
                      containerClassName="w-auto h-14"
                      className="border-neon-purple text-ghost-white hover:bg-neon-purple/10 shadow-purple-glow"
                    >
                      FAQs
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </main>
    </>
  );
} 