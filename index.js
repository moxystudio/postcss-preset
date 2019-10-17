'use strict';

module.exports = (options = {}) => {
    options = {
        import: undefined,
        mixins: { mixinsDir: './src/styles/mixins' },
        advancedVariables: { ...options.advancedVariables, disable: '@mixin, @include, @content, @import' }, // Ignore @mixin, @include, @content and @import at-rules
        browsers: ['extends browserslist-config-google'],
        cssVariables: { preserveAtRulesOrder: true },
        url: { url: 'rebase' },
        ...options,
    };

    return {
        plugins: [
            // Let postcss parse @import statements
            require('postcss-import')(options.import),
            // Process url() statements
            options.url && require('postcss-url')(options.url),
            // Add support for CSS mixins
            require('postcss-mixins')(options.mixins),
            // Add support for iterators (@for and @each) and conditionals (@if and @else)
            require('postcss-advanced-variables')(options.advancedVariables),
            // Use postcss-preset-env to enable plugins to transform official CSS features
            // to be compatible in older browsers
            require('postcss-preset-env')({
                browsers: options.browsers,
                stage: 3,
                // Disable preserve so that the outputed CSS is consistent among all browsers,
                // diminuishing the probability of discovering bugs only when testing in older browsers
                preserve: false,
                // Enable features that we want, dispite being proposals yet
                features: {
                    'custom-properties': false,
                    'custom-media-queries': true,
                    'nesting-rules': true,
                },
                insertAfter: options.cssVariables ?
                    { 'nesting-rules': require('postcss-css-variables')(options.cssVariables) } :
                    undefined,
                autoprefixer: {
                    // We don't use prefixes unless they are really necessary, e.g.: when dealing with quirks
                    // Therefore, we disable removing them
                    remove: false,
                    // See: https://github.com/csstools/postcss-preset-env/issues/133
                    overrideBrowserslist: options.browsers,
                },
            }),
            // Add support for `alpha()` and other color utilities
            require('postcss-color-function')(),
        ].filter(Boolean),
    };
};
