/**
 * Adds numbers provided in a string format.
 *
 * @param {string} numbers - A string containing numbers separated by delimiters.
 *                          The string may contain:
 *                          - Comma-separated numbers (e.g., "1,2,3").
 *                          - Numbers separated by newlines (e.g., "1\n2,3").
 *                          - Custom delimiter formats (e.g., "//[delimiter]\\n[numbers]").
 *                          - Throws an exception if negative numbers are present.
 *
 * @returns {number} - The sum of the numbers in the input string.
 * @throws {Error} - Throws an error if negative numbers are provided in the input string.
 */
export function add(numbers: string): number {
  // Handle an empty string input - return 0
  if (!numbers) return 0;

  // Default delimiters are comma (",") and newline ("\n")
  let delimiter = /,|\n/;

  // Check for custom delimiter at the beginning of the input
  if (numbers.startsWith("//")) {
    // Match the custom delimiter format "//[delimiter]\n"
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);

    // If a custom delimiter is specified, update the delimiter regex
    if (delimiterMatch) {
      delimiter = new RegExp(delimiterMatch[1]); // Use the provided delimiter
      numbers = numbers.slice(delimiterMatch[0].length); // Remove the delimiter declaration line
    }
  }

  // Split the input string into an array of numbers using the specified delimiter
  const numArray = numbers.split(delimiter).map(Number);

  // Check for negative numbers in the input
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    // Throw an error listing all negative numbers found
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  // Return the sum of the numbers in the array
  return numArray.reduce((sum, num) => sum + num, 0);
}
