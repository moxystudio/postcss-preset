'use strict';

module.exports = (options) => {
    options = {
        importPath: undefined,
        mixinsPath: undefined,
        browsers: ['extends browserslist-config-google'],
        ...options,
    };

    return {
        plugins: [
            // Let postcss parse @import statements
            require('postcss-import')({
                // Any non-relative imports are resolved to this path
                path: options.importPath,
            }),
            // Add support for CSS mixins
            require('postcss-mixins')({
                mixinsDir: options.mixinsPath,
            }),
            require('postcss-for')(),
            // Add support for CSS variables using postcss-css-variables
            // instead of cssnext one, which is more powerful
            require('postcss-css-variables')(),
            // Add support for CSS conditionals using postcss-conditionals
            require('postcss-conditionals')(),
            // Use CSS next, disabling some features
            require('postcss-cssnext')({
                features: {
                    customProperties: false, // We are using postcss-css-variables instead
                    browsers: options.browsers,
                    autoprefixer: {
                        remove: false, // No problem disabling, we use prefixes when really necessary
                    },
                },
            }),
        ],
    };
};
