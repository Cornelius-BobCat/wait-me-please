"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import UseTypingSimulation from "@/components/ui/typing";

export default function Hero() {
  const words = ["10product5", "1id99", "1time60", "2persona5", "3id10"];
  const currentText = UseTypingSimulation(words);

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Placeholder and timeout data for
        <br />
        <Highlight className="text-black dark:text-white">
          test youre app.
        </Highlight>
        <p className="mt-6 leading-7 sm:leading-8 font-extralight">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg font-medium">
            waitmeplease.vercel.app/api/
            <span className="text-purple-300">{currentText}</span>
            <span className="animate-ping">|</span>
          </code>
        </p>
      </motion.h1>
    </HeroHighlight>
  );
}
