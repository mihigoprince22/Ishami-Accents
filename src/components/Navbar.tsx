"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, ArrowUpRight, Menu, X, Sparkles, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DeliveryStatusWidget } from "./DeliveryStatusWidget";
import { IshamiAccentsLogo } from "./IshamiAccentsLogo";
import { PARENT_BRAND_URL, WHATSAPP_PHONE_NUMBER } from "@/data/products";

export function Navbar() {
  const { totalCount, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#1B3B2B]/10 text-[#141413] shadow-xs"
          : "bg-transparent text-[#FAF7F2] border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-4">
          {/* Left: Mobile Menu Toggle & Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              className={`md:hidden p-2 rounded-xl transition-colors cursor-pointer ${
                isScrolled
                  ? "text-[#141413] hover:bg-[#EFECE6]"
                  : "text-[#FAF7F2] hover:bg-white/10"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link href="/" className="group flex items-center">
              <IshamiAccentsLogo
                variant={isScrolled ? "dark" : "light"}
                layout="horizontal"
                showSubtitle={true}
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation Quick-Links */}
          <nav
            className={`hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase transition-colors ${
              isScrolled ? "text-[#57524C]" : "text-[#FAF7F2]/80"
            }`}
          >
            <a
              href="#catalog"
              className={`transition-colors hover:underline underline-offset-4 ${
                isScrolled ? "hover:text-[#1B3B2B]" : "hover:text-white"
              }`}
            >
              Collection (11)
            </a>
            <a
              href="#bundles"
              className={`transition-colors hover:underline underline-offset-4 ${
                isScrolled ? "hover:text-[#1B3B2B]" : "hover:text-white"
              }`}
            >
              Room Bundles
            </a>
            <a
              href="#delivery-timeline"
              className={`transition-colors hover:underline underline-offset-4 ${
                isScrolled ? "hover:text-[#1B3B2B]" : "hover:text-white"
              }`}
            >
              Kigali Dispatch
            </a>
            <a
              href={PARENT_BRAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 font-bold transition-colors ${
                isScrolled
                  ? "text-[#1B3B2B] hover:text-[#C86D51]"
                  : "text-[#FAF7F2] hover:text-[#C86D51]"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
              <span>Ishami Design Studio</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </nav>

          {/* Right: CAT Status Pill & Shopping Bag */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Live Delivery Status Widget Pill (Hidden on mobile to keep header clean) */}
            <div className="hidden sm:block">
              <DeliveryStatusWidget variant="pill" />
            </div>

            {/* Shopping Bag Button with Counter */}
            <button
              onClick={toggleCart}
              type="button"
              aria-label="View Shopping Bag"
              className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer shadow-sm ${
                isScrolled
                  ? "bg-[#1B3B2B] text-[#FAF7F2] hover:bg-[#C86D51]"
                  : "bg-white/15 backdrop-blur-md text-[#FAF7F2] border border-white/25 hover:bg-white/25"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              {totalCount > 0 && (
                <span className="flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full text-[11px] font-bold bg-[#C86D51] text-white">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] text-[#141413] border-b border-[#1B3B2B]/10 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <div className="pb-2 border-b border-[#EFECE6]">
              <DeliveryStatusWidget variant="compact" />
            </div>

            <nav className="flex flex-col space-y-3 text-sm font-semibold text-[#141413]">
              <a
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#EFECE6] transition-colors flex items-center justify-between"
              >
                <span>Curated Catalog (11 Items)</span>
                <span className="text-xs text-[#57524C]">01 - 11</span>
              </a>
              <a
                href="#bundles"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#EFECE6] transition-colors flex items-center justify-between"
              >
                <span>Curated Room Bundles</span>
                <span className="text-xs text-[#C86D51] font-bold">Save up to 13,000 RWF</span>
              </a>
              <a
                href="#delivery-timeline"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#EFECE6] transition-colors"
              >
                4-Day Kigali Delivery Schedule
              </a>
              <a
                href={PARENT_BRAND_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg bg-[#EFECE6] text-[#1B3B2B] flex items-center justify-between font-bold"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C86D51]" />
                  <span>Ishami Interior Design Studio</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>

            <div className="pt-2 border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#57524C]">
              <span>WhatsApp Orders: +250 788 310 401</span>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C86D51] font-bold"
              >
                Chat Now ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;
