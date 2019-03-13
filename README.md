# postcss-preset-moxy

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/postcss-preset-moxy
[npm-image]:http://img.shields.io/npm/v/postcss-preset-moxy.svg
[downloads-image]:http://img.shields.io/npm/dm/postcss-preset-moxy.svg
[travis-url]:https://travis-ci.org/moxystudio/postcss-preset-moxy
[travis-image]:http://img.shields.io/travis/moxystudio/postcss-preset-moxy/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/postcss-preset-moxy
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/postcss-preset-moxy/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/postcss-preset-moxy
[david-dm-image]:https://img.shields.io/david/moxystudio/postcss-preset-moxy.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/postcss-preset-moxy?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/postcss-preset-moxy.svg

[PostCSS](http://cssnext.io/) preset to be used at MOXY.


## Installation

`$ npm install postcss-preset-moxy --save-dev`

You might need to also install [postcss-cli](https://github.com/postcss/postcss-cli) as a dev dependency.


## Motivation

If you are developing a project that uses new CSS language features and must work on targets that do not yet support them, you have to transpile your styles. This preset provides a shareable PostCSS config as a preset that should be used across those projects at MOXY.

- Uses [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) to automatically support official CSS features in older browsers
- Uses [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) instead of [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) because it's [more complete](https://github.com/MadLittleMods/postcss-css-variables#interoperability-and-differences-from-postcss-custom-properties)
- Enables [postcss-import](https://github.com/postcss/postcss-import) so that `@import` statements are inlined
- Optionally enables [postcss-url](https://github.com/postcss/postcss-url) so that `url()` statements are processed
- Enables [postcss-mixins](https://github.com/postcss/postcss-mixins) so that you can define mixins
- Enables [postcss-conditionals](https://github.com/andyjansson/postcss-conditionals) so that you can use `@if` and `@else` statements, useful inside mixins
- Enables [postcss-color-function](https://github.com/postcss/postcss-color-function) so that you can use `alpha`, `lightness` and other color utilities


## Usage

Create `postcss.config.js` at the root of your project:

```js
module.exports = require('postcss-preset-moxy')();
```

...or with options

```js
module.exports = require('postcss-preset-moxy')({
    import: { path: './src/styles' },
    mixins: { mixinsDir: './src/styles/mixins' },
});
```

Available options:

| Name   | Description   | Type     | Default |
| ------ | ------------- | -------- | ------- |
| import | Options to pass to [postcss-import](https://github.com/postcss/postcss-import#path) | Object | undefined |
| mixins | Options to pass to [postcss-mixins](https://github.com/postcss/postcss-mixins#mixinsdir) | Object | undefined |
| url | Options to pass to [postcss-url](https://github.com/postcss/postcss-mixins#mixinsdir), false disables any transpilation of `url()` declarations | boolean/Array/Object | `{ url: 'rebase' }` |
| browsers | Supported browsers list to pass to [postcss-cssnext](https://github.com/MoOx/postcss-cssnext) | Array | [browserslist-config-google](https://github.com/awkaiser/browserslist-config-google) |

The [postcss-url](https://github.com/postcss/postcss-url) plugin is enabled by default. You may disable it like so:

```js
module.exports = require('postcss-preset-moxy')({
    url: false,
});
```


## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT License](http://opensource.org/licenses/MIT)
