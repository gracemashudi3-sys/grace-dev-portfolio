import type { Site } from "./types";

export const site = {
  name: "Grace Mashudi",
  title: "Early in the journey",
  role: "Learning Java, with a start in TypeScript",
  location: "Nairobi, Kenya",
  timezone: "Africa/Nairobi",
  status: {
    label: "Learning",
    openToWork: false,
  },
  email: "gracemashudi3@gmail.com",
  socials: [{ label: "GitHub", href: "https://github.com/gracemashudi3-sys" }],
  documentTitle: "Grace Mashudi — Learning Java and TypeScript",
  description:
    "Grace Mashudi is in Nairobi, at the start of her tech journey. She is learning Java, knows a little TypeScript, and has finished Bank, a Java desktop project.",
} satisfies Site;
