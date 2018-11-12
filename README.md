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

[PostCSS](https://preset-env.cssdb.org/) preset to be used at MOXY.


## Installation

`$ npm install postcss-preset-moxy --save-dev`

You might need to also install [postcss-cli](https://github.com/postcss/postcss-cli) as a dev dependency.


## Motivation

If you are developing a project that uses new CSS language features and must work on targets that do not yet support them, you have to transpile your styles. This preset provides a shareable PostCSS config as a preset that should be used across those projects at MOXY.

- You can use any features from [postcss-preset-env](https://preset-env.cssdb.org/) stage 3
- Enables [postcss-preset-env](https://preset-env.cssdb.org/)'s [nesting rules](https://preset-env.cssdb.org/features#nesting-rules) so that nested statements are possible
- Enables [postcss-preset-env](https://preset-env.cssdb.org/)'s [image-set function](https://preset-env.cssdb.org/features#image-set-function) so that a source set can be defined based on the user's resolution
- Enables [postcss-import](https://github.com/postcss/postcss-import) so that `@import` statements are inlined
- Optionally enables [postcss-url](https://github.com/postcss/postcss-url) so that `url()` statements are processed
- Enables [postcss-mixins](https://github.com/postcss/postcss-mixins) so that you can define mixins
- Enables [postcss-for](https://github.com/antyakushev/postcss-for) so that you can use `@for` loop
- Enables [postcss-conditionals](https://github.com/andyjansson/postcss-conditionals) so that you can use `@if` and `@else` statements, useful inside mixins
- Enables [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) instead of [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) because it's [more complete](https://github.com/MadLittleMods/postcss-css-variables#differences-from-postcss-custom-properties).
- Enables [postcss-apply](https://github.com/pascalduez/postcss-apply) so that @apply rules can be used
- Enables [postcss-calc](https://github.com/postcss/postcss-calc) so that calc() oparations can be reduced  

## Usage

Create `postcss.config.js` at the root of your project:

```js
module.exports = require('postcss-preset-moxy')();
```

...or with options

```js
module.exports = require('postcss-preset-moxy')({
    importPath: './src/styles',
    mixinsPath: './src/styles/mixins',
});
```

Available options:

| Name   | Description   | Type     | Default |
| ------ | ------------- | -------- | ------- |
| importPath | The path to pass to [postcss-import](https://github.com/postcss/postcss-import#path) | string/Array | undefined |
| mixinsPath | The path to pass to [postcss-mixins](https://github.com/postcss/postcss-mixins#mixinsdir) | string/Array | undefined |
| url | Options to pass to [postcss-url](https://github.com/postcss/postcss-mixins#mixinsdir), false disables any transpilation of `url()` declarations | boolean/Array/Object | false |
| cssVariables | Options to pass to [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables), false disables any transpilation of `var()` declarations | boolean/Object | true |
| calc | Options to pass to [postcss-calc](https://github.com/postcss/postcss-calc), false disables the reduction of calc operations | boolean/Object | true |
| browsers | Supported browsers list to pass to [postcss-cssnext](https://github.com/MoOx/postcss-cssnext) | Array | [browserslist-config-google](https://github.com/awkaiser/browserslist-config-google) |

The [postcss-url](https://github.com/postcss/postcss-url) plugin is disabled by default. You may activate it like so:

```js
module.exports = require('postcss-preset-moxy')({
    url: true // instead of `true`, you may pass any options to the url plugin
});
```


## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT License](http://opensource.org/licenses/MIT)
