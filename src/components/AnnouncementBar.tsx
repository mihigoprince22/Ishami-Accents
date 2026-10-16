"use client";

import React, { useState } from "react";
import { Truck, MessageCircle, ArrowRight, X } from "lucide-react";
import { WHATSAPP_DISPLAY_PHONE, WHATSAPP_PHONE_NUMBER } from "@/data/products";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Delivery Schedule Announcement"
      className="sticky top-0 z-40 bg-[#1E1B18] text-[#FAF7F2] text-xs py-2 px-3 sm:px-6 transition-all border-b border-black/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Dispatch Notice */}
        <div className="flex-1 flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left flex-wrap sm:flex-nowrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C86D51] text-white font-semibold text-[10px] tracking-wider uppercase">
            <Truck className="w-3 h-3" />
            Dispatch Schedule
          </span>
          <span className="font-medium text-[#FAF7F2]/90 text-[11px] sm:text-xs">
            Deliveries Run: <strong className="text-white">Mon, Tue, Fri & Sat</strong>{" "}
            <span className="hidden md:inline text-white/50">|</span>{" "}
            <span className="opacity-75">Closed Wed, Thu & Sun</span>{" "}
            <span className="hidden lg:inline text-white/50">•</span>{" "}
            <span className="hidden lg:inline text-[#FAF7F2]/90">
              Delivered across Kigali within <strong>4 operating days</strong>
            </span>
          </span>
        </div>

        {/* Right: Instant WhatsApp Link */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
              "Hello Ishami Accents! 🌿 I have a quick question regarding products and Kigali delivery."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#EBF0EC] hover:text-[#C86D51] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp {WHATSAPP_DISPLAY_PHONE}</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="p-1 rounded text-white/60 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
