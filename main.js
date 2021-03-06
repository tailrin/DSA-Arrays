const Array = require("./array");

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3); //length: 1, capacity: 3, ptr: 0

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // length: 6, capacity: 12, ptr: 3
  // Only resizes if it needs to when it got to 4 it resizes.

  // arr.pop();
  // arr.pop();
  // arr.pop();
  // // length: 3, _capacity: 12, ptr: 3
  // //after the above pushing actions, it simply removes the last 3 items, but doesn't resize the array. So the capacity and pointer remain the same.
  // console.log(arr.get(0));
  // arr.length = 0;
  // arr.push("tauhida");

  // console.log(arr.get(0));
  // returns NaN because memory is set up to handle numbers using Float64Array and so cannot handle strings
  // resize function allocates additional memory and then copies contents to new memory block and deletes the old memory block

  arr.filter(20);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.get(i));
  }
  //console.log(arr);
}

// main();

// function urlify(URL) {
//   return URL.split(" ").join("%20");
// }

// console.log(urlify("tauhida parveen"));
// console.log(urlify("www.thinkful.com /tauh ida parv een"));

function maxSumWrapper(array) {
  let currentMax = 0;

  function sum(array) {
    return array.reduce((total, b) => {
      return total + b;
    }, 0);
  }

  function maxSum(array) {
    const arrayClone = array.slice();
    if (arrayClone.length === 1) {
      return currentMax;
    }

    //need a helper function that finds the max sum of the array in its current size, then moves shifts off the first element, and does it again.
    if (sum(arrayClone) > currentMax) {
      currentMax = sum(arrayClone);
    }
    arrayClone.pop();
    maxSum(arrayClone);
    return currentMax;
  }
  maxSum(array);

  return currentMax;
}

function mergeArr(arr1, arr2) {
  const cloneArr1 = arr1.slice();
  const cloneArr2 = arr2.slice();
  while (cloneArr2.length > 0) {
    const arrItem = cloneArr2.shift();
    cloneArr1.forEach((item, i) => {
      if (arrItem < item && i === 0) {
        cloneArr1.unshift(arrItem);
      }
      if (arrItem > item && i == cloneArr1.length - 1) {
        cloneArr1.push(arrItem);
      }
      if (arrItem > item && arrItem < cloneArr1[i + 1]) {
        cloneArr1.splice(i + 1, 0, arrItem);
      }
    });
  }
  return cloneArr1;
}

//console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeChar(string, chars) {
  let newString = "";

  // check if chars includes string current index char
  for (let i = 0; i < string.length; i++) {
    if (!chars.includes(string[i])) {
      newString = newString + string[i];
    }
  }
  return newString;
}

//console.log(removeChar("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

function products(array) {
  let answer = [];
  for(let i = 0; i < array.length; i++) {
    let arrayClone = array.slice();
    arrayClone.splice(i, 1);
    let product = arrayClone.reduce((total, item) => {return total * item}, 1);
    answer.push(product);
  }
  return answer;
}

console.log(products([1, 3, 9, 4]));