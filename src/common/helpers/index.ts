/**
 * Safely parse stacks data that could be either JSON or comma-separated strings
 * @param stacksData - The stacks data to parse
 * @returns Array of stack strings
 */
export const parseStacks = (stacksData: string | null): string[] => {
  if (!stacksData) return [];

  try {
    // Try to parse as JSON first
    const parsed = JSON.parse(stacksData);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // If JSON parsing fails, treat as comma-separated string
    return stacksData
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }
};
