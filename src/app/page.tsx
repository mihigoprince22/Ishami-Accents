"use client";

import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilterBar } from "@/components/CategoryFilterBar";
import { ProductGrid } from "@/components/ProductGrid";
import { DeliveryTimelineSection } from "@/components/DeliveryTimelineSection";
import { SisterBrandBanner } from "@/components/SisterBrandBanner";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductQuickViewModal } from "@/components/ProductQuickViewModal";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Toast } from "@/components/Toast";
import { PRODUCTS } from "@/data/products";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Calculate filtered count
  const filteredCount = PRODUCTS.filter((p) => {
    if (activeCategory !== "all" && p.categorySlug !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.variants.some((v) => v.name.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  }).length;

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1B18]">
        {/* Sticky Delivery Schedule Announcement */}
        <AnnouncementBar />

        {/* Brand Navbar with Referral Pill & Live Cart */}
        <Navbar />

        {/* High-Converting Editorial Hero Section */}
        <main className="flex-1">
          <HeroSection />

          {/* Sticky Interactive Filter Bar (Mobile-first horizontal pills + search) */}
          <CategoryFilterBar
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalFiltered={filteredCount}
          />

          {/* Bento Product Grid with WhatsApp Checkout & Variant Swatches */}
          <ProductGrid
            products={PRODUCTS}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            sortBy={sortBy}
          />

          {/* How Delivery Works: 4-Step Guide & Interactive Weekly Calendar */}
          <DeliveryTimelineSection />

          {/* Sister Brand Cross-Sell Section: Ishami Interior Design & Decor Ltd */}
          <SisterBrandBanner />

          {/* Local Kigali Testimonials & Proof */}
          <TestimonialsSection />

          {/* Kigali Delivery & Order FAQs */}
          <FaqSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Slide-out Shopping Bag with Kigali Neighborhood Selector */}
        <CartDrawer />

        {/* Detailed Product Quick View Modal */}
        <ProductQuickViewModal />

        {/* Sticky Bottom Bar for TikTok & Instagram Mobile Traffic */}
        <MobileBottomBar />

        {/* Action Toast Notifications */}
        <Toast />
      </div>
    </CartProvider>
  );
}
