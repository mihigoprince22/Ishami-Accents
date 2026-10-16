"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  KIGALI_NEIGHBORHOODS,
  formatRwf,
  generateCartWhatsAppLink,
} from "@/data/products";
import { DeliveryStatusWidget } from "./DeliveryStatusWidget";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  MapPin,
  User,
  FileText,
  Truck,
  ArrowRight,
} from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    totalPriceRwf,
    customerName,
    setCustomerName,
    neighborhood,
    setNeighborhood,
    deliveryNotes,
    setDeliveryNotes,
  } = useCart();

  if (!isCartOpen) return null;

  const handleSendOrder = () => {
    if (items.length === 0) return;
    const link = generateCartWhatsAppLink(
      items,
      customerName,
      neighborhood,
      deliveryNotes
    );
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag and WhatsApp Checkout"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          aria-label="Shopping Cart Panel"
          className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#E4DCD0] transform transition-transform duration-300 ease-in-out"
        >
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-[#E4DCD0] flex items-center justify-between bg-[#F0EAE1]/70">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1E1B18] text-[#FAF7F2] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-[#1E1B18] leading-tight">
                  Your Shopping Bag
                </h2>
                <p className="text-[11px] text-[#57524C]">
                  {totalCount} {totalCount === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              aria-label="Close Shopping Bag"
              className="p-2 rounded-full text-[#57524C] hover:bg-[#E4DCD0] hover:text-[#1E1B18] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Live Delivery Dispatch Status Inside Drawer */}
          <div className="p-3.5 bg-[#FAF7F2] border-b border-[#E4DCD0]">
            <DeliveryStatusWidget variant="compact" showModalTrigger={false} />
          </div>

          {/* Drawer Body: Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#F0EAE1] flex items-center justify-center mx-auto text-[#8A847C]">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1E1B18]">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#57524C] max-w-xs mx-auto">
                  Browse our Kigali collection of handcrafted macramé, knit throws, storage ottomans,
                  and table runners.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-2 py-2 px-5 rounded-full bg-[#1E1B18] text-[#FAF7F2] text-xs font-semibold hover:bg-[#C86D51] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#57524C] pb-1 border-b border-[#E4DCD0]">
                  <span>Items ({items.length})</span>
                  <button
                    onClick={clearCart}
                    className="text-[#C86D51] hover:underline cursor-pointer font-medium"
                  >
                    Clear Bag
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-[#F0EAE1]/60 border border-[#E4DCD0] flex gap-3 items-center"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-white shrink-0 border border-[#E4DCD0]">
                      <Image
                        src={item.variant.image || item.product.images[0]}
                        alt={item.product.title}
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#1E1B18] leading-tight truncate">
                        {item.product.title}
                      </h4>
                      <p className="text-[11px] text-[#57524C] truncate mt-0.5">
                        Variant: <strong className="text-[#1E1B18]">{item.variant.name}</strong>
                      </p>
                      <p className="text-xs font-extrabold text-[#1E1B18] mt-1">
                        {formatRwf(item.product.priceRwf * item.quantity)}
                      </p>
                    </div>

                    {/* Quantity Controls & Delete */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant.id)}
                        aria-label="Remove item"
                        className="text-[#8A847C] hover:text-[#C86D51] p-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-1.5 bg-[#FAF7F2] border border-[#E4DCD0] rounded-lg px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant.id, -1)}
                          aria-label="Decrease quantity"
                          className="p-1 text-[#57524C] hover:text-[#1E1B18]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold min-w-[16px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant.id, 1)}
                          aria-label="Increase quantity"
                          className="p-1 text-[#57524C] hover:text-[#1E1B18]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Delivery Information Form */}
                <div className="pt-4 border-t border-[#E4DCD0] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#C86D51]" />
                    <span>Kigali Delivery Information</span>
                  </h4>

                  {/* Customer Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#57524C] flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>Your Name / Contact Person</span>
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Marie Claire, Patrick K."
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#E4DCD0] text-xs text-[#1E1B18] placeholder-[#8A847C] focus:outline-none focus:ring-2 focus:ring-[#C86D51]/30 focus:border-[#C86D51]"
                    />
                  </div>

                  {/* Kigali Neighborhood Selector */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#57524C] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Kigali Neighborhood / Sector</span>
                    </label>
                    <select
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#E4DCD0] text-xs font-medium text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#C86D51]/30 focus:border-[#C86D51] cursor-pointer"
                    >
                      {KIGALI_NEIGHBORHOODS.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Delivery Notes */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#57524C] flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span>Delivery Notes (House/Street/Landmark - Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={deliveryNotes}
                      onChange={(e) => setDeliveryNotes(e.target.value)}
                      placeholder="e.g. Near Kigali Heights, KG 9 Ave Villa 14"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#E4DCD0] text-xs text-[#1E1B18] placeholder-[#8A847C] focus:outline-none focus:ring-2 focus:ring-[#C86D51]/30"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer: Order Summary & WhatsApp CTA */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#E4DCD0] bg-[#F0EAE1]/80 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#57524C]">
                  <span>Items Subtotal</span>
                  <span className="font-semibold text-[#1E1B18]">{formatRwf(totalPriceRwf)}</span>
                </div>
                <div className="flex justify-between text-[#57524C]">
                  <span>Kigali Courier Coordination</span>
                  <span className="text-[#4A5D4E] font-semibold">Standard City Rate (MoMo)</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#1E1B18] pt-2 border-t border-[#E4DCD0]">
                  <span>Total Estimate</span>
                  <span className="text-[#C86D51] font-sans text-lg">
                    {formatRwf(totalPriceRwf)}
                  </span>
                </div>
              </div>

              {/* Mon/Tue/Fri/Sat Reminder */}
              <p className="text-[10px] text-[#57524C] text-center leading-tight">
                🌿 Deliveries run on <strong>Mon, Tue, Fri & Sat</strong> (within 4 operating days).
                No card required — coordinate directly on WhatsApp.
              </p>

              {/* Master WhatsApp Checkout Button */}
              <button
                onClick={handleSendOrder}
                type="button"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Full Order to WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
