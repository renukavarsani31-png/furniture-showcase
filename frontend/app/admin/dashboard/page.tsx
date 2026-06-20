"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  { name: "Doors", slug: "doors" },
  { name: "Bedrooms", slug: "bedrooms" },
  { name: "Kitchens", slug: "kitchens" },
  { name: "Halls & Living Rooms", slug: "halls" },
  { name: "TV Units", slug: "tv-units" },
  { name: "Wardrobes", slug: "wardrobes" },
  { name: "Showroom", slug: "showroom" },
  { name: "Custom Furniture", slug: "custom-furniture" },
];

type Project = { id: number; title: string; category_name: string; images: { r2_url: string }[] };

export default function AdminDashboard() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"projects" | "add">("projects");

  // Add project form
  const [form, setForm] = useState({ title: "", description: "", category_slug: "doors" });
  const [files, setFiles] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) { router.push("/admin/login"); return; }
    setToken(t);
    fetch(`${apiUrl}/projects?limit=50`, { headers: { Authorization: `Bearer ${t}` } })
      .then(r => r.json())
      .then(d => { setProjects(Array.isArray(d.projects) ? d.projects : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [apiUrl, router]);

  async function handleAddProject(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    try {
      // 1. Find category id
      const catRes = await fetch(`${apiUrl}/categories`);
      const cats = await catRes.json();
      const cat = cats.find((c: { slug: string; id: number }) => c.slug === form.category_slug);

      // 2. Create project
      const projRes = await fetch(`${apiUrl}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title: form.title, description: form.description, category_id: cat?.id }),
      });
      const proj = await projRes.json();

      // 3. Upload images if any
      if (files.length > 0 && proj.project?.id) {
        const fd = new FormData();
        files.forEach(f => fd.append("images", f));
        await fetch(`${apiUrl}/images/upload/${proj.project.id}`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: fd,
        });
      }

      setMsg("Project added successfully!");
      setForm({ title: "", description: "", category_slug: "doors" });
      setFiles([]);
      setTab("projects");

      // Refresh
      const r = await fetch(`${apiUrl}/projects?limit=50`);
      const d = await r.json();
      setProjects(Array.isArray(d.projects) ? d.projects : []);
    } catch {
      setMsg("Error saving project. Try again.");
    }
    setSaving(false);
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this project?")) return;
    await fetch(`${apiUrl}/projects/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
    setProjects(projects.filter(p => p.id !== id));
  }

  function handleLogout() {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Top bar */}
      <div style={{ background: "var(--foreground)" }} className="px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold">Hira Sales — Admin</span>
        <button onClick={handleLogout} className="text-sm px-4 py-1.5 rounded" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
          Sign out
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setTab("projects")}
            className="px-5 py-2 rounded font-medium text-sm"
            style={{ background: tab === "projects" ? "var(--accent)" : "#fff", color: tab === "projects" ? "#fff" : "var(--muted)", border: "1px solid var(--border)" }}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setTab("add")}
            className="px-5 py-2 rounded font-medium text-sm"
            style={{ background: tab === "add" ? "var(--accent)" : "#fff", color: tab === "add" ? "#fff" : "var(--muted)", border: "1px solid var(--border)" }}
          >
            + Add New Project
          </button>
        </div>

        {/* Projects list */}
        {tab === "projects" && (
          <div>
            {loading && <p style={{ color: "var(--muted)" }}>Loading...</p>}
            {!loading && projects.length === 0 && (
              <div className="text-center py-16" style={{ color: "var(--muted)" }}>
                <p className="text-4xl mb-3">📷</p>
                <p>No projects yet. Add your first one!</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map(p => (
                <div key={p.id} className="rounded-lg overflow-hidden" style={{ background: "#fff", border: "1px solid var(--border)" }}>
                  {p.images?.[0] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.images[0].r2_url} alt={p.title} className="w-full h-40 object-cover" />
                  ) : (
                    <div className="w-full h-40 flex items-center justify-center text-3xl" style={{ background: "var(--accent-light)" }}>🪑</div>
                  )}
                  <div className="p-4 flex items-start justify-between">
                    <div>
                      <div className="font-medium text-sm" style={{ color: "var(--foreground)" }}>{p.title}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{p.category_name}</div>
                    </div>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-xs px-2 py-1 rounded"
                      style={{ background: "#fee2e2", color: "#dc2626" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add project form */}
        {tab === "add" && (
          <form onSubmit={handleAddProject} className="max-w-lg rounded-xl p-8 space-y-5" style={{ background: "#fff", border: "1px solid var(--border)" }}>
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>Add New Project</h2>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Project title *</label>
              <input
                required
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. Modern Kitchen — Bodakdev"
                className="w-full px-4 py-2.5 rounded text-sm outline-none"
                style={{ border: "1px solid var(--border)", background: "var(--background)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Category *</label>
              <select
                value={form.category_slug}
                onChange={e => setForm({ ...form, category_slug: e.target.value })}
                className="w-full px-4 py-2.5 rounded text-sm outline-none"
                style={{ border: "1px solid var(--border)", background: "var(--background)" }}
              >
                {CATEGORIES.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Description</label>
              <textarea
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                placeholder="Brief description of the project..."
                rows={3}
                className="w-full px-4 py-2.5 rounded text-sm outline-none resize-none"
                style={{ border: "1px solid var(--border)", background: "var(--background)" }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "var(--foreground)" }}>Photos (up to 10)</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={e => setFiles(Array.from(e.target.files || []))}
                className="w-full text-sm"
              />
              {files.length > 0 && <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{files.length} file(s) selected</p>}
            </div>

            {msg && <p className="text-sm" style={{ color: msg.includes("Error") ? "#dc2626" : "var(--done, green)" }}>{msg}</p>}

            <button
              type="submit"
              disabled={saving}
              className="w-full py-3 rounded font-semibold text-white"
              style={{ background: "var(--accent)", opacity: saving ? 0.7 : 1 }}
            >
              {saving ? "Saving..." : "Add Project"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
