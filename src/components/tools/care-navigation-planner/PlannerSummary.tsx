"use client";

type PlannerSummaryProps = {
  situationOverview: string;
  whoAbout: string;
  challenges: string[];
  priorities: string[];
  questions: Record<string, string>;
};

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

const QUESTION_PROMPTS: Record<string, string> = {
  decisions: "What are the most important decisions in the next 2–4 weeks?",
  roles: "Who needs to be involved, and what is each person's role?",
  information: "What information do I need to make the next decision?",
  options: "What are the options, and what are the pros/cons of each?",
  nextStep: "What would a reasonable next step look like this week?",
};

export function PlannerSummary({
  situationOverview,
  whoAbout,
  challenges,
  priorities,
  questions,
}: PlannerSummaryProps) {
  const hasContent =
    situationOverview.trim() ||
    whoAbout ||
    challenges.length > 0 ||
    priorities.length > 0 ||
    Object.values(questions).some((q) => q.trim());

  if (!hasContent) {
    return null;
  }

  return (
    <div className="space-y-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-xl font-semibold text-slate-900">Your planning summary</h2>

      <div className="space-y-6">
        {situationOverview.trim() && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              Situation overview
            </h3>
            <p className="text-slate-700 whitespace-pre-wrap">{situationOverview.trim()}</p>
          </div>
        )}

        {whoAbout && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              Who this is about
            </h3>
            <p className="text-slate-700">{WHO_ABOUT_LABELS[whoAbout] || whoAbout}</p>
          </div>
        )}

        {challenges.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              What feels most challenging
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {challenges.map((challenge) => (
                <li key={challenge}>{CHALLENGE_LABELS[challenge] || challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {priorities.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              Priorities
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {priorities.map((priority) => (
                <li key={priority}>{PRIORITY_LABELS[priority] || priority}</li>
              ))}
            </ul>
          </div>
        )}

        {Object.entries(questions).some(([_, answer]) => answer.trim()) && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-900">
              Questions to bring to appointments
            </h3>
            <div className="space-y-4">
              {Object.entries(questions).map(([key, answer]) => {
                if (!answer.trim()) return null;
                return (
                  <div key={key}>
                    <p className="mb-1 font-medium text-slate-900">
                      {QUESTION_PROMPTS[key] || key}
                    </p>
                    <p className="text-slate-700 whitespace-pre-wrap">{answer.trim()}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-700">
          This summary is for your use only. Nothing is saved or sent.
        </p>
      </div>
    </div>
  );
}

