"use client";

import { useState, useEffect, useRef } from "react";
import { FitCheckProgress } from "./FitCheckProgress";
import { FitCheckStep } from "./FitCheckStep";
import { FitCheckResult } from "./FitCheckResult";

type StepData = {
  question: string;
  options: { value: string; label: string }[];
};

const STEPS: StepData[] = [
  {
    question: "What are you primarily looking for right now?",
    options: [
      { value: "individual", label: "Individual therapy" },
      { value: "caregiver", label: "Caregiver support" },
      { value: "navigation", label: "Help navigating care or services" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  {
    question: "Which best describes what you're dealing with?",
    options: [
      { value: "stress", label: "Ongoing stress or anxiety" },
      { value: "mood", label: "Low mood or feeling stuck" },
      { value: "medical", label: "Adjusting to a medical or health-related change" },
      { value: "caregiving", label: "Caregiving responsibilities" },
      { value: "transition", label: "A major life transition" },
    ],
  },
  {
    question: "How long has this been impacting you?",
    options: [
      { value: "recent", label: "Recently (weeks)" },
      { value: "months", label: "Several months" },
      { value: "longterm", label: "Longer-term" },
      { value: "notsure", label: "Not sure" },
    ],
  },
  {
    question: "Are you currently in immediate danger or crisis?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    question: "Which feels most accurate right now?",
    options: [
      { value: "ready", label: "I'm ready to talk with someone" },
      { value: "curious", label: "I'm unsure but curious" },
      { value: "exploring", label: "I'm just exploring" },
    ],
  },
];

const CRISIS_MESSAGE = (
  <div className="space-y-4">
    <div className="rounded-lg border-2 border-red-300 bg-red-50 p-6">
      <h2 className="mb-3 text-xl font-semibold text-red-900">Important Safety Information</h2>
      <p className="text-base leading-7 text-red-800">
        This site does not provide emergency services. If you are in immediate danger, call 911. In
        the U.S., you can call or text 988.
      </p>
    </div>
  </div>
);

export function FitCheckContainer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showCrisis, setShowCrisis] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const announcementRef = useRef<HTMLDivElement>(null);

  const totalSteps = STEPS.length;
  const currentAnswer = answers[currentStep];

  useEffect(() => {
    // Announce step changes to screen readers
    if (announcementRef.current) {
      announcementRef.current.textContent = `Step ${currentStep + 1} of ${totalSteps}: ${STEPS[currentStep]?.question || ""}`;
    }
  }, [currentStep, totalSteps]);

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    // Check for crisis response (Step 4, index 3)
    if (currentStep === 3 && value === "yes") {
      setShowCrisis(true);
      return;
    }

    // Move to next step or show result
    if (currentStep < totalSteps - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 150);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 150);
    }
  };

  if (showCrisis) {
    return (
      <div className="mx-auto max-w-2xl">
        <div aria-live="assertive" aria-atomic="true">
          {CRISIS_MESSAGE}
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="mx-auto max-w-2xl">
        <div aria-live="polite" aria-atomic="true">
          <FitCheckResult />
        </div>
      </div>
    );
  }

  const currentStepData = STEPS[currentStep];

  return (
    <div className="mx-auto max-w-2xl">
      {/* Screen reader announcement */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      <FitCheckProgress currentStep={currentStep + 1} totalSteps={totalSteps} />

      <FitCheckStep
        question={currentStepData.question}
        options={currentStepData.options}
        selectedValue={currentAnswer || null}
        onSelect={handleSelect}
        stepNumber={currentStep + 1}
        totalSteps={totalSteps}
      />
    </div>
  );
}

