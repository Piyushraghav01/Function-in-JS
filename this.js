'use strict';
console.log(this);

function checkThis() {
  console.log(this);
}

checkThis();

const checkArrow = () => {
  console.log(this);
};

checkArrow();

// const user1 = {
//   userName: 'John',
//   userAge: 12,

//   work: function () {
//     console.log(this);
//   },
// };

// user1.work();

// const user2 = {
//   userName: 'Harry',
// };

// user2.work = user1.work;

// //console.log(user2);

// user2.work();
