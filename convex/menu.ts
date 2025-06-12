import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getCategories = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("categories").order("asc").collect();
  },
});

export const getMenuItems = query({
  args: { categoryId: v.optional(v.id("categories")) },
  handler: async (ctx, args) => {
    if (args.categoryId) {
      return await ctx.db
        .query("menuItems")
        .withIndex("by_category", (q) => q.eq("categoryId", args.categoryId!))
        .filter((q) => q.eq(q.field("available"), true))
        .collect();
    }
    
    return await ctx.db
      .query("menuItems")
      .filter((q) => q.eq(q.field("available"), true))
      .collect();
  },
});

export const getFeaturedItems = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("menuItems")
      .filter((q) => q.and(q.eq(q.field("available"), true), q.eq(q.field("featured"), true)))
      .take(6);
  },
});

export const getMenuItem = query({
  args: { id: v.id("menuItems") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
