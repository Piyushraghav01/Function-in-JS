// reduce

// reduce(redFn, initial value);

//function redFn(accumulator, currentValue, currentIndex, arr)

const inputs = [2, 3, 4, 5, 6, 10];

const sum = inputs.reduce((total, num, index) => {
  console.log(total, index);
  return total + num;
});

console.log(sum);
