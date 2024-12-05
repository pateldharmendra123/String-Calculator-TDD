// Developed By - Dharmendra Patel
// Import the `add` function from the string calculator module
import { add } from './stringCalculator';

describe('String Calculator', () => {
  /**
   * Test: Should return 0 for an empty string
   * Purpose: Validates the default behavior of the calculator when no input is provided.
   */
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  /**
   * Test: Should return the number itself for a single number
   * Purpose: Ensures the calculator correctly parses and returns a single number input.
   */
  it('should return the number itself for a single number', () => {
    expect(add('1')).toBe(1);
  });

  /**
   * Test: Should return the sum of two numbers separated by a comma
   * Purpose: Verifies the calculator can handle two comma-separated numbers and return their sum.
   */
  it('should return the sum of two numbers separated by a comma', () => {
    expect(add('1,5')).toBe(6);
  });

  /**
   * Test: Should handle an unknown amount of numbers
   * Purpose: Confirms that the calculator can dynamically handle multiple numbers, regardless of their count.
   */
  it('should handle an unknown amount of numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  /**
   * Test: Should handle numbers separated by newlines
   * Purpose: Validates support for mixed delimiters (commas and newlines) and calculates their sum correctly.
   */
  it('should handle numbers separated by newlines', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  /**
   * Test: Should support custom delimiters specified in the format "//[delimiter]\\n[numbers]"
   * Purpose: Ensures flexibility by allowing users to define custom delimiters for number separation.
   */
  it('should support custom delimiters specified in the format "//[delimiter]\\n[numbers]"', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  /**
   * Test: Should throw an exception for negative numbers
   * Purpose: Verifies that the calculator detects negative numbers and throws an exception with a meaningful message.
   */
  it('should throw an exception for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
  });

  /**
   * Test: Should list all negative numbers in the exception message
   * Purpose: Confirms that all negative numbers in the input are included in the exception message.
   */
  it('should list all negative numbers in the exception message', () => {
    expect(() => add('-1,-2,-3')).toThrow('Negative numbers not allowed: -1, -2, -3');
  });
});
