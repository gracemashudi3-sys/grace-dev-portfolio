import { type FormEvent, useState } from "react";
import { contact } from "../../content/contact";
import { site } from "../../content/site";

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;
type FormStatus = "idle" | "submitting" | "success" | "error";

const MESSAGE_MIN_LENGTH = 10;

function isEmailAddress(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(values: {
  name: string;
  email: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length === 0) {
    errors.name = contact.nameError;
  }

  if (!isEmailAddress(email)) {
    errors.email = contact.emailError;
  }

  if (message.length < MESSAGE_MIN_LENGTH) {
    errors.message = contact.messageError;
  }

  return errors;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate({ name, email, message });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        "bot-field": botField,
      });
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-block">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold text-ink">Contact</h2>
        <p className="mt-4 max-w-xl text-muted">{contact.intro}</p>
        {status === "success" ? (
          <p className="mt-8 max-w-xl text-ink" role="status">
            {contact.success}
          </p>
        ) : (
          <form
            className="mt-8 max-w-xl"
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
            noValidate
          >
            <div
              className="absolute -left-[9999px] h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label>
                Do not fill this in
                <input
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botField}
                  onChange={(event) => setBotField(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="contact-name" className="text-sm text-ink">
                {contact.nameLabel}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                onChange={(event) => {
                  setName(event.target.value);
                  setErrors((current) => ({ ...current, name: undefined }));
                }}
                className="mt-1 w-full rounded-md border border-border bg-canvas px-3 py-2 text-ink"
              />
              {errors.name ? (
                <p id="contact-name-error" className="mt-1 text-sm text-accent">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div className="mt-4">
              <label htmlFor="contact-email" className="text-sm text-ink">
                {contact.emailLabel}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrors((current) => ({ ...current, email: undefined }));
                }}
                className="mt-1 w-full rounded-md border border-border bg-canvas px-3 py-2 text-ink"
              />
              {errors.email ? (
                <p
                  id="contact-email-error"
                  className="mt-1 text-sm text-accent"
                >
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="mt-4">
              <label htmlFor="contact-message" className="text-sm text-ink">
                {contact.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={message}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                onChange={(event) => {
                  setMessage(event.target.value);
                  setErrors((current) => ({ ...current, message: undefined }));
                }}
                className="mt-1 w-full rounded-md border border-border bg-canvas px-3 py-2 text-ink"
              />
              {errors.message ? (
                <p
                  id="contact-message-error"
                  className="mt-1 text-sm text-accent"
                >
                  {errors.message}
                </p>
              ) : null}
            </div>
            {status === "error" ? (
              <p className="mt-4 text-sm text-accent" role="alert">
                {contact.formError}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary mt-6 inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-canvas disabled:opacity-60"
            >
              {status === "submitting"
                ? contact.submittingLabel
                : contact.submitLabel}
            </button>
          </form>
        )}
        {site.email.includes("@") ? (
          <p className="mt-6 text-sm text-muted">
            {contact.mailtoLabel}{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
            >
              {site.email}
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
