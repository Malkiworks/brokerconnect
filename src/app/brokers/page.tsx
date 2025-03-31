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
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <AnimatedSection animation="fade" className="max-w-7xl mx-auto">
          <SectionHeader
            icon={<FaChartLine />}
            title="Top Brokers"
            subtitle="Here are a list of TOP TIER brokers suited for a trader of any experience level."
          />

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
            {/* XM */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/xm.jpg" alt="XM" width={150} height={40} className="object-contain border border-paynes-gray/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2"><FaCheckCircle className="text-light-blue" /></div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaMoneyBillWave className="mr-2" /> Min deposit:</span>
                      <span className="text-charcoal dark:text-ghost-white">$30</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaGlobe className="mr-2" /> Website:</span>
                      <a href="https://www.xmza.com" target="_blank" rel="noopener noreferrer" className="text-light-blue flex items-center">www.xmza.com <FaExternalLinkAlt className="ml-1 text-xs" /></a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaChartBar className="mr-2" /> Leverage:</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:1000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaMoneyBillWave className="mr-2" /> Bonus:</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 100% welcome bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaEnvelope className="mr-2" /> Email:</span>
                      <span className="text-light-blue">support@xmza.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaShieldAlt className="mr-2" /> Licensing authorities:</span>
                      <span className="text-charcoal dark:text-ghost-white">2</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaCreditCard className="mr-2" /> EFT Deposit:</span>
                      <span className="text-charcoal dark:text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaCreditCard className="mr-2" /> Withdrawal EFT:</span>
                      <span className="text-charcoal dark:text-ghost-white">(FNB) same day</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-paynes-gray dark:text-light-blue mb-2">Create an account</p>
                    <a href="https://www.xmza.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold flex items-center justify-center">
                        <FaExternalLinkAlt className="mr-2" /> Sign up
                      </Button>
                    </a>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* EBC Financial Group */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/ebc.jpg" alt="EBC Financial Group" width={150} height={40} className="object-contain border border-paynes-gray/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2"><FaCheckCircle className="text-light-blue" /></div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaMoneyBillWave className="mr-2" /> Min deposit:</span>
                      <span className="text-charcoal dark:text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaGlobe className="mr-2" /> Website:</span>
                      <a href="https://www.ebc.com" target="_blank" rel="noopener noreferrer" className="text-light-blue flex items-center">www.ebc.com <FaExternalLinkAlt className="ml-1 text-xs" /></a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaChartBar className="mr-2" /> Leverage:</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:500</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaMoneyBillWave className="mr-2" /> Bonus:</span>
                      <span className="text-charcoal dark:text-ghost-white">no bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaEnvelope className="mr-2" /> Email:</span>
                      <span className="text-light-blue">cs@ebc.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaShieldAlt className="mr-2" /> Licensing authorities:</span>
                      <span className="text-charcoal dark:text-ghost-white">3</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaCreditCard className="mr-2" /> Bank card deposit:</span>
                      <span className="text-charcoal dark:text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaCreditCard className="mr-2" /> Bank card withdrawal:</span>
                      <span className="text-charcoal dark:text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-paynes-gray dark:text-light-blue mb-2">Create an account</p>
                    <a href="https://www.ebc.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold flex items-center justify-center">
                        <FaExternalLinkAlt className="mr-2" /> Sign up
                      </Button>
                    </a>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Eightcap */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/eightcap.jpg" alt="Eightcap" width={150} height={40} className="object-contain border border-paynes-gray/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2"><FaCheckCircle className="text-light-blue" /></div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaMoneyBillWave className="mr-2" /> Min deposit:</span>
                      <span className="text-charcoal dark:text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaGlobe className="mr-2" /> Website:</span>
                      <a href="https://www.eightcap.com" target="_blank" rel="noopener noreferrer" className="text-light-blue flex items-center">www.eightcap.com <FaExternalLinkAlt className="ml-1 text-xs" /></a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaChartBar className="mr-2" /> Leverage:</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:500</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaMoneyBillWave className="mr-2" /> Bonus:</span>
                      <span className="text-charcoal dark:text-ghost-white">no bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaEnvelope className="mr-2" /> Email:</span>
                      <span className="text-light-blue">support@eightcap.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaShieldAlt className="mr-2" /> Licensing authorities:</span>
                      <span className="text-charcoal dark:text-ghost-white">3</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaCreditCard className="mr-2" /> Bank card deposit:</span>
                      <span className="text-charcoal dark:text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaCreditCard className="mr-2" /> Bank card withdrawal:</span>
                      <span className="text-charcoal dark:text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-paynes-gray dark:text-light-blue mb-2">Create an account</p>
                    <a href="https://www.eightcap.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold flex items-center justify-center">
                        <FaExternalLinkAlt className="mr-2" /> Sign up
                      </Button>
                    </a>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* AvaTrade */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/avatrade.jpg" alt="AvaTrade" width={150} height={40} className="object-contain border border-paynes-gray/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2"><FaCheckCircle className="text-light-blue" /></div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaMoneyBillWave className="mr-2" /> Min deposit:</span>
                      <span className="text-charcoal dark:text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaGlobe className="mr-2" /> Website:</span>
                      <a href="https://www.avatrade.com" target="_blank" rel="noopener noreferrer" className="text-light-blue flex items-center">www.avatrade.com <FaExternalLinkAlt className="ml-1 text-xs" /></a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaChartBar className="mr-2" /> Leverage:</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:400</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaMoneyBillWave className="mr-2" /> Bonus:</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 100% welcome bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaEnvelope className="mr-2" /> Email:</span>
                      <span className="text-light-blue">complaints@avatrade.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaShieldAlt className="mr-2" /> Licensing authorities:</span>
                      <span className="text-charcoal dark:text-ghost-white">7</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaCreditCard className="mr-2" /> Bank card deposit:</span>
                      <span className="text-charcoal dark:text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue flex items-center"><FaCreditCard className="mr-2" /> Bank card withdrawal:</span>
                      <span className="text-charcoal dark:text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-paynes-gray dark:text-light-blue mb-2">Create an account</p>
                    <a href="https://www.avatrade.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                      <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold flex items-center justify-center">
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