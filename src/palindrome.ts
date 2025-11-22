export class PalindromeChecker {
  static isPalindrome(str: string) {
    return (
      str
        .toLowerCase()
        .split("")
        .filter((t) => t !== " ")
        .reverse()
        .join("") ===
      str
        .toLowerCase()
        .split("")
        .filter((t) => t !== " ")
        .join("")
    );
  }
}
