"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { PARENT_BRAND_URL } from "@/data/products";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      q: "What days do deliveries operate in Kigali?",
      a: "Our dispatch fleet runs strictly 4 days a week: Monday, Tuesday, Friday, and Saturday. We remain closed on Wednesday, Thursday, and Sunday for restock, thorough quality inspection, and artisan packaging. All orders are delivered within 4 operating days.",
    },
    {
      q: "What happens if I place an order on Wednesday, Thursday, or Sunday?",
      a: "Our WhatsApp concierge will receive and confirm your order immediately! Your items will be carefully reserved and prepared for priority dispatch on our next active operating day (Wednesday & Thursday orders dispatch on Friday; Sunday orders dispatch on Monday).",
    },
    {
      q: "How does payment work? Do I need a credit card?",
      a: "No credit card is required! We use a frictionless WhatsApp ordering workflow. You can inspect your items at your doorstep across Kigali before paying via MTN Mobile Money (MoMo), Airtel Money, or cash directly to the courier.",
    },
    {
      q: "Can I inspect the home decor items upon delivery?",
      a: "Absolutely! We encourage you to touch the macramé cotton cord, feel the diamond knit blanket, and check the ottoman dimensions when our courier arrives. We pride ourselves on offering pieces that look even better in real life than on screen.",
    },
    {
      q: "Which neighborhoods in Kigali do you deliver to?",
      a: "We deliver across all sectors and neighborhoods of Kigali, including Kimihurura, Kiyovu, Nyarutarama, Gacuriro, Kacyiru, Kibagabaga, Remera, Kanombe, Gisozi, Nyamirambo, Kicukiro, Kagugu, and beyond.",
    },
    {
      q: "What if I need custom built-in furniture or complete interior design?",
      a: (
        <span>
          For custom architectural woodwork, bespoke sofas, or full turnkey Airbnb styling, please
          connect with our sister company,{" "}
          <a
            href={PARENT_BRAND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline text-[#1B3B2B] hover:text-[#C86D51]"
          >
            Ishami Interior Design & Decor Ltd ↗
          </a>
          . They handle complete residential and commercial interior architecture.
        </span>
      ),
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#EFECE6]/40 border-b border-[#1B3B2B]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] text-[#1B3B2B] text-xs font-mono font-bold uppercase tracking-wider border border-[#1B3B2B]/10">
            <HelpCircle className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141413]">
            Frequently Asked Questions
          </h2>

          <p className="text-xs sm:text-sm text-[#57524C] font-light">
            Everything you need to know about our Kigali delivery schedule, ordering, and payments.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FAF7F2] rounded-2xl border border-[#1B3B2B]/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#141413] hover:text-[#C86D51] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8A847C] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#C86D51]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#57524C] leading-relaxed border-t border-[#1B3B2B]/8 pt-3 font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FaqSection;
