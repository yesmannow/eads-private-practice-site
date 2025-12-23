import { Button } from "../ui/button";
import { Section } from "../ui/section";

const trustBullets = [
  "Licensed Social Worker (Indiana)",
  "Master’s-level clinical training",
  "Experience supporting caregivers and families",
];

export function AboutTeaserSection() {
  return (
    <Section
      id="about"
      title="Clinician background"
      description="Brian “Tucker” Eads, MA, LSW is a Licensed Social Worker providing psychotherapy and care navigation services. He has experience supporting individuals and families managing complex health and mental health concerns."
      background="muted"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm">
          {trustBullets.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-900 text-xs font-semibold text-white">
                ✓
              </span>
              <p className="leading-6">{item}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <Button href="/about" variant="secondary">
            About the clinician
          </Button>
        </div>
      </div>
    </Section>
  );
}
