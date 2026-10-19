"use client";

import React, { useMemo } from "react";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Sparkles, PackageSearch } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
  searchQuery: string;
  sortBy: string;
}

export function ProductGrid({
  products,
  activeCategory,
  searchQuery,
  sortBy,
}: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }

    // Filter by Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.variants.some((v) => v.name.toLowerCase().includes(q)) ||
          p.badges?.some((b) => b.toLowerCase().includes(q))
      );
    }

    // Sort products
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.priceRwf - b.priceRwf);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.priceRwf - a.priceRwf);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default: featured first
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [products, activeCategory, searchQuery, sortBy]);

  if (filteredProducts.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 rounded-3xl bg-[#EFECE6] flex items-center justify-center mx-auto mb-4 text-[#8A847C]">
          <PackageSearch className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#141413] mb-2">
          No matching accents found
        </h3>
        <p className="text-xs text-[#57524C] mb-6 leading-relaxed">
          We couldn&apos;t find any items matching &ldquo;{searchQuery}&rdquo;. Try another term like
          &ldquo;throw&rdquo;, &ldquo;macramé&rdquo;, &ldquo;pouf&rdquo;, or reset the category filter.
        </p>
      </div>
    );
  }

  return (
    <section id="catalog" className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header with Architectural Framing */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 border-b border-[#1B3B2B]/12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C86D51] uppercase tracking-widest mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kigali Retail Lookbook • 01 — 11</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight">
            Curated Accents ({filteredProducts.length})
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#57524C] max-w-md leading-relaxed font-light">
          Tactile home accessories in stock in Kigali. Ready for 4-operating-day dispatch with
          instant WhatsApp coordination.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
export default ProductGrid;
