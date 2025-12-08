import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

// Get the current layout configuration
export const get = query({
  handler: async (ctx) => {
    const config = await ctx.db
      .query('layoutConfig')
      .order('desc')
      .first()
    
    return config || null
  },
})

// Update or create layout configuration
export const update = mutation({
  args: {
    header: v.string(),
    footer: v.string(),
    logo: v.string(),
  },
  handler: async (ctx, args) => {
    // Get the current config
    const existing = await ctx.db
      .query('layoutConfig')
      .order('desc')
      .first()
    
    if (existing) {
      // Update existing config
      await ctx.db.patch(existing._id, {
        header: args.header,
        footer: args.footer,
        logo: args.logo,
      })
      return existing._id
    } else {
      // Create new config
      const id = await ctx.db.insert('layoutConfig', {
        header: args.header,
        footer: args.footer,
        logo: args.logo,
      })
      return id
    }
  },
})

