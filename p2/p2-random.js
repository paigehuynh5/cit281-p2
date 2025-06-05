/*
    CIT 281 Project 2
    Name: Paige Huynh
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // Returns a single, random, lowercase letter
  function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0, alphabet.length)];
  }
  
  // Returns a random string of a random length between minLength and maxLength
  function getRandomString(minLength, maxLength) {
    const resultLength = getRandomInteger(minLength, maxLength + 1);
    let result = "";
    for (let i = 0; i < resultLength; i++) {
      result += getRandomLetter();
    }
    return result;
  }
  
  // Returns a sorted string (ascending alphabetical order)
  function getSortedString(string) {
    return string.split("").sort().join("");
  }
  
  const randomStr = getRandomString(10, 20);
  console.log("Random String:", randomStr);
  console.log("Sorted String:", getSortedString(randomStr));
  