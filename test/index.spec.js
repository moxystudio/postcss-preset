'use strict';

const preset = require('..');

jest.mock('postcss-import', () => (options) => ['postcss-import', options].filter((val) => val));
jest.mock('postcss-mixins', () => (options) => ['postcss-mixins', options].filter((val) => val));
jest.mock('postcss-css-variables', () => (options) => ['postcss-css-variables', options].filter((val) => val));
jest.mock('postcss-conditionals', () => () => 'postcss-conditionals');
jest.mock('postcss-for', () => () => 'postcss-for');
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

it('should pass options.browsers to postcss-cssnext ', () => {
    expect(preset({ browsers: 'foo' })).toMatchSnapshot();
});
