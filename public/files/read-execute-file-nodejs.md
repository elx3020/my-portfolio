# How to read and execute file in node Js



<img class='blog-c' src='/images/blog/cover_readfile_nodejs.jpg' alt='Test'>

The most basic approach to reading a file in Node.js involves utilizing the fs.readFile() function. This function requires parameters such as the file path, encoding, and a callback function. The callback function will receive the file data along with any potential errors.

```js

const fs = require('node:fs');
fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

```

Alternatively, you can use the synchronous version `fs.readFileSync():`

```js

const fs = require('node:fs');
try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

```

You can also use the promise-based `fsPromises.readFile()` method offered by the fs/promises module:

```js

const fs = require('node:fs/promises');
async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();

```

All three of `fs.readFile()`, `fs.readFileSync()` and `fsPromises.readFile()` read the full content of the file in memory before returning the data.

This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.

In this case, a better option is to read the file content using streams.