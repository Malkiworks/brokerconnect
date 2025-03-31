"use client";

import React, { useState } from "react";
import { ButtonIcon } from "./button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaChartLine, FaUserTie, FaQuestionCircle, FaEnvelope, FaTimes } from "react-icons/fa";
import Link from "next/link";

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const actions = [
    { icon: <FaChartLine />, href: "/brokers", label: "Brokers" },
    { icon: <FaUserTie />, href: "/mentors", label: "Mentors" },
    { icon: <FaQuestionCircle />, href: "/faq", label: "FAQ" },
    { icon: <FaEnvelope />, href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col-reverse items-end space-y-reverse space-y-4 mb-4">
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center group"
              >
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal text-ghost-white px-2 py-1 rounded text-sm whitespace-nowrap">
                  {action.label}
                </span>
                <Link href={action.href}>
                  <ButtonIcon
                    icon={action.icon}
                    className="bg-charcoal hover:bg-light-blue hover:text-charcoal transition-colors"
                    size="sm"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <ButtonIcon
        icon={isOpen ? <FaTimes /> : <FaPlus />}
        className={cn(
          "bg-light-blue text-charcoal hover:bg-paynes-gray hover:text-ghost-white transition-colors",
          isOpen && "rotate-45 bg-paynes-gray text-ghost-white"
        )}
        size="lg"
        onClick={toggleOpen}
      />
    </div>
  );
} 