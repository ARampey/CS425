/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


var array = [56, 47, 21, 3, 10, 8, -2, 77, 41, 102, 9, 34];

function getArray() {

for (var i = 0; i < array.length; i++) {
  
  if (array[i] > 100 || array[i] < 0) {
    
  array.splice(i, 1);
    
    }
     
  }  
      
}


function numbers() {
 
var min = Math.min.apply(null, array);
var max = Math.max.apply(null, array);
  
  
var add = (a, b) =>
  a + b

var sum = array.reduce(add);

var average = sum / array.length;
      
  
  var result = [min, max, average];
  
  return result;
  
}



function Assignment3A() {
  
getArray();  
console.log(numbers(array));

  
}

Assignment3A();
