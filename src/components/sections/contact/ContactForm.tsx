"use client";

import { useState } from "react";
import { SiteButton } from "../../ui/shadcn/SiteButton";
import { FormInput, FormTextarea } from "../../ui/shadcn/FormField";
import { Input } from "../../ui/shadcn/input";
import { Textarea } from "../../ui/shadcn/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/shadcn/select";
import { Label } from "../../ui/shadcn/label";
import { RadioGroup, RadioGroupItem } from "../../ui/shadcn/radio-group";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serviceInterest, setServiceInterest] = useState("individual-therapy");
  const [contactMethod, setContactMethod] = useState("email");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      contactMethod: contactMethod,
      serviceInterest: serviceInterest,
      message: formData.get("message") as string,
      availability: formData.get("availability") as string,
    };

    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Show success state (no backend)
    setIsSubmitted(true);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
            <svg
              className="h-6 w-6 text-sky-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Message ready to send</h3>
          <p className="text-slate-700">
            Please email us directly for now. You can reach us at{" "}
            <a href="mailto:hello@steadypathcounseling.com" className="text-sky-900 underline hover:text-sky-800">
              hello@steadypathcounseling.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput
          label="Name"
          required
          name="name"
          type="text"
          placeholder="Your name"
          error={errors.name}
        />
        <FormInput
          label="Email"
          required
          name="email"
          type="email"
          placeholder="you@example.com"
          error={errors.email}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-sm font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="space-y-2">
          <Label>Preferred contact method</Label>
          <RadioGroup value={contactMethod} onValueChange={setContactMethod} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="contact-email" />
              <Label htmlFor="contact-email" className="font-normal cursor-pointer">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="contact-phone" />
              <Label htmlFor="contact-phone" className="font-normal cursor-pointer">Phone</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service-interest">Service interest</Label>
        <Select value={serviceInterest} onValueChange={setServiceInterest}>
          <SelectTrigger id="service-interest">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual-therapy">Individual Therapy</SelectItem>
            <SelectItem value="caregiver-support">Caregiver Support</SelectItem>
            <SelectItem value="care-navigation">Care Navigation</SelectItem>
            <SelectItem value="not-sure">Not sure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <FormTextarea
        label="Message"
        required
        name="message"
        rows={4}
        placeholder="General information only—avoid sensitive details."
        error={errors.message}
        helperText="General information only—avoid sensitive details."
      />

      <div className="space-y-2">
        <Label htmlFor="availability">
          Availability <span className="text-sm font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="availability"
          name="availability"
          rows={2}
          placeholder="Preferred days/times or scheduling constraints"
        />
      </div>

      <div className="space-y-2">
        <SiteButton type="submit">Send message</SiteButton>
        <p className="text-sm text-slate-600">
          If you&apos;re not sure what to write, that&apos;s okay. A brief note about what you&apos;re looking for is enough.
        </p>
      </div>
    </form>
  );
}

