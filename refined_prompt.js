/**
 * Converts one or more input strings to camelCase format.
 *
 * Joins all input strings with spaces, trims whitespace, splits into words,
 * and returns a camelCase string (first word in lowercase, subsequent words capitalized).
 *
 * @param {...string} inputs - One or more strings to be converted to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws if any input is not a string or if no inputs are provided.
 *
 * @example
 * camel('john munene'); // 'johnMunene'
 * camel('John', 'Munene'); // 'johnMunene'
 * camel('john', 'munene'); // 'johnMunene'
 * camel('john'); // 'john'
 * camel(''); // ''
 * camel(123); // throws Error
 */
 
/**
 * Converts one or more input strings to dot.case format.
 *
 * Joins all input strings with spaces, trims whitespace, splits into words,
 * and returns a dot-separated, lowercase string.
 *
 * @param {...string} inputs - One or more strings to be converted to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} Throws if any input is not a string or if no inputs are provided.
 *
 * @example
 * dotCase('john munene'); // 'john.munene'
 * dotCase('John', 'Munene'); // 'john.munene'
 * dotCase('john', 'munene'); // 'john.munene'
 * dotCase('john'); // 'john'
 * dotCase(''); // ''
 * dotCase(123); // throws Error
 */
function camel(...inputs) {
    if (inputs.length === 0 || !inputs.every(i => typeof i === 'string')) {
        throw new Error('All inputs must be strings');
    }
    return inputs
        .join(' ')
        .trim()
        .split(/\s+/)
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}
function dotCase(...inputs) {
    if (inputs.length === 0 || !inputs.every(i => typeof i === 'string')) {
        throw new Error('All inputs must be strings');
    }
    return inputs
        .join(' ')
        .trim()
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// camel('john munene') => 'johnMunene'
// camel('John', 'Munene') => 'johnMunene'
// camel('john', 'munene') => 'johnMunene'
// camel('john') => 'john'
// camel('') => ''
// camel(123) // throws error

/**
 * Converts one or more input strings to kebab-case format.
 *
 * Joins all input strings with spaces, trims whitespace, replaces whitespace with hyphens,
 * and returns a lowercase string.
 *
 * @param {...string} inputs - One or more strings to be converted to kebab-case.
 * @returns {string} The kebab-case formatted string.
 * @throws {Error} Throws if any input is not a string or if no inputs are provided.
 *
 * @example
 * toKebabCase('john munene'); // 'john-munene'
 * toKebabCase('John', 'Munene'); // 'john-munene'
 * toKebabCase('john', 'munene'); // 'john-munene'
 * toKebabCase('john'); // 'john'
 * toKebabCase(''); // ''
 * toKebabCase(123); // throws Error
 */
function toKebabCase(...inputs) {
    if (inputs.length === 0 || !inputs.every(i => typeof i === 'string')) {
        throw new Error('All inputs must be strings');
    }
    return inputs
        .join(' ')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();
}