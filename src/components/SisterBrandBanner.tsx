"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Building2, Sofa, Hammer, Compass } from "lucide-react";
import { PARENT_BRAND_URL } from "@/data/products";

export function SisterBrandBanner() {
  return (
    <section id="parent-brand" className="py-14 sm:py-20 bg-[#4A5D4E] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF7F2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/10 text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm border border-[#FAF7F2]/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Full Architectural & Interior Services</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Looking for Full Custom Furniture or Architectural Interior Design?
            </h2>

            <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed max-w-2xl font-light">
              While <strong>Ishami Accents</strong> brings you curated ready-to-ship decor, our parent
              company — <strong>Ishami Interior Design & Decor Ltd</strong> — delivers turnkey commercial
              spaces, luxury residential interiors, custom millwork, and full Airbnb furnishing setups
              across Rwanda.
            </p>

            {/* Service Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-[#FAF7F2]/10 backdrop-blur-xs border border-[#FAF7F2]/15">
                <Building2 className="w-4 h-4 text-amber-200 mb-1" />
                <h4 className="text-xs font-bold text-white">Interior Architecture</h4>
                <p className="text-[10px] text-[#FAF7F2]/70">Space planning & 3D renders</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF7F2]/10 backdrop-blur-xs border border-[#FAF7F2]/15">
                <Sofa className="w-4 h-4 text-amber-200 mb-1" />
                <h4 className="text-xs font-bold text-white">Custom Furniture</h4>
                <p className="text-[10px] text-[#FAF7F2]/70">Bespoke sofas & joinery</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF7F2]/10 backdrop-blur-xs border border-[#FAF7F2]/15">
                <Hammer className="w-4 h-4 text-amber-200 mb-1" />
                <h4 className="text-xs font-bold text-white">Turnkey Fit-Outs</h4>
                <p className="text-[10px] text-[#FAF7F2]/70">Offices, villas & Airbnbs</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF7F2]/10 backdrop-blur-xs border border-[#FAF7F2]/15">
                <Compass className="w-4 h-4 text-amber-200 mb-1" />
                <h4 className="text-xs font-bold text-white">Decor Consultation</h4>
                <p className="text-[10px] text-[#FAF7F2]/70">Styling & color palettes</p>
              </div>
            </div>
          </div>

          {/* Right Action Card */}
          <div className="lg:col-span-4 bg-[#FAF7F2] text-[#1E1B18] rounded-3xl p-6 sm:p-7 shadow-xl border border-[#FAF7F2]/30 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#4A5D4E]">
                Corporate Portfolio
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E1B18]">
                Ishami Interior Design & Decor Ltd
              </h3>
              <p className="text-xs text-[#57524C] leading-relaxed">
                Explore our past architectural projects, bespoke furniture builds, and request a
                site consultation for your Kigali villa, penthouse, or boutique hotel.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={PARENT_BRAND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-[#4A5D4E] hover:bg-[#3D4E41] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <span>Visit ishamidesign.vercel.app</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
