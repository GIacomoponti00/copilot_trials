const deFront = require('./deFront');
const fun = deFront.deFront;
const Jasmine = require('jasmine');
const jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'appSpec.js',
        'requests/**/*[sS]pec.js',
        'utils/**/*[sS]pec.js'
    ],
    helpers: [
        'helpers/**/*.js'
    ]
});

//write test for the function deFront(str) using Jasmine
//test for the function deFront(str)
describe("deFront", function() {
    it("should return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length.", function() {
        expect(fun("Hello")).toEqual("llo");
        expect(fun("java")).toEqual("va");
        expect(fun("away")).toEqual("aay");
        expect(fun("abed")).toEqual("abed");
        expect(fun("a")).toEqual("a");
        expect(fun("")).toEqual("");
        expect(fun("z")).toEqual("");
        expect(fun("za")).toEqual("a");
    });
});

jasmine.execute();
