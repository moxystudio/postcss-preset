'use strict';

module.exports = (options = {}) => {
    options = {
        import: {},
        mixins: { mixinsDir: './src/styles/mixins' },
        advancedVariables: { disable: '@mixin, @include, @content, @import', ...options.advancedVariables }, // Ignore @mixin, @include, @content and @import at-rules
        browsers: ['extends browserslist-config-google'],
        cssVariables: { preserveAtRulesOrder: true },
        url: { url: 'rebase' },
        ...options,
    };

    return {
        plugins: {
            // Let postcss parse @import statements
            [require.resolve('postcss-import')]: options.import,
            // Process url() statements
            ...(options.url ? { [require.resolve('postcss-url')]: options.url } : {}),
            // Add support for CSS mixins
            [require.resolve('postcss-mixins')]: options.mixins,
            // Add support for iterators (@for and @each) and conditionals (@if and @else)
            [require.resolve('postcss-advanced-variables')]: options.advancedVariables,
            // Use postcss-preset-env to enable plugins to transform official CSS features
            // to be compatible in older browsers
            [require.resolve('postcss-preset-env')]: {
                browsers: options.browsers,
                stage: 3,
                // Disable preserve so that the outputted CSS is consistent among all browsers,
                // diminishing the probability of discovering bugs only when testing in older browsers
                preserve: false,
                // Enable/disable features that we want, despite they belong or not from the `stage` we are targeting.
                features: {
                    'custom-properties': false,
                    'custom-media-queries': true,
                    'nesting-rules': true,
                    'dir-pseudo-class': true,
                },
                autoprefixer: {
                    // We don't use prefixes unless they are really necessary, e.g.: when dealing with quirks
                    // Therefore, we disable removing them
                    remove: false,
                    // See: https://github.com/csstools/postcss-preset-env/issues/133
                    overrideBrowserslist: options.browsers,
                },
            },
            // Lets you reduce calc() references whenever it's possible
            [require.resolve('postcss-calc')]: {},
        },
    };
};
