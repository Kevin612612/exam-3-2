/**
 * A utility function to create a delay or pause execution for a specified duration.
 * This can be useful for simulating asynchronous operations or introducing artificial delays.
 *
 * @param ms - The number of milliseconds to delay execution
 * @returns A promise that resolves after the specified duration
 *
 * @example
 * Pause for 2 seconds
 * await delay(2000);
 */
export const delay = (ms: number): Promise<void> => 
    new Promise((resolve) => setTimeout(resolve, ms));
