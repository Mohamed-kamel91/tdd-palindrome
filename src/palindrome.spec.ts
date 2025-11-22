import { PalindromeChecker } from "./palindrome";

describe("Palindrome checker", () => {
  it("knows that 'mom' is palindrome", () => {
    expect(PalindromeChecker.isPalindrome("mom")).toBe(true);
  });
});
