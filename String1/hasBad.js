//Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.

// function hasBad(str) {
//   if (str.length < 3) {
//     return false;
//   }
//   if (str.substring(0, 3).equals("bad")) {
//     return true;
//   }
//   if (str.substring(1, 4).equals("bad")) {
//     return true;
//   }
//   return false;
// }

//for the string "xba" the substring methid will return an StringIndexOutOfBoundsException. The changed code is as follows:

function hasBad(str) {
  if (str.length < 3) {
    return false;
  }
  if ((str.substring(0, 3)).equals("bad")) {
    return true;
  }
  if (str.length > 3 && str.substring(1, 4).equals("bad")) {
    return true;
  }
  return false;
}

module.exports = { hasBad };
