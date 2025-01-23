export const register = async () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const appInsights = await import("@/lib/ai-instrumentation");
    appInsights.register();
  }
};
