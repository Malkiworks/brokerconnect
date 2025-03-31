"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  icon,
  iconPosition = "left",
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#b8dbd9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-light-blue/30 bg-charcoal/[0.8] text-sm text-ghost-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </div>
    </Component>
  );
}

// Icon-only circular button
export function ButtonIcon({
  icon,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  size = "md",
  ...otherProps
}: {
  icon: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  [key: string]: any;
}) {
  // Size mapping
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-full bg-transparent p-[1px]",
        sizes[size],
        containerClassName,
      )}
      {...otherProps}
    >
      <div className="absolute inset-0 rounded-full">
        <MovingBorder duration={duration} rx="50%" ry="50%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#b8dbd9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center rounded-full border border-light-blue/30 bg-charcoal/[0.8] text-lg text-ghost-white antialiased backdrop-blur-xl",
          className,
        )}
      >
        {icon}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);
  
  // Add state to track if path is ready
  const [isPathReady, setIsPathReady] = useState(false);
  const positionXRef = useRef(0);
  const positionYRef = useRef(0);

  // Handle path readiness
  useEffect(() => {
    if (pathRef.current) {
      // Small delay to ensure path is fully initialized
      const timer = setTimeout(() => {
        setIsPathReady(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useAnimationFrame((time: number) => {
    if (!pathRef.current || !isPathReady) return;
    
    try {
      const rect = pathRef.current.getBoundingClientRect();
      const pathLength = rect.width * 2 + rect.height * 2;
      
      if (pathLength) {
        const pxPerMillisecond = pathLength / duration;
        const position = (time * pxPerMillisecond) % pathLength;
        progress.set(position);
        
        // Calculate position manually based on rectangle perimeter
        let x = 0;
        let y = 0;
        
        if (position < rect.width) {
          // Top edge: moving right
          x = position;
          y = 0;
        } else if (position < rect.width + rect.height) {
          // Right edge: moving down
          x = rect.width;
          y = position - rect.width;
        } else if (position < 2 * rect.width + rect.height) {
          // Bottom edge: moving left
          x = rect.width - (position - (rect.width + rect.height));
          y = rect.height;
        } else {
          // Left edge: moving up
          x = 0;
          y = rect.height - (position - (2 * rect.width + rect.height));
        }
        
        positionXRef.current = x;
        positionYRef.current = y;
      }
    } catch (e) {
      // Silent catch for any potential SVG errors
    }
  });

  // Create motion values that read from our refs
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Update motion values in animation frame
  useAnimationFrame(() => {
    x.set(positionXRef.current);
    y.set(positionYRef.current);
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}; 