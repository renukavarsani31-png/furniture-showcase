"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="p-2 rounded"
        style={{ color: "var(--foreground)" }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-full z-50 shadow-lg"
          style={{ background: "#fff", borderBottom: "1px solid var(--border)" }}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-3 rounded text-sm font-medium"
                style={{
                  color: pathname === l.href ? "var(--accent)" : "var(--foreground)",
                  background: pathname === l.href ? "var(--accent-light)" : "transparent",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 rounded text-sm font-semibold text-white text-center"
              style={{ background: "var(--accent)" }}
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
