export class PalindromeChecker {
  private static normalizeString(str: string): string {
    return str.toLowerCase().replace(/\s+/g, "");
  }

  private static reverseString(str: string): string {
    return str.split("").reverse().join("");
  }

  static isPalindrome(str: string) {
    if (str === "") return true;

    const normalized = this.normalizeString(str);
    const reversed = this.reverseString(normalized);

    return normalized === reversed;
  }
}
