function reverseString(word) {
  const Arr = word.split("");
  const reversedArr = Arr.reverse();
  const reversedWord = reversedArr.join("");
  return reversedWord;
}
function isPalindrome(word) {
  const reversedWord = reverseString(word);
  if (word === reversedWord) {
      return true;
  } else {
      return false;
  }
} isPalindrome("abba");

/* 
Add your pseudocode here
*/
/*reverse the input String
if the reversed string is the same as the input, 
return true
else 
return false*/
/*
Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");
}

module.exports = isPalindrome;