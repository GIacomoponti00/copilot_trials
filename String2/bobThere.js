//Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char

function bobThere(str) {
    var result = false;
    for (var i = 0; i < str.length - 2; i++) {
        if (str.charAt(i) == "b" && str.charAt(i + 2) == "b") {
            result = true;
        }
    }
    return result;
}

module.exports = { bobThere };