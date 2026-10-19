"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  ArrowUpRight,
  Clock,
  MapPin,
  Heart,
  Truck,
  Sparkles,
} from "lucide-react";
import {
  WHATSAPP_DISPLAY_PHONE,
  WHATSAPP_PHONE_NUMBER,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  PARENT_BRAND_URL,
} from "@/data/products";
import { IshamiAccentsLogo } from "./IshamiAccentsLogo";

export function Footer() {
  return (
    <footer className="bg-[#1B3B2B] text-[#FAF7F2] pt-16 pb-24 sm:pb-16 border-t border-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Emblem & Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <IshamiAccentsLogo variant="light" layout="stacked" showSubtitle={true} />
            </Link>

            <p className="text-xs text-[#FAF7F2]/80 leading-relaxed max-w-sm font-light">
              Thoughtfully curated retail home decor, tactile textiles, and smart organization
              pieces based in Kigali, Rwanda. Designed for warm, modern living spaces and seamless
              WhatsApp ordering.
            </p>

            {/* Sister Brand Reference */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2 max-w-sm">
              <div className="flex items-center justify-between text-xs font-semibold text-[#FAF7F2]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
                  <span>Sister Brand</span>
                </span>
                <a
                  href={PARENT_BRAND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C86D51] underline underline-offset-4 flex items-center gap-1 text-[11px] font-bold"
                >
                  <span>Ishami Design Ltd</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[11px] text-[#FAF7F2]/70 leading-normal font-light">
                Looking for corporate interior architecture, 3D renderings, custom millwork, or
                turnkey fit-outs? Visit our parent portfolio site.
              </p>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C86D51]" />
              <span>Weekly Dispatch Schedule</span>
            </h4>

            <div className="rounded-2xl bg-white/10 border border-white/15 p-4 space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-emerald-300 font-medium">
                <span>Monday & Tuesday</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-700/60 text-[11px]">
                  08:30 – 17:30 (Active)
                </span>
              </div>
              <div className="flex justify-between items-center text-white/50">
                <span>Wednesday & Thursday</span>
                <span className="text-[11px] italic">Closed (Restock & Prep)</span>
              </div>
              <div className="flex justify-between items-center text-emerald-300 font-medium">
                <span>Friday & Saturday</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-700/60 text-[11px]">
                  08:30 – 18:00 (Active)
                </span>
              </div>
              <div className="flex justify-between items-center text-white/50">
                <span>Sunday</span>
                <span className="text-[11px] italic">Closed (Orders Queued)</span>
              </div>
            </div>

            <p className="text-[11px] text-[#FAF7F2]/75 flex items-center gap-1.5 pt-1">
              <Truck className="w-3.5 h-3.5 text-[#C86D51]" />
              <span>All orders delivered within 4 operating days across Kigali.</span>
            </p>
          </div>

          {/* Social Commerce Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect & Shop
            </h4>

            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                    "Hello Ishami Accents! 🌿 I would like to order or ask about products."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/85 hover:text-[#C86D51] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY_PHONE}</span>
                </a>
              </li>

              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/85 hover:text-[#C86D51] transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-[#C86D51] shrink-0 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram: {INSTAGRAM_HANDLE}</span>
                </a>
              </li>

              <li>
                <a
                  href={`https://tiktok.com/@${TIKTOK_HANDLE.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/85 hover:text-[#C86D51] transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-white text-[#1B3B2B] font-bold text-[9px] flex items-center justify-center shrink-0">
                    TT
                  </span>
                  <span>TikTok: {TIKTOK_HANDLE}</span>
                </a>
              </li>

              <li className="flex items-center gap-2 text-white/75 pt-1">
                <MapPin className="w-4 h-4 text-[#C86D51] shrink-0" />
                <span>Kigali, Rwanda (Delivery Citywide)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Craftsmanship */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/70 font-light">
          <p>© 2026 Ishami Accents. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <span>Sister brand to</span>
            <a
              href={PARENT_BRAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline underline-offset-4 hover:text-[#C86D51]"
            >
              Ishami Interior Design & Decor Ltd
            </a>
          </p>

          <p className="flex items-center gap-1 text-[11px]">
            <span>Crafted for modern Kigali living</span>
            <Heart className="w-3 h-3 text-[#C86D51] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
