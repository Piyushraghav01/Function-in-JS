//Filter

const inputs = [4, 10, 2, -3, -2, 5, 9, -1];

const positives = inputs.filter(noNegative);

function noNegative(num) {
  return num > 0;
}
console.log(`Original Array: ${inputs}`);
console.log(
  `Only Positive Numbers: ${positives}`
);

const negatives = inputs.filter((num) => num < 0);

console.log(negatives);
