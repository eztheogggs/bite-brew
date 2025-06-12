import { mutation } from "./_generated/server";

export const seedData = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if data already exists
    const existingCategories = await ctx.db.query("categories").collect();
    if (existingCategories.length > 0) {
      return "Data already seeded";
    }

    // Create categories
    const coffeeId = await ctx.db.insert("categories", {
      name: "Coffee & Espresso",
      description: "Freshly roasted coffee and espresso drinks",
      order: 1,
    });

    const teaId = await ctx.db.insert("categories", {
      name: "Tea & Specialty Drinks",
      description: "Premium teas and specialty beverages",
      order: 2,
    });

    const pastriesId = await ctx.db.insert("categories", {
      name: "Pastries & Baked Goods",
      description: "Fresh baked pastries and treats",
      order: 3,
    });

    const sandwichesId = await ctx.db.insert("categories", {
      name: "Sandwiches & Light Meals",
      description: "Fresh sandwiches and light meal options",
      order: 4,
    });

    // Create menu items
    const menuItems = [
      // Coffee & Espresso
      {
        name: "House Blend Coffee",
        description: "Our signature medium roast blend with notes of chocolate and caramel",
        price: 2.95,
        categoryId: coffeeId,
        available: true,
        featured: true,
      },
      {
        name: "Cappuccino",
        description: "Rich espresso with steamed milk and a thick layer of foam",
        price: 4.25,
        categoryId: coffeeId,
        available: true,
        featured: true,
      },
      {
        name: "Latte",
        description: "Smooth espresso with steamed milk and a light layer of foam",
        price: 4.75,
        categoryId: coffeeId,
        available: true,
      },
      {
        name: "Americano",
        description: "Bold espresso shots with hot water",
        price: 3.50,
        categoryId: coffeeId,
        available: true,
      },
      {
        name: "Mocha",
        description: "Rich espresso with chocolate syrup, steamed milk, and whipped cream",
        price: 5.25,
        categoryId: coffeeId,
        available: true,
        featured: true,
      },
      
      // Tea & Specialty Drinks
      {
        name: "Earl Grey Tea",
        description: "Classic black tea with bergamot oil",
        price: 2.75,
        categoryId: teaId,
        available: true,
      },
      {
        name: "Chai Latte",
        description: "Spiced tea blend with steamed milk",
        price: 4.50,
        categoryId: teaId,
        available: true,
        featured: true,
      },
      {
        name: "Green Tea",
        description: "Premium organic green tea",
        price: 2.75,
        categoryId: teaId,
        available: true,
      },
      {
        name: "Hot Chocolate",
        description: "Rich chocolate with steamed milk and whipped cream",
        price: 3.95,
        categoryId: teaId,
        available: true,
      },
      
      // Pastries & Baked Goods
      {
        name: "Croissant",
        description: "Buttery, flaky French pastry",
        price: 3.25,
        categoryId: pastriesId,
        available: true,
      },
      {
        name: "Blueberry Muffin",
        description: "Fresh baked muffin with wild blueberries",
        price: 2.95,
        categoryId: pastriesId,
        available: true,
        featured: true,
      },
      {
        name: "Chocolate Chip Cookie",
        description: "Warm, gooey chocolate chip cookie",
        price: 2.50,
        categoryId: pastriesId,
        available: true,
      },
      {
        name: "Cinnamon Roll",
        description: "Sweet cinnamon roll with cream cheese glaze",
        price: 4.25,
        categoryId: pastriesId,
        available: true,
      },
      
      // Sandwiches & Light Meals
      {
        name: "Turkey & Swiss Sandwich",
        description: "Sliced turkey, Swiss cheese, lettuce, tomato on sourdough",
        price: 8.95,
        categoryId: sandwichesId,
        available: true,
      },
      {
        name: "Veggie Wrap",
        description: "Hummus, cucumber, tomato, sprouts, avocado in a spinach wrap",
        price: 7.95,
        categoryId: sandwichesId,
        available: true,
        featured: true,
      },
      {
        name: "Grilled Cheese",
        description: "Classic grilled cheese on sourdough bread",
        price: 6.50,
        categoryId: sandwichesId,
        available: true,
      },
    ];

    for (const item of menuItems) {
      await ctx.db.insert("menuItems", item);
    }

    return "Data seeded successfully";
  },
});
