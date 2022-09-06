const sentence =
  "this is a sentence and it has a number 123456789! supercalifrag1";

const getLongestWord = (sentence) => {
  let words = sentence.split(" ");
  let longestWord;
  let longestWordLength = 0;
  for (let word = 0; word < words.length; word++) {
    let currentWord = words[word];
    let letterCount = 0;
    let wordWithoutSpecialChars = "";
    for (let letterIndex = 0; letterIndex < currentWord.length; letterIndex++) {
      if (/^[a-zA-Z]+$/.test(currentWord[letterIndex])) {
        letterCount++;
        wordWithoutSpecialChars += currentWord[letterIndex];
      }
    }
    if (letterCount > longestWordLength) {
      longestWordLength = letterCount;
      longestWord = wordWithoutSpecialChars;
    }
    console.log(letterCount, longestWordLength, longestWord);
  }
  return longestWord;
};
console.log(getLongestWord(sentence));
