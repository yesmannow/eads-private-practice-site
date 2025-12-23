"use client";

type ChecklistOption = {
  value: string;
  label: string;
};

type ChecklistSectionProps = {
  prompt: string;
  options: ChecklistOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
  fieldsetId: string;
};

export function ChecklistSection({
  prompt,
  options,
  selectedValues,
  onToggle,
  fieldsetId,
}: ChecklistSectionProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="mb-4 text-lg font-medium text-slate-900">{prompt}</legend>
      <div className="space-y-3">
        {options.map((option) => {
          const isChecked = selectedValues.includes(option.value);
          return (
            <label
              key={option.value}
              className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggle(option.value)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-900 focus:ring-2 focus:ring-sky-900 focus:ring-offset-2"
                aria-describedby={`${fieldsetId}-help`}
              />
              <span className="flex-1 text-base text-slate-800">{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

