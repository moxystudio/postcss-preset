'use strict';

module.exports = (options) => {
    options = {
        import: undefined,
        mixins: undefined,
        browsers: ['extends browserslist-config-google'],
        url: { url: 'rebase' },
        cssVariables: true,
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
            // Add support for for loops
            require('postcss-for')(),
            // Add support for @if and @else statements
            require('postcss-conditionals')(),
            // Add support for nesting
            require('postcss-nesting')(),
            // Use `postcss-css-variables` instead of `postcss-custom-properties` because it's more complete
            // Note that it must be set after the nesting!
            options.cssVariables && require('postcss-css-variables')(options.cssVariables),
            // Use CSS next, disabling some features
            require('postcss-cssnext')({
                features: {
                    rem: false,
                    // Disable nesting and custom properties because we are enabling them above
                    nesting: false,
                    customProperties: false,
                    browsers: options.browsers,
                    autoprefixer: {
                        // No problem disabling, we use prefixes when really necessary
                        remove: false,
                    },
                },
            }),
        ].filter(Boolean),
    };
};
