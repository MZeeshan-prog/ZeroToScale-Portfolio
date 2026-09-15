"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your brand, current metrics, and competitors to identify the biggest growth levers.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a custom creative roadmap and distribution plan tailored to your specific goals.",
  },
  {
    number: "03",
    title: "Production",
    description: "Sourcing top creators and producing high-retention UGC that actually converts.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploying campaigns across Meta and TikTok with rigorous tracking and initial testing.",
  },
  {
    number: "05",
    title: "Optimization",
    description: "Daily monitoring and rapid iteration to squeeze every drop of efficiency from your spend.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-heading mb-6"
          >
            The road to <span className="text-primary">scale.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Our 5-step system takes you from static growth to a high-velocity acquisition engine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-card group hover:border-primary/50 transition-colors"
            >
              <div className="text-5xl font-bold text-primary/20 font-heading mb-6 group-hover:text-primary/40 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
