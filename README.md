# str-kit-kp

`str-kit-kp` is a simple and easy-to-use package providing utility functions for string manipulation. It includes functions for capitalizing letters, converting strings to camelCase, kebab-case, and more.

## Features

- **Capitalize the first letter of a string**
- **Convert a string to camelCase**
- **Trim leading/trailing whitespace**
- **Replace spaces with underscores**
- **Convert a string to kebab-case**

## Installation

You can install `str-kit-kp` via npm:

```bash
npm install str-kit-kp

## Usage

To use `str-kit-kp` in your project, follow the examples below.

## Example: Usage in JavaScipt

```javascript
// Import the package
const strKit = require('str-kit-kp');

// Capitalize the first letter of a string
const result = strKit.capitalizeFirstLetter('hello world');
console.log(result); // Output: 'Hello world'

## Example: Usage in TypeScript

If you're using TypeScript, you can easily import and use the package like so:
```typescript
// Import the package
import * as strKit from 'str-kit-kp';

// Example: Capitalize the first letter of a string
const result: string = strKit.capitalizeFirstLetter('hello world');
console.log(result); // Output: 'Hello world'

// Example: Convert a string to camelCase
const camelCaseResult: string = strKit.toCamelCase('hello world');
console.log(camelCaseResult); // Output: 'helloWorld'

// Example: Trim leading/trailing whitespace
const trimmedResult: string = strKit.trimWhitespace('  some text  ');
console.log(trimmedResult); // Output: 'some text'

// Example: Replace spaces with underscores
const underscoredResult: string = strKit.replaceSpacesWithUnderscores('hello world');
console.log(underscoredResult); // Output: 'hello_world'

// Example: Convert a string to kebab-case
const kebabCaseResult: string = strKit.toKebabCase('Hello World');
console.log(kebabCaseResult); // Output: 'hello-world'


