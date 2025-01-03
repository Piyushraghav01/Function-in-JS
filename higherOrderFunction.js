/** Higher Order Functions */
const inputs = [2, 5, 7, 8, 9, 12, 20];

function calculate(input, operation) {
  const output = [];
  for (let number of input) {
    output.push(operation(number));
  }
  return output;
}

function cubic(number) {
  return number * number * number;
}

function square(number) {
  return number * number;
}

const cube3 = calculate(inputs, cubic);
console.log(cube3);
const square2 = calculate(inputs, square);
console.log(square2);
