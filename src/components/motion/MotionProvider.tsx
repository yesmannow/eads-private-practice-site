"use client";

import { createContext, useContext, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface MotionContextType {
  reducedMotion: boolean;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <MotionContext.Provider value={{ reducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotionContext() {
  const context = useContext(MotionContext);
  if (context === undefined) {
    throw new Error("useMotionContext must be used within a MotionProvider");
  }
  return context;
}