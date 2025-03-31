"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform, useInView, useAnimation, MotionValue } from "framer-motion";

// Smooth scroll spring animation configuration
export const smoothScrollConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
};

export const useScrollSmoothing = () => {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, smoothScrollConfig);
  
  return { smoothScroll };
};

// Animation for elements appearing on scroll
export const AnimateOnScroll = ({ 
  children, 
  threshold = 0.2, 
  animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  transition = {
    duration: 0.5,
    ease: "easeOut"
  },
  className = ""
}: {
  children: ReactNode;
  threshold?: number;
  animation?: Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax effect component
export const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = "" 
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered animation for lists/grids of elements
export const StaggeredList = ({ 
  children, 
  staggerDelay = 0.1, 
  threshold = 0.1,
  className = "" 
}: {
  children: ReactNode;
  staggerDelay?: number;
  threshold?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {React.Children.map(children, child => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Utility for scroll-linked animations
export const useScrollAnimation = (
  scrollYProgress: MotionValue<number>,
  inputRange: number[] = [0, 1],
  outputRange: any[] = [0, 1],
  options = {}
) => {
  return useTransform(
    scrollYProgress,
    inputRange,
    outputRange,
    options
  );
}; 