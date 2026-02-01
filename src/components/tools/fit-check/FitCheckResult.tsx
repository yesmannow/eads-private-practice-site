import { Button } from "@/components/ui/button";

export function FitCheckResult() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Considering next steps
        </h2>
        <p className="text-lg leading-8 text-slate-700">
          Based on your responses, a brief consultation may be a helpful way to discuss fit,
          options, and next steps. This tool does not replace professional care.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button href="/contact" variant="primary" className="w-full sm:w-auto">
          Request a Consultation
        </Button>
        <Button href="/services" variant="secondary" className="w-full sm:w-auto">
          Learn About Services
        </Button>
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm text-slate-700">
          <strong className="font-semibold">Disclaimer:</strong> This tool does not provide
          diagnosis or treatment recommendations.
        </p>
      </div>
    </div>
  );
}

