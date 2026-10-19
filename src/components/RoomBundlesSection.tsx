"use client";

import React from "react";
import Image from "next/image";
import {
  ROOM_BUNDLES,
  RoomBundle,
  formatRwf,
  generateBundleWhatsAppLink,
  LOCATION_DELIVERY_POLICY,
} from "@/data/products";
import { Sparkles, MessageCircle, Check, ArrowRight } from "lucide-react";

export function RoomBundlesSection() {
  return (
    <section id="bundles" className="py-12 sm:py-20 bg-[#EFECE6]/50 border-y border-[#1B3B2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B3B2B] text-[#FAF7F2] text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>Curated Styling Suites</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight mb-4">
            Curated Room Bundles
          </h2>
          <p className="text-sm sm:text-base text-[#57524C] leading-relaxed font-light">
            Designed by Ishami Interior Design to elevate living spaces with harmonious textures.
            Enjoy curated styling with direct WhatsApp dispatch across Kigali.
          </p>
        </div>

        {/* 3 Architectural Bundle Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROOM_BUNDLES.map((bundle: RoomBundle, index: number) => {
            const whatsAppUrl = generateBundleWhatsAppLink(bundle);

            return (
              <div
                key={bundle.id}
                className="group relative flex flex-col justify-between bg-[#FAF7F2] rounded-3xl border border-[#1B3B2B]/12 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C86D51]/50 transition-all duration-300"
              >
                {/* Image & Header */}
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#EFECE6] overflow-hidden">
                    <Image
                      src={bundle.image}
                      alt={bundle.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Tag Top-Left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#C86D51] text-[#FAF7F2] shadow-sm">
                        {bundle.tag}
                      </span>
                    </div>

                    {/* Architectural Index Top-Right */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/50 text-[#FAF7F2] backdrop-blur-xs">
                        BUNDLE 0{index + 1}
                      </span>
                    </div>

                    {/* Subtitle Bottom-Left */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                      <p className="text-xs font-mono uppercase tracking-wider text-white/80">
                        {bundle.subtitle}
                      </p>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                        {bundle.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#57524C] leading-relaxed font-light">
                      {bundle.description}
                    </p>

                    {/* Included Items List */}
                    <div className="space-y-2 pt-2 border-t border-[#1B3B2B]/8">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B3B2B]">
                        Included In This Suite:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#141413]">
                        {bundle.includedItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Designer Tip Pill */}
                    <div className="p-3 rounded-2xl bg-[#EFECE6]/90 border border-[#1B3B2B]/10 text-xs text-[#141413] leading-relaxed font-light">
                      <strong className="text-[#1B3B2B] font-semibold">Designer Styling:</strong>{" "}
                      {bundle.designerTip}
                    </div>
                  </div>
                </div>

                {/* Footer with Price Breakdown and CTA */}
                <div className="p-5 sm:p-6 pt-0 mt-2">
                  <div className="pt-4 border-t border-[#1B3B2B]/10 flex items-end justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#57524C] block">
                        Bundle Special Price
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans text-2xl font-extrabold text-[#1B3B2B]">
                          {bundle.priceRwf > 0 ? formatRwf(bundle.priceRwf) : "Price on Request"}
                        </span>
                        {bundle.originalPriceRwf && bundle.originalPriceRwf > 0 && (
                          <span className="text-xs text-[#8A847C] line-through font-sans">
                            {formatRwf(bundle.originalPriceRwf)}
                          </span>
                        )}
                      </div>
                    </div>

                    {bundle.savingsRwf && bundle.savingsRwf > 0 ? (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                        Save {formatRwf(bundle.savingsRwf)}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-semibold text-[#1B3B2B] bg-[#EFECE6] px-2 py-0.5 rounded-md border border-[#1B3B2B]/10">
                        Inquire
                      </span>
                    )}
                  </div>

                  {/* One-Click WhatsApp Bundle Order Button */}
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-2xl font-semibold text-xs sm:text-sm bg-[#1B3B2B] hover:bg-[#C86D51] text-[#FAF7F2] flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer group/cta"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FAF7F2]" />
                    <span>Order Bundle on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </a>

                  {/* Delivery Notice */}
                  <p className="text-[10px] text-[#57524C] text-center leading-tight mt-2.5 font-light">
                    {LOCATION_DELIVERY_POLICY}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default RoomBundlesSection;
