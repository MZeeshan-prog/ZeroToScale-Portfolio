"use client";

import { motion } from "framer-motion";

const PROPS = [
  {
    title: "Native-Feel Creative",
    description: "We don't make 'ads'. We make content that feels native to the platform, blending in with the feed while driving conversion.",
    icon: "🎨",
  },
  {
    title: "Rapid Testing Cycle",
    description: "Our system is built for speed. We test 10-20 new hooks per week to find the winning creative that scales.",
    icon: "⚡",
  },
  {
    title: "Full-Stack Growth",
    description: "From creative production to campaign management and landing page optimization—we handle the entire funnel.",
    icon: "📈",
  },
  {
    title: "Live Dashboard Access",
    description: "Complete transparency. Track every cent of your spend and every conversion in real-time via our custom dashboards.",
    icon: "📊",
  },
];

export default function ValueProps() {
  return (
    <section id="value-props" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-heading mb-6"
          >
            Built like an <span className="text-primary">in-house team.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We don't operate as a distant agency. We integrate into your business to drive aggressive, sustainable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/10 bg-card hover:border-primary/50 transition-colors group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading mb-4">{prop.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
