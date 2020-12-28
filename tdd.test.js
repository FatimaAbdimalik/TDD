const {
  removeDuplicateWords,
  filterTheNumber,
  occurrencesInAnArray,
  longestVowelChain,
  isIsogram,
  orderedCountOfCharacters,
  singles,
  rowWeights,
  pigLatin,
  mexicanWave,
  prime,
  replace,
  pairElement,
  uniteUnique,
  simplePigLatin,
} = require("./tdd.js");
describe("remove duplicate words", () => {
  test("should remove all duplicate wrods in the string", () => {
    expect(
      removeDuplicateWords(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
      )
    ).toEqual("alpha beta gamma delta");
  });
  test("should throw an error if string is not passed", () => {
    expect(() => {
      removeDuplicateWords();
    }).toThrow("str is required");
  });
});
describe("return a number from a string", () => {
  test("return numbers in the string and its original state in order", () => {
    expect(filterTheNumber("aa1bb2cc3dd")).toBe(123);
    expect(filterTheNumber("17feab12ff713847061a3fb6619b5530")).toBe(
      1712713847061366195530
    );
  });
  test("Throw an error if str in not passed", () => {
    expect(() => {
      filterTheNumber();
    }).toThrow("str is required");
  });
  test("Throw an error if typefo str in not string", () => {
    expect(() => {
      filterTheNumber(123234345454);
    }).toThrow("str must be a string");
  });
  test("Throw an error if str is not a sting", () => {
    expect(() => {
      filterTheNumber(false);
    }).toThrow("str must be a string");
  });
});
describe("find all occurrences of an element in an array", () => {
  test("return another array containing all the index positions of n", () => {
    expect(occurrencesInAnArray([6, 9, 3, 4, 3, 82, 11], 3)).toEqual([2, 4]);
    expect(
      occurrencesInAnArray([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16)
    ).toEqual([1, 9]);
    expect(
      occurrencesInAnArray(
        [
          20,
          20,
          10,
          13,
          15,
          2,
          7,
          2,
          20,
          3,
          18,
          2,
          3,
          2,
          16,
          10,
          9,
          9,
          7,
          5,
          15,
          5,
        ],
        20
      )
    ).toEqual([0, 1, 8]);
  });
  test("should throw an error if array is not passed", () => {
    expect(() => {
      occurrencesInAnArray();
    }).toThrow("array is required");
  });
  test("should throw an error if n is not number", () => {
    expect(() => {
      occurrencesInAnArray([2, 4, 3, 2, 6, 2, 1], "2");
    }).toThrow("n must be a number");
  });
  test("should throw an erro if n is not passed", () => {
    expect(() => {
      occurrencesInAnArray([5, 1, 2, 1, 9, 1]);
    }).toThrow("n is required");
  });
});
describe("find the length of the longest vowel substring", () => {
  test("return the length of the longest vowel substring", () => {
    expect(longestVowelChain("codewarriors")).toBe(2);
    expect(longestVowelChain("iiihoovaeaaaoougjyaw")).toBe(8);
  });
});
describe("return true if a string has no repeating letters", () => {
  test("return ture if a string has no repeating letter", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
  test("return false if a string has repeating letters", () => {
    expect(isIsogram("aba")).toBe(false);
  });
  test("throw an error is string is empty", () => {
    expect(() => {
      isIsogram("");
    }).toThrow("string is needed");
  });
});
describe("singles", () => {
  test("returns the sum of single values only", () => {
    expect(singles([4, 5, 7, 5, 4, 8])).toEqual(15);
    expect(singles([9, 10, 19, 13, 19, 13])).toEqual(19);
    expect(singles([16, 0, 11, 4, 8, 16, 0, 11])).toEqual(12);
    expect(singles([5, 17, 18, 11, 13, 18, 11, 13])).toEqual(22);
    expect(singles([5, 10, 19, 13, 10, 13])).toEqual(24);
  });

  test("returns 0 if no singles are provided", () => {
    expect(singles([6, 6, 8, 8])).toEqual(0);
  });
});
describe("rowWeights", () => {
  test("returns the sums of each team", () => {
    expect(rowWeights([80])).toEqual([80, 0]);
    expect(rowWeights([100, 50])).toEqual([100, 50]);
    expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140]);
    expect(rowWeights([13, 27, 49])).toEqual([62, 27]);
    expect(rowWeights([70, 58, 75, 34, 91])).toEqual([236, 92]);
    expect(rowWeights([29, 83, 67, 53, 19, 28, 96])).toEqual([211, 164]);
    expect(rowWeights([0])).toEqual([0, 0]);
    expect(rowWeights([100, 51, 50, 100])).toEqual([150, 151]);
    expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toEqual([207, 235]);
    expect(rowWeights([0, 1, 0])).toEqual([0, 1]);
  });
});
describe("pigLatin", () => {
  test("returns the string as pig latin", () => {
    expect(pigLatin("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
    expect(pigLatin("This is my string")).toBe("hisTay siay ymay tringsay");
  });
  test("ignores punctuation marks", () => {
    expect(pigLatin("Pig latin is cool!!")).toBe("igPay atinlay siay oolcay!!");
  });
});
describe("mexicanWave", () => {
  test("returns a mexican wave", () => {
    expect(mexicanWave("")).toEqual([]);
    expect(mexicanWave("hello")).toEqual([
      "Hello",
      "hEllo",
      "heLlo",
      "helLo",
      "hellO",
    ]);
    expect(mexicanWave("coding")).toEqual([
      "Coding",
      "cOding",
      "coDing",
      "codIng",
      "codiNg",
      "codinG",
    ]);
    expect(mexicanWave("two words")).toEqual([
      "Two words",
      "tWo words",
      "twO words",
      "two Words",
      "two wOrds",
      "two woRds",
      "two worDs",
      "two wordS",
    ]);
    expect(mexicanWave(" gap ")).toEqual([" Gap ", " gAp ", " gaP "]);
  });
});

describe("prime", () => {
  test("return all prime numbers", () => {
    expect(prime(0)).toEqual([]);
    expect(prime(11)).toEqual([2, 3, 5, 7, 11]);
  });
});

describe("replace", () => {
  test("return a sentence after replacing the given word", () => {
    expect(replace("Let us go to the store", "store", "mall")).toBe(
      "Let us go to the mall"
    );
    expect(replace("He is Sleeping on the couch", "Sleeping", "sitting")).toBe(
      "He is Sitting on the couch"
    );
  });
  test("return a sentence after replacing the given word", () => {
    expect(replace("I think we should look up there", "up", "Down")).toBe(
      "I think we should look down there"
    );
  });
});

describe("return an array of paired DNA elements", () => {
  expect(pairElement("ATCGA")).toEqual([
    ["A", "T"],
    ["T", "A"],
    ["C", "G"],
    ["G", "C"],
    ["A", "T"],
  ]);
});

describe("returns a new array of unique values in the order of the original provided arrays", () => {
  test("returns a new array of unique values", () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([
      1,
      3,
      2,
      5,
      4,
    ]);
  });
});

describe("return the original string plus ay", () => {
  test("return the original string plus way if string starts with a vowel", () => {
    expect(simplePigLatin("egg")).toBe("eggway");
  });
  test("return the original string plus ay if string starts with a consonant", () => {
    expect(simplePigLatin("map")).toBe("apmay");
  });
});
