import type { HeroContent } from "./types";

export const hero = {
  name: "Grace Mashudi",
  headline:
    "I'm at the start of my tech journey, learning Java and a little TypeScript.",
  supporting:
    "Bank, a Java desktop project, went well, and that is the proof I have so far. I am optimistic about learning more, and I would rather name what I know than borrow a stack I have not used.",
  primaryCta: { label: "Contact", href: "#contact" },
  secondaryCta: { label: "See the work", href: "#work" },
  chips: ["Java", "TypeScript"],
} satisfies HeroContent;
