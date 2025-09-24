import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Store the current user who will generate a program
export const setCurrentGenerationUser = mutation({
  args: { userId: v.string() }, // Change to v.string()
  handler: async (ctx, { userId }) => {
    // Clear any existing sessions for this user
    const existingSessions = await ctx.db
      .query("generateSessions")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .collect();

    // Remove existing sessions
    for (const session of existingSessions) {
      await ctx.db.delete(session._id);
    }

    // Create new session
    const sessionId = await ctx.db.insert("generateSessions", {
      userId,
      createdAt: Date.now(),
    });

    return sessionId;
  },
});

// Get the current user for generation
export const getCurrentGenerationUser = query({
  handler: async (ctx) => {
    // Get the most recent session
    const recentSession = await ctx.db
      .query("generateSessions")
      .order("desc")
      .first();

    return recentSession?.userId;
  },
});
