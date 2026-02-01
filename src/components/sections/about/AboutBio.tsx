import Image from "next/image";
import { Section } from "../../ui/section";

export function AboutBio() {
  return (
    <Section
      eyebrow="Clinician"
      title="About the clinician"
      background="muted"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
          <Image
            src="/images/bio-photo/tucker-bio-photo.jpg"
            alt='Brian "Tucker" Eads, MA, LSW'
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="space-y-6 text-slate-800">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Brian &quot;Tucker&quot; Eads, MA, LSW</h3>
            <p className="mt-3 leading-7 text-slate-700">
              I am a Licensed Social Worker (Indiana) providing psychotherapy and care navigation services. My practice focuses on supporting adults managing stress, adjustment challenges, caregiver demands, and health-related changes.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              My approach is collaborative and skills-based, emphasizing practical tools and clear goals. Sessions are structured to help you build coping strategies, navigate complex systems, and move toward what matters most, even when facing ongoing stress or uncertainty.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Care navigation is a core service, providing structured support for coordinating next steps, resources, and communication when systems feel overwhelming. Whether you&apos;re seeking individual therapy, caregiver support, or care navigation, the work is tailored to your situation and goals.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

