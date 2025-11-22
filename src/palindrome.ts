export class PalindromeChecker {
  static isPalindrome(str: string) {
    return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
  }
}
