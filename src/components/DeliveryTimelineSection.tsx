"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  PackageCheck,
  Truck,
  Home,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
} from "lucide-react";
import {
  getCatDeliveryStatus,
  DeliveryStatusInfo,
  LOCATION_DELIVERY_POLICY,
} from "@/data/products";

export function DeliveryTimelineSection() {
  const [currentStatus, setCurrentStatus] = useState<DeliveryStatusInfo | null>(null);

  useEffect(() => {
    setCurrentStatus(getCatDeliveryStatus());
  }, []);

  const currentDayName = currentStatus?.dayName || "Operating Day";
  const isOpenToday = currentStatus ? currentStatus.isOpen : true;
  const nextDay = currentStatus?.nextOperatingDay || "Next Operating Day";
  const timeStr = currentStatus?.catTimeStr || "Kigali CAT";

  const STEPS = [
    {
      step: "01",
      icon: MessageCircle,
      title: "Place Order via WhatsApp",
      subtitle: "Instant Concierge Response",
      description:
        "Tap 'Buy on WA' or submit your curated shopping bag. Our Kigali studio immediately confirms stock, notes your neighborhood, and communicates your specific delivery fee.",
    },
    {
      step: "02",
      icon: PackageCheck,
      title: "Quality Check & Wrap",
      subtitle: "Hand-inspected in Kigali",
      description:
        "Each macramé hanging, throw blanket, or storage container is individually inspected for fiber integrity and packed carefully with signature Ishami wrap.",
    },
    {
      step: "03",
      icon: Truck,
      title: "Scheduled Dispatch Day",
      subtitle: "Runs Mon, Tue, Fri & Sat",
      description:
        "Orders are dispatched strictly on our active operating days. If placed on a closed day (Wed, Thu, Sun), your order receives priority dispatch on our next operating morning.",
    },
    {
      step: "04",
      icon: Home,
      title: "Doorstep Delivery & Inspect",
      subtitle: "Within 4 Operating Days",
      description:
        "Direct delivery to your residence, office, or Airbnb across Kigali. Inspect the texture, dimensions, and craftsmanship in person before completing payment via MoMo.",
    },
  ];

  const DAYS = [
    { day: "Monday", open: true, tag: "🟢 Dispatch Active" },
    { day: "Tuesday", open: true, tag: "🟢 Dispatch Active" },
    { day: "Wednesday", open: false, tag: "🔒 Closed / Logistics" },
    { day: "Thursday", open: false, tag: "🔒 Closed / Restock" },
    { day: "Friday", open: true, tag: "🟢 Dispatch Active" },
    { day: "Saturday", open: true, tag: "🟢 Dispatch Active" },
    { day: "Sunday", open: false, tag: "🔒 Closed / Studio Rest" },
  ];

  return (
    <section
      id="delivery-timeline"
      className="py-14 sm:py-20 bg-[#FAF7F2] border-y border-[#1B3B2B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B3B2B] text-[#FAF7F2] text-xs font-mono uppercase tracking-widest">
            <Truck className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>Kigali Delivery Promise</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight">
            How Delivery Works
          </h2>

          <p className="text-xs sm:text-sm text-[#57524C] leading-relaxed font-light">
            We operate on a focused 4-day weekly dispatch calendar to ensure every home accent is
            meticulously inspected, packaged, and personally coordinated.
          </p>
        </div>

        {/* 4-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#EFECE6]/60 rounded-3xl p-6 border border-[#1B3B2B]/10 shadow-xs flex flex-col justify-between group hover:border-[#C86D51]/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#1B3B2B] flex items-center justify-center group-hover:bg-[#C86D51] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#1B3B2B]/20 group-hover:text-[#C86D51]/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C86D51]">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#141413] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57524C] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#1B3B2B] text-white flex items-center justify-center text-[10px] font-bold">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Weekly Dispatch Calendar & Neighborhood Coverage Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#EFECE6] rounded-3xl p-6 sm:p-8 border border-[#1B3B2B]/12 shadow-sm">
          {/* Left: 7-Day Matrix */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C86D51]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141413]">
                  Weekly Dispatch Calendar
                </h3>
              </div>
              <span className="text-xs font-mono text-[#57524C]">
                {timeStr}
              </span>
            </div>

            <p className="text-xs text-[#57524C]">
              Today is <strong>{currentDayName}</strong>.{" "}
              {isOpenToday ? (
                <span className="text-emerald-800 font-semibold">
                  We are actively preparing and dispatching packages today!
                </span>
              ) : (
                <span className="text-amber-800 font-semibold">
                  Today is a closed day. Next dispatch runs on {nextDay}.
                </span>
              )}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {DAYS.map((d) => {
                const isToday = d.day === currentDayName;
                return (
                  <div
                    key={d.day}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      isToday
                        ? d.open
                          ? "bg-emerald-100 border-emerald-500 font-bold text-emerald-950 ring-2 ring-emerald-400"
                          : "bg-amber-100 border-amber-500 font-bold text-amber-950 ring-2 ring-amber-400"
                        : d.open
                        ? "bg-[#FAF7F2] border-[#1B3B2B]/10 text-[#141413]"
                        : "bg-neutral-100/70 border-neutral-200 text-[#8A847C]"
                    }`}
                  >
                    <p className="text-xs font-bold mb-1">
                      {d.day} {isToday && "(Today)"}
                    </p>
                    <span
                      className={`text-[10px] inline-block px-2 py-0.5 rounded-full ${
                        d.open
                          ? "bg-[#1B3B2B] text-white font-semibold"
                          : "bg-neutral-300 text-neutral-700"
                      }`}
                    >
                      {d.open ? "Open" : "Closed"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Kigali Coverage & Location Policy */}
          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 border border-[#1B3B2B]/10">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1B3B2B]">
                <MapPin className="w-4 h-4 text-[#C86D51]" />
                <span>Kigali-Wide Coverage</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#141413]">
                Delivered Within 4 Operating Days
              </h4>
              <p className="text-xs text-[#57524C] leading-relaxed font-light">
                We deliver to all residential and commercial zones across Kigali, including:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Kimihurura",
                  "Kiyovu",
                  "Nyarutarama",
                  "Gacuriro",
                  "Kacyiru",
                  "Kibagabaga",
                  "Remera",
                  "Kanombe",
                  "Gisozi",
                  "Nyamirambo",
                  "Kagugu",
                  "Kicukiro",
                ].map((zone) => (
                  <span
                    key={zone}
                    className="text-[11px] font-medium bg-[#EFECE6] text-[#141413] px-2.5 py-1 rounded-md border border-[#1B3B2B]/10"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            {/* Explicit Policy Notice */}
            <div className="pt-3 border-t border-[#1B3B2B]/10 space-y-2">
              <div className="p-3 rounded-xl bg-[#EFECE6] border border-[#1B3B2B]/10 text-xs text-[#141413] leading-relaxed">
                <strong className="text-[#1B3B2B] font-semibold">Delivery Policy:</strong>{" "}
                {LOCATION_DELIVERY_POLICY}
              </div>

              <div className="flex items-center gap-2 text-xs text-[#1B3B2B] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C86D51] shrink-0" />
                <span>MoMo payment upon arrival after inspecting items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DeliveryTimelineSection;
