import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { About } from "./About";
import { Contact } from "./Contact";
import { Cart } from "./Cart";
import { Id } from "../../convex/_generated/dataModel";

export interface CartItem {
  menuItemId: Id<"menuItems">;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
}

export function CoffeeShop() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const seedData = useMutation(api.seed.seedData);

  // Initialize data on first load
  const categories = useQuery(api.menu.getCategories);
  
  // Seed data if no categories exist
  const handleSeedData = async () => {
    try {
      await seedData();
    } catch (error) {
      console.error("Error seeding data:", error);
    }
  };

  // Auto-seed if no categories exist
  if (categories !== undefined && categories.length === 0) {
    handleSeedData();
  }

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.menuItemId === item.menuItemId);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.menuItemId === item.menuItemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartItem = (menuItemId: Id<"menuItems">, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.menuItemId !== menuItemId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.menuItemId === menuItemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Show loading state while categories are loading
  if (categories === undefined) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-800 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading coffee shop...</p>
        </div>
      </div>
    );
  }

  // Show seed button if no data exists
  if (categories.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Brew & Bite</h1>
          <p className="text-gray-600 mb-6">Let's set up your coffee shop menu!</p>
          <button
            onClick={handleSeedData}
            className="bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
          >
            Initialize Menu Data
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <Menu onAddToCart={addToCart} />
      <About />
      <Contact />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateItem={updateCartItem}
        onClearCart={clearCart}
        total={cartTotal}
      />
    </div>
  );
}
