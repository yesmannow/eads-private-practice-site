"use client";

import { useEffect, useRef } from "react";

type Option = {
  value: string;
  label: string;
};

type FitCheckStepProps = {
  question: string;
  options: Option[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
  stepNumber: number;
  totalSteps?: number;
};

export function FitCheckStep({
  question,
  options,
  selectedValue,
  onSelect,
  stepNumber,
}: FitCheckStepProps) {
  const radiogroupRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Focus first option when step changes
    optionRefs.current[0]?.focus();
  }, [stepNumber]);

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        optionRefs.current[nextIndex]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        optionRefs.current[nextIndex]?.focus();
        break;
      case " ":
      case "Enter":
        e.preventDefault();
        onSelect(options[currentIndex].value);
        break;
    }
  };

  return (
    <div className="space-y-6">
      <h2 id={`step-${stepNumber}-question`} className="text-2xl font-semibold text-slate-900 sm:text-3xl">
        {question}
      </h2>
      <div
        ref={radiogroupRef}
        className="space-y-3"
        role="radiogroup"
        aria-labelledby={`step-${stepNumber}-question`}
      >
        {options.map((option, index) => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              ref={(el) => {
                optionRefs.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={index === 0 && !selectedValue ? 0 : isSelected ? 0 : -1}
              onClick={() => onSelect(option.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-full rounded-lg border-2 px-5 py-4 text-left text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 ${
                isSelected
                  ? "border-sky-900 bg-sky-50 text-sky-900"
                  : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

