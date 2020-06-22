---
title: Linting with CSS Modules
date: 21st June 2020
tldr: When using CSS Modules, having a CSS linter such as stylelint isn't enough - you also need to use JavaScript linter with functionality to lint the code loading the CSS Module classes.
---

Linting is an essential part of any modern JavaScript project; it can be found as a custom NPM script in many projects or as part of a Git hook to prevent committing un-linted code. Ideally both your JavaScript and CSS should be linted, using tools like [ESLint](https://eslint.org/) and [stylelint](https://stylelint.io/) respectively. Even the bare minimum set ups that are enabled through extending popular configuration such as [Airbnb's ESLint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [stylelint's standard config](https://github.com/stylelint/stylelint-config-standard) provide huge benefits to development through static code analysis.

However, when CSS Modules are introduced into a project a gap appears in the static analysis of the code; there is, by default, no analysis done on the CSS Module being imported. For example, consider a simple React component importing styles from a CSS Module:

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


Even though the CSS is linted in itself by stylelint, there is no way to check, for example, if any of the classes in the CSS Module are unused:

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

Even though this is an issue regarding the CSS Modules being introduced, it is in fact the JavaScript linter's job to analyse this aspect of the code, not the CSS linter. In order to fill this gap in analysis the ESLint plugin [eslint-plugin-css-modules](https://www.npmjs.com/package/eslint-plugin-css-modules) can be used. Now, if an unused CSS Module class is present then ESLint will flag an error:

```
error Unused classes found in header.module.css: headerIcon css-modules/no-unused-class
```

If you're using CSS Modules in your JavaScript project then use a plugin like this to ensure you are getting the most out of your linters.