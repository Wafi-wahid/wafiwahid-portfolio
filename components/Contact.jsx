"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.fullName}`.trim()
    );
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.projectDetails}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)]";
  
  const selectClass =
    "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)] appearance-none cursor-pointer";

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
              className={`${fieldClass} sm:col-span-2`}
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              className={`${fieldClass} sm:col-span-2`}
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className={`${fieldClass} sm:col-span-2`}
              name="company"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
            />
            <div className="relative sm:col-span-2">
              <select
                className={selectClass}
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select Project Type *</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Full-Stack Web App">Full-Stack Web App</option>
                <option value="Mobile App">Mobile App</option>
                <option value="MVP Development">MVP Development</option>
                <option value="Bug Fix">Bug Fix</option>
                <option value="Consultation">Consultation</option>
                <option value="Other">Other</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-muted)] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="relative">
              <select
                className={selectClass}
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Budget (optional)</option>
                <option value="Under $500">Under $500</option>
                <option value="$500–$1,000">$500–$1,000</option>
                <option value="$1,000–$3,000">$1,000–$3,000</option>
                <option value="$3,000+">$3,000+</option>
                <option value="Let's discuss">Let's discuss</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-muted)] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="relative">
              <select
                className={selectClass}
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">Timeline (optional)</option>
                <option value="ASAP">ASAP</option>
                <option value="Within a week">Within a week</option>
                <option value="Within a month">Within a month</option>
                <option value="Flexible">Flexible</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-muted)] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <textarea
              className={`${fieldClass} min-h-36 sm:col-span-2`}
              name="projectDetails"
              placeholder="Project Details *"
              value={formData.projectDetails}
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
