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
import { getCatDeliveryStatus, DeliveryStatusInfo } from "@/data/products";

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
        "Tap 'Buy on WhatsApp' or send your curated shopping bag. Our Kigali team immediately confirms item availability and answers any sizing or styling questions.",
    },
    {
      step: "02",
      icon: PackageCheck,
      title: "Quality Check & Gift Wrap",
      subtitle: "Hand-inspected in Kigali",
      description:
        "Each macramé hanging, throw blanket, or storage piece is individually inspected for fiber integrity, stitch perfection, and packaged safely with our signature ribbon.",
    },
    {
      step: "03",
      icon: Truck,
      title: "Scheduled Dispatch Day",
      subtitle: "Runs Mon, Tue, Fri & Sat",
      description:
        "Orders are dispatched strictly on our active operating days. If you order on a closed day (Wed, Thu, Sun), your package gets top priority on the next dispatch morning.",
    },
    {
      step: "04",
      icon: Home,
      title: "Doorstep Delivery & Inspection",
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
    { day: "Sunday", open: false, tag: "🔒 Closed / Weekend Rest" },
  ];

  return (
    <section
      id="delivery-timeline"
      className="py-14 sm:py-20 bg-[#F0EAE1]/50 border-y border-[#E4DCD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF0EC] text-[#4A5D4E] text-xs font-bold uppercase tracking-wider border border-[#4A5D4E]/20">
            <Truck className="w-3.5 h-3.5" />
            <span>Kigali Delivery Promise</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E1B18] tracking-tight">
            How Delivery Works
          </h2>

          <p className="text-xs sm:text-sm text-[#57524C] leading-relaxed">
            We operate on a focused 4-day weekly dispatch calendar to ensure every home accent is
            meticulously inspected and packaged with boutique care.
          </p>
        </div>

        {/* 4-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#FAF7F2] rounded-3xl p-6 border border-[#E4DCD0] shadow-xs flex flex-col justify-between group hover:border-[#C86D51]/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0EAE1] text-[#C86D51] flex items-center justify-center group-hover:bg-[#C86D51] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#E4DCD0] group-hover:text-[#C86D51]/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C86D51]">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1E1B18] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57524C] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#E4DCD0] text-[#1E1B18] flex items-center justify-center text-[10px] font-bold">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Weekly Dispatch Calendar & Neighborhood Coverage Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E4DCD0] shadow-sm">
          {/* Left: 7-Day Matrix */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C86D51]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1B18]">
                  Weekly Dispatch Calendar
                </h3>
              </div>
              <span className="text-xs font-mono text-[#57524C]">
                Current Time: {timeStr}
              </span>
            </div>

            <p className="text-xs text-[#57524C]">
              Today is <strong>{currentDayName}</strong>.{" "}
              {isOpenToday ? (
                <span className="text-emerald-700 font-semibold">
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
                          ? "bg-emerald-100 border-emerald-400 font-bold text-emerald-950 ring-2 ring-emerald-300"
                          : "bg-amber-100 border-amber-400 font-bold text-amber-950 ring-2 ring-amber-300"
                        : d.open
                        ? "bg-[#F0EAE1]/70 border-[#E4DCD0] text-[#1E1B18]"
                        : "bg-neutral-100/60 border-neutral-200 text-[#8A847C]"
                    }`}
                  >
                    <p className="text-xs font-bold mb-1">
                      {d.day} {isToday && "(Today)"}
                    </p>
                    <span
                      className={`text-[10px] inline-block px-2 py-0.5 rounded-full ${
                        d.open
                          ? "bg-emerald-600 text-white font-semibold"
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

          {/* Right: Kigali Coverage & Delivery Guarantee */}
          <div className="lg:col-span-5 bg-[#F0EAE1] rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 border border-[#E4DCD0]">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4A5D4E]">
                <MapPin className="w-4 h-4 text-[#4A5D4E]" />
                <span>Kigali-Wide Coverage</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1E1B18]">
                Delivered Within 4 Operating Days
              </h4>
              <p className="text-xs text-[#57524C] leading-relaxed">
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
                    className="text-[11px] font-medium bg-[#FAF7F2] text-[#1E1B18] px-2 py-0.5 rounded-md border border-[#E4DCD0]"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#E4DCD0] flex items-center gap-2 text-xs text-[#4A5D4E] font-semibold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>MoMo payment upon arrival after inspecting items</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
