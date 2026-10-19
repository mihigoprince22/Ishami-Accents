"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MessageCircle, Sparkles, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { WHATSAPP_PHONE_NUMBER, getCatDeliveryStatus, DeliveryStatusInfo } from "@/data/products";

const HERO_SLIDES = [
  {
    image: "/hero-lifestyle.jpg",
    title: "Curated Kigali Spaces",
    caption: "Sun-drenched luxury living room with wood slat paneling & artisan woven accents",
  },
  {
    image: "/images/products/macrame-wall-hanging-1.jpeg",
    title: "Handcrafted Macramé (1.5m × 0.8m)",
    caption: "Dip-dyed forest green & sage organic cotton fiber on solid wood timber rod",
  },
  {
    image: "/images/products/throw-blanket-taupe.jpeg",
    title: "Diamond-Knit Textured Throw",
    caption: "Ultra-soft raised relief diamond weave in Earthy Taupe Grey with knotted fringe",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [catStatus, setCatStatus] = useState<DeliveryStatusInfo | null>(null);

  // Safe client-side time evaluation for Kigali CAT status
  useEffect(() => {
    setCatStatus(getCatDeliveryStatus());
    const interval = setInterval(() => {
      setCatStatus(getCatDeliveryStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Multi-slide crossfade rotation
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden -mt-20 sm:-mt-22 pt-24 sm:pt-28 pb-10 sm:pb-14">
      {/* Background Image Carousel with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Editorial Rich Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B]/95 via-[#1B3B2B]/55 to-black/45 pointer-events-none" />

        {/* Exposed 1px Architectural Gridlines */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none opacity-20">
          <div className="w-full h-full border-x border-[#FAF7F2]/30 grid grid-cols-2 md:grid-cols-4">
            <div className="border-r border-[#FAF7F2]/20 h-full" />
            <div className="border-r border-[#FAF7F2]/20 h-full hidden md:block" />
            <div className="border-r border-[#FAF7F2]/20 h-full hidden md:block" />
            <div className="h-full" />
          </div>
        </div>
      </div>

      {/* Slide Indicators Top-Right */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end items-center pt-2">
        <div className="flex items-center gap-2 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentSlide === idx ? "w-8 bg-[#C86D51]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
          <span className="text-[11px] font-mono tracking-wider text-[#FAF7F2]/80 ml-1">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>
      </div>

      {/* Main Center / Bottom Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-3xl"
        >
          {/* Sister Brand Provenance Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>CURATED BY ISHAMI INTERIOR DESIGN & DECOR LTD • EST. 2019</span>
          </div>

          {/* Oversized Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF7F2] leading-[1.08] mb-5">
            Architectural Warmth, Curated for Everyday Spaces.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-[#FAF7F2]/90 font-light leading-relaxed max-w-2xl mb-8">
            Hand-selected home accents, artisanal textiles, and smart storage—delivered to your door
            in Kigali within 4 operating days.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C86D51] hover:bg-[#B2583D] text-[#FAF7F2] font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group"
            >
              <span>Explore the Collection ↓</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                "Hello Ishami Accents! 🌿 I am browsing your retail home accents collection and would like to order on WhatsApp."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-[#FAF7F2] font-semibold text-sm border border-white/25 backdrop-blur-md transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C86D51]" />
              <span>Order on WhatsApp (+250 788 310 401) ↗</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Bar: Live CAT Status Card & Trust Points */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end border-t border-white/15 pt-5">
          {/* Left: Bottom Corner Live CAT Dispatch Status Card */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-[#FAF7F2]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAF7F2]/70">
                  Kigali Dispatch Desk • CAT (UTC+2)
                </span>
                <span className="text-[11px] font-mono text-[#FAF7F2]/80">
                  {catStatus?.catTimeStr || "Live Status"}
                </span>
              </div>

              {catStatus ? (
                <div className="flex items-start gap-2.5">
                  {catStatus.isOpen ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-xs sm:text-sm font-semibold">
                      {catStatus.isOpen
                        ? "🟢 Dispatch Open Today • Delivered within 4 operating days"
                        : "🕒 Studio Closed for Dispatch Today (Wed, Thu, Sun) • Orders queued for next operating day"}
                    </p>
                    <p className="text-[11px] text-[#FAF7F2]/75 mt-0.5">
                      Active Dispatch: Mon, Tue, Fri & Sat across Kimihurura, Kiyovu, Nyarutarama &
                      all Kigali.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="animate-pulse flex items-center gap-2 text-xs text-[#FAF7F2]/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Syncing Central Africa Time dispatch status...</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Architectural Feature Points */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-6 text-[#FAF7F2]/85 text-xs font-medium pb-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D51]"></span>
              <span>100% Authentic Photos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D51]"></span>
              <span>Inspect on Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D51]"></span>
              <span>Direct WhatsApp Concierge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
