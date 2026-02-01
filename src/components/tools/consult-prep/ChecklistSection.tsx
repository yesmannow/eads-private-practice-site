"use client";

import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { cn } from "@/lib/utils";

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
      <legend className="mb-4 text-lg font-medium">{prompt}</legend>
      <div className="space-y-3">
        {options.map((option) => {
          const isChecked = selectedValues.includes(option.value);
          const checkboxId = `${fieldsetId}-${option.value}`;
          return (
            <label
              key={option.value}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-card p-4 transition hover:border-primary/50 hover:bg-accent"
              )}
            >
              <Checkbox
                id={checkboxId}
                checked={isChecked}
                onCheckedChange={() => onToggle(option.value)}
                className="mt-1"
                aria-describedby={`${fieldsetId}-help`}
              />
              <span className="flex-1 text-base">{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

