"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { CheckCircle2, ShoppingBag, X } from "lucide-react";

export function Toast() {
  const { toastMessage, clearToast, openCart } = useCart();

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, clearToast]);

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-50 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#1E1B18] text-[#FAF7F2] rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-white/10 flex items-center gap-3 max-w-sm">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <p className="text-xs font-medium text-white flex-1">{toastMessage}</p>

        <button
          onClick={openCart}
          className="px-2.5 py-1 rounded-lg bg-[#C86D51] text-white text-[11px] font-bold hover:bg-[#B2583D] transition-colors whitespace-nowrap cursor-pointer"
        >
          View Bag
        </button>

        <button
          onClick={clearToast}
          aria-label="Close notification"
          className="p-1 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
