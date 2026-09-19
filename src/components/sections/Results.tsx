"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { label: "Revenue Scaled", value: "$200K+", color: "text-primary" },
  { label: "Creatives Tested", value: "200+", color: "text-foreground" },
  { label: "Active Brands", value: "11+", color: "text-primary" },
];

const CASE_STUDIES = [
  {
    category: "DTC",
    result: "4.2x ROAS",
    description: "Scaled a skincare brand from $10k to $150k monthly spend while maintaining efficiency.",
    image: "https://images.unsplash.com/photo-1596462502278-27ef999716f3?q=80&w=2340&auto=format&fit=crop",
  },
  {
    category: "Fitness",
    result: "2.8x ROAS",
    description: "Optimized a fitness app's UGC strategy, reducing CPA by 45% in 30 days.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2340&auto=format&fit=crop",
  },
  {
    category: "Fashion",
    result: "5.1x ROAS",
    description: "Launched a sustainable apparel line with high-impact TikTok ads, hitting $1M in sales.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2340&auto=format&fit=crop",
  },
  {
    category: "Coaching",
    result: "3.9x ROAS",
    description: "Scaled a high-ticket coaching offer via precision-targeted Meta campaigns.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2340&auto=format&fit=crop",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-3xl border border-white/5 bg-white/5"
            >
              <div className={`text-4xl md:text-6xl font-bold mb-2 font-heading ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.category}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {caseStudy.category}
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-3xl font-bold text-foreground font-heading mb-4">{caseStudy.result}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudy.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
