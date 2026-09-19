"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const VIDEOS = [
  {
    title: "High-Conversion Ad 1",
    url: "/videos/1%20Ad.mp4",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    category: "General",
  },
  {
    title: "Engagement Booster 2",
    url: "/videos/Ad%202.mp4",
    thumbnail: "https://images.unsplash.com/photo-1536242663143-6756857d77ec?q=80&w=1974&auto=format&fit=crop",
    category: "General",
  },
  {
    title: "Conversion Winner 3",
    url: "/videos/ad%203.mp4",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669f6ed2a4?q=80&w=1974&auto=format&fit=crop",
    category: "General",
  },
  {
    title: "Skincare Glow Review",
    url: "/videos/Woman_reviewing_skincare_product_20260914131933.mp4",
    thumbnail: "https://images.unsplash.com/photo-1598440947619-277512777f17?q=80&w=1974&auto=format&fit=crop",
    category: "Beauty",
  },
  {
    title: "Home Comfort Showcase",
    url: "/videos/Woman_reviewing_sofa_in_video_20260914134426.mp4",
    thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1974&auto=format&fit=crop",
    category: "Lifestyle",
  },
  {
    title: "Real Estate Walkthrough",
    url: "/videos/Realtor ad.mp4",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1974&auto=format&fit=crop",
    category: "Real Estate",
  },
  {
    title: "Refreshment Ad",
    url: "/videos/Cold drink. Ad.mp4",
    thumbnail: "https://images.unsplash.com/photo-1544145974-32239b998237?q=80&w=1974&auto=format&fit=crop",
    category: "General",
  },
  {
    title: "Luxury Bag Showcase",
    url: "/videos/Bag Ad.mp4",
    thumbnail: "https://images.unsplash.com/photo-1584917865442-de89df76afd0?q=80&w=1974&auto=format&fit=crop",
    category: "Fashion",
  },
  {
    title: "Sunscreen Review",
    url: "/videos/WORADA Sunscreen SPF 60 PA+++ - Whitening Sunscreen for Face & Body - Buy 2 Get 1 Free.mp4",
    thumbnail: "https://images.unsplash.com/photo-1556228578-0d8506477576?q=80&w=1974&auto=format&fit=crop",
    category: "Beauty",
  },
  {
    title: "Gentle Cleanser",
    url: "/videos/100% Soap-Free Gentle Face Cleanser - Removes Dirt, Oil & Makeup - Fresh & Healthy Skin.mp4",
    thumbnail: "https://images.unsplash.com/photo-1556228578-0d8506477576?q=80&w=1974&auto=format&fit=crop",
    category: "Beauty",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(VIDEOS.map(v => v.category)))];

export default function UGCGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = activeCategory === "All"
    ? VIDEOS
    : VIDEOS.filter(v => v.category === activeCategory);

  return (
    <section id="ugc" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-heading mb-6"
          >
            Our <span className="text-primary">UGC Mastery.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A glimpse into the high-retention creatives we produce for our brands.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <Badge
                key={cat}
                className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground scale-110"
                    : "bg-muted text-muted-foreground hover:bg-muted-foreground/20"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, i) => (
              <motion.div
                key={video.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-card"
              >
                <video
                  src={video.url}
                  poster={video.thumbnail}
                  className="w-full h-full object-cover"
                  controls
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-xl font-bold text-foreground font-heading">{video.title}</h4>
                  <Badge className="mt-2 bg-white/10 backdrop-blur-md text-white border-none text-[10px]">
                    {video.category}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
