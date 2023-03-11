//Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.

function hasBad(str) {
  if (str.length < 3) {
    return false;
  }
  if (str.substring(0, 3).equals("bad")) {
    return true;
  }
  if (str.substring(1, 4).equals("bad")) {
    return true;
  }
  return false;
}

//for the string "xba" the substring methid will return an StringIndexOutOfBoundsException. The changed code is as follows:

function hasBad(str) {
  if (str.length < 3) {
    return false;
  }
  if (str.substring(0, 3).equals("bad")) {
    return true;
  }
  if (str.length > 3 && str.substring(1, 4).equals("bad")) {
    return true;
  }
  return false;
}

//importScript is not defined, use the following code to import the unitTest function




//write some test for the function hasBad(str)
//test for the function hasBad(str)
unitTest("hasBad", "hasBad(\"badxx\") → true", hasBad("badxx"), true);
unitTest("hasBad", "hasBad(\"xbadxx\") → true", hasBad("xbadxx"), true);
unitTest("hasBad", "hasBad(\"xxbadxx\") → false", hasBad("xxbadxx"), false);
unitTest("hasBad", "hasBad(\"code\") → false", hasBad("code"), false);
unitTest("hasBad", "hasBad(\"bad\") → true", hasBad("bad"), true);
unitTest("hasBad", "hasBad(\"ba\") → false", hasBad("ba"), false);
unitTest("hasBad", "hasBad(\"xba\") → false", hasBad("xba"), false);
unitTest("hasBad", "hasBad(\"xbad\") → true", hasBad("xbad"), true);
unitTest("hasBad", "hasBad(\"\") → false", hasBad(""), false);
unitTest("hasBad", "hasBad(\"badyy\") → true", hasBad("badyy"), true);
console.log("All tests passed");



