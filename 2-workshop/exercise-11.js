function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  
  let charGrid = '';
  for(let r=1;r<=8;r++) {
    if(r%2 === 0) {
      for (let i = 1; i <= 8; i++) {
        if(i%8 !== 0) {
          if(i%2 !== 0) {
            charGrid = charGrid + "_";
          } else {
            charGrid = charGrid + "#";
          }
        } else {
          if(i%2 !== 0) {
            charGrid = charGrid + "_\n";
          } else {
            charGrid = charGrid + "#\n";
          }
        }
      }
    } else {
      for (let i = 1; i <= 8; i++) {
        if(i%8 !== 0) {
          if(i%2 !== 0) {
            charGrid = charGrid + "#";
          } else {
            charGrid = charGrid + "_";
          }
        } else {
          if(i%2 !== 0) {
            charGrid = charGrid + "#\n";
          } else {
            charGrid = charGrid + "_\n";
          }
        }
      }
    }
  }
  console.log(charGrid);

  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
