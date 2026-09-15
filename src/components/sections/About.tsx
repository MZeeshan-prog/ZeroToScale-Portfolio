"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const EXPERIENCE = [
  {
    year: "2024",
    role: "Founder & Lead Strategist",
    company: "ZeroToScale",
    description: "Leading the agency in creating high-performance UGC content and scaling TikTok/Meta ads for e-commerce brands.",
  },
  {
    year: "2022 - 2023",
    role: "Growth Marketer",
    company: "ScaleUp Agency",
    description: "Managed $500k+ monthly ad spend for beauty and health brands, achieving average ROAS of 4.2x.",
  },
  {
    year: "2020 - 2022",
    role: "Creative Director",
    company: "CreativeFlow",
    description: "Specialized in short-form video production and viral content strategies for emerging D2C brands.",
  },
];

const SKILLS = [
  { category: "Strategy", items: ["Media Buying", "CRO", "Funnel Optimization", "Market Research"] },
  { category: "Creative", items: ["UGC Direction", "Short-form Video", "Copywriting", "Ad Psychology"] },
  { category: "Platforms", items: ["TikTok Ads", "Meta Ads", "Google Ads", "Shopify"] },
];

export default function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Professional Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100"
        >
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
            alt="Founder of ZeroToScale"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
        </motion.div>

        {/* Right Side: Content with Tabs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
            The Vision Behind <br />
            <span className="text-slate-500">ZeroToScale</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We believe that in the era of attention, the best product doesn't always win—the best creative does. We bridge the gap between raw data and emotional storytelling.
          </p>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full bg-slate-100 p-1">
              <TabsTrigger value="experience" className="rounded-full py-2 text-sm font-medium">
                Experience
              </TabsTrigger>
              <TabsTrigger value="skills" className="rounded-full py-2 text-sm font-medium">
                Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="space-y-8">
              <div className="relative border-l-2 border-slate-200 ml-3 pl-8 space-y-12">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-900 ring-4 ring-white" />
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{exp.year}</span>
                    <h4 className="text-xl font-bold text-slate-900 mt-1">{exp.role}</h4>
                    <p className="text-md font-medium text-slate-500 mb-2">{exp.company}</p>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
