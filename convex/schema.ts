import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkUserId: v.string(),
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    imageUrl: v.string(),
  }).index("byClerkUserId", ["clerkUserId"]),
  layoutConfig: defineTable({
    header: v.string(),
    footer: v.string(),
    logo: v.string(),
  }),
});