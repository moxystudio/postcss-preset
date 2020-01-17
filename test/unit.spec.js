'use strict';

const actualPreset = require('..');

const preset = (options) => ({
    plugins: Object.entries(actualPreset(options).plugins),
});

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
