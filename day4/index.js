// const passwordChecker = () => {
//   const regExDigits = /^(?=\d{6}$)1*2*3*4*5*6*7*8*9*$/;
//   //const regExRepeats = /(.)\1{2}/;
//   const matchingPasswords = [];
//   for (let i = 307237; i < 769059; i++) {
//     if (
//       regExDigits.test(i) && regExRepeats.test(i)) {
//       matchingPasswords.push(i);
//     }
//   }
//   return matchingPasswords.length;
// };

//part2
// //more than 540
// //less than 889

const passwordChecker = number => {
  const regExDigits = /^((?=\d{6}$)1*2*3*4*5*6*7*8*9*$)/;
  const regExRepeats = /(.)\1{2}/;
  let bool = false;
  if (number > 307236 && number < 769059) {
    bool = regExDigits.test(number) && regExRepeats.test(number);
  }
  return bool;
};

const arrayAssembler = (from, to) => {
  const resultArray = [];
  for (let i = from; i < to + 1; i++) {
    if (passwordChecker(i)) {
      resultArray.push(i);
    }
  }
  return resultArray.length;
};
module.exports = { passwordChecker, arrayAssembler };
