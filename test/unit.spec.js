'use strict';

const preset = require('..');

jest.mock('postcss-import', () => (options) => ['postcss-import', options].filter((val) => val));
jest.mock('postcss-url', () => (options) => ['postcss-url', options].filter((val) => val));
jest.mock('postcss-mixins', () => (options) => ['postcss-mixins', options].filter((val) => val));
jest.mock('postcss-conditionals', () => (options) => ['postcss-conditionals', options].filter((val) => val));
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

it('should enable postcss-url if options.url is true', () => {
    expect(preset({ url: true })).toMatchSnapshot();
});

it('should pass options.url to postcss-url', () => {
    expect(preset({ url: { foo: 'bar' } })).toMatchSnapshot();
});

it('should pass options.browsers to postcss-cssnext ', () => {
    expect(preset({ browsers: 'foo' })).toMatchSnapshot();
});
