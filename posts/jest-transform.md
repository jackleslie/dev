---
title: Jesting for sport
date: 27 December 2020
tldr: When testing frontend web applications (e.g a Next.js project) in a Node environment such as Jest, you need to use transformers to import non-JS assets like CSS modules.
---

This website's header is a React component, and the JavaScript (JSX) file's prelude looks like this:

```jsx
import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
...
```

In the first line, we are importing the default module from `react` and storing it in in the variable `React` which is valid JavaScript (although `react` isn't actually a valid import target at a language-level, this will actually get the React code from `node_modules` in the background). We do the same in the second line with `Link` - however, in the third line we are importing a non-JS asset: a CSS file.

This is not valid JavaScript at all, but frameworks like Next.js let us do it with its CSS Modules support out of the box.

When it comes to testing our code with Jest and no configuration, we'll come across an error like the following:

```bash
FAIL src/components/header/header.test.js
● Test suite failed to run
  Jest encountered an unexpected token
  Details:
  .header {
  ^
  SyntaxError: Unexpected token .
  > 3 | import styles from './header.module.css';
```

The environment that Next.js runs our development server in, and the environment that builds and runs our Next.js code, has no problem with importing this CSS module file like this. However, in our Jest environment it (correctly) shows it as an error (because it's invalid JavaScript).

We can allow this invalid JavaScript because it's a nice developer experience and Next.js resolves this issue for us, but what do we do to make Jest feel the same? The answer is the Jest configuration option `transform` which by default looks like this:

```auto
"transform": {
  "\\.[jt]sx?$": "babel-jest"
}
```

This tells our testing environment when it comes across a JS, JSX, TS or TSX file to use the `babel-jest` transformer. Since the environment doesn't know what to do with a `*.module.css` file it throws our error. To fix this, we need to add the following line to our `transform` configuration:

```auto
"^.+\\.module\\.css$": "jest-transform-stub"
```

We need to install `jest-transform-stub` as a dev dependency, but it's very simple transformer that lets you import the `*.module.css` file without throwing an error. It does this by turning it into a Node module that exports an empty string.
