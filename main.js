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

  console.log(arr);
}

main();
