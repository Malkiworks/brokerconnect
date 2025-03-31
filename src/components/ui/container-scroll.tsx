"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue, useSpring } from "framer-motion";
import { smoothScrollConfig, useScrollSmoothing } from "./scroll-animations";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  // Apply smooth spring physics to scrollYProgress
  const smoothScrollYProgress = useSpring(scrollYProgress, smoothScrollConfig);
  
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Use the smooth scroll progress for animations
  const rotate = useTransform(smoothScrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(smoothScrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(smoothScrollYProgress, [0, 1], [0, -100]);
  
  // For mobile, add additional smoothing to prevent jumpiness
  const mobileTransitionConfig = {
    type: "spring",
    stiffness: isMobile ? 50 : 100,
    damping: isMobile ? 25 : 30,
    restDelta: 0.001
  };

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 mt-20 md:mt-28 overflow-hidden"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header 
          translate={translate} 
          titleComponent={titleComponent} 
          transition={mobileTransitionConfig}
        />
        <Card 
          rotate={rotate} 
          translate={translate} 
          scale={scale} 
          transition={mobileTransitionConfig}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ 
  translate, 
  titleComponent,
  transition
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
  transition?: any;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      transition={transition}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
  transition
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  transition?: any;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      transition={transition}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-paynes-gray p-2 md:p-6 bg-charcoal rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-ghost-white dark:bg-charcoal md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
}; 