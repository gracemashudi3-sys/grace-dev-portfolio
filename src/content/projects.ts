import type { Project } from "./types";

export const projects = [
  {
    slug: "bank",
    name: "Bank",
    eyebrow: "Java",
    summary:
      "A desktop bank system for customers, staff, login, and transactions.",
    description:
      "Bank is a Swing desktop app I finished, with screens for customers, employees, login, account status, and transaction history. It talks to a local MySQL database. The source is on GitHub. It is not a hosted product.",
    stack: ["Java", "MySQL"],
    featured: true,
    sourceUrl: "https://github.com/gracemashudi3-sys/Bank",
    imageSrc: "/bank-login.png",
  },
] satisfies Project[];
