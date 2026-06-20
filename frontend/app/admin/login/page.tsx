"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("admin_token", data.token);
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch {
      setError("Could not connect to server");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--background)" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Hira Sales Admin</h1>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>Sign in to manage your gallery</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-xl p-8 space-y-4" style={{ background: "#fff", border: "1px solid var(--border)" }}>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded text-sm outline-none"
              style={{ border: "1px solid var(--border)", background: "var(--background)" }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2.5 rounded text-sm outline-none"
              style={{ border: "1px solid var(--border)", background: "var(--background)" }}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded font-semibold text-white"
            style={{ background: "var(--accent)", opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
