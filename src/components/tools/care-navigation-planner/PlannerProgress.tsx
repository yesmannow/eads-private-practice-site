type PlannerProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export function PlannerProgress({ currentStep, totalSteps }: PlannerProgressProps) {
  return (
    <div className="mb-8" aria-label="Progress">
      <p className="text-sm text-slate-600">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full bg-sky-900 transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

