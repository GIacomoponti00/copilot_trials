
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
//write ttest for function middelThree(str) using Jasmine
const middleThree = require('./middleThree');
const fun = middleThree.middleThree;
describe("middleThree", function() {
    it("should return a string of length 3 from its middle, so 'Candy' yields 'and'. The string length will be at least 3.", function() {
        expect(fun("Candy")).toEqual("and");
        expect(fun("and")).toEqual("and");
        expect(fun("solving")).toEqual("lvi");
        expect(fun("Hi yet Hi")).toEqual("yet");
        expect(fun("java yet java")).toEqual("yet");
        expect(fun("Chocolate")).toEqual("col");
        expect(fun("XabcxyzabcX")).toEqual("xyz");
    });
});



//write test for function hasBad(str)
const hasBad = require('./hasBad');
const fun1 = hasBad.hasBad;
describe("hasBad", function() {
    it("should return true if the given string contains a 'bad' string, except it can be at the start or end of the string", function() {
        expect(fun1("badxx")).toEqual(true);
        expect(fun1("xbadxx")).toEqual(true);
        expect(fun1("xxbadxx")).toEqual(false);
        expect(fun1("code")).toEqual(false);
        expect(fun1("bad")).toEqual(true);
        expect(fun1("ba")).toEqual(false);
        expect(fun1("xba")).toEqual(false);
        expect(fun1("xbad")).toEqual(true);
    });
});

//write test for the function deFront(str) using Jasmine
const deFront = require('./deFront');
const fun2 = deFront.deFront;
describe("deFront", function() {
    it("should return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length.", function() {
        expect(fun2("Hello")).toEqual("llo");
        expect(fun2("java")).toEqual("va");
        expect(fun2("away")).toEqual("aay");
        expect(fun2("abed")).toEqual("abed");
        expect(fun2("a")).toEqual("a");
        expect(fun2("")).toEqual("");
        expect(fun2("z")).toEqual("");
        expect(fun2("za")).toEqual("");//this test was wrong
    });
});

jasmine.execute();
