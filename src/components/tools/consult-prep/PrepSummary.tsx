"use client";

type PrepSummaryProps = {
  whatBringsYou: string[];
  whatHopingFor: string[];
  reflection: string;
  logistics: string[];
};

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

export function PrepSummary({
  whatBringsYou,
  whatHopingFor,
  reflection,
  logistics,
}: PrepSummaryProps) {
  const hasContent =
    whatBringsYou.length > 0 ||
    whatHopingFor.length > 0 ||
    reflection.trim().length > 0 ||
    logistics.length > 0;

  if (!hasContent) {
    return null;
  }

  return (
    <div className="space-y-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Preparation Summary</h2>

        {whatBringsYou.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              What brings you here?
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {whatBringsYou.map((val) => (
                <li key={val}>{OPTION_LABELS.whatBringsYou[val] || val}</li>
              ))}
            </ul>
          </div>
        )}

        {whatHopingFor.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              What are you hoping for?
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {whatHopingFor.map((val) => (
                <li key={val}>{OPTION_LABELS.whatHopingFor[val] || val}</li>
              ))}
            </ul>
          </div>
        )}

        {reflection.trim() && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              Reflection
            </h3>
            <p className="text-slate-700 whitespace-pre-wrap">{reflection.trim()}</p>
          </div>
        )}

        {logistics.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              Logistics to consider
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {logistics.map((val) => (
                <li key={val}>{OPTION_LABELS.logistics[val] || val}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-700">
          This summary is for your use only. Nothing here is saved or sent.
        </p>
      </div>
    </div>
  );
}

