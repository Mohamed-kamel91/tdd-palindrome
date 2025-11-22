export class PalindromeChecker {
  static isPalindrome(str: string) {
    return str.split("").reverse().join("") === str;
  }
}
