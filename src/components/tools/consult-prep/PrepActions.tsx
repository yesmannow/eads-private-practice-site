"use client";

import { Button } from "@/components/ui/button";

type PrepActionsProps = {
  emailBody: string;
};

export function PrepActions({ emailBody }: PrepActionsProps) {
  const handleEmail = () => {
    const subject = encodeURIComponent("Consultation Preparation Checklist");
    const mailtoLink = `mailto:?subject=${subject}&body=${emailBody}`;
    window.location.href = mailtoLink;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button onClick={handleEmail} variant="primary" className="w-full sm:w-auto">
          Email this to yourself
        </Button>
        <Button onClick={handlePrint} variant="secondary" className="w-full sm:w-auto">
          Print checklist
        </Button>
        <Button href="/contact" variant="primary" className="w-full sm:w-auto">
          Contact Steady Path Counseling
        </Button>
      </div>

      <p className="text-sm text-slate-600">
        This checklist does not replace professional care and is not reviewed by the clinician unless
        you choose to share it.
      </p>
    </div>
  );
}

