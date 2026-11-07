import type { ContactContent } from "./types";

export const contact = {
  intro:
    "If you want to say hello, or ask about Bank, send a note. I read what arrives.",
  nameLabel: "Name",
  emailLabel: "Email",
  messageLabel: "Message",
  submitLabel: "Send message",
  submittingLabel: "Sending",
  success: "Thanks. Your message is on its way, and I will read it by email.",
  formError: "The message did not send. Check your connection and try again.",
  mailtoLabel: "Prefer email?",
  nameError: "Enter your name.",
  emailError: "Enter a valid email address.",
  messageError: "Write at least 10 characters.",
} satisfies ContactContent;
