"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Video, Camera, Sparkles, Users } from "lucide-react";

export default function UGCCreative() {
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
            UGC & <span className="text-primary">Creative Production.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We create content that doesn't look like an ad. High-retention, authentic UGC that builds trust and drives explosive conversions.
          </motion.p>
          <Button
            onClick={() => window.open("https://wa.me/923294920783", "_blank")}
            size="lg" className="px-8 py-6 text-lg rounded-full bg-primary text-primary-foreground hover:opacity-90 font-bold transition-all"
          >
            Get High-Impact Creatives
          </Button>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop"
                alt="Creative Production"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold font-heading">Stop the scroll. Drive action.</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="text-primary h-6 w-6" />,
                    title: "Creator Sourcing",
                    desc: "We find the perfect faces for your brand—authentic creators who resonate with your target audience."
                  },
                  {
                    icon: <Camera className="text-primary h-6 w-6" />,
                    title: "Direct Response Scripting",
                    desc: "We write hooks and scripts based on psychology to ensure high retention and conversion."
                  },
                  {
                    icon: <Video className="text-primary h-6 w-6" />,
                    title: "High-Retention Editing",
                    desc: "Fast-paced, dynamic editing that keeps users engaged until the very last second."
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
          </div>
        </div>
      </section>

      {/* The "Magic" Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold font-heading mb-4">The Psychology of Conversion</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Hook",
              desc: "The first 3 seconds. We create visual and auditory patterns that force users to stop scrolling.",
              icon: <Sparkles className="h-8 w-8 text-primary" />
            },
            {
              title: "The Story",
              desc: "Building trust through authenticity. We highlight the pain and present your product as the only solution.",
              icon: <Video className="h-8 w-8 text-primary" />
            },
            {
              title: "The CTA",
              desc: "A clear, urgent call to action that guides the user exactly where they need to go to buy.",
              icon: <CheckCircle2 className="h-8 w-8 text-primary" />
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/10 bg-card text-center"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-primary text-primary-foreground">
          <h2 className="text-4xl font-bold font-heading mb-6">Want content that actually sells?</h2>
          <p className="text-lg mb-8 opacity-90">Stop making 'ads'. Start making content that converts.</p>
          <Button
            onClick={() => window.open("https://wa.me/923294920783", "_blank")}
            size="lg" className="bg-background text-foreground hover:bg-white/90 rounded-full px-8 py-6 font-bold transition-all"
          >
            Get Your Creative Roadmap
          </Button>
        </div>
      </section>
    </div>
  );
}

import { CheckCircle2 } from "lucide-react";
