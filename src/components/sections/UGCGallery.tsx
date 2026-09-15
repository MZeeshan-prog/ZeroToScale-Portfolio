"use client";

import { motion } from "framer-motion";

const VIDEOS = [
  {
    title: "High-Conversion Ad 1",
    url: "/videos/1%20Ad.mp4",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Engagement Booster 2",
    url: "/videos/Ad%202.mp4",
    thumbnail: "https://images.unsplash.com/photo-1536242663143-6756857d77ec?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Conversion Winner 3",
    url: "/videos/ad%203.mp4",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669f6ed2a4?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Skincare Glow Review",
    url: "/videos/Woman_reviewing_skincare_product_20260914131933.mp4",
    thumbnail: "https://images.unsplash.com/photo-1598440947619-277512777f17?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Home Comfort Showcase",
    url: "/videos/Woman_reviewing_sofa_in_video_20260914134426.mp4",
    thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function UGCGallery() {
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
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A glimpse into the high-retention creatives we produce for our brands.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
