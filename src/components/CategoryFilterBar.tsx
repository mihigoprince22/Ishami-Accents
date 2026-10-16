"use client";

import React from "react";
import { CATEGORIES } from "@/data/products";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface CategoryFilterBarProps {
  activeCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalFiltered: number;
}

export function CategoryFilterBar({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalFiltered,
}: CategoryFilterBarProps) {
  return (
    <div className="sticky top-18 sm:top-20 z-20 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E4DCD0] py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Top Row: Category Pills (Horizontal scroll on mobile) */}
        <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-2 shrink-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#1E1B18] text-[#FAF7F2] shadow-sm"
                      : "bg-[#F0EAE1] text-[#57524C] hover:bg-[#E4DCD0] hover:text-[#1E1B18]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-[#FAF7F2]/20 text-[#FAF7F2]"
                        : "bg-[#E4DCD0] text-[#57524C]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop Total Match Counter */}
          <div className="hidden md:flex items-center text-xs text-[#57524C] font-medium whitespace-nowrap shrink-0">
            Showing <strong className="text-[#1E1B18] mx-1">{totalFiltered}</strong> items
          </div>
        </div>

        {/* Bottom Row: Instant Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A847C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search blankets, storage poufs, wall art, table runners..."
              className="w-full pl-9.5 pr-8 py-2 rounded-xl bg-[#F0EAE1]/80 border border-[#E4DCD0] text-xs font-medium text-[#1E1B18] placeholder-[#8A847C] focus:outline-none focus:ring-2 focus:ring-[#C86D51]/30 focus:border-[#C86D51] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#8A847C] hover:text-[#1E1B18]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Selector & Result count for mobile */}
          <div className="flex items-center justify-between sm:justify-end gap-2">
            <span className="text-xs text-[#57524C] sm:hidden">
              <strong>{totalFiltered}</strong> items found
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#57524C]" />
              <label htmlFor="catalog-sort" className="sr-only">
                Sort catalog items
              </label>
              <select
                id="catalog-sort"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="py-1.5 pl-2.5 pr-8 rounded-xl bg-[#F0EAE1]/80 border border-[#E4DCD0] text-xs font-semibold text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#C86D51]/30 cursor-pointer"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Alphabetical (A - Z)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
