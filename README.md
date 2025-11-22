# TDD Palindrome

A simple Palindrome Checker built using Test-Driven Development (TDD).

---

## Project Overview(TDD)

This project is a simple **Palindrome Checker** built using **Test-Driven Development (TDD)**.  
The goal of the project is to practice writing tests first, then implementing the logic to make the tests pass.

---

## What is a Palindrome?

A **palindrome** is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

### Examples:
- **Single words**: "mom", "wow", "racecar"
- **Case-insensitive**: "Mom", "Wow", "RaceCar" 
- **Phrases**: "Was It A Rat I Saw", "Never Odd or Even"
- **Non-palindromes**: "bill", "hello", "world"

---

## Features

The palindrome checker supports:

- Case-insensitive checks (`Mom` → palindrome)
- Handle phrases and sentences (`Was It A Rat I Saw`)
- Ignore spaces and special characters
- Empty strings and edge cases
- Built with TypeScript for type safety

---

## Tech Stack

- TypeScript
- Node.js
- Jest (testing)

---

## Project Structure

```
tdd-palindrome/
├── src/
│   └── palindrome.spec.ts
│   └── palindrome.ts
├── package.json
└── README.md
```
---

## Approach

This project follows the **TDD cycle**:

1. Write a failing test (Red)
2. Write the minimal code to make the test pass (Green)
3. Refactor the code while keeping tests green (Refactor)

---

## Getting Started

### Installation

```bash
git clone https://github.com/Mohamed-kamel91/tdd-palindrome.git
cd tdd-palindrome
npm install
```

### Running Tests

```bash
npm test
npm run test:dev
```
---

## Usage

### Basic Usage

```typescript
import { isPalindrome } from './src/palindrome';

// Single words
console.log(isPalindrome('mom'));        // true
console.log(isPalindrome('wow'));        // true
console.log(isPalindrome('bill'));       // false

// Case insensitive
console.log(isPalindrome('Mom'));        // true
console.log(isPalindrome('RaceCar'));    // true

// Phrases with spaces
console.log(isPalindrome('Was It A Rat I Saw'));        // true
console.log(isPalindrome('Never Odd or Even'));         // true
console.log(isPalindrome('A man a plan a canal Panama')); // true
```
---

## API

```typescript
isPalindrome(input: string): boolean
```
### Parameters:

input (string): The string to check

### Returns:

boolean: true if the input is a palindrome, false otherwise

---

## Learning Goals

- Practice real-world TDD workflow
- Improve unit testing skills
- Build confidence writing predictable code