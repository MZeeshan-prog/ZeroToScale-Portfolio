"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, BarChart3, Target, Zap } from "lucide-react";

export default function MetaTikTokAds() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        </div>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter font-heading mb-6"
          >
            Meta & TikTok <span className="text-primary">Ads Mastery.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build high-precision acquisition engines that don't just get clicks—they get customers. Combining data-driven targeting with viral-ready creatives to scale your revenue.
          </motion.p>
          <Button
            onClick={() => window.open("https://wa.me/923294920783", "_blank")}
            size="lg" className="px-8 py-6 text-lg rounded-full bg-primary text-primary-foreground hover:opacity-90 font-bold transition-all"
          >
            Start Scaling Today
          </Button>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold font-heading">How we dominate the feed</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Target className="text-primary h-6 w-6" />,
                    title: "Precision Targeting",
                    desc: "We find your ideal customer using advanced lookalike audiences and behavioral targeting."
                  },
                  {
                    icon: <Zap className="text-primary h-6 w-6" />,
                    title: "High-Velocity Testing",
                    desc: "We test dozens of hooks and angles every week to find the winning combination."
                  },
                  {
                    icon: <BarChart3 className="text-primary h-6 w-6" />,
                    title: "Data-Driven Scaling",
                    desc: "Once we find a winner, we scale budgets aggressively while maintaining your target ROAS."
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Ads Analysis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold font-heading mb-4">The Roadmap to Scale</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Audit", desc: "We analyze your current ads, funnel, and competitors." },
            { step: "02", title: "Strategy", desc: "Develop a creative roadmap and targeting blueprint." },
            { step: "03", title: "Launch", desc: "Deploy high-impact ads and start the testing cycle." },
            { step: "04", title: "Scale", desc: "Multiply budget on winners to maximize revenue." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/10 bg-card"
            >
              <span className="text-primary font-bold text-2xl mb-4 block">{s.step}</span>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-primary text-primary-foreground">
          <h2 className="text-4xl font-bold font-heading mb-6">Ready to dominate your niche?</h2>
          <p className="text-lg mb-8 opacity-90">Stop guessing. Start scaling with a proven system.</p>
          <Button
            onClick={() => window.open("https://wa.me/923294920783", "_blank")}
            size="lg" className="bg-background text-foreground hover:bg-white/90 rounded-full px-8 py-6 font-bold transition-all"
          >
            Book Your Strategy Call
          </Button>
        </div>
      </section>
    </div>
  );
}
