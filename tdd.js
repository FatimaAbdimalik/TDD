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

function orderedCountOfCharacters() {}

module.exports = {
  removeDuplicateWords,
  filterTheNumber,
  occurrencesInAnArray,
  longestVowelChain,
  isIsogram,
  singles,
  orderedCountOfCharacters,
  rowWeights,
};
