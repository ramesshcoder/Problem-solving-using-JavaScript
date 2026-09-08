function getDuplicateChar(string) {
    const frequency = {};

    for (let char of string) {
        if (frequency[char]) {
            frequency[char] += 1;
        } else {
            frequency[char] = 1;
        }
    }

    for (let char of string) {
        if (frequency[char] > 1) {
            return char;
        }
    }
}

console.log(getDuplicateChar('book'));