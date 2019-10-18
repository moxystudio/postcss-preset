'use strict';

const preset = require('..');

jest.mock('postcss-import', () => (options) => ['postcss-import', options].filter((val) => val));
jest.mock('postcss-url', () => (options) => ['postcss-url', options].filter((val) => val));
jest.mock('postcss-advanced-variables', () => (options) => ['postcss-advanced-variables', options].filter((val) => val));
jest.mock('postcss-mixins', () => (options) => ['postcss-mixins', options].filter((val) => val));
jest.mock('postcss-calc', () => (options) => ['postcss-calc', options].filter((val) => val));
jest.mock('postcss-preset-env', () => (options) => ['postcss-preset-env', options].filter((val) => val));
jest.mock('postcss-color-function', () => (options) => ['postcss-color-function', options].filter((val) => val));

afterEach(jest.resetAllMocks);

it('should have a good base config', () => {
    expect(preset()).toMatchSnapshot();
});

it('should pass options.import to postcss-import ', () => {
    expect(preset({ import: 'foo' })).toMatchSnapshot();
});

it('should pass options.mixins to postcss-mixins ', () => {
    expect(preset({ mixins: 'foo' })).toMatchSnapshot();
});

it('should pass options.advancedVariables to postcss-advanced-variables ', () => {
    expect(preset({ advancedVariables: 'foo' })).toMatchSnapshot();
});

it('should disable postcss-url if options.url is false', () => {
    expect(preset({ url: false })).toMatchSnapshot();
});

it('should pass options.url to postcss-url', () => {
    expect(preset({ url: { foo: 'bar' } })).toMatchSnapshot();
});

it('should pass options.browsers to postcss-preset-env ', () => {
    expect(preset({ browsers: 'foo' })).toMatchSnapshot();
});

it('should disable postcss-css-variables if options.cssVariables is false', () => {
    expect(preset({ cssVariables: false })).toMatchSnapshot();
});

it('should pass options.cssVariables to postcss-css-variables', () => {
    expect(preset({ cssVariables: { preserve: true } })).toMatchSnapshot();
});
