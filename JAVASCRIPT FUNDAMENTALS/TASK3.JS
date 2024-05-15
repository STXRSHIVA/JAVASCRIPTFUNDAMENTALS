function findMatches(inputString, pattern) {
    const regex = new RegExp(pattern, 'g'); // 'g' for global search
    return inputString.match(regex) || []; // Return matches or an empty array if no matches found
}

// Test the function with different patterns
const testString = "Hello World! 1234 @#$%";

// Pattern for digits
const digitsPattern = '\\d'; // \d is the character class for digits
console.log("Digits found:", findMatches(testString, digitsPattern));

// Pattern for uppercase letters
const uppercasePattern = '[A-Z]'; // A-Z is the character class for uppercase letters
console.log("Uppercase letters found:", findMatches(testString, uppercasePattern));

// Pattern for lowercase letters
const lowercasePattern = '[a-z]'; // a-z is the character class for lowercase letters
console.log("Lowercase letters found:", findMatches(testString, lowercasePattern));

// Pattern for special characters
const specialCharsPattern = '[^A-Za-z0-9]'; // Matches any character that is not a letter or digit
console.log("Special characters found:", findMatches(testString, specialCharsPattern));