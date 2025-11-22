import { PalindromeChecker } from "./palindrome";

describe("Palindrome checker", () => {
  it("knows that 'mom' is palindrome", () => {
    expect(PalindromeChecker.isPalindrome("mom")).toBe(true);
  });

  it("knows that 'bill' is not palindrome", () => {
    expect(PalindromeChecker.isPalindrome("bill")).toBe(false);
  });

  it("knows off case palindromes such as 'Mom'", () => {
    expect(PalindromeChecker.isPalindrome("Mom")).toBe(true);
  });

  it("knows that 'Was It A Rat I Saw' is a palindrome", () => {
    expect(PalindromeChecker.isPalindrome("Was It A Rat I Saw")).toBe(true);
  });

  it('should be able to tell that "Never Odd or Even" is palindrome', () => {
    expect(PalindromeChecker.isPalindrome("Never Odd or Even")).toBe(true);
  });
});
