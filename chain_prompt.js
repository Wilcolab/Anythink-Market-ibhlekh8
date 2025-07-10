function toKebabCase(input) {
    // Check for non-string input
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    // Check for unclosed or unmatched quotes (basic syntax error detection)
    // This only checks for a missing closing quote at the start or end
    if (
        (input.startsWith("'") && !input.endsWith("'")) ||
        (input.startsWith('"') && !input.endsWith('"'))
    ) {
        throw new Error('Input string has unmatched quotes');
    }
    return input
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();
}

// Example usage:
console.log(toKebabCase('john munene'));      // Output: 'john-munene'
console.log(toKebabCase('john Munene'));      // Output: 'john-munene'
console.log(toKebabCase('  John   Munene  ')); // Output: 'john-munene'
console.log(toKebabCase('JOHN MUNENE'));      // Output: 'john-munene'