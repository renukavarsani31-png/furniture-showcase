"use client";

import { useState } from "react";

const PHOTOS = [
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958168/hira-sales/fc1go9ngrkxlgz01anp6.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958170/hira-sales/vxzygr2si5fde8fn4t8z.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958173/hira-sales/uth3l9nfivabzgqpwpfo.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958175/hira-sales/yfem33rmb8x8mzci0qxb.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958177/hira-sales/itapojcff3zhufzh2m9v.jpg", category: "doors" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958181/hira-sales/smykuvqora0kf6yejfzv.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958184/hira-sales/pariqdxw23wgtme89c9s.jpg", category: "halls" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958186/hira-sales/c7ekoxqjfskejr27c0kw.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958189/hira-sales/k6ntcusho46cxslefb4s.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958193/hira-sales/cq1dh0c6r8wrk98xhkks.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958201/hira-sales/t5fpfjiidwxh109dmypx.jpg", category: "tv-units" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958205/hira-sales/zhldvdunwpzglpfbp7t8.jpg", category: "doors" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958208/hira-sales/iohhh0wxh1cb4swldodk.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958213/hira-sales/ligrfvimm47vs5pybj3t.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958215/hira-sales/kvqs0ru5nlsfjhe0okjo.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958226/hira-sales/vua59simgqh9edsh5g8o.jpg", category: "halls" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958228/hira-sales/feld9e0ca94jxuznmoz1.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958231/hira-sales/maskutghmjoqeed1krdj.jpg", category: "doors" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958234/hira-sales/lhmr9dmwohyv6bi9ukir.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958236/hira-sales/zwvgotcwu7b5opb74aap.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958239/hira-sales/f4stdoogu7f0t3n85ppj.jpg", category: "tv-units" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958243/hira-sales/bjyk8ey0uz2yuwrbnxx9.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958247/hira-sales/gqxlunqazpweke0sdft3.jpg", category: "halls" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958252/hira-sales/rdgkfed5p3gcv4hkugtr.jpg", category: "doors" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958255/hira-sales/ieqwifsqx9jmegzas08x.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958260/hira-sales/vz7jm18oazhnyshg0njx.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958262/hira-sales/j4hwieq89ko65tccxm5m.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958265/hira-sales/rtn0aepb7linv8ukfvpa.jpg", category: "halls" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958270/hira-sales/vdbxrqwief3qrq7yjhdx.jpg", category: "tv-units" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958279/hira-sales/anw3eucuy7x3nlozhtxb.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958283/hira-sales/vl0sklfze6nodwvelkuh.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958286/hira-sales/epmlpyhunwj474u8i6rm.jpg", category: "doors" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958288/hira-sales/w5a2hya15kw7ezisnt0s.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958291/hira-sales/yc8wq5mgtlsryphoqehi.jpg", category: "halls" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958294/hira-sales/gst5r6von5xvtg1fvi09.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958296/hira-sales/kewqeyi6ap9afc4ehsko.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958302/hira-sales/gd8fmqpxt7yai88mlpsk.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958306/hira-sales/epd3zf7wffbb7p29zpv7.jpg", category: "tv-units" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958310/hira-sales/onntb3cxhnmixk02ehxc.jpg", category: "doors" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781958317/hira-sales/oq4n1y9oqa4hndj6yq1p.jpg", category: "wardrobes" },
];

const TABS = [
  { label: "All", slug: "all" },
  { label: "Kitchens", slug: "kitchens" },
  { label: "Bedrooms", slug: "bedrooms" },
  { label: "Wardrobes", slug: "wardrobes" },
  { label: "Doors", slug: "doors" },
  { label: "Halls & Living", slug: "halls" },
  { label: "TV Units", slug: "tv-units" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeTab === "all" ? PHOTOS : PHOTOS.filter(p => p.category === activeTab);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1a0f0a 0%, #3d1f0d 100%)" }} className="text-white py-16 px-4 text-center">
        <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#c8a87a" }}>Our work</p>
        <h1 className="text-4xl font-bold">Photo Gallery</h1>
        <p className="mt-3 max-w-md mx-auto text-sm" style={{ color: "#c8b89a" }}>
          Real projects, real homes — browse our furniture work across Bhuj and Kutch.
        </p>
      </section>

      {/* Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 flex gap-1 py-3 min-w-max">
          {TABS.map(tab => (
            <button
              key={tab.slug}
              onClick={() => setActiveTab(tab.slug)}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
              style={{
                background: activeTab === tab.slug ? "var(--accent)" : "var(--accent-light)",
                color: activeTab === tab.slug ? "#fff" : "var(--accent)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>{filtered.length} photos</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filtered.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(photo.url)}
              className="relative overflow-hidden rounded-lg aspect-square group focus:outline-none"
              style={{ background: "var(--accent-light)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.url}
                alt={`Hira Sales furniture ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl leading-none"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Full size"
            className="max-w-full max-h-full rounded-lg object-contain"
            style={{ maxHeight: "90vh" }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
