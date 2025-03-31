"use client";

import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-container";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { FlipWords } from "@/components/ui/flip-words";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaUserTie, FaBuilding, FaStar, FaGlobe, FaMoneyBillWave, FaShieldAlt, FaGraduationCap, FaHandshake, FaChartBar, FaUsers, FaSearch, FaTwitter, FaLinkedin, FaInstagram, FaExclamationTriangle, FaQuestionCircle, FaInfoCircle, FaEnvelope, FaTelegram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 bg-ghost-white dark:bg-charcoal">
        {/* Hero Section */}
        <section className="w-full">
          <ContainerScroll
            titleComponent={
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-charcoal dark:text-ghost-white">
                  Connect securely with the <FlipWords words={["trading", "broker", "prop firm", "mentor"]} className="text-light-blue" /> industry 
                </h1>
                <p className="text-paynes-gray dark:text-light-blue text-lg md:text-xl max-w-2xl mx-auto mb-8">
                  Find brokers, prop firms and mentors - all under one roof
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button
                    containerClassName="w-48 h-12"
                    className="bg-light-blue hover:bg-paynes-gray border-none text-charcoal font-medium"
                  >
                    <Link href="/brokers" className="flex items-center">
                      <FaSearch className="mr-2" /> Find a Broker
                    </Link>
                  </Button>
                  <Button
                    containerClassName="w-48 h-12"
                    className="bg-ghost-white hover:bg-light-blue/50 border border-light-blue text-charcoal font-medium"
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
            <div className="relative w-full h-full bg-ghost-white dark:bg-charcoal flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-light-blue/20 to-paynes-gray/20 opacity-50" />
              <div className="p-4 bg-ghost-white/50 dark:bg-charcoal/50 backdrop-blur-sm rounded-2xl border border-light-blue/30 max-w-5xl mx-auto">
                <h2 className="text-2xl text-center mb-4 text-charcoal dark:text-ghost-white flex items-center justify-center">
                  <FaHandshake className="mr-2 text-light-blue" /> Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-ghost-white/60 dark:bg-paynes-gray/60 p-4 rounded-lg border border-light-blue/30">
                    <h3 className="text-charcoal dark:text-ghost-white mb-2 text-lg flex items-center">
                      <FaGraduationCap className="mr-2 text-light-blue" /> Mentors
                    </h3>
                    <p className="text-paynes-gray dark:text-light-blue text-sm">Find expert trading mentors to help grow your skills</p>
                  </div>
                  
                  <div className="bg-ghost-white/60 dark:bg-paynes-gray/60 p-4 rounded-lg border border-light-blue/30">
                    <h3 className="text-charcoal dark:text-ghost-white mb-2 text-lg flex items-center">
                      <FaChartLine className="mr-2 text-light-blue" /> Find a broker
                    </h3>
                    <p className="text-paynes-gray dark:text-light-blue text-sm">Discover reliable trading platforms</p>
                  </div>
                  
                  <div className="bg-ghost-white/60 dark:bg-paynes-gray/60 p-4 rounded-lg border border-light-blue/30">
                    <h3 className="text-charcoal dark:text-ghost-white mb-2 text-lg flex items-center">
                      <FaShieldAlt className="mr-2 text-light-blue" /> Trusted brokers
                    </h3>
                    <p className="text-paynes-gray dark:text-light-blue text-sm">Vetted for reliability and safety</p>
                  </div>
                </div>
              </div>
            </div>
          </ContainerScroll>
        </section>

        {/* Broker/Prop Firm Showcase Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-charcoal dark:text-ghost-white flex items-center justify-center">
              <FaUserTie className="mr-3 text-light-blue" /> Find a <FlipWords words={["mentor", "guide", "teacher", "expert"]} className="text-light-blue ml-2" />
            </h2>
            <div className="flex justify-center items-center">
              {/* Mentor Card */}
              <CardContainer className="inter-var max-w-md w-full">
                <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-charcoal dark:text-ghost-white w-full flex items-center"
                  >
                    <FaUserTie className="mr-2 text-light-blue" /> Capital Bulls - Rashied Chauke
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-paynes-gray text-sm max-w-sm mt-2 dark:text-light-blue"
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
                      className="px-4 py-2 rounded-xl text-xs font-normal text-charcoal dark:text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-light-blue mr-1" /> <span className="text-paynes-gray mr-2">★★★★★</span> 4.7/5
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={40}
                      className="px-4 py-2 rounded-xl text-light-blue text-xs font-bold flex items-center"
                    >
                      <FaMoneyBillWave className="mr-1" /> R1250/week
                    </CardItem>
                    <a href="https://tradewithcapitalbulls.com" target="_blank" rel="noopener noreferrer">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-light-blue text-charcoal text-xs font-bold flex items-center"
                      >
                        <FaGlobe className="mr-1" /> Visit Website
                      </CardItem>
                    </a>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-light-blue/20 to-ghost-white dark:from-paynes-gray/30 dark:to-charcoal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-charcoal dark:text-ghost-white flex items-center justify-center">
              <FaBuilding className="mr-3 text-light-blue" /> Trusted <FlipWords words={["Prop Firms", "Funding Partners", "Capital Providers", "Trading Firms"]} className="text-light-blue ml-2" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* FTMO Prop Firm Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-charcoal dark:text-ghost-white w-full flex items-center"
                  >
                    <FaBuilding className="mr-2 text-light-blue" /> FTMO
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-paynes-gray text-sm max-w-sm mt-2 dark:text-light-blue"
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
                      className="px-4 py-2 rounded-xl text-xs font-normal text-charcoal dark:text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-light-blue mr-1" /> <span className="text-paynes-gray mr-2">★★★★☆</span> 4.2/5
                      </div>
                    </CardItem>
                    <Link href="/prop-firms">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-paynes-gray text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> Compare Plans
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              {/* FXify Prop Firm Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-charcoal dark:text-ghost-white w-full flex items-center"
                  >
                    <FaBuilding className="mr-2 text-light-blue" /> FXify
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-paynes-gray text-sm max-w-sm mt-2 dark:text-light-blue"
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
                      className="px-4 py-2 rounded-xl text-xs font-normal text-charcoal dark:text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-light-blue mr-1" /> <span className="text-paynes-gray mr-2">★★★★★</span> 4.5/5
                      </div>
                    </CardItem>
                    <Link href="/prop-firms">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-paynes-gray text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> Compare Plans
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              {/* AuraTraded Prop Firm Card */}
              <CardContainer className="inter-var">
                <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-charcoal dark:text-ghost-white w-full flex items-center"
                  >
                    <FaBuilding className="mr-2 text-light-blue" /> AuraFunded
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-paynes-gray text-sm max-w-sm mt-2 dark:text-light-blue"
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
                      className="px-4 py-2 rounded-xl text-xs font-normal text-charcoal dark:text-ghost-white"
                    >
                      <div className="flex items-center gap-1">
                        <FaStar className="text-light-blue mr-1" /> <span className="text-paynes-gray mr-2">★★★★☆</span> 4.3/5
                      </div>
                    </CardItem>
                    <Link href="/prop-firms">
                      <CardItem
                        translateZ={40}
                        className="px-4 py-2 rounded-xl bg-paynes-gray text-ghost-white text-xs font-bold flex items-center"
                      >
                        <FaChartBar className="mr-1" /> Compare Plans
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-4 bg-ghost-white dark:bg-charcoal relative z-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-charcoal dark:text-ghost-white">
              What's This <FlipWords words={["About?", "Platform?", "Service?", "Mission?"]} className="text-light-blue" />
            </h2>
            <p className="text-center text-paynes-gray dark:text-light-blue text-lg max-w-3xl mx-auto mb-16">
              brokerConnect was established to bridge the gap between traders and the most reputable brokers, prop firms, and trading mentors in the industry.
            </p>
            <div className="text-center mb-16">
              <Link href="/about">
                <Button
                  containerClassName="w-48 h-12 mx-auto"
                  className="bg-paynes-gray hover:bg-charcoal border-none text-ghost-white font-medium"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Use Our Website Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-charcoal dark:text-ghost-white">
              Why use <FlipWords words={["our website?", "brokerConnect?", "us for trading?", "verified partners?"]} className="text-light-blue" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-ghost-white/70 dark:bg-paynes-gray/40 p-6 rounded-xl border border-light-blue/20">
                <h3 className="text-xl font-semibold mb-3 text-charcoal dark:text-ghost-white">Verified Reputable Partners</h3>
                <p className="text-paynes-gray dark:text-light-blue">We only feature brokers, prop firms, and trading mentors that have been thoroughly vetted for reliability, transparency, and credibility. This ensures you're connected with trustworthy industry leaders who have proven track records.</p>
              </div>
              
              <div className="bg-ghost-white/70 dark:bg-paynes-gray/40 p-6 rounded-xl border border-light-blue/20">
                <h3 className="text-xl font-semibold mb-3 text-charcoal dark:text-ghost-white">Comprehensive information hub</h3>
                <p className="text-paynes-gray dark:text-light-blue">From funding requirements to mentor-led communities on Discord and WhatsApp, we provide all the details you need in one place. No more second-guessing—everything you need to know is at your fingertips.</p>
              </div>
              
              <div className="bg-ghost-white/70 dark:bg-paynes-gray/40 p-6 rounded-xl border border-light-blue/20">
                <h3 className="text-xl font-semibold mb-3 text-charcoal dark:text-ghost-white">Honest Testimonials</h3>
                <p className="text-paynes-gray dark:text-light-blue">Gain confidence in your choices with authentic testimonials from real traders. Our platform showcases genuine feedback to help you understand the strengths of each service and make informed decisions.</p>
              </div>
              
              <div className="bg-ghost-white/70 dark:bg-paynes-gray/40 p-6 rounded-xl border border-light-blue/20">
                <h3 className="text-xl font-semibold mb-3 text-charcoal dark:text-ghost-white">Tailored trading support</h3>
                <p className="text-paynes-gray dark:text-light-blue">Whether you're a beginner or a seasoned trader, our website is designed to guide you towards services that fit your specific trading style, goals, and level of experience. We help you find the perfect partners to elevate your trading journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-light-blue/20 to-ghost-white dark:from-paynes-gray/50 dark:to-charcoal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-charcoal dark:text-ghost-white">
              Recommended <FlipWords words={["for you", "brokers", "mentors", "prop firms"]} className="text-light-blue" />
            </h2>
            
            <div className="flex justify-center mt-8">
              <Link href="/brokers">
                <Button
                  containerClassName="w-48 h-12"
                  className="bg-light-blue hover:bg-paynes-gray border-none text-charcoal font-medium"
                >
                  See Catalog
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-charcoal dark:text-ghost-white">
              <FlipWords words={["Testimonials", "Success Stories", "Real Traders", "User Feedback"]} className="text-light-blue" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-ghost-white dark:bg-charcoal p-6 rounded-xl border border-light-blue/20 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-paynes-gray/30">
                    <Image 
                      src="/testimonials/avatar1.jpg" 
                      alt="Riaan Young" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full mx-auto" 
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-charcoal dark:text-ghost-white">Riaan Young</h3>
                    <p className="text-sm text-paynes-gray dark:text-light-blue">Capital Bulls Member</p>
                  </div>
                </div>
                <p className="text-paynes-gray dark:text-light-blue">"Good evening ELITE !! Just got home now, Had rugby practice. TP CAME IN CLUTCH WITH DOW, We must love it !!! @Capital Bulls, once again, Never disappoints. Made over 8k today starting with 750... WOWWWW."</p>
              </div>
              
              <div className="bg-ghost-white dark:bg-charcoal p-6 rounded-xl border border-light-blue/20 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-paynes-gray/30">
                    <Image 
                      src="/testimonials/avatar2.jpg" 
                      alt="Koketso" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full mx-auto" 
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-charcoal dark:text-ghost-white">Koketso</h3>
                    <p className="text-sm text-paynes-gray dark:text-light-blue">Capital Bulls Follower</p>
                  </div>
                </div>
                <p className="text-paynes-gray dark:text-light-blue">"Thank you for your advice, saw your video just now now and just bought a robot. Even now I'm still waiting for the robot lost my money. Now I'm going to follow you"</p>
              </div>

              <div className="bg-ghost-white dark:bg-charcoal p-6 rounded-xl border border-light-blue/20 text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-paynes-gray/30">
                    <Image 
                      src="/testimonials/avatar3.jpg" 
                      alt="Tiaan Saayman" 
                      width={48} 
                      height={48}
                      className="object-cover w-full h-full mx-auto" 
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-charcoal dark:text-ghost-white">Tiaan Saayman</h3>
                    <p className="text-sm text-paynes-gray dark:text-light-blue">Capital Bulls Member</p>
                  </div>
                </div>
                <p className="text-paynes-gray dark:text-light-blue">"Made 15k in 2 weeks just by checking out your story and keeping an eye on the market i will be joining soon, u know what you doing bro love it!"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by Section */}
        <section className="py-20 px-4 md:px-8 bg-ghost-white dark:bg-charcoal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-charcoal dark:text-ghost-white flex items-center justify-center">
              <FaUsers className="mr-3 text-light-blue" /> Trusted by Thousands
            </h2>
          </div>
        </section>
        

        {/* Footer */}
        <footer className="py-10 px-4 bg-charcoal border-t border-light-blue/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-ghost-white flex items-center">
                  <FaChartLine className="mr-2 text-light-blue" /> brokerConnect
                </h3>
                <p className="text-light-blue text-sm">
                  The premier platform connecting traders with verified professionals.
                </p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-ghost-white hover:text-light-blue transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-ghost-white hover:text-light-blue transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="text-ghost-white hover:text-light-blue transition-colors">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-ghost-white">Quick Links</h3>
                <ul className="space-y-2 text-light-blue text-sm">
                  <li>
                    <Link href="/brokers" className="hover:text-ghost-white flex items-center">
                      <FaChartLine className="mr-2" /> Find a Broker
                    </Link>
                  </li>
                  <li>
                    <Link href="/mentors" className="hover:text-ghost-white flex items-center">
                      <FaUserTie className="mr-2" /> Find a Mentor
                    </Link>
                  </li>
                  <li>
                    <Link href="/prop-firms" className="hover:text-ghost-white flex items-center">
                      <FaBuilding className="mr-2" /> Prop Firm Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-ghost-white flex items-center">
                      <FaExclamationTriangle className="mr-2" /> Report a Scam
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-ghost-white">Resources</h3>
                <ul className="space-y-2 text-light-blue text-sm">
                  <li>
                    <Link href="/faq" className="hover:text-ghost-white flex items-center">
                      <FaQuestionCircle className="mr-2" /> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-ghost-white flex items-center">
                      <FaInfoCircle className="mr-2" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/brokers" className="hover:text-ghost-white flex items-center">
                      <FaShieldAlt className="mr-2" /> Broker Verification
                    </Link>
                  </li>
                  <li>
                    <Link href="/prop-firms" className="hover:text-ghost-white flex items-center">
                      <FaBuilding className="mr-2" /> Prop Firms
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-ghost-white">Connect</h3>
                <ul className="space-y-2 text-light-blue text-sm">
                  <li>
                    <Link href="/contact" className="hover:text-ghost-white flex items-center">
                      <FaEnvelope className="mr-2" /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-ghost-white flex items-center">
                      <FaTwitter className="mr-2" /> Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-ghost-white flex items-center">
                      <FaInstagram className="mr-2" /> Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-ghost-white flex items-center">
                      <FaTelegram className="mr-2" /> Telegram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-light-blue/10 mt-10 pt-6 text-center text-ghost-white text-sm">
              <p>© 2023 brokerConnect Platform. All rights reserved.</p>
              <p className="mt-2 text-light-blue flex items-center justify-center">
                <FaShieldAlt className="mr-2" /> brokerConnect is not a broker or financial advisor. Trading involves risk.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
