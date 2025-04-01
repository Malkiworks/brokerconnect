"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-container";
import { FlipWords } from "@/components/ui/flip-words";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredList } from "@/components/ui/scroll-animations";
import { FaChartLine, FaMoneyBillWave, FaGlobe, FaChartBar, FaEnvelope, FaShieldAlt, FaCreditCard, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

export default function BrokersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-neo-black">
        <AnimatedSection animation="fade" className="max-w-7xl mx-auto">
          <SectionHeader
            icon={<FaChartLine className="text-cyber-blue" />}
            title="Top Brokers"
            subtitle="Here are a list of TOP TIER brokers suited for a trader of any experience level."
            titleClassName="text-ghost-white"
            subtitleClassName="text-tech-silver"
          />

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
            {/* XM */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-midnight relative group/card hover:shadow-neon-glow border-cyber-blue/[0.2] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/xm.jpg" alt="XM" width={150} height={40} className="object-contain border border-cyber-blue/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-cyber-blue/30 flex items-center justify-center mr-2"><FaCheckCircle className="text-cyber-blue" /></div>
                    <span className="text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-cyber-blue/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaMoneyBillWave className="mr-2 text-cyber-blue" /> Min deposit:</span>
                      <span className="text-ghost-white">$30</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-cyber-blue/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaGlobe className="mr-2 text-cyber-blue" /> Website:</span>
                      <a href="https://www.xmza.com" target="_blank" rel="noopener noreferrer" className="text-cyber-blue flex items-center">www.xmza.com <FaExternalLinkAlt className="ml-1 text-xs" /></a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-cyber-blue/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaChartBar className="mr-2 text-cyber-blue" /> Leverage:</span>
                      <span className="text-ghost-white">up to 1:1000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-cyber-blue/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaMoneyBillWave className="mr-2 text-cyber-blue" /> Bonus:</span>
                      <span className="text-ghost-white">up to 100% welcome bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-cyber-blue/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaEnvelope className="mr-2 text-cyber-blue" /> Email:</span>
                      <span className="text-cyber-blue">support@xmza.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-cyber-blue/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaShieldAlt className="mr-2 text-cyber-blue" /> Licensing authorities:</span>
                      <span className="text-ghost-white">2</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-cyber-blue/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaCreditCard className="mr-2 text-cyber-blue" /> EFT Deposit:</span>
                      <span className="text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-cyber-blue/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaCreditCard className="mr-2 text-cyber-blue" /> Withdrawal EFT:</span>
                      <span className="text-ghost-white">(FNB) same day</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-tech-silver mb-2">Create an account</p>
                    <a href="https://www.xmza.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full bg-cyber-blue hover:bg-electric-indigo text-neo-black font-semibold flex items-center justify-center shadow-neon-glow">
                        <FaExternalLinkAlt className="mr-2" /> Sign up
                      </Button>
                    </a>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* EBC Financial Group */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-midnight relative group/card hover:shadow-purple-glow border-neon-purple/[0.2] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/ebc.jpg" alt="EBC Financial Group" width={150} height={40} className="object-contain border border-neon-purple/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-neon-purple/30 flex items-center justify-center mr-2"><FaCheckCircle className="text-neon-purple" /></div>
                    <span className="text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaMoneyBillWave className="mr-2 text-neon-purple" /> Min deposit:</span>
                      <span className="text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaGlobe className="mr-2 text-neon-purple" /> Website:</span>
                      <a href="https://www.ebc.com" target="_blank" rel="noopener noreferrer" className="text-neon-purple flex items-center">www.ebc.com <FaExternalLinkAlt className="ml-1 text-xs" /></a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaChartBar className="mr-2 text-neon-purple" /> Leverage:</span>
                      <span className="text-ghost-white">up to 1:500</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaMoneyBillWave className="mr-2 text-neon-purple" /> Bonus:</span>
                      <span className="text-ghost-white">no bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaEnvelope className="mr-2 text-neon-purple" /> Email:</span>
                      <span className="text-neon-purple">cs@ebc.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaShieldAlt className="mr-2 text-neon-purple" /> Licensing authorities:</span>
                      <span className="text-ghost-white">3</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaCreditCard className="mr-2 text-neon-purple" /> Bank card deposit:</span>
                      <span className="text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-purple/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaCreditCard className="mr-2 text-neon-purple" /> Bank card withdrawal:</span>
                      <span className="text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-tech-silver mb-2">Create an account</p>
                    <a href="https://www.ebc.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full bg-neon-purple hover:bg-deep-purple text-neo-black font-semibold flex items-center justify-center shadow-purple-glow">
                        <FaExternalLinkAlt className="mr-2" /> Sign up
                      </Button>
                    </a>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Eightcap */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-midnight relative group/card hover:shadow-pink-glow border-neon-pink/[0.2] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/eightcap.jpg" alt="Eightcap" width={150} height={40} className="object-contain border border-neon-pink/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-neon-pink/30 flex items-center justify-center mr-2"><FaCheckCircle className="text-neon-pink" /></div>
                    <span className="text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaMoneyBillWave className="mr-2 text-neon-pink" /> Min deposit:</span>
                      <span className="text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaGlobe className="mr-2 text-neon-pink" /> Website:</span>
                      <a href="https://www.eightcap.com" target="_blank" rel="noopener noreferrer" className="text-neon-pink flex items-center">www.eightcap.com <FaExternalLinkAlt className="ml-1 text-xs" /></a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaChartBar className="mr-2 text-neon-pink" /> Leverage:</span>
                      <span className="text-ghost-white">up to 1:500</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaMoneyBillWave className="mr-2 text-neon-pink" /> Bonus:</span>
                      <span className="text-ghost-white">no bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaEnvelope className="mr-2 text-neon-pink" /> Email:</span>
                      <span className="text-neon-pink">support@eightcap.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaShieldAlt className="mr-2 text-neon-pink" /> Licensing authorities:</span>
                      <span className="text-ghost-white">3</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaCreditCard className="mr-2 text-neon-pink" /> Bank card deposit:</span>
                      <span className="text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-neon-pink/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaCreditCard className="mr-2 text-neon-pink" /> Bank card withdrawal:</span>
                      <span className="text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-tech-silver mb-2">Create an account</p>
                    <a href="https://www.eightcap.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full bg-neon-pink hover:bg-deep-purple text-neo-black font-semibold flex items-center justify-center shadow-pink-glow">
                        <FaExternalLinkAlt className="mr-2" /> Sign up
                      </Button>
                    </a>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* AvaTrade */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-midnight relative group/card hover:shadow-neon-glow border-electric-indigo/[0.2] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/avatrade.jpg" alt="AvaTrade" width={150} height={40} className="object-contain border border-electric-indigo/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-electric-indigo/30 flex items-center justify-center mr-2"><FaCheckCircle className="text-electric-indigo" /></div>
                    <span className="text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaMoneyBillWave className="mr-2 text-electric-indigo" /> Min deposit:</span>
                      <span className="text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaGlobe className="mr-2 text-electric-indigo" /> Website:</span>
                      <a href="https://www.avatrade.com" target="_blank" rel="noopener noreferrer" className="text-electric-indigo flex items-center">www.avatrade.com <FaExternalLinkAlt className="ml-1 text-xs" /></a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaChartBar className="mr-2 text-electric-indigo" /> Leverage:</span>
                      <span className="text-ghost-white">up to 1:400</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaMoneyBillWave className="mr-2 text-electric-indigo" /> Bonus:</span>
                      <span className="text-ghost-white">up to 100% welcome bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaEnvelope className="mr-2 text-electric-indigo" /> Email:</span>
                      <span className="text-electric-indigo">complaints@avatrade.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaShieldAlt className="mr-2 text-electric-indigo" /> Licensing authorities:</span>
                      <span className="text-ghost-white">7</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaCreditCard className="mr-2 text-electric-indigo" /> Bank card deposit:</span>
                      <span className="text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-electric-indigo/20 pb-2">
                      <span className="text-tech-silver flex items-center"><FaCreditCard className="mr-2 text-electric-indigo" /> Bank card withdrawal:</span>
                      <span className="text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-tech-silver mb-2">Create an account</p>
                    <a href="https://www.avatrade.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full bg-electric-indigo hover:bg-deep-purple text-neo-black font-semibold flex items-center justify-center shadow-neon-glow">
                        <FaExternalLinkAlt className="mr-2" /> Sign up
                      </Button>
                    </a>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          </StaggeredList>
        </AnimatedSection>
      </main>
    </>
  );
} 