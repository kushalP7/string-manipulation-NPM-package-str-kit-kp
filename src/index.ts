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

export { capitalizeFirstLetter, toCamelCase, trimWhitespace, replaceSpacesWithUnderscore, toKebabCase };
