"use client";

import { useState } from "react";

const PHOTOS = [
  // Mandirs
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961574/hira-sales/n9u7t9f0aiwaf2shx18k.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961580/hira-sales/tmencqgc8ujjyaewpu7q.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961584/hira-sales/avzvvtmdvcumvpecyphq.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961588/hira-sales/z2uuqoc07kkt9pp1ktqu.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961591/hira-sales/ydupiv1hln7pituidzaj.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961597/hira-sales/uc20jrokiagbxdsmb54t.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961600/hira-sales/aklrphv1eyfc3pxp7ldk.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961606/hira-sales/h5gfhcsaaud6bynlzmtj.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961610/hira-sales/yn3yyrtsqtlpqjv0onjr.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961616/hira-sales/kgo8m7eif8fkvsgdf7yr.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961623/hira-sales/mhot6lbup6fx1q2zxryl.jpg", category: "mandir" },
  // Bedrooms
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961627/hira-sales/ap4baxnxn2ahv4gulnoo.jpg", category: "mandir" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961630/hira-sales/whzfscymatjgik4i5zln.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961633/hira-sales/ckmydkqxl5ksjm1l0dw2.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961636/hira-sales/rudp3w8ebra38sdcbml8.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961639/hira-sales/qf6rcy0jclklcui7xncf.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961641/hira-sales/srw8zbi7txasoa7ckiob.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961643/hira-sales/lte87iyfolhrrmfiggg9.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961646/hira-sales/xugryaeiogyj4kywsb7x.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961648/hira-sales/hih55unob7ua3l1wzva6.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961651/hira-sales/umanrk0txihpwug7cwtb.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961653/hira-sales/q4y4dydbvqg86mewmblp.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961656/hira-sales/qr9fntomwsdq6ii1ngma.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961661/hira-sales/hkhmovntdyt5i3etq8tq.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961665/hira-sales/uw59sby2wstdw12lcwne.jpg", category: "bedrooms" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961671/hira-sales/o8e7h6yd7zxi9qne9ldq.jpg", category: "bedrooms" },
  // Wardrobes
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961689/hira-sales/z8z7e7m9gw4pm7yxmhgo.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961698/hira-sales/uc06521punl8ns7nzfyp.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961700/hira-sales/kvwm5kqxstdisjsnwlqp.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961702/hira-sales/lwmsujjs3oxuocazrbbd.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961705/hira-sales/wuouv9ypeapnkczokqx4.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961708/hira-sales/avnsscrqa27b3nggigem.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961715/hira-sales/c35uemvg0todb45rdubd.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961721/hira-sales/uiymrhhkcqqzbvfw8ced.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961723/hira-sales/jqglt6jgetnc6pv1eoms.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961726/hira-sales/vqpa7tu59hxc4oc33joa.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961729/hira-sales/jaclc9ifbxrnbfqhbwsg.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961732/hira-sales/gcpw8z7u2rk4zkhadwio.jpg", category: "wardrobes" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961734/hira-sales/iziozgiadarbcd55vlv8.jpg", category: "wardrobes" },
  // Kitchens
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961736/hira-sales/aekogo7w6uinelwym4ld.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961739/hira-sales/r9ln7pll1jnb8rqps0cp.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961742/hira-sales/yzeo47lrrzsfpnh9dham.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961745/hira-sales/ziej0pwjvb4fbjrooos9.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961748/hira-sales/lr8kyuetw8eivdocbsvk.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961751/hira-sales/hpu8bmwfdbfu2lgyhllk.jpg", category: "kitchens" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961756/hira-sales/tlagckhvozgikbpbbmay.jpg", category: "kitchens" },
  // TV Units
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961759/hira-sales/razip0awsdn4ib5njcbh.jpg", category: "tv-units" },
  // Halls - sofa (l6q9) + reception desk (vhlpp) + reception (qedk) — skip ceiling (sa7x)
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961764/hira-sales/l6q9blutz0gpy6jnr8mx.jpg", category: "halls" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961769/hira-sales/qedknnjpvyy9qslr3wie.jpg", category: "halls" },
  // Showroom
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961775/hira-sales/hyzctlqt4owsidkda6wh.jpg", category: "showroom" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961777/hira-sales/v4se2nue0cjcsecv9ked.jpg", category: "showroom" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961780/hira-sales/yfnpr3iiig0tgbioajfo.jpg", category: "showroom" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961783/hira-sales/inanswuohatlbo0sozln.jpg", category: "showroom" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961785/hira-sales/hj5eaz6m5viplknvl70i.jpg", category: "showroom" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961788/hira-sales/ycewwj8oeubhewi7svma.jpg", category: "showroom" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961796/hira-sales/jxuehuxzew2jveaemyq3.jpg", category: "showroom" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961799/hira-sales/ytkuvdfghr4vxb4rfzrl.jpg", category: "showroom" },
  { url: "https://res.cloudinary.com/dyluzqixm/image/upload/v1781961802/hira-sales/paqd5uso9uqt9ohhxclq.jpg", category: "showroom" },
];

const TABS = [
  { label: "All", slug: "all" },
  { label: "Mandir", slug: "mandir" },
  { label: "Bedrooms", slug: "bedrooms" },
  { label: "Wardrobes", slug: "wardrobes" },
  { label: "Kitchens", slug: "kitchens" },
  { label: "Halls & Living", slug: "halls" },
  { label: "TV Units", slug: "tv-units" },
  { label: "Showroom", slug: "showroom" },
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
                alt={`Hira Sales ${photo.category} ${i + 1}`}
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
