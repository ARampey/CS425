/*
 Function A
 1. Reads ten integer values entered by the user
 2. Splits into 2 five-element arrays
 3. Iterates through both arrays
 4. Adds and multiplies corresponding values together
 5. Print original 2 arrays
 6. Print "sum" and "product" arrays
 
 
 Function B
 1. Reads ten integer values entered by the user
 2. Prompts user how many times it should right rotate the elements forward
 3. Output original and resulting array
 */

function calculations() {

var array1 = [];

array1 = prompt("Please enter 10 numbers separated by commas: ").split(",");

var array2 = array1.splice(5,10);

var productArray = [];
var sumArray = [];

for (var i = 0; i < array1.length; i++) {
  
  sumArray[i] = parseInt(array1[i]) + parseInt(array2[i]);
  productArray[i] = array1[i] * array2[i];
  
}


console.log("Array1: " + array1);
console.log("Array2: " + array2);
console.log("Sum: " + sumArray);
console.log("Product: " + productArray);

  }

function cycle() {
  
  var array = [];
  var rotations;
  
  
  array = prompt("Please enter 10 numbers separated by commas to be rotated: ").split(",");
  rotations = prompt("Please enter the number of rotations: ");
  console.log(array);
  
  for (var i = 0; i < rotations; i++) {
  
  var temp = array.pop();
  array.unshift(temp);
  
  }
  console.log(array);
  
}



  
  

function Assignment2A() {
  
  calculations();
  cycle();
  
}

Assignment2A();
