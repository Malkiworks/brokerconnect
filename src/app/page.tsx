"use client";

import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-container";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { FlipWords } from "@/components/ui/flip-words";
import { Navbar } from "@/components/Navbar";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggeredList } from "@/components/ui/scroll-animations";
import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaUserTie, FaBuilding, FaStar, FaGlobe, FaMoneyBillWave, FaShieldAlt, FaGraduationCap, FaHandshake, FaChartBar, FaUsers, FaSearch, FaInstagram, FaDiscord, FaExclamationTriangle, FaQuestionCircle, FaInfoCircle, FaEnvelope, FaCheck, FaLightbulb, FaAward, FaCreditCard, FaUnlock, FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 bg-neo-black">
        {/* Hero Section */}
        <section className="w-full">
          <ContainerScroll
            titleComponent={
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-ghost-white">
                  Connect securely with the <FlipWords words={["trading", "broker", "prop firm", "mentor"]} className="text-cyber-blue" /> industry 
                </h1>
                <p className="text-tech-silver text-lg md:text-xl max-w-2xl mx-auto mb-8">
                  Find brokers, prop firms and mentors - all under one roof
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button
                    containerClassName="w-48 h-12"
                    className="bg-electric-indigo hover:bg-deep-purple border border-cyber-blue text-ghost-white font-medium shadow-neon-glow"
                  >
                    <Link href="/brokers" className="flex items-center">
                      <FaSearch className="mr-2" /> Find a Broker
                    </Link>
                  </Button>
                  <Button
                    containerClassName="w-48 h-12"
                    className="bg-midnight hover:bg-electric-indigo/50 border border-cyber-blue text-ghost-white font-medium"
                  >
                    <Link href="/mentors" className="flex items-center">
                      <FaUserTie className="mr-2" /> Browse Mentors
                    </Link>
                  </Button>
                </div>
                <div className="h-20"></div>
              </div>
            }
          >
            <div className="relative w-full h-full bg-midnight flex flex-col items-center justify-start overflow-y-auto">
              <div className="absolute inset-0 bg-dark-gradient opacity-70" />
              
              {/* Main Services Section */}
              <div className="p-6 md:p-8 bg-space-gray/30 backdrop-blur-sm rounded-2xl border border-cyber-blue/30 max-w-5xl mx-auto w-full mb-8 shadow-neon-glow">
                <h2 className="text-2xl md:text-3xl text-center mb-8 text-ghost-white flex items-center justify-center">
                  <FaHandshake className="mr-2 text-cyber-blue" /> Our Services
                </h2>
                <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
                  <div className="bg-midnight/60 p-6 rounded-lg border border-electric-indigo/40 hover:shadow-neon-glow transition-all duration-300 hover:border-cyber-blue">
                    <div className="text-cyber-blue text-2xl mb-3 flex justify-center">
                      <FaGraduationCap />
                    </div>
                    <h3 className="text-ghost-white mb-3 text-lg font-semibold text-center">Expert Mentor</h3>
                    <p className="text-tech-silver text-sm text-center">Connect with our premium verified trading mentor - Capital Bulls by Rashied Chauke - specializing in US30 trading</p>
                    <div className="mt-4 flex justify-center">
                      <Link href="/mentors">
                        <Button variant="outline" className="text-xs border-cyber-blue/50 hover:bg-cyber-blue/20 text-ghost-white">
                          View Mentor
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-midnight/60 p-6 rounded-lg border border-neon-purple/40 hover:shadow-purple-glow transition-all duration-300 hover:border-neon-purple">
                    <div className="text-neon-purple text-2xl mb-3 flex justify-center">
                      <FaChartLine />
                    </div>
                    <h3 className="text-ghost-white mb-3 text-lg font-semibold text-center">Verified Brokers</h3>
                    <p className="text-tech-silver text-sm text-center">Access our handpicked selection of 3+ trusted brokers including XM, EBC Financial Group, and Eightcap</p>
                    <div className="mt-4 flex justify-center">
                      <Link href="/brokers">
                        <Button variant="outline" className="text-xs border-neon-purple/50 hover:bg-neon-purple/20 text-ghost-white">
                          Find Brokers
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-midnight/60 p-6 rounded-lg border border-neon-pink/40 hover:shadow-pink-glow transition-all duration-300 hover:border-neon-pink">
                    <div className="text-neon-pink text-2xl mb-3 flex justify-center">
                      <FaBuilding />
                    </div>
                    <h3 className="text-ghost-white mb-3 text-lg font-semibold text-center">Prop Firms</h3>
                    <p className="text-tech-silver text-sm text-center">Get funded through our 3 verified prop firms - FTMO, FXify, and AuraFunded - with capital from $100K to $500K</p>
                    <div className="mt-4 flex justify-center">
                      <Link href="/prop-firms">
                        <Button variant="outline" className="text-xs border-neon-pink/50 hover:bg-neon-pink/20 text-ghost-white">
                          Explore Firms
                        </Button>
                      </Link>
                    </div>
                  </div>
                </StaggeredList>
              </div>
              
              {/* Why Choose Us */}
              <div className="p-6 md:p-8 bg-space-gray/30 backdrop-blur-sm rounded-2xl border border-electric-indigo/30 max-w-5xl mx-auto w-full mb-8">
                <h2 className="text-2xl text-center mb-6 text-ghost-white flex items-center justify-center">
                  <FaAward className="mr-2 text-electric-indigo" /> Why Choose BrokerConnect
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-cyber-teal mt-1"><FaCheck /></div>
                    <div>
                      <h3 className="text-ghost-white text-lg font-medium">Quality Over Quantity</h3>
                      <p className="text-tech-silver text-sm">We focus on a small, carefully selected group of top-tier brokers, props, and mentors rather than an overwhelming list</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-cyber-teal mt-1"><FaShieldAlt /></div>
                    <div>
                      <h3 className="text-ghost-white text-lg font-medium">Personally Verified</h3>
                      <p className="text-tech-silver text-sm">Each partner on our platform has been personally vetted to ensure maximum reliability and transparency</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-cyber-teal mt-1"><FaLightbulb /></div>
                    <div>
                      <h3 className="text-ghost-white text-lg font-medium">Direct Connections</h3>
                      <p className="text-tech-silver text-sm">Get immediate access to Capital Bulls mentorship and direct links to top prop firms without the confusion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-cyber-teal mt-1"><FaUsers /></div>
                    <div>
                      <h3 className="text-ghost-white text-lg font-medium">Growing Community</h3>
                      <p className="text-tech-silver text-sm">Join our expanding network of traders who benefit from our curated partnerships and reliable recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="p-6 md:p-8 bg-space-gray/30 backdrop-blur-sm rounded-2xl border border-cyber-blue/30 max-w-5xl mx-auto w-full">
                <h2 className="text-xl text-center mb-8 text-ghost-white">Trusted By Traders Worldwide</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-midnight border border-cyber-blue/30">
                    <div className="text-3xl font-bold text-cyber-blue mb-1">3+</div>
                    <div className="text-sm text-ghost-white">Verified Brokers</div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-midnight border border-neon-purple/30">
                    <div className="text-3xl font-bold text-neon-purple mb-1">3</div>
                    <div className="text-sm text-ghost-white">Prop Firms</div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-midnight border border-electric-indigo/30">
                    <div className="text-3xl font-bold text-electric-indigo mb-1">1</div>
                    <div className="text-sm text-ghost-white">Expert Mentor</div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-midnight border border-neon-pink/30">
                    <div className="text-3xl font-bold text-neon-pink mb-1">100+</div>
                    <div className="text-sm text-ghost-white">Monthly Users</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="text-sm border-electric-indigo text-ghost-white hover:bg-electric-indigo/20"
                      icon={<FaInfoCircle className="mr-2" />}
                    >
                      About Us
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      className="text-sm bg-cyber-blue hover:bg-electric-indigo text-neo-black font-semibold shadow-neon-glow"
                      icon={<FaEnvelope className="mr-2" />}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Extra spacer for visual breathing room */}
              <div className="h-8"></div>
            </div>
          </ContainerScroll>
        </section>

        {/* Broker/Prop Firm Showcase Section */}
        <AnimatedSection animation="slide" direction="up" className="py-20 px-4 md:px-8 bg-gradient-to-b from-neo-black to-midnight">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-ghost-white flex items-center justify-center">
              <FaUserTie className="mr-3 text-cyber-blue" /> Find a <FlipWords words={["mentor", "guide", "teacher", "expert"]} className="text-cyber-blue ml-2" />
            </h2>
            <div className="flex justify-center items-center">
              {/* Mentor Card */}
              <CardContainer className="inter-var max-w-md w-full">
                <CardBody className="bg-midnight relative group/card hover:shadow-neon-glow border-cyber-blue/[0.2] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-ghost-white w-full flex items-center"
                  >
                    <FaUserTie className="mr-2 text-cyber-blue" /> Capital Bulls - Rashied Chauke
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-tech-silver text-sm max-w-sm mt-2"
                  >
                    Premium US30 trading and educational community.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/mentors/capital-bulls.jpg"
                      height="225"
                      width="400"
                      className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Capital Bulls"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-xs font-normal text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-cyber-blue mr-1" /> <span className="text-tech-silver mr-2">★★★★★</span> 4.7/5
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-cyber-blue text-xs font-bold flex items-center"
                    >
                      <FaMoneyBillWave className="mr-1" /> R1250/week
                    </CardItem>
                    <a href="https://tradewithcapitalbulls.com" target="_blank" rel="noopener noreferrer">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-cyber-blue text-neo-black text-xs font-bold flex items-center"
                      >
                        Visit Site
                      </CardItem>
                    </a>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
            
            <div className="text-center mt-16">
              <Link href="/mentors">
                <Button
                  className="bg-electric-indigo hover:bg-deep-purple text-ghost-white shadow-neon-glow"
                  icon={<FaRocket className="mr-2" />}
                >
                  View All Mentors
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Broker Cards Section */}
        <AnimatedSection animation="fade" className="py-20 px-4 md:px-8 bg-neo-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-ghost-white flex items-center justify-center">
              <FaBuilding className="mr-3 text-neon-purple" /> Top <FlipWords words={["Brokers", "Partners", "Providers"]} className="text-neon-purple ml-2" />
            </h2>
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerDelay={0.1}>
              {/* XM Broker Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-midnight relative group/card hover:shadow-neon-glow border-electric-indigo/[0.2] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-ghost-white w-full flex items-center"
                  >
                    <FaChartLine className="mr-2 text-electric-indigo" /> XM
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-tech-silver text-sm max-w-sm mt-2"
                  >
                    Global broker with over 1,000 instruments and MT4/MT5 platforms.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/brokers/xm.jpg"
                      height="225"
                      width="400"
                      className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl mx-auto"
                      alt="XM"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-xs font-normal text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-electric-indigo mr-1" /> <span className="text-tech-silver mr-2">★★★★☆</span> 4.3/5
                      </div>
                    </CardItem>
                    <Link href="/brokers">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-deep-purple text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> View Details
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              {/* EBC Financial Group Broker Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-midnight relative group/card hover:shadow-purple-glow border-neon-purple/[0.2] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-ghost-white w-full flex items-center"
                  >
                    <FaChartLine className="mr-2 text-neon-purple" /> EBC Financial Group
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-tech-silver text-sm max-w-sm mt-2"
                  >
                    Regulated broker with tight spreads and fast execution.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/brokers/ebc.jpg"
                      height="225"
                      width="400"
                      className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl mx-auto"
                      alt="EBC Financial Group"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-xs font-normal text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-neon-purple mr-1" /> <span className="text-tech-silver mr-2">★★★★★</span> 4.7/5
                      </div>
                    </CardItem>
                    <Link href="/brokers">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-deep-purple text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> View Details
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Eightcap Broker Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-midnight relative group/card hover:shadow-pink-glow border-neon-pink/[0.2] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-ghost-white w-full flex items-center"
                  >
                    <FaChartLine className="mr-2 text-neon-pink" /> Eightcap
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-tech-silver text-sm max-w-sm mt-2"
                  >
                    Award-winning forex and CFD trading provider with competitive conditions.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/brokers/eightcap.jpg"
                      height="225"
                      width="400"
                      className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl mx-auto"
                      alt="Eightcap"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-xs font-normal text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-neon-pink mr-1" /> <span className="text-tech-silver mr-2">★★★★☆</span> 4.4/5
                      </div>
                    </CardItem>
                    <Link href="/brokers">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-deep-purple text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> View Details
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            </StaggeredList>
            
            <div className="text-center mt-16">
              <Link href="/brokers">
                <Button
                  className="bg-neon-purple hover:bg-deep-purple text-ghost-white shadow-purple-glow"
                  icon={<FaRocket className="mr-2" />}
                >
                  View All Brokers
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Prop Firms Section */}
        <AnimatedSection animation="slide" direction="up" delay={0.1} className="py-20 px-4 md:px-8 bg-gradient-to-b from-midnight to-neo-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-ghost-white flex items-center justify-center">
              <FaBuilding className="mr-3 text-neon-pink" /> Trusted <FlipWords words={["Prop Firms", "Funding Partners", "Capital Providers", "Trading Firms"]} className="text-neon-pink ml-2" />
            </h2>
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerDelay={0.1}>
              {/* FTMO Prop Firm Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-midnight relative group/card hover:shadow-neon-glow border-electric-indigo/[0.2] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-ghost-white w-full flex items-center"
                  >
                    <FaBuilding className="mr-2 text-electric-indigo" /> FTMO
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-tech-silver text-sm max-w-sm mt-2"
                  >
                    Get funded up to $200,000 with a 90% profit split.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/prop-firms/ftmo.jpg"
                      height="225"
                      width="400"
                      className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="FTMO"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-xs font-normal text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-electric-indigo mr-1" /> <span className="text-tech-silver mr-2">★★★★☆</span> 4.2/5
                      </div>
                    </CardItem>
                    <Link href="/prop-firms">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-deep-purple text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> Compare Plans
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              {/* FXify Prop Firm Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-midnight relative group/card hover:shadow-purple-glow border-neon-purple/[0.2] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-ghost-white w-full flex items-center"
                  >
                    <FaBuilding className="mr-2 text-neon-purple" /> FXify
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-tech-silver text-sm max-w-sm mt-2"
                  >
                    Instant funding up to $400,000 with a 90% profit split.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/prop-firms/fxify.jpg"
                      height="225"
                      width="400"
                      className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl mx-auto"
                      alt="FXify"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-xs font-normal text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-neon-purple mr-1" /> <span className="text-tech-silver mr-2">★★★★★</span> 4.5/5
                      </div>
                    </CardItem>
                    <Link href="/prop-firms">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-deep-purple text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> Compare Plans
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              {/* AuraTraded Prop Firm Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-midnight relative group/card hover:shadow-pink-glow border-neon-pink/[0.2] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-ghost-white w-full flex items-center"
                  >
                    <FaBuilding className="mr-2 text-neon-pink" /> AuraFunded
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-tech-silver text-sm max-w-sm mt-2"
                  >
                    Get funded up to $500,000 with up to 95% profit split.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/prop-firms/aurafunded.jpg"
                      height="225"
                      width="400"
                      className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl mx-auto"
                      alt="AuraFunded"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-xs font-normal text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-neon-pink mr-1" /> <span className="text-tech-silver mr-2">★★★★☆</span> 4.3/5
                      </div>
                    </CardItem>
                    <Link href="/prop-firms">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-deep-purple text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> Compare Plans
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            </StaggeredList>
          </div>
        </AnimatedSection>

        {/* Key Features Section */}
        <AnimatedSection animation="slide" direction="up" className="py-20 px-4 bg-neo-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-ghost-white">
              What's This <FlipWords words={["About?", "Platform?", "Service?", "Mission?"]} className="text-cyber-blue" />
            </h2>
            <p className="text-center text-tech-silver text-lg max-w-3xl mx-auto mb-16">
              brokerConnect was established to bridge the gap between traders and the most reputable brokers, prop firms, and trading mentors in the industry.
            </p>
            <div className="text-center mb-16">
              <Link href="/about">
                <Button
                  containerClassName="w-48 h-12 mx-auto"
                  className="bg-electric-indigo hover:bg-deep-purple border-none text-ghost-white font-medium shadow-neon-glow"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Use Our Website Section */}
        <AnimatedSection animation="slide" direction="up" className="py-20 px-4 bg-gradient-to-b from-neo-black to-midnight">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-ghost-white">
              Why use <FlipWords words={["our website?", "brokerConnect?", "us for trading?", "verified partners?"]} className="text-neon-purple" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-space-gray/40 p-6 rounded-xl border border-electric-indigo/20 hover:shadow-neon-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-ghost-white">Verified Reputable Partners</h3>
                <p className="text-tech-silver">We only feature brokers, prop firms, and trading mentors that have been thoroughly vetted for reliability, transparency, and credibility. This ensures you're connected with trustworthy industry leaders who have proven track records.</p>
              </div>
              
              <div className="bg-space-gray/40 p-6 rounded-xl border border-neon-purple/20 hover:shadow-purple-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-ghost-white">Comprehensive Information Hub</h3>
                <p className="text-tech-silver">From funding requirements to mentor-led communities on Discord and WhatsApp, we provide all the details you need in one place. No more second-guessing—everything you need to know is at your fingertips.</p>
              </div>
              
              <div className="bg-space-gray/40 p-6 rounded-xl border border-cyber-blue/20 hover:shadow-neon-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-ghost-white">Honest Testimonials</h3>
                <p className="text-tech-silver">Gain confidence in your choices with authentic testimonials from real traders. Our platform showcases genuine feedback to help you understand the strengths of each service and make informed decisions.</p>
              </div>
              
              <div className="bg-space-gray/40 p-6 rounded-xl border border-neon-pink/20 hover:shadow-pink-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-ghost-white">Tailored Trading Support</h3>
                <p className="text-tech-silver">Whether you're a beginner or a seasoned trader, our website is designed to guide you towards services that fit your specific trading style, goals, and level of experience. We help you find the perfect partners to elevate your trading journey.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Recommended Section */}
        <AnimatedSection animation="slide" direction="up" className="py-20 px-4 bg-neo-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-ghost-white">
              Recommended <FlipWords words={["for you", "brokers", "mentors", "prop firms"]} className="text-cyber-blue" />
            </h2>
            
            <div className="flex justify-center mt-8">
              <Link href="/brokers">
                <Button
                  containerClassName="w-48 h-12"
                  className="bg-cyber-blue hover:bg-electric-indigo border-none text-neo-black font-medium shadow-neon-glow"
                >
                  See Catalog
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection animation="slide" direction="up" className="py-20 px-4 bg-gradient-to-b from-midnight to-neo-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-ghost-white">
              <FlipWords words={["Testimonials", "Success Stories", "Real Traders", "User Feedback"]} className="text-neon-pink" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-midnight p-6 rounded-xl border border-cyber-blue/20 text-left hover:shadow-neon-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-cyber-blue/30">
                    <Image 
                      src="/testimonials/avatar1.jpg" 
                      alt="Riaan Young" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full mx-auto" 
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-ghost-white">Riaan Young</h3>
                    <p className="text-sm text-tech-silver">Capital Bulls Member</p>
                  </div>
                </div>
                <p className="text-tech-silver">"Good evening ELITE !! Just got home now, Had rugby practice. TP CAME IN CLUTCH WITH DOW, We must love it !!! @Capital Bulls, once again, Never disappoints. Made over 8k today starting with 750... WOWWWW."</p>
              </div>
              
              <div className="bg-midnight p-6 rounded-xl border border-neon-purple/20 text-left hover:shadow-purple-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-neon-purple/30">
                    <Image 
                      src="/testimonials/avatar2.jpg" 
                      alt="Koketso" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full mx-auto" 
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-ghost-white">Koketso</h3>
                    <p className="text-sm text-tech-silver">Capital Bulls Follower</p>
                  </div>
                </div>
                <p className="text-tech-silver">"Thank you for your advice, saw your video just now now and just bought a robot. Even now I'm still waiting for the robot lost my money. Now I'm going to follow you"</p>
              </div>

              <div className="bg-midnight p-6 rounded-xl border border-neon-pink/20 text-left hover:shadow-pink-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-neon-pink/30">
                    <Image 
                      src="/testimonials/avatar3.jpg" 
                      alt="Tiaan Saayman" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full mx-auto" 
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-ghost-white">Tiaan Saayman</h3>
                    <p className="text-sm text-tech-silver">Capital Bulls Member</p>
                  </div>
                </div>
                <p className="text-tech-silver">"Made 15k in 2 weeks just by checking out your story and keeping an eye on the market i will be joining soon, u know what you doing bro love it!"</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Trusted by Section */}
        <AnimatedSection animation="slide" direction="up" className="py-20 px-4 md:px-8 bg-neo-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-ghost-white flex items-center justify-center">
              <FaUsers className="mr-3 text-electric-indigo" /> Trusted by Thousands
            </h2>
          </div>
        </AnimatedSection>
        

        {/* Footer */}
        <footer className="py-10 px-4 bg-neo-black border-t border-cyber-blue/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-ghost-white flex items-center">
                  <Image 
                    src="/logo-transparent.png"
                    alt="brokerConnect Logo"
                    width={893}
                    height={124}
                    className="h-8 w-auto object-contain"
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </h3>
                <p className="text-tech-silver text-sm">
                  The premier platform connecting traders with verified professionals.
                </p>
                <div className="mt-4 flex space-x-4">
                  <a href="https://www.instagram.com/capitalbulls_za" className="text-ghost-white hover:text-neon-pink transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="https://discord.com/invite/KqyjCFGMwV" className="text-ghost-white hover:text-cyber-blue transition-colors">
                    <FaDiscord />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-ghost-white">Quick Links</h3>
                <ul className="space-y-2 text-tech-silver text-sm">
                  <li>
                    <Link href="/brokers" className="hover:text-ghost-white flex items-center">
                      <FaChartLine className="mr-2 text-cyber-blue" /> Find a Broker
                    </Link>
                  </li>
                  <li>
                    <Link href="/mentors" className="hover:text-ghost-white flex items-center">
                      <FaUserTie className="mr-2 text-neon-purple" /> Find a Mentor
                    </Link>
                  </li>
                  <li>
                    <Link href="/prop-firms" className="hover:text-ghost-white flex items-center">
                      <FaBuilding className="mr-2 text-neon-pink" /> Prop Firm Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-ghost-white flex items-center">
                      <FaExclamationTriangle className="mr-2 text-electric-indigo" /> Report a Scam
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-ghost-white">Resources</h3>
                <ul className="space-y-2 text-tech-silver text-sm">
                  <li>
                    <Link href="/faq" className="hover:text-ghost-white flex items-center">
                      <FaQuestionCircle className="mr-2 text-cyber-teal" /> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-ghost-white flex items-center">
                      <FaInfoCircle className="mr-2 text-cyber-blue" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/brokers" className="hover:text-ghost-white flex items-center">
                      <FaShieldAlt className="mr-2 text-electric-indigo" /> Broker Verification
                    </Link>
                  </li>
                  <li>
                    <Link href="/prop-firms" className="hover:text-ghost-white flex items-center">
                      <FaBuilding className="mr-2 text-neon-pink" /> Prop Firms
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-ghost-white">Connect</h3>
                <ul className="space-y-2 text-tech-silver text-sm">
                  <li>
                    <Link href="/contact" className="hover:text-ghost-white flex items-center">
                      <FaEnvelope className="mr-2 text-cyber-blue" /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/capitalbulls_za" className="hover:text-ghost-white flex items-center">
                      <FaInstagram className="mr-2 text-neon-pink" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.com/invite/KqyjCFGMwV" className="hover:text-ghost-white flex items-center">
                      <FaDiscord className="mr-2 text-electric-indigo" /> Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-cyber-blue/10 mt-10 pt-6 text-center text-ghost-white text-sm">
              <p>© 2023 brokerConnect Platform. All rights reserved.</p>
              <p className="mt-2 text-tech-silver flex items-center justify-center">
                <FaShieldAlt className="mr-2 text-cyber-blue" /> brokerConnect is not a broker or financial advisor. Trading involves risk.
              </p>
              <p className="mt-4 text-tech-silver text-xs">
                <a href="https://busyoaks.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-ghost-white transition-colors flex items-center justify-center">
                  Made with <span className="mx-1 text-ghost-white">♡</span> by busyOaks
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
