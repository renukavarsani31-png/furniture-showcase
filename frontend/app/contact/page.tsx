"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
      const res = await fetch(`${apiUrl}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>Get in touch</p>
          <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Request a free quote</h1>
          <p className="mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
            Tell us what you need — a new kitchen, bedroom set, or custom wardrobe. We'll come back to you within 24 hours with a quote.
          </p>

          <div className="space-y-5">
            {[
              { icon: "📞", label: "Pravin Varsani", val: "+91 98795 69177" },
              { icon: "📞", label: "Dev Varsani", val: "+91 87583 08315" },
              { icon: "📧", label: "Email", val: "renukavarsani31@gmail.com" },
              { icon: "⏱️", label: "Response time", val: "Within 24 hours" },
              { icon: "📍", label: "Service area", val: "Ahmedabad & surrounding areas" },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--accent)" }}>{item.label}</div>
                  <div className="text-sm" style={{ color: "var(--foreground)" }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-xl p-8" style={{ background: "#fff", border: "1px solid var(--border)" }}>
          {status === "sent" ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>Message sent!</h3>
              <p style={{ color: "var(--muted)" }}>We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 rounded text-white text-sm"
                style={{ background: "var(--accent)" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Your name *</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-2.5 rounded text-sm outline-none"
                  style={{ border: "1px solid var(--border)", background: "var(--background)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Email address *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded text-sm outline-none"
                  style={{ border: "1px solid var(--border)", background: "var(--background)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Phone number</label>
                <input
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded text-sm outline-none"
                  style={{ border: "1px solid var(--border)", background: "var(--background)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>What do you need? *</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="e.g. I need a modular kitchen for a 10x12 ft space, with 4 drawers and overhead cabinets..."
                  rows={4}
                  className="w-full px-4 py-2.5 rounded text-sm outline-none resize-none"
                  style={{ border: "1px solid var(--border)", background: "var(--background)" }}
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded font-semibold text-white"
                style={{ background: "var(--accent)", opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? "Sending..." : "Send enquiry →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
