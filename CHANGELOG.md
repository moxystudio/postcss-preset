# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.5.1](https://github.com/moxystudio/postcss-preset/compare/v4.5.0...v4.5.1) (2020-07-31)

## [4.5.0](https://github.com/moxystudio/postcss-preset/compare/v4.4.2...v4.5.0) (2020-07-31)


### Features

* change to browserslist-config-google/modern ([9cf0524](https://github.com/moxystudio/postcss-preset/commit/9cf05245555d67b3b73c72ff08ed0f3b6a7221ee))

### [4.4.2](https://github.com/moxystudio/postcss-preset/compare/v4.4.1...v4.4.2) (2020-03-10)

### [4.4.1](https://github.com/moxystudio/postcss-preset/compare/v4.4.0...v4.4.1) (2020-01-17)


### Bug Fixes

* change return structure to a standard and default options ([#35](https://github.com/moxystudio/postcss-preset/issues/35)) ([0a8d248](https://github.com/moxystudio/postcss-preset/commit/0a8d248bb425804f205903e1ca6276ce5d9a53fc))

## [4.4.0](https://github.com/moxystudio/postcss-preset/compare/v4.3.0...v4.4.0) (2019-12-13)


### Features

* add postcss-calc ([#32](https://github.com/moxystudio/postcss-preset/issues/32)) ([ac43d5d](https://github.com/moxystudio/postcss-preset/commit/ac43d5d603b08eaaed07bec1e8648bc51ac65efd))
* add support for iterators and better conditionals ([d860867](https://github.com/moxystudio/postcss-preset/commit/d860867697e99efe9054799285b95a9f304f508b)), closes [#33](https://github.com/moxystudio/postcss-preset/issues/33)

## [4.3.0](https://github.com/moxystudio/postcss-preset/compare/v4.2.0...v4.3.0) (2019-09-16)


### Features

* add ability to disable cssVariables ([52862a1](https://github.com/moxystudio/postcss-preset/commit/52862a1))



## [4.2.0](https://github.com/moxystudio/postcss-preset/compare/v4.1.2...v4.2.0) (2019-09-13)


### Features

* allow to customize cssVariables options ([17da1e8](https://github.com/moxystudio/postcss-preset/commit/17da1e8))



### [4.1.2](https://github.com/moxystudio/postcss-preset/compare/v4.1.1...v4.1.2) (2019-06-23)


### Bug Fixes

* fix media queries and variables combo being out of order ([b77efb8](https://github.com/moxystudio/postcss-preset/commit/b77efb8))



### [4.1.1](https://github.com/moxystudio/postcss-preset/compare/v4.1.0...v4.1.1) (2019-06-18)


### Bug Fixes

* fix autoprefixer warning because we were using a deprecated option ([cacb3a7](https://github.com/moxystudio/postcss-preset/commit/cacb3a7))



## [4.1.0](https://github.com/moxystudio/postcss-preset/compare/v4.0.1...v4.1.0) (2019-06-03)


### Features

* update stage of postcss-preset-env ([#30](https://github.com/moxystudio/postcss-preset/issues/30)) ([c2d9a96](https://github.com/moxystudio/postcss-preset/commit/c2d9a96))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/moxystudio/postcss-preset/compare/v4.0.0...v4.0.1) (2019-04-04)


### Bug Fixes

* fix issues related to custom properties in more complex nestings ([#29](https://github.com/moxystudio/postcss-preset/issues/29)) ([1dfa796](https://github.com/moxystudio/postcss-preset/commit/1dfa796))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/moxystudio/postcss-preset/compare/v3.0.0...v4.0.0) (2019-03-13)


### Features

* use postcss-preset-env instead of postcss-next ([#28](https://github.com/moxystudio/postcss-preset/issues/28)) ([a5429b3](https://github.com/moxystudio/postcss-preset/commit/a5429b3)), closes [#18](https://github.com/moxystudio/postcss-preset/issues/18)


### BREAKING CHANGES

* remove cssVariables option because postcss-preset-env will enable it based on the browsers
* remove postcss-for plugin
* we now postcss-preset-env with only stage 4 features, meaning most postcss-next plugins are no longer enabled

Also update dependencies.



<a name="3.0.0"></a>
# [3.0.0](https://github.com/moxystudio/postcss-preset/compare/v2.3.1...v3.0.0) (2019-02-08)


### Features

* allow flexibility for configuring import and mixins plugin ([#26](https://github.com/moxystudio/postcss-preset/issues/26)) ([cc4fb19](https://github.com/moxystudio/postcss-preset/commit/cc4fb19))


### BREAKING CHANGES

* the options schema changed
* the url options is now enabled by default



<a name="2.3.1"></a>
## [2.3.1](https://github.com/moxystudio/postcss-preset/compare/v2.3.0...v2.3.1) (2018-10-18)


### Bug Fixes

* fix postcss variables plugin not being before nesting ([edf8a5e](https://github.com/moxystudio/postcss-preset/commit/edf8a5e))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/moxystudio/postcss-preset/compare/v2.2.0...v2.3.0) (2018-09-17)


### Features

* add cssVariables option ([b8d9617](https://github.com/moxystudio/postcss-preset/commit/b8d9617))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/moxystudio/postcss-preset/compare/v2.1.1...v2.2.0) (2018-07-06)


### Features

* add postcss-conditionals again ([ba4e57a](https://github.com/moxystudio/postcss-preset/commit/ba4e57a))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/moxystudio/postcss-preset/compare/v2.1.0...v2.1.1) (2018-07-04)



<a name="2.1.0"></a>
# [2.1.0](https://github.com/moxystudio/postcss-preset/compare/v2.0.2...v2.1.0) (2018-07-04)


### Features

* ability to enable postcss-url ([ecc0835](https://github.com/moxystudio/postcss-preset/commit/ecc0835))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/moxystudio/postcss-preset/compare/v2.0.1...v2.0.2) (2018-07-01)


### Bug Fixes

* fix variables not working correctly with color functions ([5e70051](https://github.com/moxystudio/postcss-preset/commit/5e70051))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/moxystudio/postcss-preset/compare/v2.0.0...v2.0.1) (2018-07-01)


### Bug Fixes

* remove unused dependency ([9b87560](https://github.com/moxystudio/postcss-preset/commit/9b87560))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/moxystudio/postcss-preset/compare/v1.4.2...v2.0.0) (2018-07-01)


### Bug Fixes

* fix postcss-css-variables plugin order ([235c16f](https://github.com/moxystudio/postcss-preset/commit/235c16f))


### BREAKING CHANGES

* remove postcss-conditional



<a name="1.4.2"></a>
## [1.4.2](https://github.com/moxystudio/postcss-preset/compare/v1.4.1...v1.4.2) (2018-06-29)


### Bug Fixes

* **package:** update postcss-css-variables to version 0.9.0 ([#17](https://github.com/moxystudio/postcss-preset/issues/17)) ([6749322](https://github.com/moxystudio/postcss-preset/commit/6749322))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/moxystudio/postcss-preset/compare/v1.4.0...v1.4.1) (2018-05-16)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/moxystudio/postcss-preset/compare/v1.3.0...v1.4.0) (2018-05-16)


### Features

* include browsers as an available option ([#13](https://github.com/moxystudio/postcss-preset/issues/13)) ([c12e296](https://github.com/moxystudio/postcss-preset/commit/c12e296))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/moxystudio/postcss-preset/compare/v1.1.0...v1.3.0) (2018-01-09)


### Features

* add postcss-for ([4d62f68](https://github.com/moxystudio/postcss-preset/commit/4d62f68))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/moxystudio/postcss-preset/compare/v1.1.0...v1.2.0) (2018-01-09)


### Features

* add postcss-for ([4d62f68](https://github.com/moxystudio/postcss-preset/commit/4d62f68))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/moxystudio/postcss-preset/compare/v1.0.0...v1.1.0) (2017-11-30)


### Features

* add option mixinsPath for postcss-mixins ([2db4f4b](https://github.com/moxystudio/postcss-preset/commit/2db4f4b))
* add plugin postcss-conditionals ([ab447ad](https://github.com/moxystudio/postcss-preset/commit/ab447ad))



<a name="1.0.0"></a>
# 1.0.0 (2017-11-23)


### Features

* initial implementation ([146628a](https://github.com/moxystudio/postcss-preset/commit/146628a))
