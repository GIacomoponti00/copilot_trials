//Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length.

function deFront(str) {
    var result = "";
    if (str.length > 0 && str.charAt(0) == "a") {
        result += str.charAt(0);
    }
    if (str.length > 1 && str.charAt(1) == "b") {
        result += str.charAt(1);
    }
    if (str.length > 2) {
        result += str.substring(2);
    }
    return result;
    }

 
module.exports = { deFront };