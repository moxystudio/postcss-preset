# postcss-preset

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/postcss-preset
[npm-image]:https://img.shields.io/npm/v/@moxy/postcss-preset.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/postcss-preset.svg
[build-status-url]:https://github.com/moxystudio/postcss-preset/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/postcss-preset/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/postcss-preset
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/postcss-preset/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/postcss-preset
[david-dm-image]:https://img.shields.io/david/moxystudio/postcss-preset.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/postcss-preset?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/postcss-preset.svg

[PostCSS](http://cssnext.io/) preset to be used at MOXY.


## Installation

```ssh
$ npm install @moxy/postcss-preset --save-dev
```

You might need to also install [postcss-cli](https://github.com/postcss/postcss-cli) as a dev dependency.


## Motivation

If you are developing a project that uses new CSS language features and must work on targets that do not yet support them, you have to transpile your styles. This preset provides a shareable PostCSS config as a preset that should be used across those projects at MOXY.

- Uses [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) to automatically support official CSS features in older browsers
  - Stage 3
  - Custom @media queries
  - Nesting rules
  - `:dir` pseudo-class (useful for i18n)
- Enables [postcss-import](https://github.com/postcss/postcss-import) so that `@import` statements are inlined
- Optionally enables [postcss-url](https://github.com/postcss/postcss-url) so that `url()` statements are processed
- Enables [postcss-mixins](https://github.com/postcss/postcss-mixins) so that you can define mixins
- Enables [postcss-advanced-variables](https://github.com/jonathantneal/postcss-advanced-variables) add support for iterators (@for and @each) and conditionals (@if and @else)
- Enables [postcss-calc](https://github.com/postcss/postcss-calc) so that `calc()` references are reduced whenever it's possible


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
| import | Options to pass to [postcss-import](https://github.com/postcss/postcss-import#path) | Object | `{}` |
| mixins | Options to pass to [postcss-mixins](https://github.com/postcss/postcss-mixins#mixinsdir) | Object | `{ mixinsDir: './src/styles/mixins' }` |
| advancedVariables | Options to pass to [postcss-advanced-variables](https://github.com/jonathantneal/postcss-advanced-variables#options) | Object | `{}`¹ |
| url | Options to pass to [postcss-url](https://github.com/postcss/postcss-url), false disables any transpilation of `url()` declarations | Array/Object/boolean | `{ url: 'rebase' }` |
| browsers | Supported browsers list to pass to [postcss-cssnext](https://github.com/MoOx/postcss-cssnext) | Array | `['extends browserslist-config-google/modern']`, see [browserslist-config-google](https://github.com/awkaiser/browserslist-config-google) (modern)  |

1) `advancedVariables` is not actually empty by default since it contains `{disable: '@mixin, @include, @content, @import'}` but this options can be easily changed by passing the desired `disable` object.

The [postcss-url](https://github.com/postcss/postcss-url) plugin is enabled by default. You may disable it like so:

```js
module.exports = require('@moxy/postcss-preset')({
    url: false,
});
```


## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```


## License

[MIT License](http://opensource.org/licenses/MIT)
