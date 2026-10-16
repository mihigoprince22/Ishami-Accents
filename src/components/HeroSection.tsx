"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, MessageCircle, Sparkles, ShieldCheck, Clock, MapPin } from "lucide-react";
import { DeliveryStatusWidget } from "./DeliveryStatusWidget";
import { WHATSAPP_PHONE_NUMBER } from "@/data/products";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pb-24 border-b border-[#E4DCD0]/60">
      {/* Subtle organic background tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0EAE1]/70 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C86D51]/5 rounded-full blur-2xl -z-10 pointer-events-none transform -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Copy & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            {/* Live CAT Status Pill & Brand Tag */}
            <div className="flex flex-wrap items-center gap-2.5">
              <DeliveryStatusWidget variant="pill" showModalTrigger={true} />
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF0EC] text-[#4A5D4E] border border-[#4A5D4E]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sister brand of Ishami Design Ltd</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1B18] leading-[1.12]">
              Thoughtfully Curated Accents for Everyday Spaces.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#57524C] font-normal leading-relaxed max-w-2xl">
              Elevate your home with tactile woven fibers, diamond-knit comfort, and clever
              modular organization. Designed in Kigali for modern living rooms, bedrooms, and
              Airbnbs.
            </p>

            {/* Dynamic CAT Schedule Notice Card (Mobile & Desktop) */}
            <div className="w-full max-w-xl">
              <DeliveryStatusWidget variant="card" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E1B18] text-[#FAF7F2] font-semibold text-sm hover:bg-[#C86D51] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>Explore Catalog (11 Items)</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                  "Hello Ishami Accents! 🌿 I am browsing your catalog and would love to ask a quick question."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F0EAE1] text-[#1E1B18] hover:bg-[#E4DCD0] font-semibold text-sm border border-[#E4DCD0] transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat with Kigali Team</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-2 border-t border-[#E4DCD0] w-full max-w-xl text-[#57524C]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C86D51] shrink-0" />
                <span className="text-xs font-medium">4 Operating Days Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                <span className="text-xs font-medium">All Kigali Neighborhoods</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1E1B18] shrink-0" />
                <span className="text-xs font-medium">Inspect on Arrival</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage & Bento Lifestyle Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Main Featured Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden bg-[#F0EAE1] border border-[#E4DCD0] shadow-xl group">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/products/macrame-wall-hanging-1.jpeg"
                  alt="Handcrafted Macramé Fiber Wall Hanging in Modern Living Room"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Pill Badge */}
                <div className="absolute top-3 left-3 bg-[#1E1B18]/85 backdrop-blur-md text-[#FAF7F2] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured Statement Piece
                </div>

                {/* Bottom Card Info */}
                <div className="absolute bottom-3 left-3 right-3 text-[#FAF7F2] flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold leading-tight">
                      Handcrafted Macramé Hanging
                    </h3>
                    <p className="text-xs text-[#FAF7F2]/80">1.5m Width on Solid Teak Rod</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#C86D51] text-white text-xs font-bold shadow">
                    48,000 RWF
                  </span>
                </div>
              </div>

              {/* Mini Gallery Strip Below */}
              <div className="p-3 bg-[#FAF7F2] grid grid-cols-3 gap-2">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E4DCD0] group/item">
                  <Image
                    src="/images/products/throw-blanket-taupe.jpeg"
                    alt="Diamond-Knit Throw Blanket"
                    fill
                    sizes="100px"
                    className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold bg-[#1E1B18]/80 text-white text-center py-0.5 rounded truncate px-1">
                    Diamond Throw
                  </span>
                </div>

                <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E4DCD0] group/item">
                  <Image
                    src="/images/products/storage-pouf-teal.jpeg"
                    alt="Foldable Storage Pouf Ottoman"
                    fill
                    sizes="100px"
                    className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold bg-[#1E1B18]/80 text-white text-center py-0.5 rounded truncate px-1">
                    Storage Pouf
                  </span>
                </div>

                <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E4DCD0] group/item">
                  <Image
                    src="/images/products/table-runner-macrame-burlap.jpeg"
                    alt="Artisanal Table Runner"
                    fill
                    sizes="100px"
                    className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold bg-[#1E1B18]/80 text-white text-center py-0.5 rounded truncate px-1">
                    Table Runner
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#FAF7F2] border border-[#E4DCD0] p-3 rounded-2xl shadow-lg flex items-center gap-3 max-w-[240px]">
              <div className="w-9 h-9 rounded-full bg-[#EBF0EC] text-[#4A5D4E] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                IA
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#1E1B18] leading-tight">
                  Kigali Direct Dispatch
                </p>
                <p className="text-[10px] text-[#57524C]">Mon, Tue, Fri & Sat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
