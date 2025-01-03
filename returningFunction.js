/** function returning functions */

function greet(message) {
  return function (wishes) {
    console.log(`${wishes}, ${message}`);
  };
}

// const greeting = greet(
//   'I hope you are doing well'
// );
// greeting('Hello');

greet('Welcome to the session')('Hi');
