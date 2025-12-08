import { UserJSON } from "@clerk/backend";
import { v, Validator } from "convex/values";
import { internalMutation, QueryCtx, query } from "./_generated/server";

export const getUsers = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("users").collect()
  },
});

export const getRecentUsers = query({
    args: {},
    handler: async (ctx, args) => {
        return await ctx.db.query("users").order("desc").take(10)
    },
});

export const current = query({
    args: {},
    handler: async ctx => {
        return await getCurrentUser(ctx)
    },
});

export const upsertFromClerk = internalMutation({
    args: {
        data: v.any() as Validator<UserJSON>,
    },
    async handler(ctx, {data}) {
        const userAttributes = {
            email: data.email_addresses[0].email_address,
            clerkUserId: data.id,
            firstName: data.first_name ?? "",
            lastName: data.last_name ?? "",
            imageUrl: data.image_url ?? "",
        }
        const user = await userByClerkUserId(ctx, data.id)
        if (user === null) {
            await ctx.db.insert("users", userAttributes)
        } else {
            await ctx.db.patch(user._id, userAttributes)
        }
    }
})

export const deleteFromClerk = internalMutation({
    args: { clerkUserId: v.string() },
    async handler(ctx, { clerkUserId }) {
        const user = await userByClerkUserId(ctx, clerkUserId)

        if (user !== null) {
            await ctx.db.delete(user._id)
        } else {
            console.warn(`User ${clerkUserId} not found in Clerk`)
        }
    }
})

export async function getCurrentUser(ctx: QueryCtx) {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
        throw new Error("Unauthorized")
    }
    return await userByClerkUserId(ctx, identity.subject)
}

export async function userByClerkUserId(ctx: QueryCtx, clerkUserId: string) {
    return await ctx.db.query("users")
        .withIndex("byClerkUserId", q => q.eq("clerkUserId", clerkUserId))
        .unique()
}