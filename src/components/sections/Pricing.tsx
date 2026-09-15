"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "$800",
    description: "Perfect for brands starting their scale journey.",
    features: ["12-15 UGC Videos/mo", "Campaign Setup", "Basic Reporting", "Weekly Calls"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$2,500",
    description: "Our most popular plan for aggressive scaling.",
    features: ["50-60 UGC Videos/mo", "Full Campaign Mgmt", "Advanced Testing", "Daily Optimization", "Dedicated Manager"],
    buttonText: "Scale Now",
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For high-spend brands requiring full-service growth.",
    features: ["Unlimited UGC", "Omni-channel Strategy", "Creative Director", "Custom Dashboards", "Priority Support"],
    buttonText: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-heading mb-6"
          >
            Simple, <span className="text-primary">performance-based</span> pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the engine that fits your current stage of growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-[0_0_30px_rgba(184,255,46,0.1)]"
                  : "border-white/10 bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground font-heading mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground text-sm">/mo</span>}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {plan.description}
              </p>
              <ul className="space-y-4 mb-12">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-foreground/80">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => window.open("https://wa.me/923294920783", "_blank")}
                className={`w-full h-12 rounded-full font-bold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-white/10 text-foreground hover:bg-white/20"
                }`}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
