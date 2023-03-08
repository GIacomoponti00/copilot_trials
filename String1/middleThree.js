//Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.
//Add a check for the minimum length of the string. If the string is less than 3, return the string as is.



function middleThree(str) { 
  if (str.length < 3) { 
    return str;
  }
  var start = Math.floor(str.length/2) - 1;
  return str.slice(start, start + 3);
} 


//write some test for the function middleThree(str)
//test for the function middleThree(str)
console.log(middleThree("Candy")); // → "and"
console.log(middleThree("and")); // → "and"
console.log(middleThree("solving")); // → "lvi"
console.log(middleThree("Hi yet Hi")); // → "yet"
console.log(middleThree("java yet java")); // → "yet"
console.log(middleThree("Chocolate")); // → "col"
console.log(middleThree("XabcxyzabcX")); // → "xyz"
if (middleThree("Candy") === "and") {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}

if (middleThree("and") === "and") {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
} 

if (middleThree("solving") === "lvi") {
  console.log("Test Passed");
} else {      
  console.log("Te st Failed");  
}

//write test for the edgecases of the function middleThree(str)
//test for the edgecases of the function middleThree(str)
console.log(middleThree("a")); // → "a"
console.log(middleThree("ab")); // → "ab"
console.log(middleThree("abc")); // → "abc"
console.log(middleThree("")); // → ""
console.log(middleThree("0123456789")); // → "345"
if (middleThree("a") === "a") {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
} 

if (middleThree("ab") === "ab") {
  console.log("Test Passed");
}
else {
  console.log("Test Failed");
}

if (middleThree("abc") === "abc") {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}


