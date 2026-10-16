"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant } from "@/data/products";

export interface CartItem {
  id: string; // unique key: productId-variantId
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPriceRwf: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  neighborhood: string;
  setNeighborhood: (neighborhood: string) => void;
  deliveryNotes: string;
  setDeliveryNotes: (notes: string) => void;
  toastMessage: string | null;
  clearToast: () => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [neighborhood, setNeighborhood] = useState("Kimihurura");
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Load cart and form values from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("ishami_cart_items");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedName = localStorage.getItem("ishami_cust_name");
      if (savedName) setCustomerName(savedName);
      const savedNeighbor = localStorage.getItem("ishami_neighborhood");
      if (savedNeighbor) setNeighborhood(savedNeighbor);
    } catch {
      // Ignore local storage error
    }
  }, []);

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem("ishami_cart_items", JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  useEffect(() => {
    try {
      if (customerName) localStorage.setItem("ishami_cust_name", customerName);
      if (neighborhood) localStorage.setItem("ishami_neighborhood", neighborhood);
    } catch {
      // Ignore
    }
  }, [customerName, neighborhood]);

  const addToCart = (product: Product, variant: ProductVariant, quantity: number = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.variant.id === variant.id
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: `${product.id}-${variant.id}`,
            product,
            variant,
            quantity,
          },
        ];
      }
    });

    setToastMessage(`Added ${quantity}× ${product.title} to your bag`);
  };

  const removeFromCart = (productId: string, variantId: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.variant.id === variantId))
    );
  };

  const updateQuantity = (productId: string, variantId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.variant.id === variantId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const clearToast = () => setToastMessage(null);

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPriceRwf = items.reduce(
    (sum, item) => sum + item.product.priceRwf * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        totalPriceRwf,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        customerName,
        setCustomerName,
        neighborhood,
        setNeighborhood,
        deliveryNotes,
        setDeliveryNotes,
        toastMessage,
        clearToast,
        quickViewProduct,
        openQuickView,
        closeQuickView,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
