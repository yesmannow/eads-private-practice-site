"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
}

export function CardHover({
  children,
  className = "",
  scale = 1.02,
  lift = -2,
}: CardHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        y: lift,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
}

interface ButtonHoverProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function ButtonHover({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonHoverProps) {
  return (
    <motion.button
      className={className}
      type={type}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        ...(variant === "primary" ? { boxShadow: "0 10px 25px rgba(0,0,0,0.15)" } : {}),
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {children}
    </motion.button>
  );
}
