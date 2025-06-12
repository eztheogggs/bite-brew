import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  categories: defineTable({
    name: v.string(),
    description: v.string(),
    order: v.number(),
  }),
  
  menuItems: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    categoryId: v.id("categories"),
    image: v.optional(v.string()),
    available: v.boolean(),
    featured: v.optional(v.boolean()),
  }).index("by_category", ["categoryId"]),
  
  orders: defineTable({
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.optional(v.string()),
    items: v.array(v.object({
      menuItemId: v.id("menuItems"),
      quantity: v.number(),
      notes: v.optional(v.string()),
    })),
    totalAmount: v.number(),
    status: v.string(), // "pending", "preparing", "ready", "completed"
    orderType: v.string(), // "pickup", "delivery"
    notes: v.optional(v.string()),
  }).index("by_status", ["status"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
