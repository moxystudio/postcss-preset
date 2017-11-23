'use strict';

const preset = require('..');

jest.mock('postcss-import', () => (options) => ['postcss-import', options].filter((val) => val));
jest.mock('postcss-mixins', () => 'postcss-mixins');
jest.mock('postcss-css-variables', () => (options) => ['postcss-css-variables', options].filter((val) => val));
jest.mock('postcss-cssnext', () => (options) => ['postcss-cssnext', options].filter((val) => val));

afterEach(jest.resetAllMocks);

it('should have a good base config', () => {
    expect(preset()).toMatchSnapshot();
});

it('should pass options.importPath to postcss-import ', () => {
    expect(preset({ importPath: 'foo' })).toMatchSnapshot();
});
