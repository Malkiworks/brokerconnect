"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  animated?: boolean;
}

export function SectionHeader({
  title,
  icon,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  animated = true,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const HeaderComponent = animated ? motion.div : "div";
  const animationProps = animated
    ? {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <HeaderComponent
      className={cn(
        "flex flex-col space-y-2 mb-8",
        alignmentClasses[align],
        className
      )}
      {...animationProps}
    >
      <h2 className={cn(
        "text-3xl md:text-5xl font-bold text-charcoal dark:text-ghost-white",
        align === "center" ? "flex items-center justify-center" : "flex items-center",
        titleClassName
      )}>
        {icon && <span className="mr-3">{icon}</span>}
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-paynes-gray dark:text-light-blue text-lg max-w-2xl mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </HeaderComponent>
  );
} 