const arrayOne = [2, 3, 4];
arrayOne[0];

//add item to array (end of array)
// mutates the original array
arrayOne.push(10);
console.log("push: ", arrayOne);

//remove last item from array
// mutates the original array
let lastItem = arrayOne.pop();
console.log("lastItem: ", lastItem);
console.log(arrayOne);

//add (unshift) and remove (shift) from start of array
// shift and unshift
arrayOne.unshift(5);
console.log("unshift: ", arrayOne);
arrayOne.shift();
console.log("shift: ", arrayOne);

//slice Returns a copy of a section of an array (both start and end)
//negative index = offset from the end of the array.|
//example: -2 refers to the second to last
//!returns a copy - does not mutate
let slicedArrayOne = arrayOne.slice(1);
console.log(slicedArrayOne);
console.log(arrayOne);

//splice . Removes elements from an array
//if necessary, inserts new elements in their place, returning the deleted elements.
//@param start — The zero-based location in the array from which to start removing elements.
//@param deleteCount — The number of elements to remove.
//@returns — An array containing the elements that were deleted.
//! does mutate!
arrayOne.splice();
let splicedArrayOne = arrayOne.splice(1, 2);
console.log(splicedArrayOne);
console.log(arrayOne);

//question1
//?change value of the last item in an array.
arrayTwo = ["bitch", "you", "suck", "asssssssssss", "biatchhhhhhh"];
arrayTwo[arrayTwo.length - 1] = "yitz";
console.log(arrayTwo);

//question2
//? check if aaray includes an item
let doesInclude = arrayTwo.includes("yael");
console.log(doesInclude);
console.log(arrayTwo.includes("yitz"));
