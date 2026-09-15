"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "ZeroToScale completely transformed our ad account. Our ROAS jumped from 1.8x to 4.5x in just two months.",
    author: "Sarah Jenkins",
    role: "CEO, LuxeBloom",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "The UGC quality is unmatched. They don't just make videos; they create psychological triggers that sell.",
    author: "Mark Thompson",
    role: "Founder, FitGear",
    avatar: "https://i.pravatar.cc/150?u=mark",
  },
  {
    quote: "Professional, data-driven, and fast. The best agency we've ever partnered with for TikTok growth.",
    author: "Elena Rodriguez",
    role: "Marketing Head, GlowSkin",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    quote: "Our creative fatigue was killing us until we found ZeroToScale. Now we have a constant stream of winners.",
    author: "David Chen",
    role: "CMO, TechNova",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
  {
    quote: "They understood our brand voice instantly. The content feels authentic and converts like crazy.",
    author: "Jessica Wu",
    role: "Founder, PureOrganic",
    avatar: "https://i.pravatar.cc/150?u=jessica",
  },
];

export default function Testimonials() {
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-heading mb-6"
        >
          Client <span className="text-primary">Success.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Real results from brands that dared to scale their creative.
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 whitespace-nowrap px-3"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[400px] p-8 bg-card border border-white/10 rounded-3xl whitespace-normal"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-xl font-medium leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
