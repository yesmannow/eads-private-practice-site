import React, { ReactNode, useId } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Checkbox } from "./checkbox";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: ReactNode;
  className?: string;
};

export function FormField({
  label,
  required = false,
  error,
  helperText,
  children,
  className,
}: FormFieldProps) {
  const fieldId = useId();
  const errorId = error ? `${fieldId}-error` : undefined;
  const helperId = helperText ? `${fieldId}-helper` : undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={fieldId} className={required ? "after:content-['*'] after:ml-0.5 after:text-primary" : ""}>
        {label}
        {required && <span className="sr-only">required</span>}
      </Label>
      {React.isValidElement(children) &&
        React.cloneElement(children as React.ReactElement<{ id?: string; "aria-invalid"?: string; "aria-describedby"?: string; className?: string }>, {
          id: fieldId,
          "aria-invalid": error ? "true" : "false",
          "aria-describedby": cn(errorId, helperId),
          ...(error && { className: cn((children as React.ReactElement<{ className?: string }>).props?.className, "border-destructive focus-visible:ring-destructive") }),
        })}
      {helperText && !error && (
        <p id={helperId} className="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// Convenience components for common form fields
export function FormInput({
  label,
  required,
  error,
  helperText,
  className,
  ...props
}: Omit<FormFieldProps, "children"> & React.ComponentProps<typeof Input>) {
  return (
    <FormField label={label} required={required} error={error} helperText={helperText} className={className}>
      <Input {...props} />
    </FormField>
  );
}

export function FormTextarea({
  label,
  required,
  error,
  helperText,
  className,
  ...props
}: Omit<FormFieldProps, "children"> & React.ComponentProps<typeof Textarea>) {
  return (
    <FormField label={label} required={required} error={error} helperText={helperText} className={className}>
      <Textarea {...props} />
    </FormField>
  );
}

export function FormSelect({
  label,
  required,
  error,
  helperText,
  placeholder,
  options,
  value,
  onValueChange,
  defaultValue,
  className,
}: Omit<FormFieldProps, "children"> & {
  placeholder?: string;
  options: { value: string; label: string }[];
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}) {
  return (
    <FormField label={label} required={required} error={error} helperText={helperText} className={className}>
      <Select value={value} onValueChange={onValueChange} defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
}

export function FormCheckbox({
  label,
  required,
  error,
  helperText,
  className,
  ...props
}: Omit<FormFieldProps, "children"> & React.ComponentProps<typeof Checkbox>) {
  const fieldId = useId();
  const errorId = error ? `${fieldId}-error` : undefined;
  const helperId = helperText ? `${fieldId}-helper` : undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center space-x-2">
        <Checkbox id={fieldId} {...props} />
        <Label
          htmlFor={fieldId}
          className={cn(
            "font-normal cursor-pointer",
            required && "after:content-['*'] after:ml-0.5 after:text-primary"
          )}
        >
          {label}
          {required && <span className="sr-only">required</span>}
        </Label>
      </div>
      {helperText && !error && (
        <p id={helperId} className="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

