"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, ArrowUpRight, Menu, X, Sparkles, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DeliveryStatusWidget } from "./DeliveryStatusWidget";
import { PARENT_BRAND_URL, WHATSAPP_PHONE_NUMBER } from "@/data/products";

export function Navbar() {
  const { totalCount, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E4DCD0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          {/* Left: Mobile Menu Toggle & Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-xl text-[#1E1B18] hover:bg-[#F0EAE1] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link href="/" className="group flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1E1B18] group-hover:text-[#C86D51] transition-colors">
                  ISHAMI ACCENTS
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F0EAE1] text-[#4A5D4E] border border-[#E4DCD0]">
                  Retail
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#57524C] uppercase">
                Curated Home Decor & Lifestyle • Kigali
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Quick-Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#57524C]">
            <a
              href="#catalog"
              className="hover:text-[#1E1B18] transition-colors hover:underline underline-offset-4"
            >
              All Items (11)
            </a>
            <a
              href="#catalog"
              className="hover:text-[#1E1B18] transition-colors hover:underline underline-offset-4"
            >
              Wall & Living
            </a>
            <a
              href="#catalog"
              className="hover:text-[#1E1B18] transition-colors hover:underline underline-offset-4"
            >
              Smart Storage
            </a>
            <a
              href="#delivery-timeline"
              className="hover:text-[#1E1B18] transition-colors hover:underline underline-offset-4"
            >
              Delivery Timeline
            </a>
            <a
              href="#parent-brand"
              className="hover:text-[#4A5D4E] transition-colors flex items-center gap-1 font-bold text-[#4A5D4E]"
            >
              Custom Interior Design
            </a>
          </nav>

          {/* Right: CAT Status Pill, Sister Link, & Shopping Bag */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Delivery Status Widget Pill (Hidden on smallest mobile to prevent header overflow) */}
            <div className="hidden sm:block">
              <DeliveryStatusWidget variant="pill" />
            </div>

            {/* Sister Brand Link */}
            <a
              href={PARENT_BRAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#EBF0EC] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-[#FAF7F2] border border-[#4A5D4E]/20 transition-all duration-200"
              title="Visit parent interior design architecture website"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ishami Design Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Shopping Bag Button with Counter */}
            <button
              onClick={toggleCart}
              type="button"
              className="relative p-2.5 sm:px-4 sm:py-2 rounded-full bg-[#1E1B18] text-[#FAF7F2] hover:bg-[#C86D51] transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer group"
              aria-label={`Shopping Bag, ${totalCount} items`}
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#C86D51] group-hover:bg-[#1E1B18] text-white text-[10px] font-bold flex items-center justify-center animate-in zoom-in border-2 border-[#1E1B18]">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold">
                Bag {totalCount > 0 && `(${totalCount})`}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E4DCD0] space-y-3 animate-in slide-in-from-top-2 duration-200">
            {/* Mobile CAT Dispatch Pill */}
            <div className="pb-2">
              <DeliveryStatusWidget variant="pill" className="w-full justify-center" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-[#F0EAE1] text-[#1E1B18] text-center"
              >
                Browse Catalog (11)
              </a>
              <a
                href="#delivery-timeline"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-[#F0EAE1] text-[#1E1B18] text-center"
              >
                4-Day Delivery Guide
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                  "Hello Ishami Accents! 🌿 I would like to chat with your concierge team."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#EBF0EC] text-[#4A5D4E] flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href={PARENT_BRAND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#EBF0EC] text-[#4A5D4E] flex items-center justify-center gap-1"
              >
                <span>Ishami Design Ltd</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
