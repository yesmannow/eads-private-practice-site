"use client";

import { createContext, useContext, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

type MotionContextType = {
  reducedMotion: boolean;
};

const MotionContext = createContext<MotionContextType>({
  reducedMotion: false,
});

export function useMotionContext() {
  return useContext(MotionContext);
}

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <MotionContext.Provider value={{ reducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
}

