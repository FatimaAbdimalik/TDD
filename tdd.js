function removeDuplicateWords(str) {
  if (str === undefined) throw new Error("str is required");
  return [...new Set(str.split(" "))].join(" ");
}

function filterTheNumber(str) {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("str must be a string");
  let regex = /[a-z]/gi;
  return Number(str.replace(regex, ""));
}
function occurrencesInAnArray(array, n) {
  if (array === undefined) throw new Error("array is required");
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("n must be a number");
  let newArr = [];
  array.forEach((p, i) => {
    if (p === n) {
      newArr.push(i);
    }
  });
  return newArr;
}
function longestVowelChain(str) {
  if (str === undefined) throw new Error("string is needed");
  if (typeof str !== "string") throw new Error("str must be string");
  let onlyVowels = str.replace(/[^aeiou]/gi, " ").split(" ");
  let vowelSubStr = onlyVowels.reduce((a, b) => {
    return a.length > b.length ? a : b;
  }, " ");
  return vowelSubStr.length;
}
function isIsogram(str) {
  if (!str) throw new Error("string is needed");
  return [...new Set(str.toLowerCase())].join("") === str.toLowerCase();
}

function singles(arr) {
  let singleValues = arr.filter(
    (num) => arr.indexOf(num) === arr.lastIndexOf(num)
  );

  return !singleValues.length ? 0 : singleValues.reduce((a, b) => a + b);
}
function rowWeights(array) {
  let teamOneCount = 0;
  let teamTwoCount = 0;

  array.forEach((num, i) => {
    if (i % 2 === 0) {
      teamOneCount += num;
    } else {
      teamTwoCount += num;
    }
  });

  return [teamOneCount, teamTwoCount];
}
function pigLatin(str) {
  let final = [];
  let punctions;
  let newWord;
  const reverseWord = (word) => {
    let wordArray = word.split("");
    if (wordArray.includes("!")) {
      punctions = word.match(/[!]/g);
      newWord = word.replace(/[!]/g, "").split("");
      let firstLetter = wordArray.shift().concat("ay");
      let noFirstLetter = newWord.shift();
      return newWord.concat(firstLetter).concat(punctions).join("");
    } else {
      let firstLetter = wordArray.shift().concat("ay");
      return wordArray.concat(firstLetter).join("");
    }
  };

  let string = str.split(" ");
  for (let i = 0; i < string.length; i++) {
    let changed = reverseWord(string[i]);
    final.push(changed);
  }

  return final.join(" ");
}

function mexicanWave(str) {
  let final = [];
  for (let i = 0; i < str.length; i++) {
    let stringToArray = str.split("");
    if (str[i] !== " ") {
      let letter = stringToArray[i].toUpperCase();
      let word = stringToArray.splice(i, 1, letter);
      final.push(stringToArray.join(""));
    }
  }
  return final;
}

// function orderedCountOfCharacters() {}

module.exports = {
  removeDuplicateWords,
  filterTheNumber,
  occurrencesInAnArray,
  longestVowelChain,
  isIsogram,
  singles,
  orderedCountOfCharacters,
  rowWeights,
  pigLatin,
  mexicanWave,
};
