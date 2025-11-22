export class PalindromeChecker {
  private static normalizeString(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
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

  // Solution (performance): large strings
  // static isPalindrome(str: string): boolean {
  //   if (str === "") return true;

  //   const normalized = str.toLowerCase().replace(/\s+/g, "");
  //   let left = 0;
  //   let right = normalized.length - 1;

  //   while (left < right) {
  //     if (normalized[left] !== normalized[right]) {
  //       return false;
  //     }
  //     left++;
  //     right--;
  //   }

  //   return true;
  // }
}
