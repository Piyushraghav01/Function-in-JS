//find ------ findIndex

const inputs = [
  22, 13, 15, 77, 65, 98, 76, 44, 55, 65,
];

const find1 = inputs.find((num) => num == 64);
console.log(find1);

const find2 = inputs.findIndex(
  (num) => num == 64
);
console.log(find2);

//every, fill, findLast, findLastIndex, forEach
