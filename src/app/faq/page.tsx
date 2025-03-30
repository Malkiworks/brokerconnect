"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

// Define FAQ item type
interface FAQItemProps {
  question: string;
  answer: string;
}

// FAQ Item component with accordion functionality
const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-paynes-gray/20 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-charcoal dark:text-ghost-white">{question}</h3>
        <span className="text-light-blue text-2xl transform transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-paynes-gray dark:text-light-blue leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQPage() {
  const faqs: FAQItemProps[] = [
    {
      question: "What is brokerConnect?",
      answer: "brokerConnect is a platform that connects traders with verified brokers, prop firms, and trading mentors. We aim to provide a safe and reliable space where traders can find the right partners for their trading journey."
    },
    {
      question: "How do you verify the brokers and prop firms?",
      answer: "We have a thorough verification process that includes checking the regulatory status, company history, client reviews, and operational transparency. We only list brokers and prop firms that meet our strict standards for reliability and trustworthiness."
    },
    {
      question: "Are the mentors on your platform verified?",
      answer: "Yes, all mentors on our platform undergo a strict verification process. We review their trading history, educational approach, client testimonials, and reputation in the trading community to ensure they can provide valuable guidance to traders."
    },
    {
      question: "How do I choose the right broker for my trading style?",
      answer: "We recommend considering factors such as the instruments you want to trade, your preferred leverage, deposit and withdrawal methods, platform features, and the regulatory environment. You can use our comparison tools and detailed broker profiles to find the best match for your trading style."
    },
    {
      question: "What is a prop trading firm?",
      answer: "A proprietary trading firm (prop firm) provides capital to traders who have demonstrated proficiency by passing their evaluation challenges. Once funded, traders can use the firm's capital to trade and keep a significant percentage of the profits. This allows skilled traders to access larger trading accounts than they could personally fund."
    },
    {
      question: "How do I report a potential scam?",
      answer: "You can report suspicious brokers, prop firms, or mentors through our 'Report a Scam' feature on the Contact page. Provide as much detail as possible about your experience, and our team will investigate the matter thoroughly."
    },
    {
      question: "Do you offer trading education?",
      answer: "While we don't directly provide trading education, we connect traders with verified mentors who offer educational resources. These mentors provide various learning materials, from basic trading concepts to advanced strategies, depending on their specialization."
    },
    {
      question: "Is it free to use brokerConnect?",
      answer: "Yes, the brokerConnect platform is free for traders to use. We earn commissions from our partners when traders sign up through our platform, which allows us to keep the service free for our users while maintaining our independence and objectivity in our recommendations."
    },
    {
      question: "How can a broker or prop firm get listed on your platform?",
      answer: "Brokers and prop firms interested in being listed on our platform can contact us through the Contact page. Be prepared to undergo our verification process, which evaluates factors such as regulatory compliance, operational transparency, and client satisfaction."
    },
    {
      question: "What should I do if I have a dispute with a broker or mentor?",
      answer: "If you encounter issues with any of our listed partners, please contact us through our Contact page. We take all disputes seriously and will work to mediate the situation fairly. We maintain high standards for our partners and regularly review their standing based on user feedback."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-ghost-white to-light-blue/20 dark:from-charcoal dark:to-paynes-gray/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-8 text-charcoal dark:text-ghost-white">
            <FlipWords words={["Frequently", "Commonly", "Often", "Typically"]} className="text-light-blue" /> Asked Questions
          </h1>
          <p className="text-center text-paynes-gray dark:text-light-blue text-lg max-w-3xl mx-auto mb-16">
            Find answers to common questions about brokerConnect, our partners, and how we can help you on your trading journey.
          </p>

          <div className="bg-ghost-white/70 dark:bg-paynes-gray/40 rounded-xl border border-light-blue/20 p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-paynes-gray dark:text-light-blue mb-6">
              Still have questions? We're here to help!
            </p>
            <Link href="/contact">
              <Button 
                containerClassName="w-auto h-14"
                className="bg-light-blue hover:bg-paynes-gray text-charcoal font-semibold px-8"
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