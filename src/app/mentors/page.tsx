"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card-container";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";

export default function MentorsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-8 text-charcoal dark:text-ghost-white">
            Find a <FlipWords words={["Mentor", "Guide", "Coach", "Expert"]} className="text-light-blue" />
          </h1>
          <p className="text-center text-paynes-gray dark:text-light-blue text-lg max-w-3xl mx-auto mb-12">
            Connect with experienced trading mentors who have been vetted for their expertise and teaching ability. Whether you're a beginner or advanced trader, find the right mentor to accelerate your trading journey.
          </p>
          
          <div className="flex justify-center items-center">
            {/* Capital Bulls */}
            <CardContainer className="inter-var">
              <CardBody className="bg-ghost-white dark:bg-charcoal relative group/card dark:hover:shadow-2xl dark:hover:shadow-light-blue/[0.1] dark:border-light-blue/[0.2] border-paynes-gray/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-charcoal dark:text-ghost-white">
                  Capital Bulls - Rashied Chauke
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-paynes-gray dark:text-light-blue text-sm mt-2">
                  Premium US30 trading signals and educational community.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/mentors/capital-bulls.jpg"
                    height="225"
                    width="400"
                    className="h-40 w-full object-contain rounded-xl group-hover/card:shadow-xl border-2 border-paynes-gray/30 mx-auto"
                    alt="Capital Bulls"
                  />
                </CardItem>
                <div className="mt-6 flex justify-between items-center">
                  <CardItem translateZ="40" className="text-paynes-gray dark:text-light-blue text-sm">
                    <div className="flex items-center">
                      <span className="mr-1">⭐</span>
                      <span>4.8/5 (156 reviews)</span>
                    </div>
                  </CardItem>
                  <CardItem translateZ="40" className="text-light-blue">
                    R1250/week
                  </CardItem>
                </div>
                <CardItem translateZ="50" className="w-full mt-6">
                  <a href="https://tradewithcapitalbulls.com" target="_blank" rel="noopener noreferrer" className="w-full block">
                    <Button className="w-full bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold">
                      Visit Website
                    </Button>
                  </a>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button 
              containerClassName="w-auto h-14"
              className="bg-ghost-white dark:bg-paynes-gray/50 hover:bg-light-blue/50 border border-light-blue text-charcoal dark:text-ghost-white font-medium px-8"
            >
              Load More Mentors
            </Button>
          </div>
          
          <div className="mt-24 bg-ghost-white dark:bg-charcoal p-8 rounded-xl border border-paynes-gray/20">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-charcoal dark:text-ghost-white text-center">
              Become a <span className="text-light-blue">Mentor</span>
            </h2>
            <p className="text-paynes-gray dark:text-light-blue text-lg max-w-3xl mx-auto mb-8 text-center">
              Are you an experienced trader with a proven track record? Share your knowledge and earn by becoming a verified mentor on our platform.
            </p>
            <div className="flex justify-center">
              <Button 
                containerClassName="w-auto h-14"
                className="bg-light-blue hover:bg-paynes-gray text-charcoal font-medium px-8"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 