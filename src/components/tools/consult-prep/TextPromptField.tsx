"use client";

type TextPromptFieldProps = {
  prompt: string;
  helperText: string;
  value: string;
  onChange: (value: string) => void;
  fieldId: string;
  rows?: number;
};

export function TextPromptField({
  prompt,
  helperText,
  value,
  onChange,
  fieldId,
  rows = 4,
}: TextPromptFieldProps) {
  return (
    <div className="space-y-3">
      <label htmlFor={fieldId} className="text-lg font-medium text-slate-900">
        {prompt}
      </label>
      <textarea
        id={fieldId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
        aria-describedby={`${fieldId}-help`}
      />
      <p id={`${fieldId}-help`} className="text-sm text-slate-600">
        {helperText}
      </p>
    </div>
  );
}

