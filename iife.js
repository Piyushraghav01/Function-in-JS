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

//IIFE (Immediately Invoked Function Expression )
(function (a, b) {
  console.log(a ** b);
})(4, 2);

const user = (function () {
  const userData = {
    userName: 'John',
    userAge: 20,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }

  return { getName, updateAge };
})();

console.log(user);
console.log(user.userData);
user.getName();
user.updateAge(3);
