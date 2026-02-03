import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function BlazingStarSection() {
  return (
    <section className="py-16 md:py-24 bg-[#a8be57]/8 border-t border-[#a8be57]/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#1f2a19] text-center">
            What is Blazing Star?
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
          {/* Left Column: Text content */}
          <ScrollReveal>
            <div className="prose prose-lg text-gray-800 space-y-6">
              <p>
                Blazing star, or <em>Liatris</em>, is a genus of durable, prairie-loving perennials native to North America.
                Prairie blazing star (<em>Liatris pycnostachya</em>) is an iconic prairie plant, blooming from midsummer onward.
              </p>
              <p>
                Rough blazing star (<em>Liatris aspera</em>) is particularly hardy, tolerating drought and sandy or rocky soil with resilience.
                These flowers host numerous pollinators including bees, butterflies, moths, and hummingbirds.
              </p>
              <p>
                Much like the therapy process, these plants represent the ability to bloom and provide value even in challenging or &quot;rocky&quot; environments.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Stacked Images */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="relative h-64 overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-xl shadow-[#a8be57]/20">
                <Image
                  src="/images/home page/Liatris_aspera2.jpg"
                  alt="Rough blazing star in bloom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-xl shadow-[#a8be57]/20">
                <Image
                  src="/images/about/IMG_8960-2 (1).jpg"
                  alt="Prairie blazing star"
                  fill
                  className="object-cover"
                />
              </div>
              <Link
                href="https://en.wikipedia.org/wiki/Liatris_aspera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 italic hover:text-[#4a5c2c] transition-colors text-right block"
              >
                Rough blazing star (<em>Liatris aspera</em>)
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}