# postcss-preset

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/postcss-preset
[npm-image]:https://img.shields.io/npm/v/@moxy/postcss-preset.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/postcss-preset.svg
[travis-url]:https://travis-ci.org/moxystudio/postcss-preset
[travis-image]:https://img.shields.io/travis/moxystudio/postcss-preset/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/postcss-preset
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/postcss-preset/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/postcss-preset
[david-dm-image]:https://img.shields.io/david/moxystudio/postcss-preset.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/postcss-preset?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/postcss-preset.svg

[PostCSS](http://cssnext.io/) preset to be used at MOXY.


## Installation

`$ npm install @moxy/postcss-preset --save-dev`

You might need to also install [postcss-cli](https://github.com/postcss/postcss-cli) as a dev dependency.


## Motivation

If you are developing a project that uses new CSS language features and must work on targets that do not yet support them, you have to transpile your styles. This preset provides a shareable PostCSS config as a preset that should be used across those projects at MOXY.

- Uses [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) to automatically support official CSS features in older browsers
- Uses [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) instead of [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) because it's [more complete](https://github.com/MadLittleMods/postcss-css-variables#interoperability-and-differences-from-postcss-custom-properties)
- Enables [postcss-import](https://github.com/postcss/postcss-import) so that `@import` statements are inlined
- Optionally enables [postcss-url](https://github.com/postcss/postcss-url) so that `url()` statements are processed
- Enables [postcss-mixins](https://github.com/postcss/postcss-mixins) so that you can define mixins
- Enables [postcss-advanced-variables](https://github.com/jonathantneal/postcss-advanced-variables) add support for iterators (@for and @each)and conditionals (@if and @else)
- Enables [postcss-calc](https://github.com/postcss/postcss-calc) so that `calc()` references are reduced whenever it's possible
- Enables [postcss-color-function](https://github.com/postcss/postcss-color-function) so that you can use `alpha`, `lightness` and other color utilities


## Usage

Create `postcss.config.js` at the root of your project:

```js
module.exports = require('@moxy/postcss-preset')();
```

...or with options

```js
module.exports = require('@moxy/postcss-preset')({
    import: { path: './src/styles' },
    mixins: { mixinsDir: './src/styles/mixins' },
    advancedVariables: { unresolved: 'warn' },
});
```

Available options:

| Name   | Description   | Type     | Default |
| ------ | ------------- | -------- | ------- |
| import | Options to pass to [postcss-import](https://github.com/postcss/postcss-import#path) | Object | undefined |
| mixins | Options to pass to [postcss-mixins](https://github.com/postcss/postcss-mixins#mixinsdir) | Object | undefined |
| advancedVariables | Options to pass to [postcss-advanced-variables](https://github.com/jonathantneal/postcss-advanced-variables#options) | Object | undefined |
| cssVariables | Options to pass to [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables), false disables the plugin | Object/boolean | `{ preserveAtRulesOrder: true }` |
| url | Options to pass to [postcss-url](https://github.com/postcss/postcss-url), false disables any transpilation of `url()` declarations | Array/Object/boolean | `{ url: 'rebase' }` |
| browsers | Supported browsers list to pass to [postcss-cssnext](https://github.com/MoOx/postcss-cssnext) | Array | [browserslist-config-google](https://github.com/awkaiser/browserslist-config-google) |

The [postcss-url](https://github.com/postcss/postcss-url) plugin is enabled by default. You may disable it like so:

```js
module.exports = require('@moxy/postcss-preset')({
    url: false,
});
```


## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT License](http://opensource.org/licenses/MIT)
