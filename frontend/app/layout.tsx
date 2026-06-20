import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "./components/MobileNav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hira Sales — Quality Furniture",
  description: "Custom furniture for homes and offices — doors, bedrooms, kitchens, wardrobes and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <header className="relative" style={{ borderBottom: "1px solid var(--border)", background: "#fff" }}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              Hira Sales
            </Link>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" style={{ color: "var(--muted)" }} className="hover:opacity-70">Home</Link>
              <Link href="/gallery" style={{ color: "var(--muted)" }} className="hover:opacity-70">Gallery</Link>
              <Link href="/about" style={{ color: "var(--muted)" }} className="hover:opacity-70">About</Link>
              <Link href="/contact" style={{ color: "var(--muted)" }} className="hover:opacity-70">Contact</Link>
              <Link href="/contact" className="px-4 py-2 rounded text-sm font-medium text-white" style={{ background: "var(--accent)" }}>
                Get Quote
              </Link>
            </nav>
            {/* Mobile nav */}
            <MobileNav />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer style={{ background: "var(--foreground)", color: "#c8b89a" }} className="mt-auto">
          <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="text-white text-lg font-bold mb-2">Hira Sales</div>
              <p className="text-sm leading-relaxed">Custom furniture crafted for your home and office. Quality that lasts generations.</p>
            </div>
            <div>
              <div className="text-white text-sm font-semibold mb-3">Categories</div>
              <ul className="space-y-1 text-sm">
                {["Doors", "Bedrooms", "Kitchens", "Wardrobes", "TV Units", "Showroom"].map(c => (
                  <li key={c}><Link href="/gallery" className="hover:text-white">{c}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white text-sm font-semibold mb-3">Contact</div>
              <ul className="space-y-1 text-sm">
                <li>Pravin Varsani: +91 98795 69177</li>
                <li>Dev Varsani: +91 87583 08315</li>
                <li>Junavas, Madhapar, Bhuj, Gujarat 370020</li>
                <li><Link href="/contact" className="hover:text-white">Send an enquiry →</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} className="text-center text-xs py-4 opacity-50">
            © 2024 Hira Sales. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
