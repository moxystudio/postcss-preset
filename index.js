'use strict';

const cssNextFeatures = require('postcss-cssnext/lib/features');

// Replace 'postcss-custom-properties' with 'postcss-css-variables', which is more powerful
// This is a ugly hack but must be done this way because of the postcss plugins ordering
cssNextFeatures.default.customProperties = (options) => require('postcss-css-variables')(options);

module.exports = (options) => {
    options = {
        importPath: undefined,
        mixinsPath: undefined,
        browsers: ['extends browserslist-config-google'],
        url: false,
        ...options,
    };

    return {
        plugins: [
            // Let postcss parse @import statements
            require('postcss-import')({
                // Any non-relative imports are resolved to this path
                path: options.importPath,
            }),
            // Process url() statements
            options.url && require('postcss-url')(options.url !== true ? options.url : undefined),
            // Add support for CSS mixins
            require('postcss-mixins')({
                mixinsDir: options.mixinsPath,
            }),
            // Add support for for loops
            require('postcss-for')(),
            // Add support for @if and @else statements
            require('postcss-conditionals')(),
            // Use CSS next, disabling some features
            require('postcss-cssnext')({
                features: {
                    browsers: options.browsers,
                    autoprefixer: {
                        remove: false, // No problem disabling, we use prefixes when really necessary
                    },
                },
            }),
        ].filter(Boolean),
    };
};
