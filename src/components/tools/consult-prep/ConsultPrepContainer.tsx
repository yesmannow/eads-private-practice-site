"use client";

import { useState, useEffect, useRef } from "react";
import { ChecklistSection } from "./ChecklistSection";
import { TextPromptField } from "./TextPromptField";
import { PrepSummary } from "./PrepSummary";
import { PrepActions } from "./PrepActions";

const WHAT_BRINGS_YOU_OPTIONS = [
  { value: "stress", label: "Ongoing stress or anxiety" },
  { value: "mood", label: "Low mood or feeling stuck" },
  { value: "medical", label: "Adjusting to a health or medical change" },
  { value: "caregiving", label: "Caregiving responsibilities" },
  { value: "transition", label: "A major life transition" },
  { value: "unsure", label: "Not sure yet" },
];

const WHAT_HOPING_FOR_OPTIONS = [
  { value: "coping", label: "Coping skills" },
  { value: "overwhelm", label: "Reducing overwhelm" },
  { value: "clarifying", label: "Clarifying next steps" },
  { value: "support", label: "Support with caregiving" },
  { value: "options", label: "Understanding options" },
  { value: "something", label: "Something else" },
];

const LOGISTICS_OPTIONS = [
  { value: "telehealth", label: "Telehealth vs in-person preference" },
  { value: "availability", label: "Availability (days/times)" },
  { value: "fees", label: "Questions about fees or insurance" },
  {
    value: "service",
    label: "Which service I'm looking for (therapy, caregiver support, care navigation)",
  },
  { value: "later", label: "I'll figure this out later" },
];

const OPTION_LABELS: Record<string, Record<string, string>> = {
  whatBringsYou: {
    stress: "Ongoing stress or anxiety",
    mood: "Low mood or feeling stuck",
    medical: "Adjusting to a health or medical change",
    caregiving: "Caregiving responsibilities",
    transition: "A major life transition",
    unsure: "Not sure yet",
  },
  whatHopingFor: {
    coping: "Coping skills",
    overwhelm: "Reducing overwhelm",
    clarifying: "Clarifying next steps",
    support: "Support with caregiving",
    options: "Understanding options",
    something: "Something else",
  },
  logistics: {
    telehealth: "Telehealth vs in-person preference",
    availability: "Availability (days/times)",
    fees: "Questions about fees or insurance",
    service: "Which service I'm looking for (therapy, caregiver support, care navigation)",
    later: "I'll figure this out later",
  },
};

export function ConsultPrepContainer() {
  const [whatBringsYou, setWhatBringsYou] = useState<string[]>([]);
  const [whatHopingFor, setWhatHopingFor] = useState<string[]>([]);
  const [reflection, setReflection] = useState("");
  const [logistics, setLogistics] = useState<string[]>([]);
  const summaryRef = useRef<HTMLDivElement>(null);

  const formatEmailBody = () => {
    let body = "Consultation Preparation Checklist\n\n";
    body += "What brings you here?\n";
    if (whatBringsYou.length > 0) {
      body += whatBringsYou
        .map((val) => `- ${OPTION_LABELS.whatBringsYou[val] || val}`)
        .join("\n");
    } else {
      body += "- (not selected)";
    }
    body += "\n\n";

    body += "What are you hoping for?\n";
    if (whatHopingFor.length > 0) {
      body += whatHopingFor
        .map((val) => `- ${OPTION_LABELS.whatHopingFor[val] || val}`)
        .join("\n");
    } else {
      body += "- (not selected)";
    }
    body += "\n\n";

    if (reflection.trim()) {
      body += "Reflection:\n";
      body += reflection.trim();
      body += "\n\n";
    }

    body += "Logistics to consider:\n";
    if (logistics.length > 0) {
      body += logistics
        .map((val) => `- ${OPTION_LABELS.logistics[val] || val}`)
        .join("\n");
    } else {
      body += "- (not selected)";
    }

    return encodeURIComponent(body);
  };

  const toggleWhatBringsYou = (value: string) => {
    setWhatBringsYou((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleWhatHopingFor = (value: string) => {
    setWhatHopingFor((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleLogistics = (value: string) => {
    setLogistics((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    // Announce summary updates to screen readers
    if (summaryRef.current) {
      const hasContent =
        whatBringsYou.length > 0 ||
        whatHopingFor.length > 0 ||
        reflection.trim().length > 0 ||
        logistics.length > 0;
      if (hasContent) {
        summaryRef.current.setAttribute("aria-live", "polite");
      }
    }
  }, [whatBringsYou, whatHopingFor, reflection, logistics]);

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      {/* What brings you here */}
      <ChecklistSection
        prompt="Which of these feel relevant right now? (Select any)"
        options={WHAT_BRINGS_YOU_OPTIONS}
        selectedValues={whatBringsYou}
        onToggle={toggleWhatBringsYou}
        fieldsetId="what-brings-you"
      />

      {/* What are you hoping for */}
      <ChecklistSection
        prompt="What would you like help with?"
        options={WHAT_HOPING_FOR_OPTIONS}
        selectedValues={whatHopingFor}
        onToggle={toggleWhatHopingFor}
        fieldsetId="what-hoping-for"
      />

      {/* Text reflection */}
      <TextPromptField
        prompt="If you want, write one or two sentences about what feels most important right now."
        helperText="General information only. Avoid sensitive details."
        value={reflection}
        onChange={setReflection}
        fieldId="reflection"
        rows={4}
      />

      {/* Logistics check */}
      <ChecklistSection
        prompt="Which details might be helpful to think about ahead of time?"
        options={LOGISTICS_OPTIONS}
        selectedValues={logistics}
        onToggle={toggleLogistics}
        fieldsetId="logistics"
      />

      {/* Summary */}
      <div ref={summaryRef} aria-live="polite" aria-atomic="true">
        <PrepSummary
          whatBringsYou={whatBringsYou}
          whatHopingFor={whatHopingFor}
          reflection={reflection}
          logistics={logistics}
        />
      </div>

      {/* Actions */}
      <PrepActions emailBody={formatEmailBody()} />
    </div>
  );
}

