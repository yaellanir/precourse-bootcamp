const capitalize = (word) => {
  let arrayword = word.split("");
  let vowel = ["a", "e", "i", "o", "u"];

  for (let index = 0; index < arrayword.length; index++) {
    console.log(index, arrayword[index]);
    if (vowel.includes(arrayword[index])) {
      arrayword[index].toUpperCase();
    }
  }
};
console.log(capitalize("capital"));
