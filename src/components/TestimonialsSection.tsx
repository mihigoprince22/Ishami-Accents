"use client";

import React from "react";
import { Star, CheckCircle, Quote } from "lucide-react";

export function TestimonialsSection() {
  const REVIEWS = [
    {
      name: "Solange M.",
      location: "Kiyovu, Kigali",
      itemBought: "Handcrafted Macramé Fiber Wall Hanging",
      stars: 5,
      date: "October 2026",
      text: "The macramé piece transformed my living room wall completely. The solid wood rod is smooth and heavy, and the green dip-dye tones look even richer in person than on Instagram. Being able to inspect it before paying via MoMo made it a no-brainer.",
    },
    {
      name: "Jean-Paul K.",
      location: "Gacuriro, Kigali",
      itemBought: "Storage Pouf Ottoman & Laundry Hamper",
      stars: 5,
      date: "September 2026",
      text: "The foldable storage pouf holds all my extra bedding and doubles as a sturdy seat when friends visit. Dispatched on Friday as promised and delivered straight to my gate in Gacuriro. Super smooth WhatsApp ordering!",
    },
    {
      name: "Aline U.",
      location: "Nyarutarama, Kigali",
      itemBought: "Artisanal Table Runner & Diamond Throw",
      stars: 5,
      date: "October 2026",
      text: "Ordered via WhatsApp on Tuesday afternoon and received it Thursday morning right on schedule. The diamond knit blanket is incredibly soft for cool Kigali evenings. Excellent sister brand to Ishami Design!",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E4DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EAE1] text-[#C86D51] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Kigali Customer Love</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18]">
            Loved in Homes Across Kigali
          </h2>

          <p className="text-xs sm:text-sm text-[#57524C]">
            Real feedback from homeowners, apartment residents, and Airbnb hosts who shop our accents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-[#F0EAE1]/70 rounded-3xl p-6 border border-[#E4DCD0] flex flex-col justify-between space-y-4 hover:border-[#C86D51]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(review.stars)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#8A847C]/40" />
                </div>

                <p className="text-xs sm:text-sm text-[#1E1B18] leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#E4DCD0] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1E1B18] flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3 h-3 text-[#4A5D4E]" />
                  </h4>
                  <p className="text-[11px] text-[#57524C]">{review.location}</p>
                </div>
                <span className="text-[10px] text-[#8A847C] bg-white/60 px-2 py-0.5 rounded-md">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
