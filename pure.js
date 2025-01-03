/** PURE Functions  */

function calculate(num1, num2) {
  return num1 * num2;
}

console.log(calculate(4, 6));

const discount = 25;

function calcDis(price) {
  discount = discount - 5;
  return price - discount;
}
