"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-container";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import Image from "next/image";

export default function PropFirmsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-8 text-charcoal dark:text-ghost-white">
            <FlipWords words={["Top", "Leading", "Verified", "Trusted"]} className="text-light-blue" /> Prop Firms
          </h1>
          <p className="text-center text-paynes-gray dark:text-light-blue text-lg max-w-3xl mx-auto mb-12">
            Prop Firms we recommend. Here are a list of TOP TIER Prop Firms suited for a trader of any experience level.
          </p>
          
          <div className="my-12 bg-ghost-white dark:bg-paynes-gray/40 p-8 rounded-xl border border-light-blue/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-charcoal dark:text-ghost-white">What is a Prop Trading Firm?</h2>
            <p className="text-paynes-gray dark:text-light-blue mb-4">
              Proprietary trading firms (prop firms) provide capital to traders who have demonstrated their trading skills by passing evaluation challenges. This allows skilled traders to trade with significantly larger accounts than they could personally fund.
            </p>
            <p className="text-paynes-gray dark:text-light-blue mb-4">
              Once funded, traders can use the firm's capital to execute their strategies and keep a percentage of the profits they generate, typically ranging from 50% to 90%.
            </p>
            <p className="text-paynes-gray dark:text-light-blue">
              This model creates a win-win situation: traders gain access to larger capital without risking substantial personal funds, while prop firms benefit from the skills of profitable traders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* FTMO */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-8">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image
                      src="/prop-firms/ftmo.jpg"
                      height="80"
                      width="200"
                      className="object-contain border-2 border-paynes-gray/30 rounded-md p-2 bg-white dark:bg-paynes-gray/10" 
                      alt="FTMO"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2">✓</div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Funding</span>
                      <span className="text-charcoal dark:text-ghost-white">up to $200,000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Split</span>
                      <span className="text-charcoal dark:text-ghost-white">90/10</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Leverage</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Min trading days</span>
                      <span className="text-charcoal dark:text-ghost-white">4</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Consistency Rule</span>
                      <span className="text-charcoal dark:text-ghost-white">No</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Support</span>
                      <span className="text-charcoal dark:text-ghost-white">support@ftmo.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Website</span>
                      <a href="https://ftmo.com" target="_blank" rel="noopener noreferrer" className="text-light-blue hover:text-paynes-gray">www.ftmo.com</a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Location</span>
                      <span className="text-charcoal dark:text-ghost-white">Prague</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold py-3">
                      <Link href="https://ftmo.com/" target="_blank" className="block w-full h-full">Purchase a challenge</Link>
                    </Button>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* FXIFY */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-8">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image
                      src="/prop-firms/fxify.jpg"
                      height="80"
                      width="200"
                      className="object-contain border-2 border-paynes-gray/30 rounded-md p-2 bg-white dark:bg-paynes-gray/10" 
                      alt="FXIFY"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2">✓</div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Funding</span>
                      <span className="text-charcoal dark:text-ghost-white">up to $400,000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Split</span>
                      <span className="text-charcoal dark:text-ghost-white">90/10</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Leverage</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:50</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Min trading days</span>
                      <span className="text-charcoal dark:text-ghost-white">instant funding</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Consistency Rule</span>
                      <span className="text-charcoal dark:text-ghost-white">No</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Support</span>
                      <span className="text-charcoal dark:text-ghost-white">support@fxify.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Website</span>
                      <a href="https://fxify.com" target="_blank" rel="noopener noreferrer" className="text-light-blue hover:text-paynes-gray">www.fxify.com</a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Location</span>
                      <span className="text-charcoal dark:text-ghost-white">United Kingdom</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Affiliate Code</span>
                      <span className="text-charcoal dark:text-ghost-white">CAPITALBULLS</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold py-3">
                      <Link href="https://fxify.com/" target="_blank" className="block w-full h-full">Purchase a challenge</Link>
                    </Button>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* AuraFunded */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-8">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image
                      src="/prop-firms/aurafunded.jpg"
                      height="80"
                      width="200"
                      className="object-contain border-2 border-paynes-gray/30 rounded-md p-2 bg-white dark:bg-paynes-gray/10" 
                      alt="AuraFunded"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2">✓</div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Funding</span>
                      <span className="text-charcoal dark:text-ghost-white">up to $500,000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Split</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 95/5</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Leverage</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Min trading days</span>
                      <span className="text-charcoal dark:text-ghost-white">instant funding</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Consistency Rule</span>
                      <span className="text-charcoal dark:text-ghost-white">No</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Support</span>
                      <span className="text-charcoal dark:text-ghost-white">support@aurafunded.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Website</span>
                      <a href="https://aurafunded.com" target="_blank" rel="noopener noreferrer" className="text-light-blue hover:text-paynes-gray">www.aurafunded.com</a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Location</span>
                      <span className="text-charcoal dark:text-ghost-white">Poland</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue font-medium">Affiliate Code</span>
                      <span className="text-charcoal dark:text-ghost-white">CAPITALBULLS</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold py-3">
                      <Link href="https://aurafunded.com/" target="_blank" className="block w-full h-full">Purchase a challenge</Link>
                    </Button>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          
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
        </div>
      </main>
    </>
  );
} 