'use strict';

const preset = require('..');

jest.mock('postcss-import', () => (options) => ['postcss-import', options].filter((val) => val));
jest.mock('postcss-url', () => (options) => ['postcss-url', options].filter((val) => val));
jest.mock('postcss-mixins', () => (options) => ['postcss-mixins', options].filter((val) => val));
jest.mock('postcss-css-variables', () => (options) => ['postcss-css-variables', options].filter((val) => val));
jest.mock('postcss-for', () => (options) => ['postcss-for', options].filter((val) => val));
jest.mock('postcss-conditionals', () => (options) => ['postcss-conditionals', options].filter((val) => val));
jest.mock('postcss-cssnext', () => (options) => ['postcss-cssnext', options].filter((val) => val));

afterEach(jest.resetAllMocks);

it('should have a good base config', () => {
    expect(preset()).toMatchSnapshot();
});

it('should pass options.importPath to postcss-import ', () => {
    expect(preset({ importPath: 'foo' })).toMatchSnapshot();
});

it('should pass options.mixinsPath to postcss-mixins ', () => {
    expect(preset({ mixinsPath: 'foo' })).toMatchSnapshot();
});

it('should enable postcss-url if options.url is true', () => {
    expect(preset({ url: true })).toMatchSnapshot();
});

it('should pass options.url to postcss-url', () => {
    expect(preset({ url: { foo: 'bar' } })).toMatchSnapshot();
});

it('should disable postcss-css-variables if options.cssVariables is false', () => {
    expect(preset({ cssVariables: false })).toMatchSnapshot();
});

it('should pass options.cssVariables to postcss-css-variables', () => {
    expect(preset({ cssVariables: { foo: 'bar' } })).toMatchSnapshot();
});

it('should pass options.browsers to postcss-cssnext ', () => {
    expect(preset({ browsers: 'foo' })).toMatchSnapshot();
});
