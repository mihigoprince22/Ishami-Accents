"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, MessageCircle, ArrowUp, Sparkles } from "lucide-react";
import { WHATSAPP_PHONE_NUMBER, formatRwf } from "@/data/products";

export function MobileBottomBar() {
  const { totalCount, totalPriceRwf, openCart } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E4DCD0] p-2.5 shadow-2xl pb-safe">
      <div className="flex items-center justify-between gap-2">
        {/* Quick WhatsApp Concierge Button */}
        <a
          href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
            "Hello Ishami Accents! 🌿 I am browsing your retail collection on mobile."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-2xl bg-[#F0EAE1] text-[#1E1B18] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#E4DCD0] active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* View Cart Pill / Action Button */}
        <button
          onClick={openCart}
          type="button"
          className="flex-[1.4] py-2.5 px-4 rounded-2xl bg-[#1E1B18] text-[#FAF7F2] font-bold text-xs flex items-center justify-between shadow-lg active:scale-95 transition-transform cursor-pointer"
        >
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-[#C86D51] text-white text-[9px] font-bold flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </div>
            <span>Bag</span>
          </div>

          <span className="text-[#C86D51] font-sans font-bold">
            {totalCount > 0 ? formatRwf(totalPriceRwf) : "0 RWF"}
          </span>
        </button>
      </div>
    </div>
  );
}
