"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  ProductVariant,
  formatRwf,
  generateSingleItemWhatsAppLink,
  LOCATION_DELIVERY_POLICY,
} from "@/data/products";
import { X, ShoppingBag, MessageCircle, Check, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Ruler, Layers } from "lucide-react";

export function ProductQuickViewModal() {
  const { quickViewProduct, closeQuickView, addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedVariant(quickViewProduct.variants[0] || null);
      setActiveImageIndex(0);
      setQuantity(1);
      setIsAddedFeedback(false);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const currentVariant = selectedVariant || quickViewProduct.variants[0];

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    const variantImgIdx = quickViewProduct.images.findIndex((img) => img === variant.image);
    if (variantImgIdx !== -1) {
      setActiveImageIndex(variantImgIdx);
    }
  };

  const handleAddToCart = () => {
    if (!currentVariant) return;
    addToCart(quickViewProduct, currentVariant, quantity);
    setIsAddedFeedback(true);
    setTimeout(() => {
      setIsAddedFeedback(false);
      closeQuickView();
    }, 1200);
  };

  const singleWhatsAppUrl = currentVariant
    ? generateSingleItemWhatsAppLink(quickViewProduct, currentVariant, quantity)
    : "#";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeQuickView}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#1B3B2B]/12 max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          aria-label="Close product preview"
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#141413] shadow-sm transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Carousel & Thumbnails */}
        <div className="w-full md:w-1/2 bg-[#EFECE6] flex flex-col justify-between p-4 sm:p-6 relative">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-inner">
            <Image
              src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
              alt={quickViewProduct.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-300"
            />

            {/* Architectural Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#1B3B2B] text-[#FAF7F2]">
                {quickViewProduct.indexNumber || "01 / 11"}
              </span>
              {quickViewProduct.dimensions && (
                <span className="text-[10px] font-mono font-bold tracking-wide px-2.5 py-1 rounded-full bg-white/95 text-[#1B3B2B] border border-[#1B3B2B]/20 shadow-xs">
                  📏 {quickViewProduct.dimensions}
                </span>
              )}
            </div>

            {/* Navigation buttons */}
            {quickViewProduct.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + quickViewProduct.images.length) % quickViewProduct.images.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#141413] shadow cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % quickViewProduct.images.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#141413] shadow cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {quickViewProduct.images.length > 1 && (
            <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar py-1">
              {quickViewProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-[#C86D51] scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details, Variant Picker & Order CTAs */}
        <div className="w-full md:w-1/2 p-5 sm:p-7 overflow-y-auto flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#57524C]">
              <span className="font-semibold uppercase tracking-wider text-[#1B3B2B] font-mono">
                {quickViewProduct.category}
              </span>
              <span>•</span>
              <span>Kigali Retail Stock</span>
            </div>

            <h2 id="quickview-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#141413] leading-tight">
              {quickViewProduct.title}
            </h2>

            {/* Price & Dimension Pill */}
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="font-sans text-2xl sm:text-3xl font-extrabold text-[#141413]">
                {formatRwf(quickViewProduct.priceRwf)}
              </span>
              {quickViewProduct.dimensions && (
                <span className="text-xs font-mono font-bold text-[#1B3B2B] bg-[#EFECE6] px-2.5 py-1 rounded-md border border-[#1B3B2B]/10">
                  Dimensions: {quickViewProduct.dimensions}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#57524C] leading-relaxed font-light">
              {quickViewProduct.description}
            </p>

            {/* 💡 Designer Note */}
            {quickViewProduct.designerNote && (
              <div className="p-3 rounded-2xl bg-[#EFECE6] border border-[#1B3B2B]/10 text-xs text-[#141413] leading-relaxed">
                <strong className="text-[#1B3B2B] font-semibold">💡 Ishami Styling Tip:</strong>{" "}
                {quickViewProduct.designerNote}
              </div>
            )}

            {/* Bullets */}
            <ul className="space-y-1.5 py-1 text-xs text-[#141413]">
              {quickViewProduct.details.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C86D51] mt-1.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Dimensions & Materials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#1B3B2B]/10 text-xs text-[#57524C]">
              {quickViewProduct.dimensions && (
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#EFECE6]">
                  <Ruler className="w-4 h-4 text-[#C86D51] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#8A847C]">Dimensions</p>
                    <p className="font-medium text-[#141413]">{quickViewProduct.dimensions}</p>
                  </div>
                </div>
              )}

              {quickViewProduct.materials && (
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#EFECE6]">
                  <Layers className="w-4 h-4 text-[#1B3B2B] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#8A847C]">Materials</p>
                    <p className="font-medium text-[#141413]">{quickViewProduct.materials}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Variant Selector */}
            {quickViewProduct.variants.length > 0 && (
              <div className="pt-2 border-t border-[#1B3B2B]/10 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#141413]">Select Variant:</span>
                  <span className="text-[#C86D51] font-semibold">{currentVariant?.name}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.variants.map((v) => {
                    const isSelected = currentVariant?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => handleVariantSelect(v)}
                        type="button"
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 border cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#1B3B2B] text-[#FAF7F2] border-[#1B3B2B] shadow"
                            : "bg-[#EFECE6] text-[#57524C] border-[#1B3B2B]/10 hover:border-[#1B3B2B]/30"
                        }`}
                      >
                        {v.colorHex && (
                          <span
                            className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                            style={{ backgroundColor: v.colorHex }}
                          />
                        )}
                        <span>{v.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Action Row: Quantity + Dual Order Buttons */}
          <div className="pt-4 border-t border-[#1B3B2B]/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#141413]">Quantity:</span>
              <div className="flex items-center gap-2 bg-[#EFECE6] border border-[#1B3B2B]/10 rounded-xl px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-6 h-6 flex items-center justify-center font-bold text-[#141413] hover:bg-[#FAF7F2] rounded cursor-pointer"
                >
                  -
                </button>
                <span className="text-xs font-bold w-6 text-center font-mono">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-6 h-6 flex items-center justify-center font-bold text-[#141413] hover:bg-[#FAF7F2] rounded cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={handleAddToCart}
                type="button"
                className={`py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isAddedFeedback
                    ? "bg-[#1B3B2B] text-white"
                    : "bg-[#1B3B2B] hover:bg-[#12281D] text-[#FAF7F2]"
                }`}
              >
                {isAddedFeedback ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Shopping Bag</span>
                  </>
                )}
              </button>

              <a
                href={singleWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl font-bold text-xs bg-[#C86D51] hover:bg-[#B2583D] text-[#FAF7F2] flex items-center justify-center gap-2 transition-all shadow cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Order</span>
              </a>
            </div>

            {/* Policy Notice */}
            <p className="text-[10px] text-[#57524C] text-center leading-snug pt-1">
              {LOCATION_DELIVERY_POLICY}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductQuickViewModal;
