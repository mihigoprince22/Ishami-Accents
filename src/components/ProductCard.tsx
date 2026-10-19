"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Product,
  ProductVariant,
  formatRwf,
  generateSingleItemWhatsAppLink,
  LOCATION_DELIVERY_POLICY,
} from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, MessageCircle, ChevronLeft, ChevronRight, Eye, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, openQuickView } = useCart();

  // Selected variant defaults to the first available variant
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || {
      id: "default",
      name: "Standard",
      image: product.images[0],
      inStock: true,
    }
  );

  // Active image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  // When variant changes, update active image if the variant has a dedicated image
  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    const variantImgIdx = product.images.findIndex((img) => img === variant.image);
    if (variantImgIdx !== -1) {
      setCurrentImageIndex(variantImgIdx);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 1600);
  };

  const singleItemWhatsAppUrl = generateSingleItemWhatsAppLink(product, selectedVariant, 1);

  // Special object positioning for pouf ottoman to cleanly mask foreign text
  const isPouf = product.id === "foldable-storage-pouf-ottoman";

  return (
    <article
      className="group relative flex flex-col bg-[#FAF7F2] rounded-3xl border border-[#1B3B2B]/12 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C86D51]/50 transition-all duration-300"
      aria-labelledby={`product-title-${product.id}`}
    >
      {/* Top Image Container with Carousels & Badges */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full bg-[#EFECE6] overflow-hidden cursor-pointer">
        <Image
          src={product.images[currentImageIndex] || product.images[0]}
          alt={`${product.title} - ${selectedVariant.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`group-hover:scale-105 transition-transform duration-500 ease-out ${
            isPouf ? "object-cover object-left" : "object-cover object-center"
          }`}
          onClick={() => openQuickView(product)}
        />

        {/* Architectural Index Number Top-Left */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10 pointer-events-none">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#1B3B2B] text-[#FAF7F2] shadow-xs">
            {product.indexNumber || "01 / 11"}
          </span>

          {/* Dimension Badge Over Image */}
          {product.dimensions && (
            <span className="text-[10px] font-mono font-bold tracking-wide px-2.5 py-1 rounded-full bg-white/95 text-[#1B3B2B] backdrop-blur-md border border-[#1B3B2B]/20 shadow-xs">
              📏 {product.dimensions}
            </span>
          )}

          {/* First Feature Badge */}
          {product.badges && product.badges[0] && (
            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#C86D51] text-[#FAF7F2] shadow-xs">
              {product.badges[0]}
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openQuickView(product);
          }}
          type="button"
          aria-label={`Quick View ${product.title}`}
          className="absolute top-3 right-3 p-2 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#141413] shadow-sm opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Prev / Next Image Navigation (if multiple images) */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/85 hover:bg-white text-[#141413] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/85 hover:bg-white text-[#141413] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Slide Dots / Thumbnails */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 px-2 py-1 rounded-full bg-black/40 backdrop-blur-xs">
              {product.images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(dotIdx);
                  }}
                  aria-label={`Show image ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentImageIndex === dotIdx
                      ? "bg-[#C86D51] w-4"
                      : "bg-white/60 hover:bg-white w-1.5"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3.5 bg-[#FAF7F2]">
        <div className="space-y-2">
          {/* Category & Dimension Pill */}
          <div className="flex items-center justify-between text-[11px] text-[#57524C]">
            <span className="font-semibold uppercase tracking-wider text-[#1B3B2B] font-mono">
              {product.category}
            </span>
            {product.dimensions && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#EFECE6] text-[#1B3B2B] font-mono font-bold text-[10px] border border-[#1B3B2B]/10">
                {product.dimensions}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3
            id={`product-title-${product.id}`}
            onClick={() => openQuickView(product)}
            className="font-serif text-lg sm:text-xl font-bold text-[#141413] group-hover:text-[#C86D51] transition-colors leading-snug cursor-pointer line-clamp-2"
          >
            {product.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#57524C] line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* 💡 Ishami Designer Note */}
          {product.designerNote && (
            <div className="p-2.5 rounded-xl bg-[#EFECE6]/80 border border-[#1B3B2B]/8 text-[11px] text-[#141413] leading-relaxed flex items-start gap-1.5">
              <span className="text-[#C86D51] font-bold shrink-0">💡</span>
              <p className="line-clamp-2">
                <strong className="font-semibold text-[#1B3B2B]">Ishami Styling Tip:</strong>{" "}
                {product.designerNote}
              </p>
            </div>
          )}
        </div>

        {/* Variant Swatches (if more than 1 variant or specific color) */}
        {product.variants.length > 0 && (
          <div className="pt-2 border-t border-[#1B3B2B]/8 space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#57524C]">Selected Variant:</span>
              <span className="font-semibold text-[#141413] truncate max-w-[170px]">
                {selectedVariant.name}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {product.variants.map((variant) => {
                const isSelected = selectedVariant.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantSelect(variant)}
                    type="button"
                    title={variant.name}
                    aria-label={`Select variant: ${variant.name}`}
                    className={`group/btn relative px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                      isSelected
                        ? "bg-[#1B3B2B] text-[#FAF7F2] border-[#1B3B2B] shadow-xs"
                        : "bg-[#EFECE6] text-[#57524C] border-[#1B3B2B]/10 hover:border-[#1B3B2B]/30"
                    }`}
                  >
                    {variant.colorHex && (
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0"
                        style={{ backgroundColor: variant.colorHex }}
                      />
                    )}
                    <span className="truncate max-w-[130px]">{variant.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-[#1B3B2B]/10 space-y-2.5">
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-xl sm:text-2xl font-extrabold text-[#141413]">
                {formatRwf(product.priceRwf)}
              </span>
              {product.originalPriceRwf && (
                <span className="text-xs text-[#8A847C] line-through font-sans">
                  {formatRwf(product.originalPriceRwf)}
                </span>
              )}
            </div>

            {/* Dimension Pill next to Price */}
            {product.dimensions && (
              <span className="text-[10px] font-mono font-bold text-[#1B3B2B] bg-[#EFECE6] px-2 py-0.5 rounded-md border border-[#1B3B2B]/10 truncate max-w-[140px]">
                {product.dimensions}
              </span>
            )}
          </div>

          {/* Dual Action Buttons: Add to Bag + Instant Buy via WhatsApp */}
          <div className="grid grid-cols-2 gap-2">
            {/* Add to Bag */}
            <button
              onClick={handleAddToCart}
              type="button"
              className={`py-2.5 px-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                isAddedFeedback
                  ? "bg-[#1B3B2B] text-white"
                  : "bg-[#EFECE6] hover:bg-[#E2DDD5] text-[#141413] border border-[#1B3B2B]/10"
              }`}
            >
              {isAddedFeedback ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#1B3B2B]" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>

            {/* Instant WhatsApp Order */}
            <a
              href={singleItemWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl font-semibold text-xs bg-[#C86D51] hover:bg-[#B2583D] text-[#FAF7F2] flex items-center justify-center gap-1.5 transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
              title="Instant WhatsApp checkout for this single item"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Buy on WA</span>
            </a>
          </div>

          {/* Location-Based Delivery Fee Policy Notice */}
          <p className="text-[10px] text-[#57524C] leading-snug pt-2 border-t border-[#1B3B2B]/8 font-light">
            {LOCATION_DELIVERY_POLICY}
          </p>
        </div>
      </div>
    </article>
  );
}
export default ProductCard;
