"use client";

import React, { useState, useEffect } from "react";
import { getCatDeliveryStatus, DeliveryStatusInfo } from "@/data/products";
import { Clock, Calendar, CheckCircle2, AlertCircle, ChevronRight, X } from "lucide-react";

interface DeliveryStatusWidgetProps {
  variant?: "pill" | "banner" | "compact" | "card";
  className?: string;
  showModalTrigger?: boolean;
}

export function DeliveryStatusWidget({
  variant = "pill",
  className = "",
  showModalTrigger = true,
}: DeliveryStatusWidgetProps) {
  const [status, setStatus] = useState<DeliveryStatusInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initial fetch in Africa/Kigali time
    setStatus(getCatDeliveryStatus());

    // Update every minute to keep time accurate
    const interval = setInterval(() => {
      setStatus(getCatDeliveryStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!status) {
    // Initial SSR/mount placeholder
    return (
      <div className={`inline-flex items-center gap-2 text-xs text-[#57524C] animate-pulse ${className}`}>
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>Checking Kigali Dispatch Schedule...</span>
      </div>
    );
  }

  const { isOpen, dayName, catTimeStr, message, nextOperatingDay } = status;

  return (
    <>
      {variant === "pill" && (
        <button
          onClick={() => showModalTrigger && setIsModalOpen(true)}
          type="button"
          className={`group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
            isOpen
              ? "bg-emerald-50/90 text-emerald-900 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300"
              : "bg-amber-50/90 text-amber-900 border-amber-200 hover:bg-amber-100 hover:border-amber-300"
          } ${className}`}
          title="Click to view full weekly delivery schedule"
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isOpen ? "bg-emerald-400" : "bg-amber-400"
              }`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isOpen ? "bg-emerald-600" : "bg-amber-600"
              }`}
            ></span>
          </span>
          <span className="font-semibold tracking-wide">
            {isOpen ? "KIGALI DISPATCH OPEN" : "CLOSED TODAY"}
          </span>
          <span className="hidden sm:inline text-xs opacity-75">({dayName} • {catTimeStr})</span>
          {showModalTrigger && (
            <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
          )}
        </button>
      )}

      {variant === "compact" && (
        <div
          className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs leading-relaxed ${
            isOpen
              ? "bg-emerald-50/80 border-emerald-200/80 text-emerald-900"
              : "bg-amber-50/80 border-amber-200/80 text-amber-900"
          } ${className}`}
        >
          {isOpen ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          )}
          <div className="flex-1">
            <p className="font-semibold text-[13px] mb-0.5">
              {isOpen ? "🟢 Dispatching Today Across Kigali" : `🕒 Non-Delivery Day (${dayName})`}
            </p>
            <p className="opacity-90">{message}</p>
          </div>
        </div>
      )}

      {variant === "banner" && (
        <div
          className={`w-full py-2 px-4 text-xs md:text-sm font-medium border-y transition-colors ${
            isOpen
              ? "bg-[#EBF0EC] border-[#4A5D4E]/20 text-[#1E1B18]"
              : "bg-[#F7EDE8] border-[#C86D51]/20 text-[#1E1B18]"
          } ${className}`}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${
                  isOpen ? "bg-emerald-600 animate-pulse" : "bg-[#C86D51]"
                }`}
              ></span>
              <span className="font-semibold">
                {isOpen ? "🟢 Operating Today in Kigali:" : "🕒 Dispatch Notice:"}
              </span>
              <span>{message}</span>
            </div>
            {showModalTrigger && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-semibold underline underline-offset-4 hover:text-[#C86D51] transition-colors whitespace-nowrap cursor-pointer"
              >
                View 4-Day Calendar & Kigali Zones →
              </button>
            )}
          </div>
        </div>
      )}

      {variant === "card" && (
        <div
          className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            isOpen
              ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
              : "bg-[#F7EDE8]/80 border-[#C86D51]/30 text-[#1E1B18]"
          } ${className}`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${
                  isOpen ? "bg-emerald-600 animate-pulse" : "bg-[#C86D51]"
                }`}
              ></span>
              <span className="text-xs font-bold uppercase tracking-wider">
                {isOpen ? "🟢 Active Dispatch Day" : "🕒 Queued For Next Dispatch"}
              </span>
            </div>
            <span className="text-xs font-mono text-[#57524C]">{catTimeStr}</span>
          </div>

          <p className="text-sm font-medium mb-3 leading-snug">{message}</p>

          <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-[#57524C]">
            <span>Operating Days: <strong>Mon, Tue, Fri & Sat</strong></span>
            {showModalTrigger && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="font-semibold text-[#C86D51] hover:underline cursor-pointer"
              >
                Schedule details →
              </button>
            )}
          </div>
        </div>
      )}

      {/* Interactive Delivery Schedule Details Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl p-6 shadow-2xl border border-[#E4DCD0] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#57524C] hover:bg-[#F0EAE1] hover:text-[#1E1B18] transition-colors"
              aria-label="Close delivery schedule modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-2 text-[#4A5D4E]">
              <Calendar className="w-5 h-5 text-[#4A5D4E]" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Kigali Operating Calendar
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1E1B18] mb-2">
              Our 4-Day Weekly Dispatch
            </h3>

            <p className="text-xs text-[#57524C] mb-4 leading-relaxed">
              To guarantee thorough quality control, careful gift-ready packaging, and sustainable
              logistics across Kigali, our delivery fleet operates exclusively 4 days a week:
            </p>

            {/* Weekly calendar matrix */}
            <div className="space-y-2 mb-5">
              {[
                { day: "Monday", status: "Active Dispatch", open: true, note: "Deliveries run across Kigali" },
                { day: "Tuesday", status: "Active Dispatch", open: true, note: "Deliveries run across Kigali" },
                { day: "Wednesday", status: "Closed", open: false, note: "Orders queued for Friday dispatch" },
                { day: "Thursday", status: "Closed", open: false, note: "Inventory prep & packaging" },
                { day: "Friday", status: "Active Dispatch", open: true, note: "Deliveries run across Kigali" },
                { day: "Saturday", status: "Active Dispatch", open: true, note: "Weekend home & Airbnb dispatches" },
                { day: "Sunday", status: "Closed", open: false, note: "Orders queued for Monday dispatch" },
              ].map((item) => {
                const isCurrent = item.day === dayName;
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
                      isCurrent
                        ? item.open
                          ? "bg-emerald-100/80 border-emerald-300 font-semibold text-emerald-950"
                          : "bg-amber-100/80 border-amber-300 font-semibold text-amber-950"
                        : item.open
                        ? "bg-[#F0EAE1]/70 border-[#E4DCD0] text-[#1E1B18]"
                        : "bg-neutral-100/50 border-neutral-200 text-[#8A847C]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.open ? "bg-emerald-600" : "bg-neutral-400"
                        }`}
                      ></span>
                      <span className="font-medium">
                        {item.day} {isCurrent && "(Today)"}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-md ${
                        item.open
                          ? "bg-emerald-200/60 text-emerald-900 font-semibold"
                          : "bg-neutral-200/60 text-neutral-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Delivery Guarantee Pill */}
            <div className="bg-[#EBF0EC] border border-[#4A5D4E]/20 rounded-2xl p-4 text-xs text-[#1E1B18] space-y-1.5">
              <div className="flex items-center gap-2 text-[#4A5D4E] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Kigali 4-Operating-Day Delivery Guarantee</span>
              </div>
              <p className="text-[11.5px] text-[#57524C] leading-relaxed">
                Whether you live in Kimihurura, Nyarutarama, Kiyovu, Gacuriro, or Kanombe, your
                package will reach you within 4 operating days from confirmation. You can inspect
                your decor items upon arrival before payment.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-5 w-full py-2.5 px-4 rounded-xl bg-[#1E1B18] text-[#FAF7F2] text-xs font-semibold hover:bg-black transition-colors"
            >
              Got it, continue shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
}
