'use strict';

module.exports = (options) => {
    options = {
        importPath: undefined,
        mixinsPath: undefined,
        browsers: ['extends browserslist-config-google'],
        url: false,
        cssVariables: true,
        calc: true,
        ...options,
    };

    return {
        plugins: [
            // Let postcss parse @import statements
            require('postcss-import')({
                // Any non-relative imports are resolved to this path
                path: options.importPath,
            }),
            // Add support for the @apply rule
            require('postcss-apply')(),
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
            // Use postcss-preset-env, disabling some features
            require('postcss-preset-env')({
                stage: 3,
                insertAfter: {
                    'nesting-rules': [
                        // Make postcss reduce calc() operations
                        options.calc && require('postcss-calc')(options.calc !== true ? options.calc : undefined),
                        // Use `postcss-css-variables` instead of `postcss-custom-properties` because it's more complete
                        // Note that it must be set after the nesting!
                        options.cssVariables && require('postcss-css-variables')(options.cssVariables),
                    ],
                },
                features: {
                    'image-set-function': true,
                    'nesting-rules': true,
                    'custom-properties': false,
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
