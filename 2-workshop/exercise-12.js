function exercise12() {
  // Exercise 12
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  let primeNumber = 0;
  let condition = 0;
  console.log(2);
  console.log(3);
  console.log(5);
  console.log(7);
  console.log(11);
  console.log(13);

  for(let i=1;primeNumber<=200;i++){
    if(primeNumber <= 200) {

      primeNumber = 6*i -1;
      condition = primeNumber%5 !==0 && primeNumber%7 !==0 && primeNumber%11 !==0 && primeNumber%13 !==0;
      if(condition && primeNumber <=200) {
        console.log(primeNumber);
      }
      primeNumber = 6*i +1;
      condition = primeNumber%5 !==0 && primeNumber%7 !==0 && primeNumber%11 !==0 && primeNumber%13 !==0;
          if(condition && primeNumber <=200) {
        console.log(primeNumber);
      }
    }

  }
}
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
  // Once you are done type the following in the terminal to test your answer(s).
  // yarn test exercise-12

  module.exports = exercise12;
