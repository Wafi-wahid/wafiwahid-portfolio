"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="fade-in mx-auto max-w-5xl px-5 py-20 md:px-8">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Contact</h2>
      <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
        Have a project or question? Send a message.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex max-w-lg flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-left text-sm text-[var(--color-muted)]">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-3 text-base text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-left text-sm text-[var(--color-muted)]">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-3 text-base text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-left text-sm text-[var(--color-muted)]">
          Message
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="resize-y rounded-md border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-3 text-base text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
          />
        </label>
        <button
          type="submit"
          className="mt-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-hover)]"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
