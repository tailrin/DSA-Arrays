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
  for (let i = 0; i < arr.length; i++ ) {
    console.log(arr.get(i));
  }
  //console.log(arr);
}

main();

// function urlify(URL) {
//   return URL.split(" ").join("%20");
// }

// console.log(urlify("tauhida parveen"));
// console.log(urlify("www.thinkful.com /tauh ida parv een"));
