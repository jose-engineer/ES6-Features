function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action";
}

let countdown = director();

console.log(countdown.next().value); //{value: three, done: false}
console.log(countdown.next().value); //{value: Two, done: false}
console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next()); //{value: undefined, done: true}
