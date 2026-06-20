import Link from "next/link";

const categories = [
  { name: "Doors", slug: "doors", icon: "🚪", desc: "Custom wooden & designer doors" },
  { name: "Bedrooms", slug: "bedrooms", icon: "🛏️", desc: "Complete bedroom furniture sets" },
  { name: "Kitchens", slug: "kitchens", icon: "🍳", desc: "Modern modular kitchen designs" },
  { name: "Halls & Living Rooms", slug: "halls", icon: "🛋️", desc: "Sofas, TV units & living sets" },
  { name: "TV Units", slug: "tv-units", icon: "📺", desc: "Designer entertainment centers" },
  { name: "Wardrobes", slug: "wardrobes", icon: "👗", desc: "Custom storage solutions" },
  { name: "Showroom", slug: "showroom", icon: "🏪", desc: "Visit our showroom & workshop" },
  { name: "Custom Furniture", slug: "custom-furniture", icon: "✏️", desc: "Bespoke furniture for you" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1a0f0a 0%, #3d1f0d 100%)" }} className="text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#c8a87a" }}>
            Crafted with care since 2010
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Furniture that fits<br />
            <span style={{ color: "#b8722a" }}>your life perfectly</span>
          </h1>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#c8b89a" }}>
            Custom-built doors, bedrooms, kitchens, and wardrobes. Every piece designed and crafted to your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="px-8 py-3 rounded font-semibold text-white" style={{ background: "var(--accent)" }}>
              View Gallery
            </Link>
            <Link href="/contact" className="px-8 py-3 rounded font-semibold" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>What we make</p>
            <h2 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>Browse by category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/gallery?category=${cat.slug}`}
                className="group p-6 rounded-lg text-center hover:shadow-md transition-all"
                style={{ background: "#fff", border: "1px solid var(--border)" }}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>{cat.name}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>{cat.desc}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-block px-6 py-3 rounded font-medium text-white" style={{ background: "var(--accent)" }}>
              View All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-4" style={{ background: "var(--accent-light)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>Why choose Hira Sales?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🪵", title: "Premium Materials", desc: "We use only high-quality wood, laminates, and hardware that stand the test of time." },
              { icon: "📐", title: "Made to Measure", desc: "Every piece is built to your exact dimensions and specifications. No compromise." },
              { icon: "🤝", title: "Personal Service", desc: "From design to delivery, we work closely with you at every step." },
            ].map(item => (
              <div key={item.title} className="text-center p-6 rounded-lg" style={{ background: "#fff", border: "1px solid var(--border)" }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>{item.title}</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>Trusted by</p>
            <h2 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>Our clients</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Leading hospitals, corporates and businesses across Kutch trust Hira Sales</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              {
                name: "K.K. Patel Super Speciality Hospital",
                url: "https://www.kkphospital.org/",
                logo: "https://www.kkphospital.org/public/images/logo.jpg",
                desc: "Multi-specialty hospital, Bhuj"
              },
              {
                name: "MMPJ Hospital & Research Centre",
                url: "https://www.mmpjhospital.org/",
                logo: "https://www.mmpjhospital.org/public/front-assets/img/logo.webp",
                desc: "Healthcare facility, Bhuj"
              },
              {
                name: "SVCT Group",
                url: "https://svctgroup.com/",
                logo: "https://svctgroup.com/wp-content/uploads/2023/09/Group-100.webp",
                desc: "Diversified business group, Est. 1965"
              },
              {
                name: "GR Global",
                url: "https://grglobal.co.in/",
                logo: null,
                desc: "Global logistics & freight, 15 countries"
              },
              {
                name: "KC Hospital",
                url: "https://maps.app.goo.gl/oV88fPLSX4uKpjB59",
                logo: null,
                desc: "Multi-specialty hospital, Bhuj"
              },
              {
                name: "Divisha Women's Hospital",
                url: "https://share.google/8fEnbWuiU3wfUQNzP",
                logo: null,
                desc: "Women's hospital, Bhuj"
              },
              {
                name: "Jogal Women's Hospital",
                url: "https://www.jogalwomenshospital.com/",
                logo: null,
                desc: "Women's hospital, Bhuj"
              },
            ].map(client => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-all group"
                style={{ border: "1px solid var(--border)", background: "var(--background)" }}
              >
                <div className="h-14 flex items-center justify-center mb-4">
                  {client.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={client.logo} alt={client.name} className="max-h-14 max-w-full object-contain" />
                  ) : (
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ background: "var(--accent)" }}>
                      {client.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="text-sm font-semibold mb-1 group-hover:underline" style={{ color: "var(--foreground)" }}>{client.name}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>{client.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ background: "var(--foreground)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your space?</h2>
          <p className="mb-8" style={{ color: "#c8b89a" }}>Tell us what you need and we'll get back to you with a free quote.</p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded font-semibold text-white" style={{ background: "var(--accent)" }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
