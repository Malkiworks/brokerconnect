"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-container";
import { FlipWords } from "@/components/ui/flip-words";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredList } from "@/components/ui/scroll-animations";
import Link from "next/link";
import Image from "next/image";
import { FaBuilding, FaMoneyBillWave, FaPercentage, FaChartLine, FaCalendarAlt, FaCheckCircle, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaInfoCircle, FaUser, FaExternalLinkAlt } from "react-icons/fa";

export default function PropFirmsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-neo-black">
        <AnimatedSection animation="fade" className="max-w-7xl mx-auto">
          <SectionHeader
            icon={<FaBuilding className="text-neon-pink" />}
            title="Top Prop Firms"
            subtitle="Prop Firms we recommend. Here are a list of TOP TIER Prop Firms suited for a trader of any experience level."
            titleClassName="text-ghost-white"
            subtitleClassName="text-tech-silver"
          />
          
          <AnimatedSection animation="slide" direction="up" className="my-12 bg-space-gray/30 p-8 rounded-xl border border-electric-indigo/20 shadow-neon-glow">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-ghost-white flex items-center">
              <FaInfoCircle className="mr-3 text-electric-indigo" /> What is a Prop Trading Firm?
            </h2>
            <p className="text-tech-silver mb-4">
              Proprietary trading firms (prop firms) provide capital to traders who have demonstrated their trading skills by passing evaluation challenges. This allows skilled traders to trade with significantly larger accounts than they could personally fund.
            </p>
            <p className="text-tech-silver mb-4">
              Once funded, traders can use the firm's capital to execute their strategies and keep a percentage of the profits they generate, typically ranging from 50% to 90%.
            </p>
            <p className="text-tech-silver">
              This model creates a win-win situation: traders gain access to larger capital without risking substantial personal funds, while prop firms benefit from the skills of profitable traders.
            </p>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.15}>
            {/* FTMO */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-midnight relative group/card hover:shadow-neon-glow border-electric-indigo/[0.2] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-8 w-full">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image
                      src="/prop-firms/ftmo.jpg"
                      height="80"
                      width="200"
                      className="object-contain rounded-md p-2 bg-space-gray/20 max-h-full max-w-full" 
                      alt="FTMO"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-electric-indigo/30 flex items-center justify-center mr-2">
                      <FaCheckCircle className="text-electric-indigo" />
                    </div>
                    <span className="text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaMoneyBillWave className="mr-2 text-electric-indigo" /> Funding:
                      </span>
                      <span className="text-ghost-white">up to $200,000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaPercentage className="mr-2 text-electric-indigo" /> Split:
                      </span>
                      <span className="text-ghost-white">90/10</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaChartLine className="mr-2 text-electric-indigo" /> Leverage:
                      </span>
                      <span className="text-ghost-white">up to 1:100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaCalendarAlt className="mr-2 text-electric-indigo" /> Min trading days:
                      </span>
                      <span className="text-ghost-white">4</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaCheckCircle className="mr-2 text-electric-indigo" /> Consistency Rule:
                      </span>
                      <span className="text-ghost-white">No</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaEnvelope className="mr-2 text-electric-indigo" /> Support:
                      </span>
                      <span className="text-ghost-white">support@ftmo.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaGlobe className="mr-2 text-electric-indigo" /> Website:
                      </span>
                      <a href="https://ftmo.com" target="_blank" rel="noopener noreferrer" className="text-electric-indigo hover:text-deep-purple flex items-center">
                        www.ftmo.com <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-electric-indigo" /> Location:
                      </span>
                      <span className="text-ghost-white">Prague</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <Button className="w-full bg-electric-indigo hover:bg-deep-purple text-ghost-white font-semibold py-3 flex items-center justify-center shadow-neon-glow">
                      <Link href="https://ftmo.com/" target="_blank" className="block w-full h-full flex items-center justify-center">
                        <FaMoneyBillWave className="mr-2" /> Purchase a challenge
                      </Link>
                    </Button>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* FXIFY */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-midnight relative group/card hover:shadow-purple-glow border-neon-purple/[0.2] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-8 w-full">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image
                      src="/prop-firms/fxify.jpg"
                      height="80"
                      width="200"
                      className="object-contain rounded-md p-2 bg-space-gray/20 max-h-full max-w-full" 
                      alt="FXIFY"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-neon-purple/30 flex items-center justify-center mr-2">
                      <FaCheckCircle className="text-neon-purple" />
                    </div>
                    <span className="text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaMoneyBillWave className="mr-2 text-neon-purple" /> Funding:
                      </span>
                      <span className="text-ghost-white">up to $400,000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaPercentage className="mr-2 text-neon-purple" /> Split:
                      </span>
                      <span className="text-ghost-white">90/10</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaChartLine className="mr-2 text-neon-purple" /> Leverage:
                      </span>
                      <span className="text-ghost-white">up to 1:50</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaCalendarAlt className="mr-2 text-neon-purple" /> Min trading days:
                      </span>
                      <span className="text-ghost-white">instant funding</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaCheckCircle className="mr-2 text-neon-purple" /> Consistency Rule:
                      </span>
                      <span className="text-ghost-white">No</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaEnvelope className="mr-2 text-neon-purple" /> Support:
                      </span>
                      <span className="text-ghost-white">support@fxify.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaGlobe className="mr-2 text-neon-purple" /> Website:
                      </span>
                      <a href="https://fxify.com" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:text-deep-purple flex items-center">
                        www.fxify.com <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-neon-purple" /> Location:
                      </span>
                      <span className="text-ghost-white">United Kingdom</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaUser className="mr-2 text-neon-purple" /> Affiliate Code:
                      </span>
                      <span className="text-ghost-white">CAPITALBULLS</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <Button className="w-full bg-neon-purple hover:bg-deep-purple text-ghost-white font-semibold py-3 flex items-center justify-center shadow-purple-glow">
                      <Link href="https://fxify.com/" target="_blank" className="block w-full h-full flex items-center justify-center">
                        <FaMoneyBillWave className="mr-2" /> Purchase a challenge
                      </Link>
                    </Button>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* AuraFunded */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-midnight relative group/card hover:shadow-pink-glow border-neon-pink/[0.2] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-8 w-full">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image
                      src="/prop-firms/aurafunded.jpg"
                      height="80"
                      width="200"
                      className="object-contain rounded-md p-2 bg-space-gray/20 max-h-full max-w-full" 
                      alt="AuraFunded"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-neon-pink/30 flex items-center justify-center mr-2">
                      <FaCheckCircle className="text-neon-pink" />
                    </div>
                    <span className="text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaMoneyBillWave className="mr-2 text-neon-pink" /> Funding:
                      </span>
                      <span className="text-ghost-white">up to $500,000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaPercentage className="mr-2 text-neon-pink" /> Split:
                      </span>
                      <span className="text-ghost-white">up to 95/5</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaChartLine className="mr-2 text-neon-pink" /> Leverage:
                      </span>
                      <span className="text-ghost-white">up to 1:100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaCalendarAlt className="mr-2 text-neon-pink" /> Min trading days:
                      </span>
                      <span className="text-ghost-white">instant funding</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaCheckCircle className="mr-2 text-neon-pink" /> Consistency Rule:
                      </span>
                      <span className="text-ghost-white">No</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaEnvelope className="mr-2 text-neon-pink" /> Support:
                      </span>
                      <span className="text-ghost-white">support@aurafunded.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaGlobe className="mr-2 text-neon-pink" /> Website:
                      </span>
                      <a href="https://aurafunded.com" target="_blank" rel="noopener noreferrer" className="text-neon-pink hover:text-deep-purple flex items-center">
                        www.aurafunded.com <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-neon-pink" /> Location:
                      </span>
                      <span className="text-ghost-white">Poland</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver font-medium flex items-center">
                        <FaUser className="mr-2 text-neon-pink" /> Affiliate Code:
                      </span>
                      <span className="text-ghost-white">CAPITALBULLS</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <Button className="w-full bg-neon-pink hover:bg-deep-purple text-ghost-white font-semibold py-3 flex items-center justify-center shadow-pink-glow">
                      <Link href="https://aurafunded.com/" target="_blank" className="block w-full h-full flex items-center justify-center">
                        <FaMoneyBillWave className="mr-2" /> Purchase a challenge
                      </Link>
                    </Button>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          </StaggeredList>
          
          <div className="mt-16 bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-charcoal dark:text-ghost-white">Looking for a Different Prop Firm?</h2>
            <p className="text-paynes-gray dark:text-light-blue mb-6 max-w-3xl mx-auto">
              We're continuously adding new prop firms to our platform. If you don't see the firm you're looking for, or want to suggest a new addition, please let us know.
            </p>
            <Link href="/contact">
              <Button 
                containerClassName="w-auto h-14"
                className="bg-light-blue hover:bg-paynes-gray text-charcoal font-medium px-8"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </main>
    </>
  );
} 