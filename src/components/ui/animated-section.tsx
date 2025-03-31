"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./scroll-animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade" | "slide" | "scale" | "none";
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animation = "fade",
  direction = "up",
  threshold = 0.1,
}: AnimatedSectionProps) => {
  // Apply different animations based on the animation and direction props
  const getAnimation = () => {
    if (animation === "none") return {};
    
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
          ease: "easeOut"
        }
      }
    };
    
    if (animation === "fade") {
      return baseVariants;
    }
    
    if (animation === "scale") {
      return {
        hidden: { ...baseVariants.hidden, scale: 0.95 },
        visible: { 
          ...baseVariants.visible, 
          scale: 1,
        }
      };
    }
    
    // For slide animations
    const offset = 30; // pixels to move
    const directionMap = {
      up: { y: offset },
      down: { y: -offset },
      left: { x: offset },
      right: { x: -offset }
    };
    
    return {
      hidden: { ...baseVariants.hidden, ...directionMap[direction] },
      visible: { 
        ...baseVariants.visible, 
        x: 0, 
        y: 0 
      }
    };
  };
  
  const getTransition = () => {
    return {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth animation
    };
  };
  
  return (
    <AnimateOnScroll
      className={className}
      threshold={threshold}
      animation={getAnimation()}
      transition={getTransition()}
    >
      {children}
    </AnimateOnScroll>
  );
}; 