const longestWord = (sentence) => {
  const wordsArray = sentence.split(" ");
  const special = /[!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/?] +/;
  let word = 
  let countLetter = 0; //number of letters in word

  for (let index = 0; index < wordsArray.length; index++) {
    if (wordsArray[index].length > countLetter) {
      countLetter = wordsArray[index];
    }
    for (let index2 = 0; index < index2; index2++) {
      if (special.test(wordsArray[index])){
    !countLetter
    }
    }
  }
  return countLetter;

  
​

};
console.log(longestWord("hello, my name is"));