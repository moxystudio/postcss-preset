'use strict';

const poison = require('require-poisoning');

// Ugly hack so that `postcss-preset-env` uses `postcss-css-variables` instead of `postcss-custom-properties`
poison('postcss-custom-properties', require('postcss-css-variables'));

module.exports = (options) => {
    options = {
        import: undefined,
        mixins: undefined,
        browsers: ['extends browserslist-config-google'],
        url: { url: 'rebase' },
        ...options,
    };

    return {
        plugins: [
            // Let postcss parse @import statements
            require('postcss-import')(options.import),
            // Process url() statements
            options.url && require('postcss-url')(options.url !== true ? options.url : undefined),
            // Add support for CSS mixins
            require('postcss-mixins')(options.mixins),
            // Add support for @if and @else statements
            require('postcss-conditionals')(),
            // Use postcss-preset-env to enable plugins to transform official CSS features
            // to be compatible in older browsers
            require('postcss-preset-env')({
                browsers: options.browsers,
                stage: 4,
                // Disable preserve so that the outputed CSS is consistent among all browsers,
                // diminuishing the probability of discovering bugs only when testing in older browsers
                preserve: false,
                // Enable features that we want, dispite being proposals yet
                features: {
                    'custom-properties': true,
                    'custom-media-queries': true,
                    'nesting-rules': true,
                },
                autoprefixer: {
                    // We don't use prefixes unless they are really necessary, e.g.: when dealing with quirks
                    // Therefore, we disable removing them
                    remove: false,
                },
            }),
            // Add support for `alpha()` and other color utilities
            require('postcss-color-function')(),
        ].filter(Boolean),
    };
};
