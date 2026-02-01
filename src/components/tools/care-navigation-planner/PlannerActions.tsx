"use client";

import { Button } from "@/components/ui/button";

type PlannerActionsProps = {
  emailBody: string;
};

export function PlannerActions({ emailBody }: PlannerActionsProps) {
  const handleEmail = () => {
    const subject = encodeURIComponent("Care Navigation Planning Summary");
    const mailtoLink = `mailto:?subject=${subject}&body=${emailBody}`;
    window.location.href = mailtoLink;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button onClick={handleEmail} variant="secondary" className="w-full sm:w-auto">
          Email this to yourself
        </Button>
        <Button onClick={handlePrint} variant="secondary" className="w-full sm:w-auto">
          Print summary
        </Button>
        <Button href="/start-here" variant="primary" className="w-full sm:w-auto">
          Request a Consultation
        </Button>
        <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
          Contact
        </Button>
      </div>
    </div>
  );
}

