"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Radial Lime Glow Background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-8 font-heading leading-tight">
            Scaling brands through <br />
            <span className="text-primary">high-impact content.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          ZeroToScale is a Meta & TikTok Ads + UGC Video Agency. We help high-growth brands dominate the feed with creative that converts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => window.open("https://wa.me/923294920783", "_blank")}
            size="lg" className="px-8 py-6 text-lg rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all group font-bold"
          >
            Work with us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => window.open("https://wa.me/923294920783", "_blank")}
            size="lg" variant="ghost" className="px-8 py-6 text-lg rounded-full text-foreground hover:bg-white/10 transition-all font-medium"
          >
            View our work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
