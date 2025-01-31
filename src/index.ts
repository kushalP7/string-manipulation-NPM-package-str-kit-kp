function capitalizeFirstLetter(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str: string): string {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+|\_)/g, (match, index) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '')
        .replace(/_/g, '');
}

function trimWhitespace(str: string): string {
    return str.trim();
}

function replaceSpacesWithUnderscore(str: string): string {
    return str.replace(/\s+/g, '_');
}

function toKebabCase(str: string): string {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase()
        .replace(/\s+/g, '-');
}

function capitalizeEveryLetter(str: string): string {
    return str.toUpperCase();
}

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

function isPalindrome(str: string): boolean {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function countWords(str: string): number {
    return str.trim().split(/\s+/).length;
}

function removeSpecialCharacters(str: string): string {
    return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

function truncateString(str: string, length: number): string {
    return str.length > length ? str.substring(0, length) + '...' : str;
}


export {
    capitalizeFirstLetter,
    toCamelCase,
    trimWhitespace,
    replaceSpacesWithUnderscore,
    toKebabCase,
    capitalizeEveryLetter,
    reverseString,
    isPalindrome,
    countWords,
    removeSpecialCharacters,
    truncateString
};

