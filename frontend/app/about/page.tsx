import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1a0f0a 0%, #3d1f0d 100%)" }} className="text-white py-20 px-4 text-center">
        <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "#c8a87a" }}>Our story</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Hira Sales</h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#c8b89a" }}>
          Custom furniture crafted with care for homes and offices across the region.
        </p>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>Meet the team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden" style={{ background: "#fff", border: "1px solid var(--border)" }}>
              <div className="relative h-72">
                <Image src="/team/owner-1.jpg" alt="Pravin Varsani" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>Pravin Varsani</h3>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>Founder & Master Craftsman</p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>+91 98795 69177</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ background: "#fff", border: "1px solid var(--border)" }}>
              <div className="relative h-72">
                <Image src="/team/owner-2.jpg" alt="Dev Varsani" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>Dev Varsani</h3>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>Co-Founder & Design Specialist</p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>+91 87583 08315</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4" style={{ background: "var(--accent-light)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "var(--foreground)" }}>Our story</h2>
          <div className="text-base leading-relaxed space-y-4" style={{ color: "var(--muted)" }}>
            <p>Hira Sales was founded with a simple vision: to build furniture that people are proud to have in their homes. What started as a small workshop has grown into a trusted name for custom doors, bedrooms, kitchens, and wardrobes.</p>
            <p>Every piece we make is built to your exact measurements and specifications. We use premium materials and combine traditional woodworking with modern design — the result is furniture that lasts for generations.</p>
            <p>Visit our showroom at <strong>Junavas, Madhapar, Bhuj, Gujarat 370020</strong> to see our work firsthand and speak with the team.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🪵", title: "Quality materials", desc: "Premium wood, laminates, and hardware that stand the test of time." },
            { icon: "📐", title: "Made to measure", desc: "Built to your exact dimensions. No off-the-shelf shortcuts." },
            { icon: "🤝", title: "Personal service", desc: "From first call to final installation — we're with you every step." },
          ].map(item => (
            <div key={item.title} className="p-6 rounded-xl text-center" style={{ background: "#fff", border: "1px solid var(--border)" }}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>{item.title}</div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ background: "var(--foreground)" }}>
        <h2 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
        <p className="mb-8" style={{ color: "#c8b89a" }}>Visit our showroom or send us an enquiry today.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="px-8 py-3 rounded font-semibold text-white" style={{ background: "var(--accent)" }}>Contact Us</Link>
          <Link href="/gallery" className="px-8 py-3 rounded font-semibold" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>View Our Work</Link>
        </div>
      </section>
    </div>
  );
}
