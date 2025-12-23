"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { toolIcons } from "@/lib/icons";
import { staggerContainer, fadeUp, standardTransition, viewportOnce } from "@/lib/motion";

type Tool = {
  key: string;
  title: string;
  description: string;
  href: string;
};

type ToolsGridProps = {
  tools: Tool[];
};

export function ToolsGrid({ tools }: ToolsGridProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = toolIcons[tool.key];
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block h-full transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Card title={tool.title}>
                {Icon && (
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                )}
                <p className="text-muted-foreground">{tool.description}</p>
                <p className="mt-3 text-sm font-medium text-accent group-hover:underline">
                  Access tool →
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={viewportOnce}
    >
      {tools.map((tool) => {
        const Icon = toolIcons[tool.key];
        return (
          <motion.div key={tool.href} variants={fadeUp} transition={standardTransition}>
            <Link
              href={tool.href}
              className="group block h-full transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Card title={tool.title}>
                {Icon && (
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                )}
                <p className="text-muted-foreground">{tool.description}</p>
                <p className="mt-3 text-sm font-medium text-accent group-hover:underline">
                  Access tool →
                </p>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

