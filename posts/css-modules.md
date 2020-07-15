---
title: Linting with CSS Modules
date: 22 June 2020
tldr: When using CSS Modules, having a CSS syntax linter such as stylelint isn't enough - you also need to use a JavaScript linter such as ESLint with functionality to lint the CSS Module being imported (e.g. eslint-plugin-css-modules).
---

Linting is an essential part of any modern JavaScript project; it can be found as a custom NPM script in many projects or as part of a Git hook to prevent committing un-linted code. Ideally both your JavaScript and CSS syntax should be linted, using tools like [ESLint](https://eslint.org/) and [stylelint](https://stylelint.io/) respectively. Even the bare minimum setups that are enabled through extending popular configurations such as [Airbnb's ESLint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [stylelint's standard config](https://github.com/stylelint/stylelint-config-standard) provide huge benefits to development through static code analysis.

However, even with such a setup, when CSS Modules are introduced into a project a gap appears in the static analysis of the code; there is, by default, no analysis done on the CSS Module being imported. For example, consider a simple React component importing styles from a CSS Module:

```js
// header.js
import styles from './header.module.css';

export default function Header({ children }) {
  return (
    // what if .header doesn't exist?
    <h1 className={styles.header}>{children}</h1>
  )
}
```


Even though the CSS syntax is linted in itself by stylelint, there is no way to check, for example, if any of the classes in the CSS Module are unused:

```css
/* header.module.css */
.header {
  font-family: system-ui;
}

/* this isn't used, so should be flagged by a linter */
.headerIcon {
  position: absolute;
}
```

Despite it being in the domain of CSS, it is in fact the JavaScript linter's job to analyse this aspect of the code, not the CSS linter. In order to fill this gap in analysis the ESLint plugin [eslint-plugin-css-modules](https://www.npmjs.com/package/eslint-plugin-css-modules) can be used. Now, if an unused CSS Module class is present then ESLint will flag an error:

```
error Unused classes found in header.module.css: headerIcon css-modules/no-unused-class
```

If you're using CSS Modules in your JavaScript project then use a plugin like this to ensure you are getting the most out of your linters.