"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CATEGORIES = ["All", "Ads", "UGC", "Case Studies"];

const PROJECTS = [
  {
    title: "Luxury Skin Care",
    category: "Ads",
    image: "https://images.unsplash.com/photo-1556228578-8c7c7ef77027?q=80&w=800&auto=format&fit=crop",
    result: "4.2x ROAS",
  },
  {
    title: "Fitness App",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    result: "CPA -45%",
  },
  {
    title: "Sustainable Fashion",
    category: "Ads",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be11523?q=80&w=800&auto=format&fit=crop",
    result: "$1M Sales",
  },
  {
    title: "Tech Gadgets",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    result: "3.9x ROAS",
  },
  {
    title: "Organic Foods",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1490818387583-1b377787a87d?q=80&w=800&auto=format&fit=crop",
    result: "2.1x ROAS",
  },
  {
    title: "Gaming Gear Scale",
    category: "Ads",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    result: "4.8x ROAS",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-heading mb-6"
          >
            Our winning <span className="text-primary">portfolio.</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-card"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-primary font-bold mb-1">{project.result}</p>
                  <h4 className="text-2xl font-bold text-foreground font-heading mb-4">{project.title}</h4>
                  <button
                    onClick={() => window.open("https://wa.me/923294920783", "_blank")}
                    className="w-fit px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold"
                  >
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
