function camel(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str
        .toLowerCase()
        .split(' ')
        .map((word, idx) => {
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(camel('john munene')); // Output: johnMunene