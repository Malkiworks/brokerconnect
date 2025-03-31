"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-container";
import { FlipWords } from "@/components/ui/flip-words";

export default function BrokersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-8 text-charcoal dark:text-ghost-white">
            <FlipWords words={["Top", "Leading", "Verified", "Trusted"]} className="text-light-blue" /> Brokers
          </h1>
          <p className="text-center text-paynes-gray dark:text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-16">
            Here are a list of TOP TIER brokers suited for a trader of any experience level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* XM */}
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-full h-auto rounded-xl border">
                <CardItem translateZ="50" className="p-6 w-full">
                  <div className="flex items-center justify-center w-full h-16 mb-2">
                    <Image src="/brokers/xm.jpg" alt="XM" width={150} height={40} className="object-contain border border-paynes-gray/30 rounded-md p-1 mx-auto" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2">✓</div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Min deposit</span>
                      <span className="text-charcoal dark:text-ghost-white">$30</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Website</span>
                      <a href="https://www.xmza.com" target="_blank" rel="noopener noreferrer" className="text-light-blue">www.xmza.com</a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Leverage</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:1000</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bonus</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 100% welcome bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Email</span>
                      <span className="text-light-blue">support@xmza.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Licensing authorities</span>
                      <span className="text-charcoal dark:text-ghost-white">2</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">EFT Deposit</span>
                      <span className="text-charcoal dark:text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Withdrawal EFT</span>
                      <span className="text-charcoal dark:text-ghost-white">(FNB) same day</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-paynes-gray dark:text-light-blue mb-2">Create an account</p>
                    <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold">
                      Sign up
                    </Button>
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
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2">✓</div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Min deposit</span>
                      <span className="text-charcoal dark:text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Website</span>
                      <a href="https://www.ebc.com" target="_blank" rel="noopener noreferrer" className="text-light-blue">www.ebc.com</a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Leverage</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:500</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bonus</span>
                      <span className="text-charcoal dark:text-ghost-white">no bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Email</span>
                      <span className="text-light-blue">cs@ebc.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Licensing authorities</span>
                      <span className="text-charcoal dark:text-ghost-white">3</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bank card deposit</span>
                      <span className="text-charcoal dark:text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bank card withdrawal</span>
                      <span className="text-charcoal dark:text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-paynes-gray dark:text-light-blue mb-2">Create an account</p>
                    <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold">
                      Sign up
                    </Button>
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
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2">✓</div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Min deposit</span>
                      <span className="text-charcoal dark:text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Website</span>
                      <a href="https://www.eightcap.com" target="_blank" rel="noopener noreferrer" className="text-light-blue">www.eightcap.com</a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Leverage</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:500</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bonus</span>
                      <span className="text-charcoal dark:text-ghost-white">no bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Email</span>
                      <span className="text-light-blue">support@eightcap.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Licensing authorities</span>
                      <span className="text-charcoal dark:text-ghost-white">3</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bank card deposit</span>
                      <span className="text-charcoal dark:text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">EFT withdrawal</span>
                      <span className="text-charcoal dark:text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-paynes-gray dark:text-light-blue mb-2">Create an account</p>
                    <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold">
                      Sign up
                    </Button>
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
                    <div className="w-5 h-5 rounded-full bg-light-blue/30 flex items-center justify-center mr-2">✓</div>
                    <span className="text-charcoal dark:text-ghost-white">Verified</span>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Min deposit</span>
                      <span className="text-charcoal dark:text-ghost-white">$100</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Website</span>
                      <a href="https://www.avatrade.com" target="_blank" rel="noopener noreferrer" className="text-light-blue">www.avatrade.com</a>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Leverage</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 1:400</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bonus</span>
                      <span className="text-charcoal dark:text-ghost-white">up to 100% welcome bonus</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Email</span>
                      <span className="text-light-blue">complaints@avatrade.com</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Licensing authorities</span>
                      <span className="text-charcoal dark:text-ghost-white">7</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bank card deposit</span>
                      <span className="text-charcoal dark:text-ghost-white">Instant</span>
                    </CardItem>
                    
                    <CardItem translateZ="60" className="flex justify-between border-b border-paynes-gray/20 pb-2">
                      <span className="text-paynes-gray dark:text-light-blue">Bank card withdrawal</span>
                      <span className="text-charcoal dark:text-ghost-white">1-3 days</span>
                    </CardItem>
                  </div>
                  
                  <CardItem translateZ="80" className="w-full mt-8">
                    <p className="text-center text-paynes-gray dark:text-light-blue mb-2">Create an account</p>
                    <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold">
                      Sign up
                    </Button>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </main>
    </>
  );
} 