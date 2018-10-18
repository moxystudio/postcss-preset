'use strict';

const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const preset = require('..');

const postcssInstance = (() => {
    const { plugins } = preset({
        url: { url: 'inline' },
    });

    const instance = postcss();

    plugins.forEach((plugin) => instance.use(plugin));

    return instance;
})();

const getOutput = (file) => {
    const input = fs.readFileSync(file);

    return postcssInstance.process(input, { from: file });
};

const fixtureFiles = [
    'fixtures/example.css',
];

fixtureFiles.forEach((fixtureFile) => {
    it(`should generate correct output for ${fixtureFile}`, async () => {
        const output = await getOutput(path.join(__dirname, fixtureFile));

        expect(output.css).toMatchSnapshot();
    });
});
