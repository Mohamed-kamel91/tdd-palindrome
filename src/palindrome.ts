export class PalindromeChecker {
  static isPalindrome(str: string) {
    if (str === "") return true;

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
