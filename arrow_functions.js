/* Functions in JS */

const sum1 = sum(5, 6);
//console.log(sum1);

//Function Declaration
function sum(a, b) {
  return a + b;
}

// Function expression
var sum2 = function (a, b) {
  return a + b;
};

//console.log(sum2(1, 8));

//Arrow function
var prod = (num1, num2) => num1 * num2;
//console.log(prod(2, 4));
