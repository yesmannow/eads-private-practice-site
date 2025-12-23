"use client";

import { useState, useEffect, useRef } from "react";
import { PlannerProgress } from "./PlannerProgress";
import { PlannerStep } from "./PlannerStep";
import { PlannerSummary } from "./PlannerSummary";
import { PlannerActions } from "./PlannerActions";

const WHO_ABOUT_OPTIONS = [
  { value: "myself", label: "Myself" },
  { value: "family", label: "A family member or loved one" },
  { value: "professional", label: "Someone I support professionally" },
  { value: "notsure", label: "Not sure / prefer not to say" },
];

const CHALLENGE_OPTIONS = [
  { value: "tooManyDecisions", label: "Too many decisions at once" },
  { value: "notSureServices", label: "Not sure which services/resources to start with" },
  { value: "communication", label: "Communication across providers/systems" },
  { value: "caregiving", label: "Managing caregiving responsibilities" },
  { value: "overwhelmed", label: "Feeling overwhelmed or stuck" },
  { value: "followThrough", label: "Keeping track of tasks and follow-through" },
  { value: "other", label: "Other" },
];

const PRIORITY_OPTIONS = [
  { value: "clarifySteps", label: "Clarify next steps" },
  { value: "identifyResources", label: "Identify resources/supports" },
  { value: "organizeQuestions", label: "Organize questions for appointments" },
  { value: "createPlan", label: "Create a manageable plan" },
  { value: "improveCommunication", label: "Improve communication and coordination" },
  { value: "reduceOverwhelm", label: "Reduce overwhelm and build follow-through" },
];

const QUESTION_PROMPTS = [
  {
    key: "decisions",
    prompt: "What are the most important decisions in the next 2–4 weeks?",
  },
  {
    key: "roles",
    prompt: "Who needs to be involved, and what is each person's role?",
  },
  {
    key: "information",
    prompt: "What information do I need to make the next decision?",
  },
  {
    key: "options",
    prompt: "What are the options, and what are the pros/cons of each?",
  },
  {
    key: "nextStep",
    prompt: "What would a reasonable next step look like this week?",
  },
];

const WHO_ABOUT_LABELS: Record<string, string> = {
  myself: "Myself",
  family: "A family member or loved one",
  professional: "Someone I support professionally",
  notsure: "Not sure / prefer not to say",
};

const CHALLENGE_LABELS: Record<string, string> = {
  tooManyDecisions: "Too many decisions at once",
  notSureServices: "Not sure which services/resources to start with",
  communication: "Communication across providers/systems",
  caregiving: "Managing caregiving responsibilities",
  overwhelmed: "Feeling overwhelmed or stuck",
  followThrough: "Keeping track of tasks and follow-through",
  other: "Other",
};

const PRIORITY_LABELS: Record<string, string> = {
  clarifySteps: "Clarify next steps",
  identifyResources: "Identify resources/supports",
  organizeQuestions: "Organize questions for appointments",
  createPlan: "Create a manageable plan",
  improveCommunication: "Improve communication and coordination",
  reduceOverwhelm: "Reduce overwhelm and build follow-through",
};

export function CareNavPlannerContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [situationOverview, setSituationOverview] = useState("");
  const [whoAbout, setWhoAbout] = useState("");
  const [challenges, setChallenges] = useState<string[]>([]);
  const [priorities, setPriorities] = useState<string[]>([]);
  const [questions, setQuestions] = useState<Record<string, string>>({
    decisions: "",
    roles: "",
    information: "",
    options: "",
    nextStep: "",
  });
  const [showSummary, setShowSummary] = useState(false);
  const [maxPrioritiesMessage, setMaxPrioritiesMessage] = useState("");
  const announcementRef = useRef<HTMLDivElement>(null);

  const totalSteps = 4;

  useEffect(() => {
    // Announce step changes to screen readers
    if (announcementRef.current && !showSummary) {
      const stepHeadings = [
        "What are you navigating?",
        "What feels most challenging?",
        "Choose up to three priorities",
        "Questions to bring to appointments",
      ];
      announcementRef.current.textContent = `Step ${currentStep} of ${totalSteps}: ${stepHeadings[currentStep - 1] || ""}`;
    }
  }, [currentStep, totalSteps, showSummary]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSummary(true);
    }
  };

  const toggleChallenge = (value: string) => {
    setChallenges((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const togglePriority = (value: string) => {
    if (priorities.includes(value)) {
      setPriorities((prev) => prev.filter((v) => v !== value));
      setMaxPrioritiesMessage("");
    } else {
      if (priorities.length >= 3) {
        setMaxPrioritiesMessage("You can select up to three priorities.");
        return;
      }
      setPriorities((prev) => [...prev, value]);
      setMaxPrioritiesMessage("");
    }
  };

  const updateQuestion = (key: string, value: string) => {
    setQuestions((prev) => ({ ...prev, [key]: value }));
  };

  const formatEmailBody = () => {
    let body = "Care Navigation Planning Summary\n\n";

    if (situationOverview.trim()) {
      body += "Situation Overview:\n";
      body += situationOverview.trim();
      body += "\n\n";
    }

    if (whoAbout) {
      body += "Who this is about:\n";
      body += WHO_ABOUT_LABELS[whoAbout] || whoAbout;
      body += "\n\n";
    }

    if (challenges.length > 0) {
      body += "What feels most challenging:\n";
      body += challenges.map((c) => `- ${CHALLENGE_LABELS[c] || c}`).join("\n");
      body += "\n\n";
    }

    if (priorities.length > 0) {
      body += "Priorities:\n";
      body += priorities.map((p) => `- ${PRIORITY_LABELS[p] || p}`).join("\n");
      body += "\n\n";
    }

    const answeredQuestions = Object.entries(questions).filter(([_, answer]) => answer.trim());
    if (answeredQuestions.length > 0) {
      body += "Questions to bring to appointments:\n\n";
      answeredQuestions.forEach(([key, answer]) => {
        const prompt = QUESTION_PROMPTS.find((q) => q.key === key)?.prompt || key;
        body += `${prompt}\n`;
        body += `${answer.trim()}\n\n`;
      });
    }

    return encodeURIComponent(body);
  };

  if (showSummary) {
    return (
      <div className="mx-auto max-w-3xl">
        <div aria-live="polite" aria-atomic="true">
          <PlannerSummary
            situationOverview={situationOverview}
            whoAbout={whoAbout}
            challenges={challenges}
            priorities={priorities}
            questions={questions}
          />
          <div className="mt-8">
            <PlannerActions emailBody={formatEmailBody()} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Screen reader announcement */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      <PlannerProgress currentStep={currentStep} totalSteps={totalSteps} />

      {currentStep === 1 && (
        <PlannerStep heading="What are you navigating?" stepNumber={1} totalSteps={totalSteps}>
          <div className="space-y-6">
            <div className="space-y-3">
              <label htmlFor="situation-overview" className="text-lg font-medium text-slate-900">
                In a sentence or two, describe the situation (general information only).
              </label>
              <textarea
                id="situation-overview"
                value={situationOverview}
                onChange={(e) => setSituationOverview(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                aria-describedby="situation-help"
              />
              <p id="situation-help" className="text-sm text-slate-600">
                Avoid sensitive clinical details.
              </p>
            </div>

            <fieldset className="space-y-3">
              <legend className="mb-3 text-lg font-medium text-slate-900">
                Who is this primarily about?
              </legend>
              <div className="space-y-3">
                {WHO_ABOUT_OPTIONS.map((option) => (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <input
                      type="radio"
                      name="who-about"
                      value={option.value}
                      checked={whoAbout === option.value}
                      onChange={(e) => setWhoAbout(e.target.value)}
                      className="h-4 w-4 border-slate-300 text-sky-900 focus:ring-2 focus:ring-sky-900 focus:ring-offset-2"
                    />
                    <span className="flex-1 text-base text-slate-800">{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              onClick={handleNext}
              className="rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              Continue
            </button>
          </div>
        </PlannerStep>
      )}

      {currentStep === 2 && (
        <PlannerStep heading="What feels most challenging?" stepNumber={2} totalSteps={totalSteps}>
          <div className="space-y-6">
            <fieldset className="space-y-3">
              <legend className="sr-only">What feels most challenging?</legend>
              {CHALLENGE_OPTIONS.map((option) => {
                const isChecked = challenges.includes(option.value);
                return (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleChallenge(option.value)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-900 focus:ring-2 focus:ring-sky-900 focus:ring-offset-2"
                    />
                    <span className="flex-1 text-base text-slate-800">{option.label}</span>
                  </label>
                );
              })}
            </fieldset>

            <button
              onClick={handleNext}
              className="rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              Continue
            </button>
          </div>
        </PlannerStep>
      )}

      {currentStep === 3 && (
        <PlannerStep heading="Choose up to three priorities" stepNumber={3} totalSteps={totalSteps}>
          <div className="space-y-6">
            <p className="text-slate-700">Select up to three areas you want to focus on first.</p>

            {maxPrioritiesMessage && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm text-amber-800">{maxPrioritiesMessage}</p>
              </div>
            )}

            <fieldset className="space-y-3">
              <legend className="sr-only">Choose up to three priorities</legend>
              {PRIORITY_OPTIONS.map((option) => {
                const isChecked = priorities.includes(option.value);
                return (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => togglePriority(option.value)}
                      disabled={!isChecked && priorities.length >= 3}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-900 focus:ring-2 focus:ring-sky-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <span className="flex-1 text-base text-slate-800">{option.label}</span>
                  </label>
                );
              })}
            </fieldset>

            <button
              onClick={handleNext}
              className="rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              Continue
            </button>
          </div>
        </PlannerStep>
      )}

      {currentStep === 4 && (
        <PlannerStep
          heading="Questions to bring to appointments"
          stepNumber={4}
          totalSteps={totalSteps}
        >
          <div className="space-y-6">
            <p className="text-slate-700">
              Use these prompts to organize questions you want to bring to appointments. All fields
              are optional.
            </p>

            <div className="space-y-6">
              {QUESTION_PROMPTS.map((question) => (
                <div key={question.key} className="space-y-2">
                  <label
                    htmlFor={`question-${question.key}`}
                    className="text-base font-medium text-slate-900"
                  >
                    {question.prompt}
                  </label>
                  <textarea
                    id={`question-${question.key}`}
                    value={questions[question.key] || ""}
                    onChange={(e) => updateQuestion(question.key, e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              View Summary
            </button>
          </div>
        </PlannerStep>
      )}
    </div>
  );
}

