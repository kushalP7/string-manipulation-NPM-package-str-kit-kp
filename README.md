# str-kit-kp

`str-kit-kp` is a simple and easy-to-use package providing utility functions for string manipulation. It includes functions for capitalizing letters, converting strings to camelCase, kebab-case, and more.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install str-kit-kp
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Features

  * Capitalize the first letter of a string
  * Convert a string to camelCase
  * Trim leading/trailing whitespace
  * Replace spaces with underscores
  * Convert a string to kebab-case

## Docs & Community

  * [GitHub Organization](https://github.com/kushalP7/string-manipulation-NPM-package-str-kit-kp.git) for Official Middleware & Modules

## Quick Start

  To get started with str-kit-kp, follow these steps:

  Install the executable. The executable's major version will match Express's:

```console
$ npm install str-kit-kp
```

```js
//In JavaScript
const strKit = require('str-kit-kp');
const result = strKit.capitalizeFirstLetter('hello world');
console.log(result); // Output: 'Hello world'
```

```ts
//In TypeScipt
import * as strKit from 'str-kit-kp';

const result: string = strKit.capitalizeFirstLetter('hello world');
console.log(result); // Output: 'Hello world'

const camelCaseResult: string = strKit.toCamelCase('hello world');
console.log(camelCaseResult); // Output: 'helloWorld'

const trimmedResult: string = strKit.trimWhitespace('  some text  ');
console.log(trimmedResult); // Output: 'some text'

const underscoredResult: string = strKit.replaceSpacesWithUnderscores('hello world');
console.log(underscoredResult); // Output: 'hello_world'

const kebabCaseResult: string = strKit.toKebabCase('Hello World');
console.log(kebabCaseResult); // Output: 'hello-world'

const capitalizeEveryLetterResult: string = strKit.capitalizeEveryLetter('hello world');
console.log(capitalizeEveryLetterResult); // Output: 'HELLO WORLD'
```