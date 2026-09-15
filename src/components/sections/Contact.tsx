"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <footer className="relative overflow-hidden bg-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          {/* Left Side: High Impact Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground font-heading mb-8">
              Ready to <span className="text-primary">scale?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
              Stop guessing your creative. Start scaling your revenue with a high-velocity growth system.
            </p>

            <div className="flex flex-col gap-6 items-start">
              <div className="p-8 rounded-3xl border border-white/10 bg-card max-w-sm text-center transition-all duration-300 hover:border-primary/30 group">
                <p className="text-sm font-medium text-muted-foreground mb-3 group-hover:text-primary transition-colors">Direct Contact</p>
                <a href="mailto:zerotoscaleofficial@gmail.com" className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors break-all">
                  zerotoscaleofficial@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: High-Intent Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground" htmlFor="name">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background border-white/10 rounded-xl h-12 text-foreground focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground" htmlFor="email">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-white/10 rounded-xl h-12 text-foreground focus:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground" htmlFor="business">Business Name</label>
                <Input id="business" placeholder="Your Brand" className="bg-background border-white/10 rounded-xl h-12 text-foreground focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground" htmlFor="budget">Monthly Ad Budget</label>
                <select
                  id="budget"
                  className="w-full bg-background border border-white/10 rounded-xl h-12 px-3 text-foreground focus:ring-primary outline-none"
                >
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-50k">$10k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground" htmlFor="goals">Your Growth Goals</label>
                <Textarea id="goals" placeholder="Tell us about your current bottleneck..." className="bg-background border-white/10 rounded-xl h-32 text-foreground focus:ring-primary" />
              </div>
              <Button
                onClick={() => window.open("https://wa.me/923294920783", "_blank")}
                className="w-full h-14 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all text-lg font-bold shadow-[0_0_20px_rgba(184,255,46,0.3)] hover:shadow-[0_0_30px_rgba(184,255,46,0.5)]"
              >
                Book a Discovery Call
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} ZeroToScale. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
