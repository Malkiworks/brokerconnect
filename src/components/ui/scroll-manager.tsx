"use client";

import { useEffect, useState } from "react";
import { useScrollSmoothing } from "./scroll-animations";

const ScrollManager = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { smoothScroll } = useScrollSmoothing();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
      
      // Initialize scroll behavior
      initScrollBehavior();
      
      // Handle browser back/forward navigation (maintain scroll position)
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }
  }, []);
  
  const initScrollBehavior = () => {
    // Detect device capabilities
    const prefersReducedMotion = 
      typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
    if (prefersReducedMotion) {
      // If user prefers reduced motion, disable animations
      document.documentElement.classList.add('reduced-motion');
    } else {
      // Initialize smooth scrolling for anchor links
      initSmoothAnchorScrolling();
    }

    // Add scroll class to header when scrolled
    initHeaderScrollEffect();
  };
  
  // Handle anchor link smooth scrolling
  const initSmoothAnchorScrolling = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80; // Account for fixed header if needed
          const targetPosition = 
            targetElement.getBoundingClientRect().top + 
            window.scrollY - 
            headerOffset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  };
  
  // Add scroll class to header when scrolled
  const initHeaderScrollEffect = () => {
    const header = document.querySelector('header');
    if (!header) return;
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Run once on init
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };
  
  return null; // This component doesn't render anything
};

export default ScrollManager; 