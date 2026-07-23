"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.firstName} ${formData.lastName}`.trim()
    );
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)]";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card-surface p-6 md:p-10">
          <p className="section-kicker">Contact</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <input
              className={fieldClass}
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              className={fieldClass}
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              className={fieldClass}
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className={fieldClass}
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              className={`${fieldClass} min-h-36 sm:col-span-2`}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-primary sm:col-span-2 sm:w-fit">
              Send message
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center gap-6">
          {[
            { label: "Phone", value: site.phone },
            { label: "Email", value: site.email },
            { label: "Address", value: site.address },
          ].map((item) => (
            <div key={item.label} className="card-surface flex items-start gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8750f7] to-[#2a1454] text-sm font-bold text-white">
                {item.label.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-brand)]">{item.label}</p>
                <p className="mt-1 text-[var(--color-ink)]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
