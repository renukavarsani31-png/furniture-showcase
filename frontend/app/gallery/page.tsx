"use client";

import { useState, useEffect } from "react";

const categories = [
  { name: "All", slug: "" },
  { name: "Doors", slug: "doors" },
  { name: "Bedrooms", slug: "bedrooms" },
  { name: "Kitchens", slug: "kitchens" },
  { name: "Halls & Living Rooms", slug: "halls" },
  { name: "TV Units", slug: "tv-units" },
  { name: "Wardrobes", slug: "wardrobes" },
  { name: "Showroom", slug: "showroom" },
  { name: "Custom Furniture", slug: "custom-furniture" },
];

type Project = {
  id: number;
  title: string;
  description: string;
  category_name: string;
  category_slug: string;
  images: { r2_url: string; original_name: string }[];
};

export default function GalleryPage() {
  const [active, setActive] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
    fetch(`${apiUrl}/projects?limit=50`)
      .then(r => r.json())
      .then(data => {
        setProjects(Array.isArray(data.projects) ? data.projects : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = active
    ? projects.filter(p => p.category_slug === active)
    : projects;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--foreground)" }}>Our Work</h1>
        <p style={{ color: "var(--muted)" }}>Browse our furniture projects by category</p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat.slug}
            onClick={() => setActive(cat.slug)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              background: active === cat.slug ? "var(--accent)" : "#fff",
              color: active === cat.slug ? "#fff" : "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {loading && (
        <div className="text-center py-20" style={{ color: "var(--muted)" }}>Loading projects...</div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">📷</div>
          <p className="text-lg font-medium mb-2" style={{ color: "var(--foreground)" }}>No photos yet</p>
          <p style={{ color: "var(--muted)" }}>Photos will appear here once the admin uploads them.</p>
        </div>
      )}

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <div key={project.id} className="rounded-lg overflow-hidden" style={{ background: "#fff", border: "1px solid var(--border)" }}>
            {project.images?.[0] ? (
              <div
                className="h-52 overflow-hidden cursor-pointer"
                onClick={() => setLightbox(project.images[0].r2_url)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images[0].r2_url}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="h-52 flex items-center justify-center text-4xl" style={{ background: "var(--accent-light)" }}>🪑</div>
            )}
            <div className="p-4">
              <span className="text-xs font-medium px-2 py-1 rounded uppercase tracking-wide" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                {project.category_name}
              </span>
              <h3 className="font-semibold mt-2 mb-1" style={{ color: "var(--foreground)" }}>{project.title}</h3>
              {project.description && (
                <p className="text-sm" style={{ color: "var(--muted)" }}>{project.description}</p>
              )}
              {project.images?.length > 1 && (
                <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>{project.images.length} photos</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setLightbox(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="Full view" className="max-w-full max-h-full rounded" />
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setLightbox(null)}>×</button>
        </div>
      )}
    </div>
  );
}
