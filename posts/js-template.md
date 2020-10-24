---
title: JS project template
date: 7 August 2020
tldr: A GitHub template for JavaScript projects with Husky hooks pre-configured; Jest for testing (pre-push), Babel, ESLint and Prettier for syntax and formatting (pre-commit) and Commitlint for commit messages (commit-msg).
---

I found myself copying and pasting the same package.json and config files for each new JavaScript project I started, so I made use of the [GitHub Template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-template-repository) feature in order to mediate the situation. The projects that I use this for are primarily Node.js codebases rather than a frontend codebase with web-based technologies, and were things such as web-scrapers or small command-line tools.

The template itself can be found on my GitHub at [jackleslie/js](https://github.com/jackleslie/js).

This template is suited for those who like to rely on Git Hooks as a part of their development pipeline - to enable this I use Husky in order to define three hooks: pre-commit, commit-msg and pre-push.

### pre-commit

Before staged files can be committed I use [lint-staged](https://github.com/okonet/lint-staged) to run ESLint and Prettier against source and test JS files. The ESLint rules I use are inherited from [Airbnb's base JavaScript guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and I use the default Prettier rules.

### commit-msg

Once the staged files have been successfully linted and formatted I check that the commit message conforms to the [Conventional Commits standard](https://www.conventionalcommits.org/en/v1.0.0/). To do this I run the [commitlint command](https://github.com/conventional-changelog/commitlint) which used the standard configuration found in the package.json file.

### pre-push

After one or many meaningful commits the code can only be pushed if all tests pass, which are run with Jest. This means that there will never be code on another machine that does not fully conform to the project's test suite. To avoid this becoming a development bottleneck (i.e realising that lots of tests fail after many commits) there is an NPM script to run Jest in watch mode so that you can ensure tests are passing before you try to push.

### misc

Outside of these Git Hooks, VSCode will take into account the ESLint and Prettier configuration to display errors during development. Also, Babel is used when building the code so that if it's to be distributed on NPM it will have all the necessary polyfills and translilation performed on it.
