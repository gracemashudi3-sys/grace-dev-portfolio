import type { AboutContent } from "./types";

export const about = {
  paragraphs: [
    "I learn by finishing something small enough to understand. When a concept is fuzzy, I write a little program until the error messages start to make sense.",
    "Bank, the Java project I finished, matters because it ended. I am still early, and I am optimistic about the next thing I get to learn.",
  ],
  facts: [
    { label: "Based in", value: "Nairobi, Kenya" },
    { label: "Focus", value: "Learning Java" },
    { label: "Stack", value: "Java · TypeScript (basics)" },
    { label: "Now", value: "Early in the journey" },
    { label: "Status", value: "Learning" },
  ],
} satisfies AboutContent;
