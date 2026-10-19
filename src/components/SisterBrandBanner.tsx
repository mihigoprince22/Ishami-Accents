"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Building2, Sofa, Hammer, Compass, Layers } from "lucide-react";
import { PARENT_BRAND_URL } from "@/data/products";

export function SisterBrandBanner() {
  return (
    <section id="parent-brand" className="py-16 sm:py-24 bg-[#1B3B2B] text-[#FAF7F2] relative overflow-hidden border-t border-black/30">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C86D51]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/40 rounded-full blur-2xl pointer-events-none" />

      {/* Exposed 1px architectural grid lines */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none opacity-15">
        <div className="w-full h-full border-x border-[#FAF7F2]/25 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-[#FAF7F2]/20 h-full" />
          <div className="border-r border-[#FAF7F2]/20 h-full hidden md:block" />
          <div className="border-r border-[#FAF7F2]/20 h-full hidden md:block" />
          <div className="h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FAF7F2] text-xs font-mono tracking-widest uppercase backdrop-blur-sm border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
              <span>Full Architectural & Interior Services • Kigali</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-[1.12]">
              Looking for Custom Furniture, Space Setups & Architectural Design?
            </h2>

            <p className="text-sm sm:text-base text-[#FAF7F2]/85 leading-relaxed max-w-2xl font-light">
              While <strong>Ishami Accents</strong> is our curated ready-to-dispatch retail boutique, our
              parent studio — <strong>Ishami Interior Design & Decor Ltd</strong> — delivers full-scale
              interior architecture, custom timber & steel furniture, acoustic wall installations,
              and luxury commercial & residential turnkey fit-outs across Rwanda.
            </p>

            {/* Service Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <Sofa className="w-4 h-4 text-[#C86D51] mb-1.5" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Custom Furniture</h4>
                <p className="text-[11px] text-[#FAF7F2]/75">Bespoke sofas, tables & cabinetry</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <Building2 className="w-4 h-4 text-[#C86D51] mb-1.5" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Space Setups</h4>
                <p className="text-[11px] text-[#FAF7F2]/75">Turnkey offices, villas & Airbnbs</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <Layers className="w-4 h-4 text-[#C86D51] mb-1.5" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Wall Installations</h4>
                <p className="text-[11px] text-[#FAF7F2]/75">Acoustic paneling & art features</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                <Hammer className="w-4 h-4 text-[#C86D51] mb-1.5" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Flooring & Finishes</h4>
                <p className="text-[11px] text-[#FAF7F2]/75">Engineered wood & tiles</p>
              </div>
            </div>
          </div>

          {/* Right Action Card */}
          <div className="lg:col-span-4 bg-[#FAF7F2] text-[#141413] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#FAF7F2]/20 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#C86D51]">
                Parent Brand Portfolio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141413] leading-tight">
                Ishami Interior Design & Decor Ltd
              </h3>
              <p className="text-xs sm:text-sm text-[#57524C] leading-relaxed font-light">
                Explore our corporate architectural portfolio, high-end residential case studies, and book
                a site consultation for your Kigali property.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={PARENT_BRAND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#1B3B2B] hover:bg-[#C86D51] text-[#FAF7F2] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
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
export default SisterBrandBanner;
