# postcss-preset-moxy

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

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
[greenkeeper-image]:https://badges.greenkeeper.io/moxystudio/postcss-preset-moxy.svg
[greenkeeper-url]:https://greenkeeper.io

[PostCSS](http://cssnext.io/) preset to be used at MOXY.


## Installation

`$ npm install postcss-preset-moxy --save-dev`

You might need to also install [postcss-cli](https://github.com/postcss/postcss-cli) as a dev dependency.


## Motivation

If you are developing a project that uses new CSS language features and must work on targets that do not yet support them, you have to transpile your styles. This preset provides a shareable PostCSS config as a preset that should be used across those projects at MOXY.

- You can use any features from [cssnext](http://cssnext.io/)
- Enables [postcss-import](https://github.com/postcss/postcss-import) so that `@import` statements are inlined
- Enables [postcss-mixins](https://github.com/postcss/postcss-mixins) so that you can define mixins
- Enables [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) instead of [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) because it's [more complete](https://github.com/MadLittleMods/postcss-css-variables#differences-from-postcss-custom-properties).


## Usage

Create `postcss.config.js` at the root of your project:

```js
module.exports = require('postcss-preset-moxy')();
```

...or with options

```js
module.exports = require('postcss-preset-moxy')({
    importPath: './src/styles',
});
```

Available options:

| Name   | Description   | Type     | Default |
| ------ | ------------- | -------- | ------- |
| importPath | The path to pass to [postcss-import](https://github.com/postcss/postcss-import#path) | string/Array | undefined |


## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT License](http://opensource.org/licenses/MIT)
