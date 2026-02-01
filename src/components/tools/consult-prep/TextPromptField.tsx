"use client";

import { Label } from "@/components/ui/shadcn/label";
import { Textarea } from "@/components/ui/shadcn/textarea";

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
      <Label htmlFor={fieldId} className="text-lg font-medium">
        {prompt}
      </Label>
      <Textarea
        id={fieldId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="text-base"
        aria-describedby={`${fieldId}-help`}
      />
      <p id={`${fieldId}-help`} className="text-sm text-muted-foreground">
        {helperText}
      </p>
    </div>
  );
}

