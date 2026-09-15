"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Meta & TikTok Ads",
    slug: "meta-tiktok-ads",
    description: "Precision-targeted acquisition engines designed to scale revenue aggressively.",
    items: ["Creative Strategy", "Campaign Management", "A/B Testing", "Funnel Optimization"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "bg-primary/10",
  },
  {
    title: "UGC & Creative Production",
    slug: "ugc-creative",
    description: "High-converting content that stops the scroll and drives immediate action.",
    items: ["UGC Creator Sourcing", "Direct Response Scripting", "High-Retention Editing", "Creative Testing"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop",
    color: "bg-white/5",
  },
];

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-heading mb-6"
          >
            Two engines. <span className="text-primary">One growth system.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We combine data-driven distribution with high-impact creative to dominate your niche.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <Link key={service.title} href={`/services/${service.slug}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative overflow-hidden rounded-3xl border border-white/10 ${service.color} p-8 md:p-12 flex flex-col h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(184,255,46,0.1)]`}
              >
                <div className="mb-8 overflow-hidden rounded-2xl h-64 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-heading mb-4">{service.title}</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center text-primary font-bold gap-2 group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
