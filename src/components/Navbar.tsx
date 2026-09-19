"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { InstagramIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-lg border-b border-white/10 bg-background/70 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/ZeroToScale.png"
            alt="ZeroToScale Logo"
            width={130}
            height={35}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Work", "Process", "Pricing", "FAQ"].map((item) => (
            <Link
              key={item}
              href={item === "Work" ? "#ugc" : `#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          <div className="h-4 w-px bg-white/10 mx-2" />
          <a
            href="https://www.instagram.com/zeroto.scale/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        <Button
          onClick={() => window.open("https://wa.me/923294920783", "_blank")}
          className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-6 h-11 font-bold transition-all shadow-sm hover:shadow-md"
        >
          Book a Call
        </Button>
      </div>
    </motion.nav>
  );
}
