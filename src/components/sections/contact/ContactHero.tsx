import Image from "next/image";
import { SiteButton } from "@/components/ui";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-b from-background to-gray-50/50 border-b border-border relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Bio Photo */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
            <Image
              src="/images/bio-photo/tucker-bio-photo.jpg"
              alt="Tucker Eads, LCSW - Blazing Star Therapy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 224px"
              priority
            />
          </div>
          
          {/* Name and Credentials */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Tucker Eads, LCSW</h1>
            <p className="text-xl text-muted-foreground">Licensed Clinical Social Worker</p>
          </div>
          
          {/* Description */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Contact</h2>
            <p className="text-lg leading-8 text-foreground/80">
              Request a consultation or ask a general question.
            </p>
            <p className="text-sm text-muted-foreground">
              Please avoid including sensitive clinical details.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SiteButton href="/start-here" variant="primary">
              Request a Consultation
            </SiteButton>
            <SiteButton href="#contact-form" variant="secondary">
              Send a Message
            </SiteButton>
          </div>
        </div>
      </div>
    </section>
  );
}

