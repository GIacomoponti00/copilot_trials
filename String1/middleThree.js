//Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.
//Add a check for the minimum length of the string. If the string is less than 3, return the string as is.

function middleThree(str) { 
  if (str.length < 3) { 
    return str;
  }
  var start = Math.floor(str.length/2) - 1;
  return str.slice(start, start + 3);
} 
module.exports = { middleThree };