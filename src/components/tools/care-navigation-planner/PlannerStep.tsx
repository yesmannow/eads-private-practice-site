"use client";

import { ReactNode } from "react";

type PlannerStepProps = {
  heading: string;
  children: ReactNode;
  stepNumber?: number;
  totalSteps?: number;
};

export function PlannerStep({ heading, children }: PlannerStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{heading}</h2>
      <div>{children}</div>
    </div>
  );
}

