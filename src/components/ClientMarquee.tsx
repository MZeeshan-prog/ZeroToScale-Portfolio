"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  { name: "Brand 1", url: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  { name: "Brand 2", url: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  { name: "Brand 3", url: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  { name: "Brand 4", url: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  { name: "Brand 5", url: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  { name: "Brand 6", url: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
];

export default function ClientMarquee() {
  return (
    <section className="py-12 border-y border-white/10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by high-growth brands
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-12 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            >
              <Image src={logo.url} alt={logo.name} width={128} height={48} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
