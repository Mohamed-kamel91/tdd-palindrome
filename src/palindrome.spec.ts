import { PalindromeChecker } from "./palindrome";

describe("Palindrome checker", () => {
  it.each(["mom", "wow", "level"])("knows single word palindrome", (str) => {
    expect(PalindromeChecker.isPalindrome(str)).toBe(true);
  });

  it.each(["bill", "money", "fuck"])(
    "knows non-palindrome single word",
    (str) => {
      expect(PalindromeChecker.isPalindrome(str)).toBe(false);
    }
  );

  it.each(["Mom", "WoW", "LEVEL"])("knows off casing palindrome", (str) => {
    expect(PalindromeChecker.isPalindrome(str)).toBe(true);
  });

  it.each(["Was It A Rat I Saw", "Never Odd or Even"])(
    "knows palindrome in phrases",
    (str) => {
      expect(PalindromeChecker.isPalindrome(str)).toBe(true);
    }
  );

  it("knows that empty string is palindrome", () => {
     expect(PalindromeChecker.isPalindrome("")).toBe(true);
  })
});
