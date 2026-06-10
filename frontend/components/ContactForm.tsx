"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Please fill in your name, email and a short message.");
      return;
    }

    setStatus("loading");
    setMessage("Sending…");

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || `Request failed (${res.status})`);
      }

      setStatus("success");
      setMessage("Thanks — we'll be in touch within one business day.");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please email us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
        </div>
        <div className="form-field full">
          <label htmlFor="company">Company (optional)</label>
          <input id="company" name="company" type="text" placeholder="Company / brand" autoComplete="organization" />
        </div>
        <div className="form-field full">
          <label htmlFor="message">What are you building?</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="A live streaming platform for 10K viewers, an HRMS pilot, an EdTech test engine…"
            required
          />
        </div>
      </div>

      <div className="cta-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"} <span className="arrow">→</span>
        </button>
        <a className="btn btn-ghost" href="mailto:devansh@nexttoppers.com?subject=Project%20with%20RDP">
          Email instead
        </a>
      </div>

      <div className={`form-status ${status === "error" ? "error" : status === "success" ? "success" : ""}`}>
        {message}
      </div>
    </form>
  );
}
