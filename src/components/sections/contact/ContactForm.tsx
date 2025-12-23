"use client";

import { useState } from "react";
import { Button } from "../../ui/button";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      contactMethod: formData.get("contact-method") as string,
      serviceInterest: formData.get("service-interest") as string,
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
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-800">
            Name <span className="text-sky-900" aria-label="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={`w-full rounded-xl border px-3 py-2 text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              errors.name
                ? "border-red-300 focus-visible:outline-red-500"
                : "border-slate-200 focus-visible:outline-sky-900"
            }`}
            placeholder="Your name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-800">
            Email <span className="text-sky-900" aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`w-full rounded-xl border px-3 py-2 text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              errors.email
                ? "border-red-300 focus-visible:outline-red-500"
                : "border-slate-200 focus-visible:outline-sky-900"
            }`}
            placeholder="you@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-800">
            Phone <span className="text-sm font-normal text-slate-600">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="space-y-2">
          <fieldset>
            <legend className="text-sm font-medium text-slate-800">Preferred contact method</legend>
            <div className="mt-2 space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contact-method"
                  value="email"
                  defaultChecked
                  className="h-4 w-4 border-slate-300 text-sky-900 focus:ring-sky-900"
                />
                <span className="text-sm text-slate-700">Email</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contact-method"
                  value="phone"
                  className="h-4 w-4 border-slate-300 text-sky-900 focus:ring-sky-900"
                />
                <span className="text-sm text-slate-700">Phone</span>
              </label>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service-interest" className="text-sm font-medium text-slate-800">
          Service interest
        </label>
        <select
          id="service-interest"
          name="service-interest"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
        >
          <option value="individual-therapy">Individual Therapy</option>
          <option value="caregiver-support">Caregiver Support</option>
          <option value="care-navigation">Care Navigation</option>
          <option value="not-sure">Not sure</option>
        </select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="text-sm font-medium text-slate-800">
            Message <span className="text-sky-900" aria-label="required">*</span>
          </label>
        </div>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`w-full rounded-xl border px-3 py-2 text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            errors.message
              ? "border-red-300 focus-visible:outline-red-500"
              : "border-slate-200 focus-visible:outline-sky-900"
          }`}
          placeholder="General information only—avoid sensitive details."
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : "message-help"}
        />
        <p id="message-help" className="text-xs text-slate-600">
          General information only—avoid sensitive details.
        </p>
        {errors.message && (
          <p id="message-error" className="text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="availability" className="text-sm font-medium text-slate-800">
          Availability <span className="text-sm font-normal text-slate-600">(optional)</span>
        </label>
        <textarea
          id="availability"
          name="availability"
          rows={2}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
          placeholder="Preferred days/times or scheduling constraints"
        />
      </div>

      <Button type="submit">Send message</Button>
    </form>
  );
}

