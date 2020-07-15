---
title: The Curious Case of PropTypes
date: 15 July 2020
tldr: PropTypes is installed as a dependency and declarations end up in production bundles, yet are only helpful during development. To remove from production bundles use babel-plugin-transform-react-remove-prop-types.
---

The [PropTypes](https://www.npmjs.com/package/prop-types) package is one of the most depended on packages on [NPM](https://www.npmjs.com/browse/depended). It is frequently used with React projects; it was originally a part of the core React package up until v15.5 and is still [officially recommended](https://reactjs.org/docs/typechecking-with-proptypes.html) by the React team. It aids development by providing type checking for React props during runtime, helping developers catch bugs early on during development.

In order to use PropTypes you must install it as a [full dependency](https://www.npmjs.com/package/prop-types#installation) of your project, rather than a dev dependency. This is due to the runtime nature of the type checking; you must import PropTypes in the [source code](https://www.npmjs.com/package/prop-types#usage) of your React components and use declarations explicitly. This means that when you build your project these declarations also end up in your production bundle.

This causes production bloat and keeps in a lot of unecessary code which provides no functionality in a production setting; the declarations provided by PropTypes are only really used in the development environment.

The initial response is to simply install the package as a dev dependency instead of a full one, however this isn't possible as the declarations are used specifically in the source code of your components and thus qualify as "production code".

Instead, you can use the [Babel](https://babeljs.io/) plugin [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types). This will allow you to install PropTypes as intended but during your production build step Babel will remove this code for you. This technique is documented and recommended by [Google Chrome Labs](https://github.com/GoogleChromeLabs/webpack-libs-optimizations#react), and is safe to use by default.