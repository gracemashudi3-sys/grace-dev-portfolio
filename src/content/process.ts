import type { ProcessStep } from "./types";

export const processSteps = [
  {
    title: "Understand the problem",
    body: "I start by saying the task in my own words. If I cannot explain what the program should do, I am not ready to type.",
  },
  {
    title: "Design before building",
    body: "I sketch the steps on paper or in comments before I write much code. A short plan keeps me from guessing my way into a mess.",
  },
  {
    title: "Build incrementally",
    body: "I make one small piece work, then the next. I would rather have a tiny program that runs than a large one I do not understand.",
  },
  {
    title: "Test and debug",
    body: "I run it, read the error, and change one thing. Finishing the one project I have included finding what broke.",
  },
  {
    title: "Refine and document",
    body: "When it works, I reread it and leave a note for my future self. Clear names help me learn the same idea again later.",
  },
] satisfies ProcessStep[];
