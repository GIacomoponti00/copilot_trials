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

//write test for the function  bobThere(str) using Jasmine
const bobThere = require('./bobThere');
const fun3 = bobThere.bobThere;
describe("bobThere", function() {
    it("should return true if the given string contains a 'bob' string, but where the middle 'o' char can be any char", function() {
        expect(fun3("abcbob")).toEqual(true);
        expect(fun3("b9b")).toEqual(true);
        expect(fun3("bac")).toEqual(false);
        //expect(fun3("bbb")).toEqual(false); //this test is wrong 
        expect(fun3("bbb")).toEqual(true); //now is correct
        expect(fun3("abcdefb")).toEqual(false);
        expect(fun3("123abcbcdbabxyz")).toEqual(true);
        expect(fun3("b12")).toEqual(false);
        expect(fun3("b1b")).toEqual(true);
        expect(fun3("b12b1b")).toEqual(true);
        expect(fun3("bbc")).toEqual(false);
        //expect(fun3("bbb")).toEqual(false); //this test is a duplicate
        expect(fun3("bb")).toEqual(false);
        expect(fun3("b")).toEqual(false);
        expect(fun3("")).toEqual(false);
        expect(fun3("abcbob")).toEqual(true);
        //expect(fun3("b12")).toEqual(false);//this test is a duplicate

    });
});

//write test for the function  zipZap(str) using Jasmine
const zipZap = require('./zipZap');
const fun4 = zipZap.zipZap;
describe("zipZap", function() {
    it("should return a string where for every appearance of the word 'zip' in the string, the word 'zap' appears instead. The word 'zip' will not appear in the string at the end, but it may appear more than once. If the word 'zip' appears in the string before or after a word beginning with 'z', the 'zap' word should not appear in the string after or before the word beginning with 'z'.", function() {
        expect(fun4("zipXzap")).toEqual("zpXzp");
        expect(fun4("zopzop")).toEqual("zpzp");
        expect(fun4("zzzopzop")).toEqual("zzzpzp");
        expect(fun4("zibzap")).toEqual("zibzp");
        expect(fun4("zip")).toEqual("zp");
        expect(fun4("zi")).toEqual("zi");
        expect(fun4("z")).toEqual("z");
        expect(fun4("")).toEqual("");
        expect(fun4("zzp")).toEqual("zp");
        expect(fun4("abcppp")).toEqual("abcppp");
        expect(fun4("azbcppp")).toEqual("azbcppp");
        expect(fun4("azbcpzpp")).toEqual("azbcpzp");
    });
});

jasmine.execute();