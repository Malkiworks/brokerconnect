"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-container";
import { FlipWords } from "@/components/ui/flip-words";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredList } from "@/components/ui/scroll-animations";
import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle, FaHistory, FaBullseye, FaCheckCircle, FaSearch, FaBullhorn, FaUsers, FaEnvelope, FaQuestionCircle, FaHandshake } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <AnimatedSection animation="fade" className="max-w-7xl mx-auto">
          <SectionHeader
            icon={<FaInfoCircle />}
            title="About brokerConnect"
            subtitle="We're on a mission to make trading safer and more accessible by connecting traders with verified brokers, prop firms, and mentors."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <AnimatedSection animation="slide" direction="left" className="">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-charcoal dark:text-ghost-white flex items-center">
                <FaHistory className="mr-3 text-light-blue" /> Our Story
              </h2>
              <div className="space-y-4 text-paynes-gray dark:text-light-blue">
                <p>
                  brokerConnect was founded in 2023 by a team of experienced traders who had encountered numerous challenges finding reliable brokers and legitimate prop firms throughout their trading journeys.
                </p>
                <p>
                  After experiencing and witnessing too many instances of fraud, misleading advertising, and hidden fees in the trading industry, our founders decided to create a platform that would bring transparency and trust to the forefront.
                </p>
                <p>
                  Today, brokerConnect serves traders worldwide by providing a comprehensive directory of verified trading partners, ensuring that every broker, prop firm, and mentor listed on our platform meets our rigorous standards for reliability and transparency.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide" direction="right" className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-charcoal dark:text-ghost-white flex items-center">
                <FaBullseye className="mr-3 text-light-blue" /> Our Mission
              </h2>
              <div className="space-y-4 text-paynes-gray dark:text-light-blue">
                <p>
                  Our mission is to create a safer trading ecosystem by connecting traders with trusted partners who will support their trading journey rather than hinder it.
                </p>
                <p>
                  We believe that every trader deserves access to honest information about the companies they entrust with their capital and education. Through rigorous verification processes and community feedback, we aim to elevate industry standards and protect traders from fraudulent actors.
                </p>
                <p>
                  By providing this valuable service free of charge to traders, we're democratizing access to reliable trading partnerships and creating a more level playing field for traders of all experience levels.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="mb-20">
            <SectionHeader
              icon={<FaHandshake />}
              title="Our Core Values"
            />
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
              <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 hover:border-light-blue/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-16 w-16 bg-light-blue/20 rounded-full flex items-center justify-center mb-6">
                  <FaCheckCircle className="text-light-blue text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Transparency</h3>
                <p className="text-paynes-gray dark:text-light-blue">
                  We believe in complete honesty about how we operate, how we earn revenue, and how we evaluate our partners. We disclose all affiliate relationships and never prioritize listings based on commission rates.
                </p>
              </div>
              
              <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 hover:border-light-blue/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-16 w-16 bg-light-blue/20 rounded-full flex items-center justify-center mb-6">
                  <FaSearch className="text-light-blue text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Diligence</h3>
                <p className="text-paynes-gray dark:text-light-blue">
                  Every partner listed on our platform undergoes a comprehensive verification process. We continually monitor our partners to ensure they maintain the high standards required to be featured on brokerConnect.
                </p>
              </div>
              
              <div className="bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 hover:border-light-blue/50 transition-all duration-300 hover:shadow-lg">
                <div className="h-16 w-16 bg-light-blue/20 rounded-full flex items-center justify-center mb-6">
                  <FaBullhorn className="text-light-blue text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-ghost-white">Advocacy</h3>
                <p className="text-paynes-gray dark:text-light-blue">
                  We stand up for traders' rights and work to expose fraudulent actors in the industry. Our platform provides a channel for traders to report suspicious activities and for us to investigate and take appropriate action.
                </p>
              </div>
            </StaggeredList>
          </div>
          
          <AnimatedSection animation="slide" direction="up" className="bg-ghost-white dark:bg-charcoal p-8 md:p-12 rounded-xl border border-paynes-gray/20 text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-charcoal dark:text-ghost-white flex items-center justify-center">
              <FaUsers className="mr-3 text-light-blue" /> Join Our Mission
            </h2>
            <p className="text-paynes-gray dark:text-light-blue mb-8 max-w-2xl mx-auto">
              Want to help us build a safer trading environment? We're always looking for experienced traders, compliance experts, and industry professionals to join our team.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  containerClassName="w-auto h-14"
                  className="bg-light-blue hover:bg-paynes-gray text-charcoal font-medium px-8"
                  icon={<FaEnvelope />}
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/faq">
                <Button 
                  containerClassName="w-auto h-14"
                  className="bg-ghost-white hover:bg-light-blue/50 border border-light-blue text-charcoal dark:text-ghost-white font-medium px-8"
                  icon={<FaQuestionCircle />}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </main>
    </>
  );
} 