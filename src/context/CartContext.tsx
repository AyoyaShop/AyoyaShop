import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getProductById } from '../data';

export interface CartItem {
  key: string;
  productId: string;
  title: string;
  image: string;
  variantLabel: string;
  unitPrice: number;
  weightGrams: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalWeightGrams: number;
  checkoutIntent: boolean;
  requestCheckout: () => void;
  clearCheckoutIntent: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'ayoya-cart';

// Only key + quantity are stored, so a returning customer always sees current prices.
function loadCart(): CartItem[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    if (!Array.isArray(saved)) return [];
    return saved.flatMap(entry => {
      const key = String(entry?.key);
      const quantity = Number(entry?.quantity);
      const [productId, label] = key.split('::');
      const product = getProductById(productId);
      if (!product || !Number.isInteger(quantity) || quantity <= 0) return [];
      const variants = [
        { label: product.priceUnit, price: product.price, weightGrams: product.weightGrams },
        ...product.priceOptions
      ];
      const variant = variants.find(v => v.label === label);
      if (!variant) return [];
      return [{
        key,
        productId,
        title: product.title,
        image: product.image,
        variantLabel: variants.length > 1 ? variant.label : '',
        unitPrice: variant.price,
        weightGrams: variant.weightGrams,
        quantity
      }];
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutIntent, setCheckoutIntent] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items.map(({ key, quantity }) => ({ key, quantity }))));
    } catch {
      // Storage can be unavailable (private mode, in-app browsers); the cart still works in memory.
    }
  }, [items]);

  const addItem: CartContextValue['addItem'] = (item, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.key === item.key);
      if (existing) {
        return prev.map(i => (i.key === item.key ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [...prev, { ...item, quantity }];
    });
    setIsOpen(true);
  };

  const removeItem = (key: string) => {
    setItems(prev => prev.filter(i => i.key !== key));
  };

  const updateQuantity = (key: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(key);
      return;
    }
    setItems(prev => prev.map(i => (i.key === key ? { ...i, quantity } : i)));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);
  const totalWeightGrams = items.reduce((sum, i) => sum + i.quantity * i.weightGrams, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        totalWeightGrams,
        checkoutIntent,
        requestCheckout: () => {
          setIsOpen(true);
          setCheckoutIntent(true);
        },
        clearCheckoutIntent: () => setCheckoutIntent(false)
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
