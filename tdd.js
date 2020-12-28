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

function prime(n) {
  let r = [2];
  for (let i = 3; i <= n; i++) if (r.every((x) => i % x)) r.push(i);
  return n > 1 ? r : [];
}
// function orderedCountOfCharacters() {}

function replace(str, before, after) {
  // let arrayOfWords = str.split(" ");
  // let afterArray = after.split("");
  // let afterCapital = after[0].toUpperCase() + afterArray.slice(1).join("");
  // let afterLower = after[0].toLowerCase() + afterArray.slice(1).join("");
  // let wordCapital =
  //   before[0] === before[0].toUpperCase() ? afterCapital : afterLower;
  // for (let i = 0; i < arrayOfWords.length; i++) {
  //   if (arrayOfWords[i] === before) {
  //     arrayOfWords.splice(i, 1, wordCapital);
  //   }
  // }

  // return `${arrayOfWords.join(" ")}`;

  // find the index of before word!
  let index = str.indexOf(before);

  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

function pairElement(str) {
  let obj = { A: "T", T: "A", C: "G", G: "C" };
  let arr = str.split("");
  return arr.map((p) => [p, obj[p]]);
}

function uniteUnique(arr) {
  let final = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      final.push(arguments[i][j]);
    }
  }
  return [...new Set(final)];
}
const simplePigLatin = (string) => {
  let vowelRegex = /[aeiouAEIOU]/;
  let str = string.toLowerCase();
  const arrayOfWords = str.split("");
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (
      arrayOfWords[i] === "a" ||
      arrayOfWords[i] === "o" ||
      arrayOfWords[i] === "e" ||
      arrayOfWords[i] === "i" ||
      arrayOfWords[i] === "u"
    ) {
      vowelIndex = arrayOfWords.indexOf(arrayOfWords[i]);
      break;
    }
  }

  if (vowelIndex === 0) {
    return string + "way";
  } else {
    let subStringWithVowel = str.substring(0, vowelIndex);
    console.log(subStringWithVowel);
    let restOfWord = str.substring(vowelIndex, str.length);
    console.log(restOfWord);
    return restOfWord + subStringWithVowel + "ay";
  }
};
module.exports = {
  removeDuplicateWords,
  filterTheNumber,
  occurrencesInAnArray,
  longestVowelChain,
  isIsogram,
  singles,
  // orderedCountOfCharacters,
  rowWeights,
  pigLatin,
  mexicanWave,
  prime,
  replace,
  pairElement,
  uniteUnique,
  simplePigLatin,
};
