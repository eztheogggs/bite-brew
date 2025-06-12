import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { CartItem } from "./CoffeeShop";
import { Id } from "../../convex/_generated/dataModel";

interface MenuProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

// Image mapping for menu items
const getItemImage = (itemName: string) => {
  const name = itemName.toLowerCase();
  
  if (name.includes('house blend') || name.includes('coffee')) {
    return 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('cappuccino')) {
    return 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('latte')) {
    return 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('americano')) {
    return 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('mocha')) {
    return 'https://images.unsplash.com/photo-1578090147399-6c91355204cd?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('earl grey') || name.includes('tea')) {
    return 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('chai latte')) {
    return 'https://images.unsplash.com/photo-1529474944862-bf4949bd2f1a?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('green tea')) {
    return 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('hot chocolate')) {
    return 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('croissant')) {
    return 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('blueberry muffin')) {
    return 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('chocolate chip cookie')) {
    return 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('cinnamon roll')) {
    return 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('turkey') && name.includes('sandwich')) {
    return 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('veggie wrap')) {
    return 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop&crop=center';
  }
  if (name.includes('grilled cheese')) {
    return 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&crop=center';
  }
  
  // Default fallback image
  return 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center';
};

export function Menu({ onAddToCart }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<Id<"categories"> | null>(null);
  
  const categories = useQuery(api.menu.getCategories);
  const menuItems = useQuery(api.menu.getMenuItems, 
    selectedCategory ? { categoryId: selectedCategory } : {}
  );
  const featuredItems = useQuery(api.menu.getFeaturedItems);

  if (!categories || !menuItems) {
    return (
      <section id="menu" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-800 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading menu...</p>
          </div>
        </div>
      </section>
    );
  }

  const displayItems = selectedCategory ? menuItems : (featuredItems || []);

  return (
    <section id="menu" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully crafted selection of coffee, pastries, and light meals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === null
                ? "bg-amber-800 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Featured
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => setSelectedCategory(category._id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category._id
                  ? "bg-amber-800 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div key={item._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={getItemImage(item.name)}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-800 dark:text-amber-500">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <button
                  onClick={() => onAddToCart({
                    menuItemId: item._id,
                    name: item.name,
                    price: item.price,
                  })}
                  className="w-full bg-amber-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-900 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {displayItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No items available in this category.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Demo Notice:</strong> This is a demonstration website. No real purchases will be made and no payment will be processed.
          </p>
        </div>
      </div>
    </section>
  );
}